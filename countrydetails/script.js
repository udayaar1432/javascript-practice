function fetchCountryInfo() {
    const select = document.getElementById("country");
    const countryName = select.value;

    if (!countryName) {
        return;
    }

    fetch(`https://restcountries.com/v3/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data.find(country => country.name.common === countryName);
            //
            const countryInfo = document.getElementById("countryInfo");

            countryInfo.innerHTML = `
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital}</p>
                <p>Currency: ${Object.values(country.currencies)[0].name}</p>
                <p>Languages: ${Object.values(country.languages).join(", ")}</p>
                <img src="${country.flags[0]}" alt="Flag of ${country.name.common}" width="200">
            `;
        })
        .catch(error => {
            console.error(error);
        });
}

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => {
        const select = document.getElementById("country");

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country.name.common;
            option.textContent = country.name.common;
            select.appendChild(option);
        });
    })
    .catch(error => {
        console.error(error);
    });
