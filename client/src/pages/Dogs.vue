<template>
  <div>
    <TableView
      :tableData="dogsTable"
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
import {dogsState, mapGetters, mapActions} from '@/store/utils'

export default {
  name: 'DogsPage',
  computed: {
    ...dogsState(['dogs', 'page']),
    ...mapGetters('dogs', ['dogsTable', 'offset', 'pageAmount'])
  },
  mounted() {
    this.readPage()
  },
  methods: {
    ...mapActions('dogs', ['readPage', 'startUpdate', '_delete', 'setPage', 'createNew'])
  }
}
</script>

<style scoped>
</style>