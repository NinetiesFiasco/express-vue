<template>
  <div>
    <TableView 
      :tableData="catsTable"
      :offset="offset"
      @update="startUpdate"
      @delete="_delete"
    />
    <ViewPagination
      :pageAmount="pageAmount"
      :currentPage="page"
      @setPage="setPage"    
    />
    <button @click="createNew">Create new</button>
    <NameAgeEditor />
  </div>
</template>

<script>
import {catsState, mapGetters, mapActions} from '@/store/utils'

export default {
  name: 'CatsPage',
  computed: {
    ...catsState(['cats', 'page']),
    ...mapGetters('cats', ['catsTable', 'offset', 'pageAmount'])
  },
  mounted() {
    this.readPage()
  },
  methods: {
    ...mapActions('cats', ['readPage', 'startUpdate', '_delete', 'setPage', 'createNew'])
  }
}
</script>

<style scoped>
</style>