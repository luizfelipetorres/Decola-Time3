<template>
<div class="todo">

    <!--SLIDE!-->
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
   <!--SLIDE!-->

   <!--EXPANSION!--> 
<div>
    <div class="d-flex">
      <v-checkbox
        v-model="readonly"
        label="Readonly"
      ></v-checkbox>
    </div>

    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Quem somos</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Como comprar</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Como vender</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
    <!--EXPANSION!--> 


  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://conteudo.solutudo.com.br/bauru/onde-ir-bauru/ovos-de-pascoa-bauru-compre-do-pequeno/',
          },
          {
            src: 'https://robertajungmann.com.br/wp-content/uploads/2020/04/Ovo-de-p%C3%A1scoa-artesanal-990x556.jpg',
          },
          {
            src: 'https://i.em.com.br/O0AZJsZFYSIQnZDfk8Kicix0bJ8=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2020/04/08/1136818/20200408111018566499a.jpg',
          },
          {
            src: 'https://blog.pajaris.com.br/wp-content/uploads/2021/01/ovo-de-pascoa.jpg',
          },
        ],

        panel: [0, 1],
        readonly: false,
      }
    },

  }


</script>

<style>

</style>
