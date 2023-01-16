<template>
  <div class="pages">
    <template v-for="page of pageAmount" :key="page">
      <span
        :class="{
          selected: page === currentPage
        }"
        @click="setPage(page)"
      >{{page}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ViewPagination',
  props: {
    pageAmount: {type: Number, default: 0},
    currentPage: {type: Number, default: 0}
  },
  methods: {
    setPage(page) {
      this.$emit('setPage',page)
    }
  }
}
</script>

<style scoped>
.selected {
  background:  red;
}
</style>