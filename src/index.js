import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash/debounce';
// console.log(throttle);
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box");
inputEl.addEventListener('input', debounce(getCountries,  DEBOUNCE_DELAY));




function getCountries() {    
    fetchCountries(inputEl.value).
    then(data => {         
        if (data.length > 10) {
            console.log("Toomuch!");
            return;
        }        
        if (data.length > 1)   
            data.forEach(element => {
            console.log(element.name.official, element.population);            
            });
        else console.log(data[0].name.official, data[0].population, data[0].capital[0], data[0].languages);
    }).
    catch(err => console.log(err));

}