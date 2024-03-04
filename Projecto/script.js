function toggleMode() {
   const html = documen.documenteElement
   html.classList.toggle('light')
    
   // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
   Img.setAttribute('src''./assets/Baltazar-light.jpg')
   } else {
    //set tiver sem light mode, manter a imagem normal
    Img.setAttribute('src''./assets/avatar1-light.jpg')
    }
 

 
  
  
  
  
}