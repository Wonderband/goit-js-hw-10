import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash/debounce';
import Notiflix from 'notiflix';
import createCountriesList from './templates/country-list.hbs'
import createCountryInfo from './templates/country-info.hbs';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box");
const countriesList = document.querySelector('.country-list');
const singleCountry = document.querySelector('.country-info');
inputEl.addEventListener('input', debounce(getCountries,  DEBOUNCE_DELAY));


function getCountries() {  
    const countryPart = inputEl.value.trim();
    if (!countryPart) {
        countriesList.innerHTML = '';
        return; 
    }    
    fetchCountries(countryPart).
    then(data => {           
        if (data.length > 10) {            
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.",
            {position: 'center-top', width: '600px', fontSize: '18px'});
            countriesList.innerHTML = '';
            singleCountry.innerHTML = '';
            return;
        }        
        if (data.length > 1) {         
            countriesList.innerHTML = createCountriesList(data); 
            singleCountry.innerHTML = ''; 
        } else {
            singleCountry.innerHTML = createCountryInfo(data[0]);
            countriesList.innerHTML = '';
        }        
    }).
    catch(err => {
        Notiflix.Notify.failure("Oops, there is no country with that name",        
        {position: 'center-top', width: '600px', fontSize: '18px'});
        countriesList.innerHTML = '';
        singleCountry.innerHTML = '';        
    });
}