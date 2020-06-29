function fetchPoekmon() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })

}

console.log(fetchPoekmon());
