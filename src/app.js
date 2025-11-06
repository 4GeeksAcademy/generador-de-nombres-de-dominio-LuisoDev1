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

pronombre.forEach(pron => {
  adjetivo.forEach(adj => {
    nombre.forEach(nomb => {      
        
        const lista = document.getElementById("lista");
        lista.style.listStyleType = "none";       
       
        //Aplicando forEach para iterar y vaildar.
        extensiones.forEach(ext => {
          const nombreDeDominiosConExt = pron + adj + nomb + ext;             
          
          if(nomb.endsWith(ext.slice(1))){
            const nombreDeDominioAjustado = nomb.slice(0, -ext.slice(1).length) + ext;
            console.log(nombreDeDominioAjustado);
            const listaItem = document.createElement("li");
            listaItem.textContent = "😎 "+ nombreDeDominioAjustado;
            listaItem.style.color = "green";
            listaItem.classList.add("fw-bold");
            listaItem.classList.add("alert", "alert-success", "p-2");
            lista.appendChild(listaItem);
                        
          }else{
            console.log(nombreDeDominiosConExt);
            const listaItem = document.createElement("li");
            listaItem.textContent = "😂 "+nombreDeDominiosConExt;
            listaItem.style.color = "red";
            lista.appendChild(listaItem);
            listaItem.classList.add("alert", "alert-danger", "p-2");
            
          }
        });         
      })
    })
  });
 


  console.log("Hello Rigo from the console!");
};








