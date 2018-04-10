<template>
  <div>
    <h1>Results for {{$route.params.id}}...</h1>              
    <div v-if="resultsData">                                          
      <div v-for="(result, index) in resultsData">            
          <Card :title="result.title"      
                :extract="result.extract"
                :fullurl="result.fullurl"
                :pageid="result.pageid"
          />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Card from '~/components/Card.vue'
  export default {
      components: {
        Card
      },
      computed: {                                            
        resultsData(){
          console.log("Store Response:");
          console.log(this.$store.state.results);
          return this.$store.state.results;
        }
      },
      middleware: 'search'                                   
  }
</script>

<style>
  h1 {
    text-align: center;
    padding:30px;
  }
</style>