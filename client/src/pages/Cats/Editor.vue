<template>
  <section>
    <h3>{{ this.editableCat._id ? 'Edit cat' : 'Create cat' }}</h3>
    <div>
      Cat name <input v-model="name" />
      Cat age <input v-model="age" />
    </div>
    <div>
      <button @click="reset">Reset</button>
      <button @click="save">OK</button>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'CatsEditor',
  computed: {
    ...mapGetters('cats', ['editableCat']),
    name: {
      get() {return this.editableCat.name },
      set(value) {this.setName(value)}
    },
    age: {
      get() {return this.editableCat.age },
      set(value) {this.setAge(value)}
    }
  },
  methods: {
    ...mapMutations('cats', ['setName', 'setAge']),
    ...mapActions('cats', ['reset', 'save'])
  }
}
</script>

<style scoped>
</style>