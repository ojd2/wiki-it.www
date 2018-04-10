/*
	Axios is an HTTP library that we can use from the browser or Node.js 
	to make HTTP requests. It transforms our JSON data automatically 
	& it supports promises. Very nice!
*/
import axios from 'axios'
 
/*
	This code makes a simple GET request to the Wiki API & 
	passes in the params.id the desired search term via request. 
	When the promise returns, it calls the add mutation using 
	the store.commit function. 
*/
export default function ( {params, store} ) { 
  return axios.get(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${params.id}}&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max`)
        .then((response) => {
            store.commit('add', response.data.query.pages);      
        }).catch(function (error) {
    	    console.log('Request canceled', thrown.message);
  		});       
}