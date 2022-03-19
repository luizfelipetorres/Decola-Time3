<template>
  <v-app>
    <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Pascolandia 
                 <v-icon> mdi-rabbit
                  </v-icon>
        </h1>
 
        <h4 class="subheading">
          Venda e compra de ovos de páscoa 
        </h4>
      </v-col>
    </v-row>
  </v-parallax>

    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

     <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://robertajungmann.com.br/wp-content/uploads/2020/04/Ovo-de-p%C3%A1scoa-artesanal-990x556.jpg',
          },
          {
            src: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ovo-de-Pascoa-saudavel-1024x576.jpg',
          },
          {
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2021/01/ovo-de-pascoa.jpg',
          },
        ],
      }
    },

    
  }
</script>

<style>

</style>
