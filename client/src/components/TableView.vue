<template>
  <table v-if="tableData">
    <!-- Table caption -->
    <caption>{{tableData.caption}}</caption>

    <!-- column headers -->
    <thead>
      <tr>
        <th>№</th>
        <th v-for="(title, key) of tableData.titles" :key="key">
          {{ title }}
        </th>
        <th>Action</th>
      </tr>
    </thead>
    
    <!-- *** Table body *** -->
    <tbody>
      <tr v-for="(data, rowKey) of tableData.data" :key="rowKey">
        <td>{{ offset + rowKey+1 }}</td>
        <td v-for="(field, fieldKey) of data" :key="fieldKey">
          {{ field }}
        </td>
        <td>
          <button @click="update(data._id)">Update</button>
          <button @click="$emit('delete', data._id)">Delete</button>
        </td>
      </tr>
    </tbody>
    <!-- *** *** *** -->

  </table>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    tableData: {type: Object, default:  null},
    offset: {type: Number, default: 0}
  },
  methods: {
    update(id) {
      this.$emit('update', id)
    }
  }
}
</script>

<style scoped>
</style>