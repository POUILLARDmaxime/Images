//
//Declaration des constantes / variable commune a tous
//

//valeur objectif principaux
const tequila = 900000;
const rubis = 1000000;
const bonPorteur = 1100000;
const diamant = 1300000;
const statue = 1900000;

var objectifPrincipal = 0;
var lastRadio;
//valeur objectif secondaires
const argent = 80000;
const herbe = 145000;
const cocaine = 224000;
const or = 332000;

var totalArgent = 0;
var totalHerbe = 0;
var totalCocaine = 0;
var totalOr = 0;

var objectifSecondaire = 0;
var lastRange;
//valeur place prise par objectif secondaires
const placeArgent = 0.25;
const placeHerbe = 0.33;
const placeCocaine = 0.50;
const placeOr = 0.66;

//valeur difficulté
var niveau = 1;

//part PNJ
const pavel = 0.02;
var partPavel = 0;
const receleur = 0.1;
var partReceleur = 0;

//part joueur
const pourcentageJoueur = [1,0.85,0.80,0.75,0.70,0.65,0.60,0.55,0.50,0.45,0.40,0.35,0.30,0.25,0.20,0.15]
//const pourcentageJoueur = [0.15,0.20,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80,0.85,1]

var joueur1 = 0;
var joueur2 = 0;
var joueur3 = 0;
var joueur4 = 0;

var resultatBraquageHT = 0;
var resultatBraquageTTC = 0;

//
//
//

//a faire au chargement de la page
function auDemarrage(){
    //remet a rien le nombre de joueur
    document.getElementById("start").selected = "true";
    //remet etat d'origine le choix des pourcentages + disabled
    document.getElementById("PourcentageJ1").disabled = true;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ2").disabled = true;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ3").disabled = true;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ4").disabled = true;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    //disabled des boutons radio du choix objectif principal + check de la tequila
    disabledPrincipal();
    document.getElementById("radioTequila").checked = true;
    //disabled des range du choix objectif secondaire + remise a 0 des ranges
    disabledSecondaire();
    zeroRangeValue();
    //remise du checkbox du choix niveau diffuculté a false
    document.getElementById("checkDifficile").checked = false;

    affichageGainTotaux();
    affichageGainJoueur();
    affichageGainObjectifPrincipal("radioTequila");
    affichageGainObjectifSecondaire();
}

//
//Fonction relative au choix du nombre de joueurs ainsi que de leur pourcentage
//

//fonction appeler lorsque incrementation du nombre de joueurs
function choixNombreJoueur2(){
    nombreJoueur = Number(document.getElementById("NombreJoueur2").value);       
    
    switch(nombreJoueur)
    {
        case 0:  
            zeroJoueur(nombreJoueur);
            disabledPrincipal();
            disabledSecondaire();
            break;
        case 1:
            unJoueur(nombreJoueur);     
            enabledPrincipal();
            enabledSecondaire();
            break;

        case 2:
            deuxJoueurs(nombreJoueur);     
            enabledPrincipal();
            enabledSecondaire();
            break;

        case 3:
            troisJoueurs(nombreJoueur)     
            enabledPrincipal();
            enabledSecondaire();
            break;
    
        case 4:
            quatreJoueurs(nombreJoueur)     
            enabledPrincipal();
            enabledSecondaire();
            break;
    }
    //changement du max des range choix objectif secondaire + disabled du range or si strictement inferieur a 2
    changementRange(nombreJoueur);
}
//fonctions pour activé ou desativé choix objectif principal et secondaire
function enabledPrincipal(){
    document.getElementById("radioTequila").disabled = false;
    document.getElementById("radioRubis").disabled = false;
    document.getElementById("radioBonPorteur").disabled = false;
    document.getElementById("radioDiamant").disabled = false;
    document.getElementById("radioStatue").disabled = false;
}

function disabledPrincipal(){
    document.getElementById("radioTequila").disabled = true;
    document.getElementById("radioRubis").disabled = true;
    document.getElementById("radioBonPorteur").disabled = true;
    document.getElementById("radioDiamant").disabled = true;
    document.getElementById("radioStatue").disabled = true;
}

function enabledSecondaire(){
    document.getElementById("rangeArgent").disabled = false;
    document.getElementById("rangeHerbe").disabled = false;
    document.getElementById("rangeCocaine").disabled = false;
    document.getElementById("rangeOr").disabled = false;
}

function disabledSecondaire(){
    document.getElementById("rangeArgent").disabled = true;
    document.getElementById("rangeHerbe").disabled = true;
    document.getElementById("rangeCocaine").disabled = true;
    document.getElementById("rangeOr").disabled = true;
}
//fonction selection joueur, appeler dans le switch de la fonction du choix de nombre joueurs (choixNombreJoueur())
function zeroJoueur(nbJ){
    document.getElementById("PourcentageJ1").disabled = true;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ2").disabled = true;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ3").disabled = true;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ4").disabled = true;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    joueur1 = 0;
    joueur2 = 0;
    joueur3 = 0;
    joueur4 = 0;
}

