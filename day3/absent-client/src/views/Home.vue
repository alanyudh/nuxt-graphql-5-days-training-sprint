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
<h2>Generate Dad Jokes</h2>
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
<h3>{{joke}}</h3>
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
      @click="addJoke"
    >
      Add Joke
    </v-btn> |
    <v-btn
      depressed
      color="success"
      to="/about"
    >
      List Jokes
    </v-btn>
      </v-card>
      
    </v-card>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data:() =>({
      //joke:''
    }),
    methods:{
      addJoke(){
        this.$store.dispatch("setCurrentJoke");
      }
    },
    computed:{
      joke(){
        return this.$store.getters.getCurrentJoke;
      }
    },
  }
</script>
