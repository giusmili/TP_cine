$(function(){
     //event btn
     $("button").one("click",()=>{
        console.log("ok")
        //appel json par la méthode get
        $.getJSON("apply.json", (data)=>{

        $("ul").fadeIn(600);
            
        for(let i = 0; i < data.commandes.length; i++){
            console.log(data.commandes[i].titre+" "+data.commandes[i].action)
            
            $("ul").append(`<li>
                            ${data.commandes[i].titre} 
                            ${data.commandes[i].action}
                            </li>`)

        }
        
        })
    })
})
