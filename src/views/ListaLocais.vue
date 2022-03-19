<template>
    <v-container>
        <h1>Lista de Locais</h1>
    </v-container>
</template>

<script>
export default {
    name: 'ListaLocais',
    data(){
        return {
            listaGeral: []
        }
    },
    created(){
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.listaGeral = json
                console.log(this.listaGeral)
            })
    },
}
</script>

<style>

</style>