function replaceText() {
    obj = document.getElementById("slowlyShow");
    console.log(obj);
    for (let i = 0; i < 1000; i++) {
        let k = i;
        setTimeout(function () {
            if (k % 4 == 0) {
                obj.innerText = 'I am a hydrologist';
            
            }
            else if (k % 4 == 1) {
                obj.innerText = 'I am a cyclist';
            
            }
            else if (k % 4 == 2) {
                obj.innerText = 'I am a hobby programmer';
            
            }
            else {
                obj.innerText = 'I am a data scientist';
            }
        }, 1500*(k+2));

    }
}



/*
console.log(k);

*/