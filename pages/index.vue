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
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding:20px;
    width:50%;
    font-size:14px;
    background:#F0F4F1;
    font-family: Roboto !important;
  }
  @media only screen 
  and (min-width : 300px) 
  and (max-width : 1024px)  { 
    .search-input {
      width:100%;
    }
}
</style>