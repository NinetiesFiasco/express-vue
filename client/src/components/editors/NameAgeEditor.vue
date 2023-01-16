<template>
  <section v-if="editableAnimal">
    <h3>{{ this.editableAnimal._id ? 'Edit' : 'Create' }}</h3>
    <div>
      Name <input v-model="name" />
      Age <input v-model="age" />
    </div>
    <div>
      <button @click="reset">Reset</button>
      <button @click="save">OK</button>
    </div>
  </section>
</template>

<script>
import {nameAgeEditorState, mapActions, mapMutations} from '@/store/utils'
export default {
  name: 'NameAgeEditor',
  computed: {
    ...nameAgeEditorState(['editableAnimal', 'animalType']),
    name: {
      get() {return this.editableAnimal.name },
      set(value) {this.fillEditableAnimal({ name: value })}
    },
    age: {
      get() {return this.editableAnimal.age },
      set(value) {this.fillEditableAnimal({ age: value })}
    }
  },
  methods: {
    ...mapActions('nameAgeEditor', ['reset', 'save']),
    ...mapMutations('nameAgeEditor', ['fillEditableAnimal'])
  }
  
}
</script>

<style scoped>
</style>