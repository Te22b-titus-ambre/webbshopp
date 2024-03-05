const korgen = document.querySelector(".korgProdukter");

function load_cart()
{
    // Hämta json data från localStorage
    let json_array = window.localStorage.getItem("nyckel");
    // Göra om json data till Array
    let array = JSON.parse(json_array);
    if(!array)
        return
    
    // loopa igenom array som inehåller varu-objekt:
    //     - skapa container för vara
    //     - för varje Element (varuobjekt) skapa en h2, en img och en p 
    //     - h2.textContent= id 
    //     - img.setAttribute("src",bild_src)
    //     - p.textContent=pris
    //     - lägg in h2 img p i varucontainern
    //     - lägg in varucontainern i korgen



}