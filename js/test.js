
$(document).ready(()=>{ 
    console.log("ok")
    $.getJson("film.json", function(data){

for(let i = 0; i < film.length; i++){
//console.log(${data.film.[i].titre} ${data.film[i].genre} ${data.film.[i].durée} ${data.film.[i].réalisateur} ${date.film[i].date})
$("ul").append(`<li>${data.film[i].titre}</li>
              <li>${data.film[i].genre}</li>
              <li>${data.film[i].durée}</li>
              <li>${data.film[i].réalisateur}</li>
              <li>${data.film[i].date}</li>  
              `)



        }
    })
})