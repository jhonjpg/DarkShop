


$(document).ready(function(){



    


    let registrarse = $(".register-form");

    

    registrarse.submit(() => {


        redirect()
            
    var form_name = $(".form_name_r").val();

    localStorage.setItem("form_name_r", form_name);
    
    


    
    
});
    
function redirect()
{
    window.location.href="index.html";
}





let log_in = $(".login");


log_in.submit(() => {


    if(input_name != null && input_name != "undefined"){

        var about_parrafo = $(".identificate");
        var form_name = $(".form_name").val();

    

    
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
    
        $(".formulario_login").hide();



        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })

    }


})




    
    
        



   



    




})
