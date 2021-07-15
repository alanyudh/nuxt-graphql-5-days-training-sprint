<template>
<div>
   <v-card
      class="d-flex justify-center mb-6 mt-5"
      flat
      tile
    >
      <v-card
        class="pa-2"
        tile
      >
<h2>List Dad Jokes</h2>
      </v-card>
      
    </v-card>
    <v-card
    v-for="(joke,index) in jokes" :key="index"
      class="d-flex justify-center mb-6 mt-5"
      flat
      tile
    >
      <v-card
        class="pa-2"
        tile
      >
<h3>{{index + 1}}. {{joke}}</h3>
      </v-card>
      
    </v-card>
    
    <v-card
      class="d-flex justify-center mb-6 mt-5"
      flat
      tile
    >
      <v-card
        class="pa-2"
        tile
      >
 <v-btn
      depressed
      color="primary"
      to= "/"
    >
      Return Add Joke
    </v-btn>
      </v-card>
      
    </v-card>
</div>
</template>

<script>
  export default {
    name: 'About',
    data:() =>({
      //joke:''
    }),
    computed:{
      jokes(){
        return this.$store.getters.getAllJoke;
      }
    },
  }
</script>
