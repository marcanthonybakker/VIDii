/********************************************************/
/* Aanroepen van buttons en locaties voor JS interactie */
/********************************************************/

//Checken of de JS gelinkt is
console.log("Howdy!");

// Navigatie menu
const buttonRechts = document.querySelector("#buttonRechts");
const buttonLinks = document.querySelector("#buttonLinks");
const scrollableList = document.querySelector('#scrollable-list');

// Mobile Suit Data
const liJaar = document.querySelector("#liJaar");
const liNaam = document.querySelector("#liNaam");
const liLengte = document.querySelector("#liLengte");
const liGewicht = document.querySelector("#liGewicht");
const liPower = document.querySelector("#liPower");
const liSnelheid = document.querySelector("#liSnelheid");

// Extra info scherm
const menuButton = document.querySelector("#menuButton");
const menuButtonHide = document.querySelector("#menuButtonHide");
const menuScherm = document.querySelector("#menuScherm");
const extraInfo = document.querySelector("#extraInfo");
const link = document.querySelector("#link");

// Img slide animatie
const img78 = document.querySelector("#img78");
const imgMk = document.querySelector("#imgMk");
const imgZeta = document.querySelector("#imgZeta");
const imgZz = document.querySelector("#imgZz");
const imgNg = document.querySelector("#imgNg");
const imgF91 = document.querySelector("#imgF91");
const imgVic = document.querySelector("#imgVic");

// Focus light op img
const img78Focus = document.querySelector("#img78 img");
const imgMkFocus = document.querySelector("#imgMk img");
const imgZetaFocus = document.querySelector("#imgZeta img");
const imgZzFocus = document.querySelector("#imgZz img");
const imgNgFocus = document.querySelector("#imgNg img");
const imgF91Focus = document.querySelector("#imgF91 img");
const imgVicFocus = document.querySelector("#imgVic img");

// Warning op computerscherm
const computerScreen = document.querySelector("#computerScreen");

// Zero state
const zeroState = document.querySelector("#zeroState");
const zeroStateOff = document.querySelector("#zeroStateOff");

// Easter egg
const easterEggLiftOff = document.querySelector("#easterEggLiftOff");




/**************************/
/* Basis klik interacties */
/**************************/

// Easter egg lift off animatie
easterEggLiftOff.addEventListener('click', function() {
    imgMk.classList.toggle('easterEggAnimatie')
    playAudio('liftOff.mp3');
});

// Zero state
zeroStateOff.addEventListener('click', function() {
    zeroState.classList.add('menuHidden');
    img78.classList.add('slideAnimatie');
    img78Focus.classList.add('focusLight');
    playAudio('menu.mp3');
});

// Overlay extra informatie menu
menuButton.addEventListener('click', function() {
    menuScherm.classList.remove('menuHidden');
    menuScherm.classList.add('menuVisible');
    playAudio('menu.mp3');
});

menuButtonHide.addEventListener('click', function() {
    menuScherm.classList.remove('menuVisible');
    menuScherm.classList.add('menuHidden');
    playAudio('menu.mp3');
});




/********************************************************************************************/
/* Checkt scroll locatie, en verranderd text, animatie, link op basis van ongevere locatie  */
/********************************************************************************************/

// Horizontal scroll pas aan scherm text, img, animatie, overlay text
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

