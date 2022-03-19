<template>

    <div class="bottom-bar" position:fixed>
        <v-bottom-navigation :value="value" appcolor="primary" horizontal fixed>
            
            <router-link to='/Home'> 
                <v-btn mb-0 pb-0>
                <span>Home</span>

                <v-icon>mdi-home-heart</v-icon>
                </v-btn>
            </router-link>

            <router-link to='/ovos'> 
                <v-btn>
                <span>Produtos</span>

                <v-icon>mdi-egg-easter</v-icon>
                </v-btn>
            </router-link>

            <router-link to='/listalocais'> 
                <v-btn>
                <span>Localize</span>

                <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </router-link>
            
        </v-bottom-navigation>

  </div>
</template>



<script>


  export default {
      name: 'BottomBar',
    data: () => ({ value: 1 }),
  }
</script>


<style scoped>

.bottom-bar a{
   
    text-decoration: none;
   
}

</style>