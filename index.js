fetch("https://pokeapi.co/api/v2/pokemon").then(res => {
    res.json().then(
        data => {
            if(data.results.length > 0) {
                let temp = "";

                data.results.forEach((d) => {
                    temp += "<tr>";
                    temp += "<td>"+d.name+"</td>";
                    temp += `<td><button type='button' onClick='getPokemon("${d.url}")'>Ver Detalles</button></td>`;
                })

                document.getElementById("data").innerHTML = temp;
            }
        }
    )
})

function getPokemon(url) {
    fetch(url).then(r => {
        r.json().then(
            data => {
                const img = document.querySelector("img");
                img.src = data.sprites.back_default;
                document.getElementById("name").innerText = data.forms[0].name;
                document.getElementById("weight").innerText = data.weight;
                document.getElementById("height").innerText = data.height;
            }
        )
    })
}