function unJoueur(nbJ){
    document.getElementById("PourcentageJ1").disabled = false;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "<option value = '1'>100%</option>";
    document.getElementById("PourcentageJ2").disabled = true;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ3").disabled = true;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ4").disabled = true;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    joueur1 = 1;
    joueur2 = 0;
    joueur3 = 0;
    joueur4 = 0;
}

function deuxJoueurs(nbJ){
    document.getElementById("PourcentageJ1").disabled = false;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "";
    for(var i = 1;i < pourcentageJoueur.length;i++){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ2").disabled = false;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 0;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ3").disabled = true;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    document.getElementById("PourcentageJ4").disabled = true;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    joueur1 = pourcentageJoueur[1];
    joueur2 = pourcentageJoueur[pourcentageJoueur.length-1];
    joueur3 = 0;
    joueur4 = 0;
}

function troisJoueurs(nbJ){
    document.getElementById("PourcentageJ1").disabled = false;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "";
    for(var i = 4;i < pourcentageJoueur.length;i++){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ2").disabled = false;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 3;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ3").disabled = false;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 3;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ4").disabled = true;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "<option value = '0'>Choix du pourcentage</option>";
    joueur1 = pourcentageJoueur[4];
    joueur2 = pourcentageJoueur[pourcentageJoueur.length-1];
    joueur3 = pourcentageJoueur[pourcentageJoueur.length-1];
    joueur4 = 0;
}

