                                                                            //slider 

$(document).ready(function(){

	// Slider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        slideWidth: 425
      });
      
      let usuario_logo = $("#Usuarios")
      let login_logo = $("#l_signal")
      let login_div = $(".login");
      let caja_gris = $(".disapear")

    

    login_logo.click(() => {

      login_logo.hide()  
      usuario_logo.show();
      login_div.show();
      caja_gris.show()





    })

    });
    
'use strict'

//login code





                                        //menu code

menu_code = () => {


    const menu = document.querySelector(".menu");
    const barras = document.querySelector(".bar");
    const salir = document.querySelector(".menu_salir");
    let ul = document.querySelector(".ul");
    let contenedor = document.querySelector(".disapear");

    
    
    const menu_on = document.querySelector(".menu_on")
         
    
    menu.addEventListener("click", function(){
    
    
            contenedor.style.display = "block";
            menu_on.style.display = "block";
            salir.style.display = "block";
            menu.style.display = "none";

           
            

    
    
    
        
    })
    
    salir.addEventListener("click", function(){
    
        let boole = false;
        let formulario = document.querySelector("#login");

    
    
        if(boole == false){
    
            menu_on.style.display = "block";
            menu.style.display = "block";
            salir.style.display = "none";
            menu_on.style.display = "none";
            contenedor.style.display = "none";
            formulario.style.display = "none";




    
        }
    })
    

    nombres = (name) => {

   
        /*seccion del contenido*/

const lista = document.createElement("li");
const link = document.createElement("a")

lista.classList.add("li")
link.classList.add("link")


lista.appendChild(link)

link.textContent = name;

return lista;

}


 cargarnombres = async numb => {

    let cont = 0;

    const menufragm = document.createDocumentFragment();
    let ul = document.querySelector(".ul");


  for(let i = 0; i < numb; i++){

      
    const reque =  await fetch("articulos.json");
    const conten = await reque.json();
    const ar = conten.content[cont].name;

    ul.appendChild(nombres(ar))

            cont++;



 }



}

cargarnombres(8)


}


menu_code()

   
                                                                          /*nigth mode*/
     cambio = () => {




const night = document.querySelector("#theme");

const nocturno = document.querySelector(".nigth-mode");

const luna = document.querySelector("#luna");
const lunax = document.querySelector("#lunax");




lunax.addEventListener("click", function(){




        night.setAttribute("href", "css/white.css")  
        lunax.style.display = "none";
        luna.style.display = "block";
        



});


luna.addEventListener("click", function(){




    night.setAttribute("href", "css/style.css")  
    lunax.style.display = "block";
    luna.style.display = "none";
    

});


     }


     cambio();




   

















