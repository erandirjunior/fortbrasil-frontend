<template>
  <q-page class="q-pa-xl">
    <q-card class="card-content">
      <q-card-section>
        Login
      </q-card-section>
      <q-card-section>
        Form
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import handlerActionMixin from 'mixins/handlerActionMixin'

export default {
  name: 'Login',
  mixins: [
    handlerActionMixin
  ],
  methods: {
    addFile (evt) {
      console.log(evt.dataTransfer)
      evt.preventDefault()
      this.file = evt.dataTransfer.files[0]
      this.show = !this.show
    }
  }
}
</script>

<style>
  .card-content {
    width: 35%;
    margin: 10% auto;
  }
</style>
