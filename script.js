function load_account() {
    const fetch_promise = fetch("https://randomuser.me/api");
    fetch_promise.then(response => {
        return response.json();
    }).then(person => {
        console.log(person.results[0]);
        add_maket(person.results[0]);
    });
}

function add_maket(person_info) {
    const person = document.createElement("div");
    person.setAttribute("class", "person");
    const image = document.createElement("img");
    console.log(person_info.picture.medium);
    image.setAttribute("src", person_info.picture.large);
    image.setAttribute("alt", "NO_IMG");
    const name = document.createElement("p");
    const city = document.createElement("p");
    const country = document.createElement("p");
    const postcode = document.createElement("p");
    name.innerHTML = "Name: " + person_info.name.first + " " + person_info.name.last;
    city.innerHTML = "City: " + person_info.location.city;
    country.innerHTML = "Country: " + person_info.location.country;
    postcode.innerHTML = "Postcode: " + person_info.location.postcode;
    person.appendChild(image);
    person.appendChild(name);
    person.appendChild(city);
    person.appendChild(country);
    person.appendChild(postcode);
    const block = document.querySelector(".content");
    block.appendChild(person);
}