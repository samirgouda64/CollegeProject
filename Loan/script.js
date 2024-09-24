let indexValue = 0;
function slideShow (){

    setTimeout(slideShow,2500);
    
    const img =document.querySelectorAll("img");
    for(let i = 0; i<img.length; i++){
        img[i].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();