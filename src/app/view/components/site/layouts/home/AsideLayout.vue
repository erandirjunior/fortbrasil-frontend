<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    bordered
    elevated
    class="header-color"
  >
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon style="color: #0083b0" name="search"/>
        </q-item-section>
        <q-item-section>
          <q-input outlined v-model="search" label="Search" dense>
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar>
          <q-icon style="color: #0083b0" name="create_new_folder"/>
        </q-item-section>
        <q-item-section style="color: #0083b0">
          Create Folder
        </q-item-section>
      </q-item>

      <q-expansion-item
        icon="folder"
        label="My folders"
        style="color: #0083b0"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        icon="folder_shared"
        label="Shared"
        style="color: #0083b0"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'AsideLayout',
  data () {
    return {
      mode: false,
      drawer: this.leftDrawerOpen,
      search: ''
    }
  },
  props: {
    leftDrawerOpen: {
      required: true
    }
  },
  methods: {
    updateDrawerStatus () {
      this.$emit('updateDrawerStatus')
    }
  },
  watch: {
    leftDrawerOpen: function (newVal) {
      this.drawer = newVal
    },
    drawer (newVal) {
      if (this.drawer !== this.leftDrawerOpen) {
        this.updateDrawerStatus(newVal)
      }
    }
  },
  mounted () {
    this.drawer = this.leftDrawerOpen
  }
}
</script>

<style>
  .q-uploader {
    height: 850px;
    width: 100%;
  }
</style>
