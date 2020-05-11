$(function(){
     //event btn
     $("button").one("click",()=>{
        console.log("ok")
        //appel json par la méthode get
        $.getJSON("data.json", (data)=>{

        //$("ul").fadeIn(600);
       
            
        for(let i = 0; i < data.eleves.length; i++){
            console.log(data.eleves[i].nom+" "+data.eleves[i].email)
            
            $("ul").append(
                            `<li>
                            ${data.eleves[i].nom}, 
                            <a href="mailto:${data.eleves[i].email}
                            ?cc=personne@mozilla.org&subject=Ceci%20est%20le%20sujet">
                            ${data.eleves[i].email}</a>,
                            ${data.eleves[i].moyenne},
                            </li>`
                            )

        }
    
   
        
        })
    })
})
