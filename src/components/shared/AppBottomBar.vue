<template>
  <v-bottom-navigation :value="value" color="primary" horizontal >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>



<script>


  export default {
      name: 'BottomBar',
    data: () => ({ value: 1 }),
  }
</script>


<style scoped>

.bottom-bar{
    color: purple;
}

</style>