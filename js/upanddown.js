//variables
//boutons
var btnJouez = document.querySelector(".fightbutton1");
var btnOk = document.querySelector(".btn-ok");
var btnRejouez1 = document.querySelector(".winner1");
var btnRejouez2 = document.querySelector(".fail1");

var sectionAccueil = document.querySelector(".accueil");
var sectionJeux = document.querySelector(".jeux");
var sectionGagner = document.querySelector(".gagner");
var sectionPerdu = document.querySelector(".perdu");

var vie1 = document.querySelector(".iv1");
var vie2 = document.querySelector(".iv2");
var vie3 = document.querySelector(".iv3");
var vie4 = document.querySelector(".iv4");
var vie5 = document.querySelector(".iv5");
var vie6 = document.querySelector(".iv6");
var vie7 = document.querySelector(".iv7");
var vie8 = document.querySelector(".iv8");

var plus = document.querySelector(".plus");
var moins = document.querySelector(".moins");

var blcNb = document.querySelector("input");

var coupjouer = 0;

var nombre = Math.ceil(Math.random()*100);

var nbCoup = document.querySelector("#fightround");

var coachTalk = document.querySelector(".bullegame");
var coachStart = "Alors combien de coups penses tu qu’il faudra pour le mettre K.O ?" + "\n Ne met pas plus de 100 coups";
var coachMoins = "Tu frappe trop! la plupart de tes coups ne le touche pas!";
var coachPlus = "Met plus de coups tu l’as a peine touché là !";


//evenements
btnJouez.addEventListener('click', accueilToJeux);
btnOk.addEventListener('click', verifNombre);
btnRejouez1.addEventListener('click', gagnerToJeux);
btnRejouez2.addEventListener('click', perduToJeux);

//fonctions
function accueilToJeux() {
    sectionAccueil.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    coachTalk.innerText = coachStart;
}

function verifNombre() {
    
    if(coupjouer < 1) {
        coachTalk.innerText = coachStart;
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie8.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie8.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 2) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie7.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie7.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 3) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie6.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie6.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 4) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie5.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie5.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 5) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie4.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie4.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 6) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie3.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie3.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 7) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else if(blcNb.value < nombre) {
                vie2.classList.add('dead');
                plus.classList.remove('cacher');
                coachTalk.innerText = coachPlus;
            
            }else{
                vie2.classList.add('dead');
                moins.classList.remove('cacher');
                coachTalk.innerText = coachMoins;
        }
        
        coupjouer = coupjouer+1;
    } else
    
    if(coupjouer < 8) {
        
        plus.classList.add('cacher');
        moins.classList.add('cacher');
        if(blcNb.value == nombre){
            sectionJeux.classList.add('cacher');
            sectionGagner.classList.remove('cacher');
            nbCoup.innerText = coupjouer + 1;

            }else{
                sectionPerdu.classList.remove('cacher');
                sectionJeux.classList.add('cacher');

                vie1.classList.remove('dead');
                vie2.classList.remove('dead');
                vie3.classList.remove('dead');
                vie4.classList.remove('dead');
                vie5.classList.remove('dead');
                vie6.classList.remove('dead');
                vie7.classList.remove('dead');
                vie8.classList.remove('dead');
                
        }
    }
}

function perduToJeux() {
    sectionPerdu.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    
    vie1.classList.remove('dead');
    vie2.classList.remove('dead');
    vie3.classList.remove('dead');
    vie4.classList.remove('dead');
    vie5.classList.remove('dead');
    vie6.classList.remove('dead');
    vie7.classList.remove('dead');
    vie8.classList.remove('dead');
    coupjouer = 0;
    nombre = Math.ceil(Math.random()*100);
    blcNb.value = "";
    coachTalk.innerText = coachStart;
}

function gagnerToJeux() {
    sectionGagner.classList.add('cacher');
    sectionJeux.classList.remove('cacher');
    
    vie1.classList.remove('dead');
    vie2.classList.remove('dead');
    vie3.classList.remove('dead');
    vie4.classList.remove('dead');
    vie5.classList.remove('dead');
    vie6.classList.remove('dead');
    vie7.classList.remove('dead');
    vie8.classList.remove('dead');
    coupjouer = 0;
    nombre = Math.ceil(Math.random()*100);
    blcNb.value = "";
    coachTalk.innerText = coachStart;
}

