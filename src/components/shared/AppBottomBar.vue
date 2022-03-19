<template>
<<<<<<< HEAD

=======
>>>>>>> 0dbeaa9a6689301934b5fe511b4c94ae2a8c3cbe
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