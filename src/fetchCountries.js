export function fetchCountries(name) {
    // console.log(name);
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).
    then((res) => {
        if (!res.ok) throw new Error(res.status);        
        return res.json();  
    });
    // .catch(err => console.log(err));
    
    // console.log(response.json());
    // return response.json();
   

    // https://restcountries.com/v3.1/name/{name}
    // https://restcountries.com/v3.1/name/peru
    // https://restcountries.com/v3.1/name/united
};