function checkScrollPosition(currentPosition) {
    // de case moet true zijn, anders gaat default af
    switch (true) {

    // Tussen positie eerste en tweede pixel locatie gaat de rest van de acties af
    case currentPosition >= 0 && currentPosition <= 158:

        // Alle text info per specifieke Mobile Suit dat veranderd wordt
        liJaar.textContent = 'Jaar: UC 0079';
        liNaam.textContent = 'Naam: RX 79-2 Gundam';
        liLengte.textContent = 'Lengte: 18.0 meter';
        liGewicht.textContent = 'Gewicht: 60.0 Ton';
        liPower.textContent = 'Energie: 1380 kW';
        liSnelheid.textContent = 'Snelheid: 0.93 G';

        // De faction afbeelding locatie wordt veranderd
        factionImg.src = './images/efsf.png';

        // De link locatie per specifieke Mobile Suit dat veranderd wordt
        link.href = 'https://gundam.fandom.com/wiki/RX-78-2_Gundam';

        // de aria-label beschrijving veranderd per passende naam => meer informatie over (Suit naam 1 tot de rest)
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: RX 79-2 Gundam';

        // voeg de slide animatie toe als je van positie veranderd
        img78.classList.add('slideAnimatie');

        // voeg een focus light aan de mobile suit
        img78Focus.classList.add('focusLight');

        // verander de tekst van het extra informatie scherm
        extraInfo.textContent = 'De RX-78-2 Gundam is het kenmerkende mobiele pak van de televisieserie Mobile Suit Gundam. Als onderdeel van de RX-78 Gundam serie werd het in het geheim gebouwd op Side 7. De Gundam zou de loop van de oorlog ten gunste van de Aardse Federatie veranderen tijdens de Eenjarige Oorlog tegen het Vorstendom Zeon. Het werd voornamelijk bestuurd door Amuro Ray.';
        break;
    case currentPosition >= 520 && currentPosition <= 701:
        liJaar.textContent = 'Jaar: UC 0086';
        liNaam.textContent = 'Naam: RX-178 Gundam Mk-II';
        liLengte.textContent = 'Lengte: 18.5 meter';
        liGewicht.textContent = 'Gewicht: 54.1 metrische ton';
        liPower.textContent = 'Energie: 1930 kW';
        liSnelheid.textContent = 'Snelheid: 1.50 G';
        factionImg.src = './images/aeug.png';
        link.href = 'https://gundam.fandom.com/wiki/RX-178_Gundam_Mk-II';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: RX 79-2 RX-178 Gundam Mk-II';
        imgMk.classList.add('slideAnimatie');
        imgMkFocus.classList.add('focusLight');
        extraInfo.textContent = 'De RX-178 Gundam Mk-II is een mobiel pak dat geïntroduceerd wordt in de anime serie Mobile Suit Zeta Gundam. Het is de opvolger van de bekende RX-78-2 Gundam die diende tijdens de Eenjarige Oorlog.';
        break;
    case currentPosition >= 1110 && currentPosition <= 1291:
        liJaar.textContent = 'Jaar: UC 0087';
        liNaam.textContent = 'Naam: MSZ-006 Zeta Gundam';
        liLengte.textContent = 'Lengte: 19.85 meter';
        liGewicht.textContent = 'Gewicht: 62.3 metrische ton';
        liPower.textContent = 'Energie: 2020 kW';
        liSnelheid.textContent = 'Snelheid: 1.81 G';
        factionImg.src = './images/aeug.png';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: MSZ-006 Zeta Gundam';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-006_Zeta_Gundam';
        imgZeta.classList.add('slideAnimatie');
        imgZetaFocus.classList.add('focusLight');
        extraInfo.textContent = 'De MSZ-006 Zeta Gundam was het kenmerkende mobiele pak van de anime Mobile Suit Zeta Gundam. Het verscheen ook in de vervolgserie Mobile Suit Gundam ZZ.';
        break;
    case currentPosition >= 1700 && currentPosition <= 1981:
        liJaar.textContent = 'Jaar: UC 0088';
        liNaam.textContent = 'Naam: MSZ-010 ZZ Gundam';
        liLengte.textContent = 'Lengte: 19.86 meter';
        liGewicht.textContent = 'Gewicht: 68.4 metrische ton';
        liPower.textContent = 'Energie: 7340 kW';
        liSnelheid.textContent = 'Snelheid: 1.48 G';
        factionImg.src = './images/aeug.png';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: MSZ-010 ZZ Gundam';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-010_%CE%96%CE%96_Gundam';
        imgZz.classList.add('slideAnimatie');
        imgZzFocus.classList.add('focusLight');
        extraInfo.textContent = 'De MSZ-010 ZZ Gundam (ook bekend als ZZ Gundam, ZZ; uitgesproken als "Dubbele Zeta") is het kenmerkende mobiele pak van de anime Mobile Suit Gundam ZZ en wordt bestuurd door Judau Ashta.';
        break;
    case currentPosition >= 2290 && currentPosition <= 2468:
        liJaar.textContent = 'Jaar: UC 0093';
        liNaam.textContent = 'Naam: RX-93 Nu Gundam';
        liLengte.textContent = 'Lengte: 22.0 meter';
        liGewicht.textContent = 'Gewicht: 27.9 metrische ton';
        liPower.textContent = 'Energie: 2980 kW';
        liSnelheid.textContent = 'Snelheid: 1.55 G';
        factionImg.src = './images/londoBell.png';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: RX-93 Nu Gundam';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-006_Zeta_Gundam';
        imgNg.classList.add('slideAnimatie');
        imgNgFocus.classList.add('focusLight');
        extraInfo.textContent = 'De RX-93 Nu Gundam (ook bekend als Nu Gundam, Nu) is een mobiel pak geïntroduceerd in Mobile Suit Gundam: Chars Counterattack. Het werd ontworpen en bestuurd door Amuro Ray.';
        break;
    case currentPosition >= 2880 && currentPosition <= 3058:
        liJaar.textContent = 'Jaar: UC 0123';
        liNaam.textContent = 'Naam: F91 Gundam F91';
        liLengte.textContent = 'Lengte: 15.2 meter';
        liGewicht.textContent = 'Gewicht: 19.9 metrische ton';
        liPower.textContent = 'Energie: 4250 kW';
        liSnelheid.textContent = 'Snelheid: 4.44 G';
        factionImg.src = './images/efsf.png';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: F91 Gundam F91';
        link.href = 'https://gundam.fandom.com/wiki/RX-93_%CE%BD_Gundam';
        imgF91.classList.add('slideAnimatie');
        imgF91Focus.classList.add('focusLight');
        extraInfo.textContent = 'De F91 Gundam F91 (F91 ガンダムF91, Effu Kujūichi Gandamu Fōmyura Nainti Wan?) is een mobiel pak geïntroduceerd in de film Mobile Suit Gundam F91, waarin het werd bestuurd door Seabook Arno. Harrison Madin bestuurde twee productietype eenheden in aangepaste kleuren.';
        break;
    case currentPosition >= 3405 && currentPosition <= 3756:
        liJaar.textContent = 'Jaar: UC 0153';
        liNaam.textContent = 'Naam: LM312V04 Victory Gundam';
        liLengte.textContent = 'Lengte: 18.5 meter';
        liGewicht.textContent = 'Gewicht: 17.7 metrische ton';
        liPower.textContent = 'Energie: 4780 kW';
        liSnelheid.textContent = 'Snelheid: 4.50 G';
        factionImg.src = './images/leagueMilitaire.png';
        menuButton.ariaLabel = 'Meer informatie over Mobile Suit: LM312V04 Victory Gundam';
        link.href = 'https://gundam.fandom.com/wiki/LM312V04_Victory_Gundam';
        imgVic.classList.add('slideAnimatie');
        imgVicFocus.classList.add('focusLight');
        extraInfo.textContent = 'De LM312V04 Victory Gundam (ook bekend als V1) is het kenmerkende mobiele pak van Mobile Suit Victory Gundam, meestal bestuurd door Üso Ewin totdat hij zijn opvolger, de LM314V21 Victory 2 Gundam, verkreeg.';
        break;
    default:
        // Haal de animatie weg op elke andere scrollocatie om de animatie herhalend opnieuw te plaatsen wanneer je weer over de juiste positie gaat
        img78.classList.remove('slideAnimatie');
        imgMk.classList.remove('slideAnimatie');
        imgMk.classList.remove('easterEggAnimatie');
        imgZeta.classList.remove('slideAnimatie');
        imgZz.classList.remove('slideAnimatie');
        imgNg.classList.remove('slideAnimatie');
        imgF91.classList.remove('slideAnimatie');
        imgVic.classList.remove('slideAnimatie');

        // Verwijder het oud focuslicht als het Mobile Suit veranderd 
        img78Focus.classList.remove('focusLight');
        imgMkFocus.classList.remove('focusLight');
        imgZetaFocus.classList.remove('focusLight');
        imgZzFocus.classList.remove('focusLight');
        imgNgFocus.classList.remove('focusLight');
        imgF91Focus.classList.remove('focusLight');
        imgVicFocus.classList.remove('focusLight');
    }
}




