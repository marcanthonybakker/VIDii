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

// Warning op computerscherm
const computerScreen = document.querySelector("#computerScreen");

// Zero state
const zeroState = document.querySelector("#zeroState");
const zeroStateOff = document.querySelector("#zeroStateOff");

// Easter egg
const easterEggLiftOff = document.querySelector("#easterEggLiftOff");







// Easter egg lift off animatie
easterEggLiftOff.addEventListener('click', function() {
    imgMk.classList.toggle('easterEggAnimatie')
    playAudio('liftOff.mp3');
});

// Zero state
zeroStateOff.addEventListener('click', function() {
    zeroState.classList.add('menuHidden');
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



// Horizontal scroll pas aan scherm text, img, animatie, overlay text
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

function checkScrollPosition(currentPosition) {
    // de case moet true zijn, anders gaat default af
    switch (true) {
      case currentPosition >= 0 && currentPosition <= 158:
        liJaar.textContent = 'Jaar: UC 0079';
        liNaam.textContent = 'Naam: RX 79-2 Gundam';
        liLengte.textContent = 'Lengte: 18.0 meter';
        liGewicht.textContent = 'Gewicht: 60.0 Ton';
        liPower.textContent = 'Energie: 1380 kW';
        liSnelheid.textContent = 'Snelheid: 0.93 G';
        factionImg.src = './images/efsf.png';
        link.href = 'https://gundam.fandom.com/wiki/RX-78-2_Gundam';
        // als img78 etc er niet is, voeg dan de class toe, d.m.v. logical not operator
        if (!img78.classList.contains('slideAnimatie')) {
            img78.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The RX-78-2 Gundam is the titular mobile suit of Mobile Suit Gundam television series. Part of the RX-78 Gundam series, it was built in secret on Side 7. The Gundam would turn the tide of war in favor of the Earth Federation during the One Year War against the Principality of Zeon. It was primarily piloted by Amuro Ray.';
        break;
      case currentPosition >= 440 && currentPosition <= 724:
        liJaar.textContent = 'Jaar: UC 0086';
        liNaam.textContent = 'Naam: RX-178 Gundam Mk-II';
        liLengte.textContent = 'Lengte: 18.5 meter';
        liGewicht.textContent = 'Gewicht: 54.1 metrische ton';
        liPower.textContent = 'Energie: 1930 kW';
        liSnelheid.textContent = 'Snelheid: 1.50 G';
        factionImg.src = './images/aeug.png';
        link.href = 'https://gundam.fandom.com/wiki/RX-178_Gundam_Mk-II';
        if (!imgMk.classList.contains('slideAnimatie')) {
            imgMk.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The RX-178 Gundam Mk-II is a mobile suit introduced in the anime series Mobile Suit Zeta Gundam. It is a successor of the famous RX-78-2 Gundam that served in the One Year War.';
        break;
      case currentPosition >= 990 && currentPosition <= 1234:
        liJaar.textContent = 'Jaar: UC 0087';
        liNaam.textContent = 'Naam: MSZ-006 Zeta Gundam';
        liLengte.textContent = 'Lengte: 19.85 meter';
        liGewicht.textContent = 'Gewicht: 62.3 metrische ton';
        liPower.textContent = 'Energie: 2020 kW';
        liSnelheid.textContent = 'Snelheid: 1.81 G';
        factionImg.src = './images/aeug.png';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-006_Zeta_Gundam';
        if (!imgZeta.classList.contains('slideAnimatie')) {
            imgZeta.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The MSZ-006 Zeta Gundam was the titular mobile suit of the anime Mobile Suit Zeta Gundam. It was also featured in the sequel series Mobile Suit Gundam ZZ.';
        break;
      case currentPosition >= 1530 && currentPosition <= 1757:
        liJaar.textContent = 'Jaar: UC 0088';
        liNaam.textContent = 'Naam: MSZ-010 ZZ Gundam';
        liLengte.textContent = 'Lengte: 19.86 meter';
        liGewicht.textContent = 'Gewicht: 68.4 metrische ton';
        liPower.textContent = 'Energie: 7340 kW';
        liSnelheid.textContent = 'Energie: Snelheid: 1.48 G';
        factionImg.src = './images/aeug.png';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-010_%CE%96%CE%96_Gundam';
        if (!imgZz.classList.contains('slideAnimatie')) {
            imgZz.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The MSZ-010 ZZ Gundam (aka ZZ Gundam, ZZ; pronounced "Double Zeta") is the titular mobile suit of the anime Mobile Suit Gundam ZZ and is piloted by Judau Ashta.';
        break;
      case currentPosition >= 2070 && currentPosition <= 2296:
        liJaar.textContent = 'Jaar: UC 0093';
        liNaam.textContent = 'Naam: RX-93 Nu Gundam';
        liLengte.textContent = 'Lengte: 22.0 meter';
        liGewicht.textContent = 'Gewicht: 27.9 metrische ton';
        liPower.textContent = 'Energie: 2980 kW';
        liSnelheid.textContent = 'Snelheid: 1.55 G';
        factionImg.src = './images/londoBell.png';
        link.href = 'https://gundam.fandom.com/wiki/MSZ-006_Zeta_Gundam';
        if (!imgNg.classList.contains('slideAnimatie')) {
            imgNg.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The RX-93 Nu Gundam (aka Nu Gundam, Nu) is a mobile suit introduced in Mobile Suit Gundam: Chars Counterattack. It was designed and piloted by Amuro Ray.';
        break;
      case currentPosition >= 2610 && currentPosition <= 2839:
        liJaar.textContent = 'Jaar: UC 0123';
        liNaam.textContent = 'Naam: F91 Gundam F91';
        liLengte.textContent = 'Lengte: 15.2 meter';
        liGewicht.textContent = 'Gewicht: 19.9 metrische ton';
        liPower.textContent = 'Energie: 4250 kW';
        liSnelheid.textContent = 'Snelheid: 4.44 G';
        factionImg.src = './images/efsf.png';
        link.href = 'https://gundam.fandom.com/wiki/RX-93_%CE%BD_Gundam';
        if (!imgF91.classList.contains('slideAnimatie')) {
            imgF91.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The F91 Gundam F91 (F91 ガンダムF91 Effu Kujūichi Gandamu Fōmyura Nainti Wan?) is a mobile suit introduced in the movie Mobile Suit Gundam F91, in which it was piloted by Seabook Arno. Harrison Madin piloted two production type units in custom colors.';
        break;
      case currentPosition >= 3060 && currentPosition <= 3385:
        liJaar.textContent = 'Jaar: UC 0153';
        liNaam.textContent = 'Naam: LM312V04 Victory Gundam';
        liLengte.textContent = 'Lengte: 18.5 meter';
        liGewicht.textContent = 'Gewicht: 17.7 metrische ton';
        liPower.textContent = 'Energie: 4780 kW';
        liSnelheid.textContent = 'Snelheid: 4.50 G';
        factionImg.src = './images/leagueMilitaire.png';
        link.href = 'https://gundam.fandom.com/wiki/LM312V04_Victory_Gundam';
        if (!imgVic.classList.contains('slideAnimatie')) {
            imgVic.classList.add('slideAnimatie');
        }
        extraInfo.textContent = 'The LM312V04 Victory Gundam (aka V1) is the titular mobile suit of Mobile Suit Victory Gundam, most prominently piloted by Üso Ewin until he acquired its successor, the LM314V21 Victory 2 Gundam.';
        break;
      default:
        // Haal de animatie weg op elke andere scrollocatie om de animatie opnieuw te plaatsen.
        img78.classList.remove('slideAnimatie');
        imgMk.classList.remove('slideAnimatie');
        imgMk.classList.remove('easterEggAnimatie');
        imgZeta.classList.remove('slideAnimatie');
        imgZz.classList.remove('slideAnimatie');
        imgNg.classList.remove('slideAnimatie');
        imgF91.classList.remove('slideAnimatie');
        imgVic.classList.remove('slideAnimatie');
    }
}



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
    factionImg.src = './images/aeug.png';
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



// Oproepen van van de audio in de sfx map
function playAudio(audioNaam) {
    const audio = new Audio("./sfx/" + audioNaam);
    audio.play();
}



// Animatie reactie als je het einde en het begin (alweer) behaalt
scrollableList.addEventListener('scroll', () => {
    const currentPosition = scrollableList.scrollLeft;
    const maxScrollLeft = scrollableList.scrollWidth - scrollableList.clientWidth;
    console.log("Huidige scrollpositie: " + currentPosition + " pixels");
  
    if (currentPosition === 0) {
        console.log("Te veel links");
        computerScreen.classList.add('pcWarningAnimatie');
        playAudio('warning.mp3');
    } else if (currentPosition >= maxScrollLeft) {
        console.log("Te veel rechts");
        computerScreen.classList.add('pcWarningAnimatie');
        playAudio('warning.mp3');
    } else {
        computerScreen.classList.remove('pcWarningAnimatie');
    }
});