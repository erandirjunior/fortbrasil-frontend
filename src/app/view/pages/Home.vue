<template>
  <q-page class="q-pa-sm">
    <q-card class="card-content" style="margin: 1% auto; width: 50%">
      <q-card-section class="text-weight-bold text-h5">
        <div class="row q-col-gutter-md">
          <div class="col-md-10 col-sm-12">Estabelecimentos</div>
          <div class="col-md-1 col-sm-6">
            <q-btn
              label="Novo"
              color="primary"
              @click="show = !show"
              />
          </div>
        </div>

      </q-card-section>

      <q-separator/>

      <q-card-section class="text-weight-bold text-h5">
        <div class="row q-col-gutter-md">
          <div class="col-md-2 col-sm-12">
            <q-input
              @input="search"
              dense
              filled
              label="Cep"
              mask="#####-###"
              v-model="filter.zipCode"
            />
          </div>

          <div class="col-md-2 col-sm-12">
            <q-input
              dense
              filled
              label="Estado"
              v-model="filter.state"
              maxlength="2"
              minLength="2"
            />
          </div>

          <div class="col-md-4 col-sm-12">
            <q-input
              dense
              filled
              label="Cidade"
              v-model="filter.city"
            />
          </div>

          <div class="col-md-4 col-sm-12">
            <q-input
              dense
              filled
              label="Endereço"
              v-model="filter.street"
            />
          </div>

          <div class="col-md-9 col-sm-12">
            <q-input
              filled
              dense
              label="Nome do Estabelecimento"
              v-model="filter.name"
            />
          </div>

          <div class="col-md-3 col-sm-12">
            <q-btn
              color="primary"
              label="Pesquisar"
              @click="loadEstablishments"
              class="full-width"
            />
          </div>
        </div>

      </q-card-section>

      <q-card-section>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="(item, key) in establishments"
            :key="item.id"
            expand-separator
            icon="store"
            :label="item.name"
            caption="Clique para mais informações"
          >
            <q-card>
              <q-card-section>
                <div>
                  <p><span class="text-bold">Nome:</span> {{ item.name }}</p>
                  <p><span class="text-bold">Estado:</span> {{ item.state }}</p>
                  <p><span class="text-bold">Cidade:</span> {{ item.city }}</p>
                  <p><span class="text-bold">CEP:</span> {{ mountZipCode(item.zip_code) }}</p>
                  <p><span class="text-bold">Endereço:</span> {{ item.street }}</p>
                  <p><span class="text-bold">Número:</span> {{ item.number }}</p>
                  <p>
                    <a
                      class="btn"
                      type="a"
                      target="_blank"
                      :href="linkGoogle(item)"
                    >
                      Abrir no Mapa
                    </a>
                  </p>
                  <p><span class="text-bold">Contatos:</span></p>
                  <p v-for="contact in item.contacts" :key="contact.id">{{ mountNumber(contact.phone) }}</p>
                </div>
                <hr>
                <q-btn
                  icon="edit"
                  color="primary"
                  style="margin-right: 1%"
                  @click="getInfo(key)"
                />
                <q-btn
                  icon="delete"
                  color="red"
                  @click="remove(item.id)"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-dialog v-model="show" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Formulário de Estabelecimento</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-col-gutter-md">
            <div class="col-md-3 col-sm-3">
              <q-input
                dense
                filled
                label="Cep"
                mask="#####-###"
                :error="$v.form.zipCode.$error"
                v-model="form.zipCode"
              />
            </div>
            <div class="col-md-4 col-sm-4">
              <q-btn
                @click="getDataLocation"
                filled
                color="positive"
                label="Pesquisar CEP"
              />
            </div>
          </div>
          <form-factory
            class-factory="row q-col-gutter-sm"
            :form="form"
            :fields="establishment"
            :validation="$v"
            @formAction="action"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p class="text-h6">Contatos</p>
          <p>
            <q-btn
              label="Adicionar contato"
              color="primary"
              @click="addContact"
            />
          </p>
          <div
            class="row q-col-gutter-lg"
            v-for="(item, key) in this.form.contacts"
            :key="key"
            style="margin-bottom: 1%"
          >
            <div class="col-md-6 col-sm-6">
              <q-input
                dense
                filled
                type="number"
                label="Telefone"
                v-model="form.contacts[key].phone"
              />
            </div>

            <div class="col-md-5 col-sm-5">
              <q-btn
                icon="delete"
                filled
                color="negative"
                @click="removeContact(key)"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancelar" color="negative" @click="closeModal" />
          <q-btn label="Salvar" color="primary" @click="submit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import handlerActionMixin from 'mixins/handlerActionMixin'
