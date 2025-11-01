/*import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 //write your code here
  // Listas de palabras


  console.log("Hello Rigo from the console!");
};*/


let pronombre = ['the', 'our', 'my'];
let adjetivo = ['great', 'big', 'best', 'smart'];
let nombre = ['developer', 'coder', 'delicious', 'genius', 'previous'];
let extensiones = ['.com', '.net', '.us', '.io', '.org', '.dev'];

pronombre.forEach(pron => {
  adjetivo.forEach(adj => {
    nombre.forEach(nomb => {
      //let nombreDeDominios = pron + adj + nomb ;
        extensiones.forEach(ext => {
          let nombreDeDominiosConExt = pron + adj + nomb  + ext;
          
          if(nomb.endsWith(ext.slice(1))){
            console.log(pron+adj+nomb.slice(0, -ext.slice(1).length) + ext);
          } 
          else{
            console.log(nombreDeDominiosConExt);
          }          
        })
    })
  })
});
 




