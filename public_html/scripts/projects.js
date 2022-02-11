function changeImage(id, imgOld, imgNew) {
    var srcImg = document.getElementById(id).src
    
    relSrcImg = 'img/' + srcImg.substring(srcImg.lastIndexOf('/') + 1) 
    if (relSrcImg == imgOld) 
    {
        document.getElementById(id).src = imgNew;
    }
    else 
    {
        document.getElementById(id).src = imgOld;
    }
}

function readMore(idButton, idText, idDots) {
    var dots = document.getElementById(idDots);
    var moreText = document.getElementById(idText);
    var btnText = document.getElementById(idButton);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 