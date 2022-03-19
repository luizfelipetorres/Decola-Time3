<template>
    <v-container>
        <h1>Lista de Locais</h1>

        <v-card
            class="mt-10"
            max-width="344"
            v-for="item of listaGeral" :key="item.local.id"
        >
            <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            ></v-img> -->
            <div >


            </div>
            <v-card-title>
            {{ item.local.nome }}
            </v-card-title>

            <v-card-subtitle>
            {{ item.local.endereco }}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
                @click="show = !show"
            >
                Confira os sabores
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'ListaLocais',
    data(){
        return {
            listaGeral: [],
            listaLocais: [],
            show: false,
        }
    },
    created(){
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.listaGeral = json
                //console.log(this.listaGeral)
                /* this.listaGeral.forEach(element => {
                    if (this.listaLocais.indexOf(element.local.id) == -1){
                        this.listaLocais.push(element.local.id)
                    }
                }) */
                for (let index = 0; index < this.listaGeral.lenght; index++) {
                    if (this.listaLocais.indexOf(this.listaGeral[index].local) == -1){
                        this.listaLocais.push(this.listaGeral[index].local)
                    }
                }
                console.log(this.listaLocais)
            })
    },
}
</script>

<style>

</style>