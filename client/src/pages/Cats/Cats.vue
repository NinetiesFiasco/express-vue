<template>
  <div>
    <View />
    <Pagination />
    <Editor />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import View from './View.vue'
import Pagination from './Pagination.vue'
import Editor from './Editor.vue'


export default {
  name: 'CatsPage',
  components: {View, Pagination, Editor},
  computed: {
    ...mapGetters('cats', ['cats'])
  },
  mounted() {
    this.readPage()
  },
  methods: {
    ...mapActions('cats', ['readPage'])
  }
}
</script>

<style scoped>
</style>