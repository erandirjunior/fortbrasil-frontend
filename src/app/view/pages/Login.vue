<template>
  <q-page class="q-pa-xs">
    <q-card class="card-content">
      <q-card-section class="text-weight-bold text-h5">
        Formulário de Login
      </q-card-section>
      <q-card-section>
        <form-factory
          class-factory="row q-col-gutter-sm"
          :form="form"
          :fields="loginForm"
          :validation="$v"
          @formAction="action"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import handlerActionMixin from 'mixins/handlerActionMixin'
import FormFactory from 'components/general/form/FormFactory'
import Login from 'builder/forms/Login'
import { required, minLength, email } from 'vuelidate/lib/validators'
import alert from 'src/app/infrastructure/components/alert/alert'
import { post } from 'src/app/infrastructure/components/request/request'

export default {
  name: 'Login',
  mixins: [
    handlerActionMixin
  ],
  components: {
    FormFactory
  },
  data () {
    return {
      loginForm: new Login(),
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    login () {
      this.$v.$touch()

      if (this.$v.form.$error) {
        const msg = 'Por favor, verifique os campos do formulário e tente novamente!'
        return alert(msg, 'red', 'thumb_down')
      }

      post('login', this.form)
        .then((response) => response.data)
        .then((response) => {
          localStorage.setItem('token', response.token)
          localStorage.setItem('user', response.id)

          this.$router.push('/')
        })
        .catch(error => {
          if (Array.isArray(error.response.data)) {
            error.response.data.forEach(msg => {
              alert(msg, 'red', 'thumb_down')
            })

            return
          }

          alert(error, 'red', 'thumb_down')
        })
    }
  }
}
</script>

<style>
  .card-content {
    width: 30%;
    margin: 2% auto;
  }
  @media screen and (max-width: 400px) {
    .card-content {
      width: 100%;
    }
  }
  .button-color {
    background: #00b4db;
    background: linear-gradient(to right, #00b4db, #0083b0);
  }
  .button-text-color {
    background: -webkit-linear-gradient(#00b4db, #0083b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-brand {
    background: -webkit-linear-gradient(#00b4db, #0083b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bg-brand {
    background: #a2aa33;
  }
</style>