function quatreJoueurs(nbJ){
    document.getElementById("PourcentageJ1").disabled = false;
    var select = document.getElementById("PourcentageJ1");
    select.innerHTML = "";
    for(var i = 7;i < pourcentageJoueur.length;i++){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ2").disabled = false;
    select = document.getElementById("PourcentageJ2");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 6;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ3").disabled = false;
    select = document.getElementById("PourcentageJ3");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 6;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    document.getElementById("PourcentageJ4").disabled = false;
    select = document.getElementById("PourcentageJ4");
    select.innerHTML = "";
    for(var i = pourcentageJoueur.length-1; i > 6;i--){
        var value = pourcentageJoueur[i];
        var option = Math.round(pourcentageJoueur[i]*100);
        select.innerHTML += "<option value=\"" + value +"\">" + option + "%</option>";
    }
    joueur1 = pourcentageJoueur[7];
    joueur2 = pourcentageJoueur[pourcentageJoueur.length-1];
    joueur3 = pourcentageJoueur[pourcentageJoueur.length-1];
    joueur4 = pourcentageJoueur[pourcentageJoueur.length-1];
}

//fonction pour changer le max de mes range de choix objectif secondaire par rapport au nombre de joueur
function changementRange(nbJ){
    if(nbJ > 1){
        document.getElementById("rangeOr").disabled = false;
    }
    else{
        document.getElementById("rangeOr").disabled = true;
    }

    document.getElementById("rangeArgent").max = Math.round((1/placeArgent)*nbJ);
    document.getElementById("rangeHerbe").max = Math.round((1/placeHerbe)*nbJ);
    document.getElementById("rangeCocaine").max = Math.round((1/placeCocaine)*nbJ);
    document.getElementById("rangeOr").max = Math.round((1/placeOr)*nbJ);
    zeroRangeValue();
}
function zeroRangeValue(){
    document.getElementById("rangeArgent").value = 0;
    document.getElementById("rangeHerbe").value = 0;
    document.getElementById("rangeCocaine").value = 0;
    document.getElementById("rangeOr").value = 0;
    affichageRangeValue();
    affichageGainObjectifSecondaire();
}
function affichageRangeValue(){
    document.getElementById("uniteArgent").innerHTML = document.getElementById("rangeArgent").value;
    document.getElementById("uniteHerbe").innerHTML = document.getElementById("rangeHerbe").value;
    document.getElementById("uniteCocaine").innerHTML = document.getElementById("rangeCocaine").value;
    document.getElementById("uniteOr").innerHTML = document.getElementById("rangeOr").value;
}
//fonction poour recuper la valeur d'un select. appeler a chque clic sur le select, attribue une valuer 0.xx pour calcul gain joueur
function getSelectValue(idSelect){
    var selectValue = document.getElementById(idSelect).value;
    switch(idSelect)
    {
        case "PourcentageJ1":
            joueur1 = selectValue;
            break;

        case "PourcentageJ2":
            joueur2 = selectValue;
            break;

        case "PourcentageJ3":
            joueur3 = selectValue;
            break;

        case "PourcentageJ4":
            joueur4 = selectValue;
            break;
    }
}

//
//fonction relative au choix objectif principal
//

//fonction pour affecter valeur d'un objectif principal a la variable objectifPrincipal
function getRadioValue(idRadio){
    switch(idRadio)
    {
        case "radioTequila":
            objectifPrincipal = Math.round(tequila * niveau);
            break;
        case "radioRubis":
            objectifPrincipal = Math.round(rubis * niveau);
            break;
        case "radioBonPorteur":
            objectifPrincipal = Math.round(bonPorteur * niveau);
            break;
        case "radioDiamant":
            objectifPrincipal = Math.round(diamant * niveau);
            break;
        case "radioStatue":
            objectifPrincipal = Math.round(statue * niveau);
            break;
    }
}

//fonction d'affichage gain objectif principal
function affichageGainObjectifPrincipal(idEnCours){
    if(idEnCours){
        getRadioValue(idEnCours);   
        lastRadio = idEnCours;
    }
    document.getElementById("valeurObjectifPrincipal").innerHTML = "Objectif Principal : " + Intl.NumberFormat("de-DE").format(objectifPrincipal) + "$";
    affichageGainTotaux();
    affichageGainJoueur();
}

//
//fonction relative au choix d'objectif secondaire
//
function getRangeValue(idRange){
    var rangeValue = parseInt(document.getElementById(idRange).value);
    return(rangeValue);
}

function affichageGainObjectifSecondaire(idEnCours){
    if(idEnCours){
        lastRange = idEnCours;
        var rangeValue = getRangeValue(idEnCours);
        switch(idEnCours)
        {
        case "rangeArgent":
            totalArgent = Math.round(rangeValue * argent * niveau);
            affichageRangeValue();
            break;
        case "rangeHerbe":
            totalHerbe = Math.round(rangeValue * herbe * niveau);
            affichageRangeValue();
            break;
        case "rangeCocaine":
            totalCocaine = Math.round(rangeValue * cocaine * niveau);
            affichageRangeValue();
            break;
        case "rangeOr":
            totalOr = Math.round(rangeValue * or * niveau);
            affichageRangeValue();
            break;
        }       
    }  
    else{
        totalArgent = 0;totalHerbe = 0;totalCocaine = 0;totalOr = 0;
    }
    objectifSecondaire = (totalArgent + totalHerbe + totalCocaine + totalOr);
    document.getElementById("valeurObjectifSecondaire").innerHTML = "Objectif Secondaire : " + Intl.NumberFormat("de-DE").format(objectifSecondaire) + "$";
    affichageGainTotaux();
    affichageGainJoueur();
}

//
//fonction relative au gain totaux du braquage
//

function calculDesGains(){
    resultatBraquageHT = objectifPrincipal + objectifSecondaire;
    partPavel = resultatBraquageHT * pavel;
    partReceleur = resultatBraquageHT * receleur;
    resultatBraquageTTC = resultatBraquageHT - (partPavel + partReceleur);
}

function affichageGainTotaux()
{
    calculDesGains();
    document.getElementById("GainHT").innerHTML = "Gain Hors Taxes : " + Intl.NumberFormat("de-DE").format(resultatBraquageHT) + "$";
    document.getElementById("GainPavel").innerHTML = "Part de Pavel : " + Intl.NumberFormat("de-DE").format(partPavel) + "$";
    document.getElementById("GainReceleur").innerHTML = "Part du Receleur : " + Intl.NumberFormat("de-DE").format(partReceleur) + "$";
    document.getElementById("GainTTC").innerHTML = "Gain Toute Taxe Comprise : " + Intl.NumberFormat("de-DE").format(resultatBraquageTTC) + "$";
}

//fonction d'affichage gain joueurs
function affichageGainJoueur(){
    document.getElementById("GainJ1").innerHTML = "GainJ1 : " + Intl.NumberFormat("de-DE").format(Math.round(resultatBraquageTTC*joueur1)) + "$";
    document.getElementById("GainJ2").innerHTML = "GainJ2 : " + Intl.NumberFormat("de-DE").format(Math.round(resultatBraquageTTC*joueur2)) + "$";
    document.getElementById("GainJ3").innerHTML = "GainJ3 : " + Intl.NumberFormat("de-DE").format(Math.round(resultatBraquageTTC*joueur3)) + "$";
    document.getElementById("GainJ4").innerHTML = "GainJ4 : " + Intl.NumberFormat("de-DE").format(Math.round(resultatBraquageTTC*joueur4)) + "$";
}

function calculDificile(idEnCours){
    if (document.getElementById(idEnCours).checked == true){
        niveau = 1.1;
        affichageGainObjectifSecondaire(lastRange);
        affichageGainObjectifPrincipal(lastRadio);
    } 
    else 
    {
        niveau = 1;
        affichageGainObjectifSecondaire(lastRange);
        affichageGainObjectifPrincipal(lastRadio);
    }
}