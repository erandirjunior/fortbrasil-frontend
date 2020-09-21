<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="body-color">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>

<style>
  .body-color {
    background: #00b4db; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00b4db, #0083b0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00b4db, #0083b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
