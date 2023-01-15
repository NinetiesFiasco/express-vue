<template>
  <div>
    <div class="pages">
        <template v-for="page of numberOfPages" :key="page">
          <span
            :class="{
              selected: page === localPage
            }"
            @click="setPage(page)"
          >{{page}}</span>
        </template>
      </div>

      Collection count: {{ count }}<br/>
      Page <input type="number" v-model="localPage" /><br/>
      Items per page <input type="number" v-model="localPageItemsAmount" /><br />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CatsPagination',  
  computed: {
    ...mapGetters('cats', ['count', 'page', 'pageItemsAmount']),
    numberOfPages() {
      return Math.ceil(this.count / this.localPageItemsAmount);
    },
    localPage: {
      get() {return this.page},
      set(value) {this.setPage(value)}
    },
    localPageItemsAmount: {
      get() {return this.pageItemsAmount},
      set(value) {this.setPageItemsAmount(value)}
    }
  },
  methods: {
    ...mapActions('cats', ['setPage', 'setPageItemsAmount'])
  }
}
</script>

<style scoped>
.selected {
  background:  red;
}
</style>