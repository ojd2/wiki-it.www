<template>
  <v-toolbar dark color="grey">                                      
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/">
        <img :src="'/logo.svg'" :width="40" :height="40">
      </nuxt-link>      
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped>                             
  .title {
    text-decoration: none !important;
    text-align: center !important;
  }
  .title:visited{
    color: white;
  }
  .white--text {
    text-align: center;
  }
  input {
     text-align: center;
     border:2px solid grey !important;
  }
</style>