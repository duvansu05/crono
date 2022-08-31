window.onload=()=>{
    ml=0;
    s=0;
    m=0;
    h=0;
    tiempoInicial=0;
    hora=document.getElementById("hora");
    segundo=document.getElementById("segundo");
    minuto=document.getElementById("minuto");
    milisegundos=document.getElementById("milisegundos");
    bStart=document.getElementById("b-start");
    bStop=document.getElementById("b-stop");
    bReset=document.getElementById("b-reset");
    bStart.addEventListener("click", inicio);
    bStop.addEventListener("click", detener);
    bReset.addEventListener("click", resetear);
    imgArriba=document.getElementById("grande");
    imgGranMl=document.getElementById("granMil");
    imgGranM=document.getElementById("granMin");
    imgGranS=document.getElementById("granSeg");
    pantalla=document.getElementById("pantalla");
   


};



function escribir(){
    let ht, mt, st, mlt;
    ml++;
    if(ml>99){
        s++;
        ml=0;;
    }
    if(s>59){
        m++;
        s=0;
    }
    if(s>0){
        imgGranS.style.animation="rotacion 1s linear infinite";
      
    }
    if(m>0){
        imgGranM.style.animation="rotacion 60s linear infinite";
    }
    if(h>0){
        imgArriba.style.animation="rotacion 3600s linear infinite";
    }
    if(m>59){
        h++;
        m=0;
    }
    if(h>24)h=0

    mlt=("0"+ml).slice(-2);
    st=("0"+s).slice(-2);
    mt=("0"+m).slice(-2);
    ht=("0"+h).slice(-2);

    milisegundos.innerHTML=(mlt);
    segundo.innerHTML=(st);
    minuto.innerHTML=(mt);
    hora.innerHTML=(ht);
   
}

function inicio(){
    escribir();
    tiempoInicial=setInterval(escribir, 10);
    bStart.removeEventListener("click", inicio);
   // imgArriba.style.animation="rotacion 3600s linear infinite";
    imgGranMl.style.animation=" rotacion 0.5s linear infinite";
   // imgGranS.style.animation="rotacion 1s linear infinite";
   // imgGranM.style.animation="rotacion 60s linear infinite";
   pantalla.style.display="block";
 
  
   
}

function detener(){
    escribir();
    clearInterval(tiempoInicial);
    bStart.addEventListener("click", inicio);
    imgArriba.style.animationPlayState = 'paused';
    imgGranMl.style.animationPlayState = 'paused';
    imgGranS.style.animationPlayState = 'paused';
    imgGranM.style.animationPlayState = 'paused';
}

function resetear(){
    clearInterval(tiempoInicial);
    imgArriba.style.animation="none";
    imgGranMl.style.animation="none";
    imgGranS.style.animation="none";
    imgGranM.style.animation="none";
    pantalla.style.display="none";
    milisegundos.innerHTML="00";
    segundo.innerHTML="00";
    minuto.innerHTML="00";
    hora.innerHTML="00";

    h=0;
    m=0;
    s=0;
    ml=0;
    bStart.addEventListener("click", inicio);
}

console.log("hola")