<template>
  <div>
    <h3>Dogs</h3>
    <div v-for="(dog, key) of dogs" :key="key">
      {{ dog }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'DogsPage',
  computed: {
    ...mapGetters('dogs', ['dogs'])
  }
}
</script>

<style scoped>
</style>