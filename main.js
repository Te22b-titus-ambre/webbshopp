function addToCart(id, bild_src, pris)
{
    let prod = {
        varunamn: id,
        bilden: bild_src,
        priset: pris, 
    }
    // Hämta json data från localstorage
    let json_data = window.localStorage.getItem("korg");
    // Om js-array inte finns (NULL) skapa tom js array
    console.log(json_data);

    let array = JSON.parse(json_data);

    if(!array)
        array=[];
    // Göra om json data till Array

    //Skapa js onjekt med id,bild_src och pris
    console.log(array);
    array.push(prod);
    console.log("antal varor="+array.length);
    json_data = JSON.stringify(array);
    window.localStorage.setItem("korg", json_data)

    // Lägg in (push) js objekt i arrayen 
    // Formatera arrayen till json-data 
    // läggin json-data till localstorage
}