import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 //write your code here
  // Listas de palabras

const pronombre = ['the', 'our', 'my'];
const adjetivo = ['great', 'big', 'best', 'smart'];
const nombre = ['developer', 'coder', 'delicious', 'genius', 'previous'];
const extensiones = ['.com', '.net', '.us', '.io', '.org', '.dev'];

//Anidando los for para iterar sobre las listas
pronombre.forEach(pron => {
  adjetivo.forEach(adj => {
    nombre.forEach(nomb => {  
        const lista = document.getElementById("lista");
        // Esta linea elimina las viñetas de la lista.
        lista.style.listStyleType = "none";    
       
        // Último forEach  anidado, iterando y vaildando para recortar el nombre de dominio según correspoda.
        extensiones.forEach(ext => {
          // nombreDeDiminiosConExt recibe el valor de los 4 arrays en cada iteracion.
          const nombreDeDominioConExt = pron + adj + nomb + ext;            
          
          //Aplicando slice para recortar el nombre de dominio en caso de que coincida con la ext.
          if(nomb.endsWith(ext.slice(1))){
            const nombreDeDominioAjustado = nomb.slice(0, -ext.slice(1).length) + ext;
            //console.log(nombreDeDominioAjustado);
            
            // Creando Item de la lista dinamicamante.
            const itemDeLista = document.createElement("li"); 
            itemDeLista.textContent = "😎 "+ nombreDeDominioAjustado;
            itemDeLista.style.color = "#0b0c0cff";
            itemDeLista.classList.add("fw-bold","alert", "p-2");
            itemDeLista.style.backgroundColor = "#2fb564ff"
            itemDeLista.style.border = "2px solid #e55621ff"
            itemDeLista.style.borderRadius = "30px";
            lista.appendChild(itemDeLista); 
                                   
          }else{
            // En caso de que no coincida el nombre de dominio y la extension, entonces lo mostramos completo.
            const itemDeLista = document.createElement("li");
            itemDeLista.textContent = "😒 "+nombreDeDominioConExt;
            itemDeLista.style.color = "#000";
            itemDeLista.classList.add("alert", "alert-warning", "p-2");
            itemDeLista.style.border = "2px solid #e55621ff";
            itemDeLista.style.borderRadius = "30px"
            lista.appendChild(itemDeLista);
            
          }
        });         
      })
    })
  });
 


  console.log("Hello Rigo from the console!");
};








