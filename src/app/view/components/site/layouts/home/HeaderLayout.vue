<template>
  <q-header>
    <q-toolbar class="bg-light-blue-7">
      <q-toolbar-title>
        <q-btn
          flat
          stretch
          label="Estabelecimentos"
          type="a"
          to="/"
          size="lg"
          />
      </q-toolbar-title>

      <q-btn flat stretch>
        <q-avatar>
          <q-icon name="person"/>
        </q-avatar>
        <q-menu :offset="[41, 0]" max-width="150px">
          <q-btn
            no-caps
            flat
            icon="settings"
            label="Perfil"
            class="full-width"
            text-color="light-blue-7"
            to="/account"
            />
          <q-separator/>
          <q-btn
            flat
            no-caps
            icon="exit_to_app"
            label="Sair"
            text-color="light-blue-7"
            class="full-width"
            @click="logout"
            />
        </q-menu>
      </q-btn>

    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'HeaderLayout',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()

      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .button-color {
    color: #0083b0;
  }
</style>
