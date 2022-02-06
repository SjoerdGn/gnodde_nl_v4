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
