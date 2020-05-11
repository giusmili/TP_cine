document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault()
    let x, xmlhttp, xmlDoc, vliste

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","./xml/produit.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    vliste = String("")
    x = xmlDoc.getElementsByTagName("produit");
    console.log(xmlDoc)
    //console.log(x[0].childNodes[1].textContent);
    //itération
    let i;
    //variables
    for(i = 0; i < x.length; i++){
        let nom, marque, prix
         nom = x[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
         marque = x[i].getElementsByTagName("marque")[0].childNodes[0].nodeValue;
         prix = x[i].getElementsByTagName("prix")[0].childNodes[0].nodeValue;
         console.log(nom+' '+marque+' '+prix)
         vliste+=`
                <li>Nom : ${nom}</li>
                <li>Marque : ${marque}</li>
                <li>Prix : ${prix} </li>
                `
         }
         document.getElementsByTagName("ul")[0].innerHTML = vliste;






})