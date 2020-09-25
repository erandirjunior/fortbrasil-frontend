<template>
  <q-page class="q-pa-xl">
    <q-card class="card-content">
      <q-card-section>
        Login
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
      console.log(this.$v.form.$error)
      console.log(this.form)
    }
  }
}
</script>

<style>
  .card-content {
    width: 30%;
    margin: 10% auto;
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
