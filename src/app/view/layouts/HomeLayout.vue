<template>
  <q-layout view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="header-color">
        <q-btn
          stretch
          flat
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="mobile-only"
        />

        <q-toolbar-title>
          <div class="text-weight-bold mobile-only">
            JD<span class="text-weight-regular">rive</span>
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

        <q-btn-group stretch flat class="desktop-only">
          <q-btn stretch text-color="white" label="Create Folder" icon="create_new_folder"/>

          <q-separator class="desktop-only" vertical inset />

          <q-btn stretch text-color="white" label="Upload" icon="cloud_upload"/>

          <q-separator class="desktop-only" vertical inset />

        </q-btn-group>

        <q-btn flat stretch>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      elevated
      class="header-color"
    >
      <q-list>
        <q-item-label>
          <div class="text-h3 q-pl-xl text-color-gradient">JDrive</div>
        </q-item-label>
        <q-separator/>
      </q-list>
    </q-drawer>

    <q-page-container
      @dragenter="updateModalStatus(true)"
    >
      <router-view class="bg-grey-2"/>
      <q-page-sticky position="bottom-right" :offset="[18, 40]">
        <q-btn
          fab
          icon="cloud_upload"
          class="header-color"
          text-color="white"
          @click="openModal = !openModal"
        />
      </q-page-sticky>
      <upload :openModal="openModal" @updateModalStatus="updateModalStatus" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Upload from 'components/site/Upload'

export default {
  name: 'MainLayout',
  components: {
    Upload
  },
  data () {
    return {
      leftDrawerOpen: false,
      openModal: false,
      search: ''
    }
  },
  methods: {
    updateModalStatus (value) {
      this.openModal = value
    }
  }
}
</script>

<style>
  .header-color {
    background: #00b4db; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00b4db, #0083b0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00b4db, #0083b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .text-color-gradient {
    background: -webkit-linear-gradient(#00b4db, #0083b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
   }
</style>
