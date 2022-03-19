<template>
  <v-app>
    
    <v-main>
      <AppTopBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import AppTopBar from './components/shared/AppTopBar.vue'
export default {
  components: {
    AppTopBar,
  }
}
</script>


<style lang="scss">

</style>
