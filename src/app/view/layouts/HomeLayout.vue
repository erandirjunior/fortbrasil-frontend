<template>
  <q-layout view="hHh lpR fFf">
    <header-layout
      @updateModalStatus="updateModalStatus"
      @updateDrawerStatus="updateLeftDrawerStatus"
    />

    <q-page-container>
      <router-view class="bg-grey-2"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderLayout from 'components/site/layouts/home/HeaderLayout'

export default {
  name: 'MainLayout',
  components: {
    HeaderLayout
  },
  data () {
    return {
      leftDrawerOpen: false,
      openModal: false,
      search: ''
    }
  },
  methods: {
    updateModalStatus () {
      this.openModal = !this.openModal
    },
    updateLeftDrawerStatus () {
      this.leftDrawerOpen = !this.leftDrawerOpen
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
