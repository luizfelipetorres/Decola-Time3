<template>
  <v-app>
    <v-container class="banner">
        <h1 class="text-h4 font-weight-bold mb-4 ">
          Pascolândia 
                 <v-icon> mdi-rabbit
                  </v-icon>
        </h1>
 
        <h4 class="subheading" heigth>
          Venda e compra de ovos de páscoa 
        </h4>
      <v-btn class="button" elevation="5"  m-b="0px" plain raised>
        Compra
        </v-btn>
      <v-btn class="button" elevation="5" m-b="0px"  plain raised>
        Venda
      </v-btn>
  </v-container>

    <v-carousel class="slide">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

  <div>


    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Como comprar</v-expansion-panel-header>
        <v-expansion-panel-content>
          Navegue pela nossa página de produtos, adicione ao seu carrinho e selecione a forma de entrega
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Como vender</v-expansion-panel-header>
        <v-expansion-panel-content>
          Faça o seu cadastro e monte a sua loja online 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Quem somos nós</v-expansion-panel-header>
        <v-expansion-panel-content>
          Somos um market place de ovos de páscoa, ajudamos compradores a encontrar vendores.Comece agora mesmo, navegue pela nossa lista de produtos ou cadastre a sua loja.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      panel: [0, 1],
      readonly: false,

        items: [
          {
            src: 'https://robertajungmann.com.br/wp-content/uploads/2020/04/Ovo-de-p%C3%A1scoa-artesanal-990x556.jpg',
          },
          {
            src: 'https://img.elo7.com.br/product/main/1DA4C41/ovo-de-pascoa-grande-artesanal-chocolate-tipo-belga-3-kg-ovo-de-chocolate-gigante.jpg',
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

.banner{
  height: 200px;
  text-align: center;
  background-image: linear-gradient(to right, rgb(100, 240, 245) , rgb(89, 168, 204)); ;
}

.button{
  margin-bottom: 10px;
  height: 10px;
  border-radius: 10px;
}

.subheading{
  margin-bottom: 3px;

}

.text-h4 {
  font-weight: bold;
}

</style>
