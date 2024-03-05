console.log("korg.js");

const korgen = document.querySelector(".korgProdukter");
// document.body.style="background-color:red";
function load_cart()
{
    console.log("load_cart");
    // Hämta json data från localStorage
    let json_array = window.localStorage.getItem("korg");
    // Göra om json data till Array
    let array = JSON.parse(json_array);
    if(!array)
        return

    korgen.innerHTML = "";

    var summa = 199 * array.length
    console.log(summa)
    let summaElement = document.createElement("h2");
    summaElement.textContent = summa;
    summaElement.classList.add("summa");
    var element = document.getElementById("hejhej")
    element.appendChild(summaElement)

    for (let i = 0; i < array.length; i++) {
        let diven = document.createElement("div");
        // Skapa produkt namn
        let h2 = document.createElement("h2");
        h2.textContent = array[i].varunamn;
        diven.appendChild(h2);
        // Skapa bild
        let img = document.createElement("img");
        img.setAttribute("src",array[i].bilden);
        img.classList.add("Images");
        diven.appendChild(img);
        

        // Skapa pris
        let p = document.createElement("p");
        p.textContent = array[i].priset;
        diven.appendChild(p);
        korgen.appendChild(diven);
        diven.classList.add("vara");

    }


    // loopa igenom array som inehåller varu-objekt:
    //     - skapa container för vara
    //     - för varje Element (varuobjekt) skapa en h2, en img och en p 
    //     - h2.textContent= id 
    //     - img.setAttribute("src",bild_src)
    //     - p.textContent=pris
    //     - lägg in h2 img p i varucontainern
    //     - lägg in varucontainern i korgen



}