<template>
  <div>
    <h1>Need to find Wikipedia Articles?</h1>
    <br/>
    <form @submit.prevent="submit">                         
      <input class="search-input" placeholder="Enter Wikipedia Subject Here!" v-model="search" ref='search' autofocus />
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
        submit(event) {
          this.$router.push(`results/${this.search}`);
        }
    }
  }
</script>
 
<style>                   
  * {
    text-align: center;
  }
  h1 {
    padding: 30px;
    text-align: center;
    font-family: Roboto !important;
  }
  .search-input {
    border:2px solid silver !important;
    border-radius:3px;
    padding:20px;
    width:50%;
    font-size:18px;
    background:#F0F4F1;
    font-family: Roboto !important;
  }
</style>