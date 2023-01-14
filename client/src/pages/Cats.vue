<template>
  <div>
    <h3>Cats</h3>
    <div v-for="(cat, key) of cats" :key="key">
      {{ cat }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CatsPage',
  computed: {
    ...mapGetters('cats', ['cats'])
  }
}
</script>

<style scoped>
</style>