<template>
  <div>
    <nav>
      <AppMenu />
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import {AppMenu} from '../components'


export default {
  name: 'MainLayout',
  components: {
    AppMenu
  }
}
</script>

<style scoped>
</style>