$(function(){
    
    $("button").one("click",()=>{
        console.log('ok')

        //méthode ajax
        $.ajax({
            url : 'cible.html',
            type : 'GET',
            dateType : 'html',

            success : function(data, statut){
                $('.primary').fadeIn(600);
                $(data).appendTo(".commentaires");
                
                console.log(statut+' '+data)

            },

            error : function(resultat, statut, erreur){
                $(".commentaires").text("Erreur de chargement").fadeIn(600)

            },

            complete : function(resutat, statut){
                console.log("ok "+statut)
            }



        })

    })


})