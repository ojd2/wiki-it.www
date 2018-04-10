/*

  A very simple store using Vuex.js

  In Nuxt.js, Vuex stores can be 
  accessed anywhere in the application 
  including in the middleware. 
  The middleware is what allows us to 
  write server-side code. This is 
  important because we can move our 
  HTTP request to the back end from
  the client-side. 

  e.g. lookup via "state.pages"

*/
import Vuex from 'vuex'
 
const createStore = () => {
  return new Vuex.Store({
    state: {                                       
      pages: []
    },
    mutations: {
      add (state, payload) {               
        state.pages = payload;
      }
    }
  })
}
 
export default createStore