<template>
  <q-dialog full-width full-height v-model="openModal" persistent>
    <q-uploader
      url="http://localhost:4444/upload"
      label="Drop your files or click the button on the side."
      multiple
    >
      <template v-slot:header="scope">
        <div class="row no-wrap items-center header-color">
          <q-btn v-if="scope.queuedFiles.length > 0" icon="clear_all" @click="scope.removeQueuedFiles" round dense flat >
            <q-tooltip>Clear All</q-tooltip>
          </q-btn>
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
          <div class="col  q-ma-sm">
            <div class="q-uploader__title">Upload your files</div>
            <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div>
          </div>
          <q-btn stretch v-if="scope.canAddFiles" icon="note_add" flat>
            <q-uploader-add-trigger />
            <q-tooltip>Pick Files</q-tooltip>
          </q-btn>
          <q-btn stretch v-if="scope.canAddFiles" icon="close" flat @click="close">
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </div>
      </template>

      <template v-slot:list="scope">
        <q-list separator>

          <q-item v-for="file in scope.files" :key="file.name">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                Status: {{ file.__status }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              v-if="file.__img"
              thumbnail
              class="gt-xs"
            >
              <img :src="file.__img.src">
            </q-item-section>

            <q-item-section top side>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="scope.removeFile(file)"
              />
            </q-item-section>
          </q-item>

        </q-list>
      </template>
    </q-uploader>
  </q-dialog>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      mode: false,
      show: this.openModal
    }
  },
  props: {
    openModal: {
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('updateModalStatus', false)
    }
  }
}
</script>

<style>
  .q-uploader {
    height: 850px;
    width: 100%;
  }
</style>
