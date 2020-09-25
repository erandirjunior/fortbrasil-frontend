<template>
  <q-header>
    <q-toolbar class="bg-light-blue-7">
      <q-btn
        stretch
        flat
        icon="menu"
        aria-label="Menu"
        class="mobile-only"
        @click="updateDrawerStatus"
      />

      <q-toolbar-title>
        <div
          class="text-weight-bold text-h3 q-pl-lg"
          @click="toHome"
        >
          <span class="text-italic">J</span>D<span class="text-weight-regular">rive</span>
        </div>
      </q-toolbar-title>

      <q-btn
        class="desktop-only"
        stretch
        color="primary"
        flat
        icon="search"
        text-color="white"
        label="Search"
      >
        <q-menu :offset="[20, 0]">
          <q-list>
            <q-item>
              <q-input outlined v-model="search" label="Search" dense>
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-separator class="desktop-only" vertical inset />

      <q-btn-group stretch flat class="desktop-only">
        <q-btn
          stretch
          text-color="white"
          label="Create Folder"
          icon="create_new_folder"
        />

        <q-separator class="desktop-only" vertical inset />

        <q-btn
          stretch
          text-color="white"
          label="Upload"
          icon="cloud_upload"
          @click="updateModalStatus"
        />

        <q-separator class="desktop-only" vertical inset />

      </q-btn-group>

      <q-btn flat stretch>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
        <q-menu :offset="[41, 0]" max-width="150px">
          <q-btn
            no-caps
            flat
            icon="settings"
            label="Profile"
            class="full-width button-color"
            />
          <q-separator/>
          <q-btn
            flat
            no-caps
            icon="exit_to_app"
            label="Logout"
            class="full-width button-color"
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
    toHome () {
      this.$router.push('/')
    },
    updateModalStatus () {
      this.$emit('updateModalStatus')
    },
    updateDrawerStatus () {
      this.$emit('updateDrawerStatus')
    },
    logout () {
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
