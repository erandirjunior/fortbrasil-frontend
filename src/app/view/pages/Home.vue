<template>
  <q-page class="q-pa-xl">
    <div
      @dragover.prevent
      @dragenter.prevent
      @drop="addFile"
      style="border: 1px solid black; min-height: 300px; width: 100%;"
    >
      <div>
        <p>teste 1</p>
        <p>teste 1</p>
        <p>teste 1</p>
        <p>teste 1</p>
        <p>teste 1</p>
      </div>
    </div>

  </q-page>
</template>

<script>
import handlerActionMixin from 'mixins/handlerActionMixin'

export default {
  name: 'Home',
  mixins: [
    handlerActionMixin
  ],
  data () {
    return {
      mode: false,
      file: null,
      show: false,
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ],
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1
        },
        {
          id: 1,
          title: 'Item B',
          list: 1
        },
        {
          id: 2,
          title: 'Item C',
          list: 2
        }]
    }
  },
  computed: {
    listOne () {
      return this.items.filter(item => item.list === 1)
    },
    listTwo () {
      return this.items.filter(item => item.list === 2)
    }
  },
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
  .drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
  }

  .drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>
