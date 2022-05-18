




/*sector de articulos*/

const art = document.querySelector("section");

let contador = 0;


const articulos = (precio, photo, miniatura1, miniatura2, miniatura3, miniatura4, name) => {


    
                        /*seccion del contenido*/
    const full_container = document.createElement("div");
    const container = document.createElement("div");
    const price = document.createElement("h3");
    const image = document.createElement("img");
    const grid = document.createElement("div");

            const primera = document.createElement("div");
            const uno = document.createElement("img");
        
            const segundo = document.createElement("div");
            const dos = document.createElement("img");
        
            const tercero = document.createElement("div");
            const tres = document.createElement("img");
        
            const cuarto = document.createElement("div");
            const cuatro = document.createElement("img");
        

            primera.classList.add("min")
            segundo.classList.add("min")
            tercero.classList.add("min")
            cuarto.classList.add("min")
        
            uno.classList.add("mini")
            dos.classList.add("mini")
            tres.classList.add("mini")
            cuatro.classList.add("mini")
        
    primera.append(uno)
    segundo.append(dos)
    tercero.append(tres)
    cuarto.append(cuatro)

    



    /*sigue*/

    /*recuerda en cada interaccion creara un div y una image luego asi completara el array*/


    const nombre = document.createElement("h2");

    full_container.classList.add("full_box");
    container.classList.add("in_box");
    image.classList.add("picture");
    grid.classList.add("grid");

    

    price.textContent = precio;
    image.src = photo;
    uno.src = miniatura1;
    dos.src = miniatura2;
    tres.src = miniatura3;
    cuatro.src = miniatura4;

    nombre.textContent = name;

    
    full_container.appendChild(container);

    container.appendChild(price);
    container.append(image)
    grid.append(primera, segundo, tercero, cuarto)
    container.appendChild(grid)
    
    container.appendChild(nombre);
    
    return full_container;
    


};





let cargarmas = entry => {

    if(entry[0].isIntersecting)cargarPublicaciones(4)
    
}






const observer = new IntersectionObserver(cargarmas);



const cargarPublicaciones = async num => {


    const reques =  await fetch("articulos.json");
    const content = await reques.json();
    const arr = content.content;
    let mini = document.querySelector(".mini")
    const documentfragm = document.createDocumentFragment();
    const menufragm = document.createDocumentFragment();



    
    for(let i = 0; i < num; i++){

        let incremento = 0;


        if(arr[contador] != undefined){


            


            const newPublication = articulos(arr[contador].Price,
                arr[contador].image,
                arr[contador].fotico[0],
                arr[contador].fotico[1],
                arr[contador].fotico[2],
                arr[contador].fotico[3],
                arr[contador].name);


                documentfragm.appendChild(newPublication);


                //   const newminiautras = articulos(arr[contador].fotico)

                
    
                    //documentfragm.appendChild(newminiautras);




            contador++;

            incremento++;



            if(i == num-1) observer.observe(newPublication)
    
        }else{


            if(art.lastElementChild.id !== "nomore"){


            let nomore = document.createElement("h6");
            nomore.textContent = "No hay mas publicaciones"
            nomore.id = "nomore"
            documentfragm.appendChild(nomore)
            art.appendChild(documentfragm);

            break;
            }
        }
            
            

    }


art.appendChild(documentfragm)

}

cargarPublicaciones(10)






