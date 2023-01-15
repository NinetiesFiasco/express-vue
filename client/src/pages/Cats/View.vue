<template>
  <table>
    <!-- Table caption -->
    <caption>Cats</caption>

    <!-- column headers -->
    <thead>
      <tr>
        <th>№</th>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Created</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <!-- *** Table body *** -->
    <tbody>
      <template v-for="(cat, key) of cats" :key="key">
        <tr>
          <td>{{ (page - 1) * pageItemsAmount + key+1 }}</td>
          <td>{{ cat._id }}</td>
          <td>{{ cat.name }}</td>
          <td>{{ cat.age }}</td>
          <td>{{ cat.createdAt }}</td>
          <td>
            <button @click="startUpdate(cat._id)">Update</button>
            <button @click="_delete(cat._id)">Delete</button>
          </td>
        </tr>
      </template>
    </tbody>
    <!-- *** *** *** -->

  </table>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CatView',
  computed: {
    ...mapGetters('cats', ['cats', 'pageItemsAmount', 'page'])
  },
  methods: {
    ...mapActions('cats', ['startUpdate', '_delete'])
  }
}
</script>

<style scoped>
</style>