import { del, get, post, put } from 'src/app/infrastructure/components/request/request'
import Establishment from 'builder/forms/Establishment'
import FormFactory from 'components/general/form/FormFactory'
import { minLength, maxLength, required } from 'vuelidate/lib/validators'
import alert from 'src/app/infrastructure/components/alert/alert'
import formatLinkGoogleMaps from 'src/app/infrastructure/components/format/formatLinkGoogleMaps'
import formatZipCode from 'src/app/infrastructure/components/format/formatZipCode'
import formatNumber from 'src/app/infrastructure/components/format/formatNumber'

export default {
  name: 'Home',
  mixins: [
    handlerActionMixin
  ],
  components: {
    FormFactory
  },
  data () {
    return {
      establishment: new Establishment(),
      form: {
        id: '',
        name: '',
        zipCode: '',
        street: '',
        city: '',
        number: '',
        state: '',
        contacts: []
      },
      filter: {
        name: '',
        street: '',
        state: '',
        city: ''
      },
      establishments: [],
      show: false
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      zipCode: {
        required,
        minLength: minLength(8)
      },
      state: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(2)
      },
      city: {
        required,
        minLength: minLength(3)
      },
      number: {
        required
      },
      street: {
        required
      }
    }
  },
  watch: {
    'form.state' () {
      let state = this.form.state
      if (this.form.state.length > 2) {
        state = state.substr(0, 2).toLocaleUpperCase()
      }
      this.form.state = state
    }
  },
  methods: {
    closeModal () {
      for (const attr in this.form) {
        if (attr === 'contacts') {
          this.form[attr] = []
          continue
        }
        this.form[attr] = ''
      }
      this.form.contacts = []
      this.show = false
      this.loadEstablishments()
    },
    mountNumber (number) {
      return formatNumber(number)
    },
    removeContact (key) {
      this.form.contacts = this.form.contacts.filter((item, index) => {
        if (key !== index) {
          return item
        }
      })
    },
    addContact () {
      this.form.contacts.push({
        phone: ''
      })
    },
    getInfo (key) {
      const data = this.establishments[key]
      this.form = data
      this.form.zipCode = data.zip_code
      this.show = true
    },
    remove (id) {
      del(`establishments/${id}`, this.form)
        .then(() => {
          alert('Estabelecimento excluído!', 'green', 'thumb_up')
          this.closeModal()
        })
        .catch(error => {
          this.showError(error)
        })
    },
    submit () {
      this.$v.$touch()

      if (this.$v.form.$error) {
        const msg = 'Por favor, verifique os campos do formulário e tente novamente!'
        return alert(msg, 'red', 'thumb_down')
      }

      this.form.id ? this.update() : this.create()
    },
    create () {
      post('establishments', this.form)
        .then(() => {
          this.closeModal()
          alert('Estabelecimento cadastrado com sucesso!', 'green', 'thumb_up')
        })
        .catch(error => {
          this.showError(error)
        })
    },
    showError (error) {
      if (Array.isArray(error.response.data)) {
        error.response.data.forEach(msg => {
          alert(msg, 'red', 'thumb_down')
        })

        return
      }

      alert(error, 'red', 'thumb_down')
    },
    update () {
      put(`establishments/${this.form.id}`, this.form)
        .then(() => {
          this.closeModal()
          alert('Estabelecimento cadastrado com sucesso!', 'green', 'thumb_up')
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
    },
    loadEstablishments () {
      get(`establishments?name=${this.filter.name}&street=${this.filter.street}&city=${this.filter.city}&state=${this.filter.state}`)
        .then(resp => {
          this.establishments = resp.data
        })
    },
    mountZipCode (zipCode) {
      return formatZipCode(zipCode)
    },
    linkGoogle (item) {
      return formatLinkGoogleMaps(item)
    },
    search (val) {
      if (val.length === 9) {
        this.searchZipCode(val)
          .then(response => {
            this.filter.state = response.uf
            this.filter.city = response.localidade
            this.filter.street = response.logradouro
          })
      }
    },
    searchZipCode (zipCode) {
      zipCode = zipCode.replace('-', '')
      return this.$axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then(response => response.data)
    },
    getDataLocation () {
      this.searchZipCode(this.form.zipCode)
        .then(response => {
          this.form.state = response.uf
          this.form.city = response.localidade
          this.form.street = response.logradouro
        })
    }
  },
  created () {
    this.loadEstablishments()
  }
}
</script>

<style>
</style>
