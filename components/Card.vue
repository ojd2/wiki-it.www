<template>
  <div id="e3" style="max-width: 400px; margin: auto; " class="grey lighten-3">
        <v-container fluid card style="min-height: 0; margin-bottom:30px; border-radius:50px solid grey;" grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card target="_blank" :href="url" :color="color">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                      <div class="headline">{{title}}</div> 
                      <div class="extract">{{extract}}</div>
                      <div class="pageid">Page ID: {{pageid}}</div>
                    </div>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default 
  {
    props: ['title', 'extract', 'pageid'],
    mounted: () => {
      $( "div.headline:empty").text("No Extract Found!");
      $( "div.extract:contains('may refer to')").text("No Extract Found!");
      $( "div.pageid:empty").text("No Extract Found!");
    }
  }
</script>

<style>
  .card {
    font-family: 'Roboto', Arial !important;
    box-shadow: none !important;
    background:#C7DBD0;
    text-align: center;
    margin:10px 0px;
    padding:10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .headline {
    font-size:18px;
    color:#282828;
    text-decoration: underline;
  }
  .extract {
    color:#424242;
    padding:10px 0;
    margin:0;
    font-size:16px;
  }
  .pageid {
    padding:10px 0;
    color:#424242;
    font-size:14px;
  }
</style>