/********************************/
/* Computer scherm menu knoppen */
/********************************/

// Menu buttons links en rechts 50px en speel slide audio af.
// En het lezen van de huidige locatie.
function scrollLeft() {
    playAudio('slideSfx.mp3');
    scrollableList.scrollBy({
        left: -50,
        behavior: 'smooth'
    });
}

function scrollRight() {
    playAudio('slideSfx.mp3');
     scrollableList.scrollBy({
        left: 50,
        behavior: 'smooth'
    });
}

buttonLinks.addEventListener('click', scrollLeft);
buttonRechts.addEventListener('click', scrollRight);


scrollableList.addEventListener('scroll', () => {
    const currentPosition = scrollableList.scrollLeft;
    checkScrollPosition(currentPosition);
});




/********************************************************************************************************/
/* Audio functie dat audio files zoekt in de sfx map en laat afspelen wanneer een file opgeroepen wordt */
/********************************************************************************************************/

// Oproepen van van de audio in de sfx map
function playAudio(audioNaam) {
    const audio = new Audio("./sfx/" + audioNaam);
    audio.play();
}




/***********************************************************************************/
/* Wanneer je te veel naar rechts of links gaat laat een animatie en geluid afgaan */
/***********************************************************************************/

// scrollWidth snap ik niet bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
// clientWidth snap ik niet bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth

// Animatie reactie als je het einde en het begin (alweer) behaalt
scrollableList.addEventListener('scroll', () => {

    const currentPosition = scrollableList.scrollLeft;
    const maxScrollLeft = scrollableList.scrollWidth - scrollableList.clientWidth;
    // Laat in de console weten wat de huidige scroll positie is
    console.log("Huidige scrollpositie: " + currentPosition + " pixels");
  
    if (currentPosition === 0) {
        // Als de huidige positie 0 is dan een console log, animatie en sound effect
        console.log("Te veel links");
        computerScreen.classList.add('pcWarningAnimatie');
        playAudio('warning.mp3');
    } else if (currentPosition >= maxScrollLeft) {
        console.log("Te veel rechts");
        computerScreen.classList.add('pcWarningAnimatie');
        playAudio('warning.mp3');
        // Als de huidige positie het maximale is dan een console log, animatie en sound effect
    } else {
        // Haal weg wanneer je er niet bent zodat je weeer herhalend de bovenste acties kan af laten gaan.
        computerScreen.classList.remove('pcWarningAnimatie');
    }
}); 