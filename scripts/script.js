console.log("Howdy!");

// Naviagitie Buttons
const buttonRechts = document.querySelector("#buttonRechts");
const buttonLinks = document.querySelector("#buttonLinks");


const scrollableList = document.querySelector('#scrollable-list');
const scrollPositionText = document.querySelector("#scrollPosition");

// Mobile Suit Data
const liJaar = document.querySelector("#liJaar");
const liNaam = document.querySelector("#liNaam");
const liLengte = document.querySelector("#liLengte");
const liGewicht = document.querySelector("#liGewicht");
const liPower = document.querySelector("#liPower");
const liSnelheid = document.querySelector("#liSnelheid");

// Faction img
const menuButton = document.querySelector("#menuButton");
const menuButtonHide = document.querySelector("#menuButtonHide")
const menuScherm = document.querySelector("#menuScherm")

menuButton.addEventListener('click', function() {
    menuScherm.classList.add('menuVisible');
});

menuButtonHide.addEventListener('click', function() {
    menuScherm.classList.remove('menuVisible');
});

function checkScrollPosition(currentPosition) {
    switch (true) {
      case currentPosition >= 0 && currentPosition <= 158:
        liJaar.textContent = 'UC 0079';
        liNaam.textContent = 'RX 79-2 Gundam';
        liLengte.textContent = '18.0 meter';
        liGewicht.textContent = '60.0 metrische ton';
        liPower.textContent = '1380 kW';
        liSnelheid.textContent = '0.93 G';
        factionImg.src = './images/efsf.png';
        break;
      case currentPosition >= 440 && currentPosition <= 724:
        liJaar.textContent = 'UC 0086';
        liNaam.textContent = 'RX-178 Gundam Mk-II';
        liLengte.textContent = '18.5 meter';
        liGewicht.textContent = '54.1 metrische ton';
        liPower.textContent = '1930 kW';
        liSnelheid.textContent = '1.50 G';
        break;
      case currentPosition >= 990 && currentPosition <= 1234:
        liJaar.textContent = 'UC 0087';
        liNaam.textContent = 'MSZ-006 Zeta Gundam';
        liLengte.textContent = '19.85 meter';
        liGewicht.textContent = '62.3 metrische ton';
        liPower.textContent = '2020 kW';
        liSnelheid.textContent = '1.81 G';
        factionImg.src = './images/aeug.png';
        break;
      case currentPosition >= 1530 && currentPosition <= 1757:
        liJaar.textContent = 'UC 0088';
        liNaam.textContent = 'MSZ-010 ZZ Gundam';
        liLengte.textContent = '19.86 meter';
        liGewicht.textContent = '68.4 metrische ton';
        liPower.textContent = '7340 kW';
        liSnelheid.textContent = '1.48 G';
        factionImg.src = './images/aeug.png';
        break;
      case currentPosition >= 2070 && currentPosition <= 2296:
        liJaar.textContent = 'UC 0093';
        liNaam.textContent = 'RX-93 Nu Gundam';
        liLengte.textContent = '22.0 meter';
        liGewicht.textContent = '27.9 metrische ton';
        liPower.textContent = '2980 kW';
        liSnelheid.textContent = '1.55 G';
        factionImg.src = './images/londoBell.png';
        break;
      case currentPosition >= 2610 && currentPosition <= 2839:
        liJaar.textContent = 'UC 0123';
        liNaam.textContent = 'F91 Gundam F91';
        liLengte.textContent = '15.2 meter';
        liGewicht.textContent = '19.9 metrische ton';
        liPower.textContent = '4250 kW';
        liSnelheid.textContent = '4.44 G';
        factionImg.src = './images/efsf.png';
        break;
      case currentPosition >= 3060 && currentPosition <= 3385:
        liJaar.textContent = 'UC 0153';
        liNaam.textContent = 'LM312V04 Victory Gundam';
        liLengte.textContent = '18.5 meter';
        liGewicht.textContent = '17.7 metrische ton';
        liPower.textContent = '4780 kW';
        liSnelheid.textContent = '4.50 G';
        factionImg.src = './images/leagueMilitaire.png';
        break;
      default:
        scrollPositionText.textContent = 'Locatie: ' + currentPosition + ' pixels';
    }
}
  

function scrollLeft() {
    factionImg.src = './images/aeug.png';
    playAudio('slideSfx.mp3');
    scrollableList.scrollBy({
        left: -50,
        behavior: 'smooth'
    });

    const currentPosition = scrollableList.scrollLeft;
    checkScrollPosition(currentPosition);
}

function scrollRight() {
    factionImg.src = './images/aeug.png';
    playAudio('slideSfx.mp3');
     scrollableList.scrollBy({
        left: 50,
        behavior: 'smooth'
    });

    const currentPosition = scrollableList.scrollLeft;
    checkScrollPosition(currentPosition);
}

buttonLinks.addEventListener('click', scrollLeft);
buttonRechts.addEventListener('click', scrollRight);

scrollableList.addEventListener('scroll', () => {
  const currentPosition = scrollableList.scrollLeft;
  checkScrollPosition(currentPosition);
});

console.log('Huidige scrollpositie: ' + scrollableList.scrollLeft + ' pixels');

function playAudio(audioNaam) {
    const audio = new Audio("./sfx/" + audioNaam);
    audio.play();
}

scrollableList.addEventListener('scroll', () => {
    const currentPosition = scrollableList.scrollLeft;
    const maxScrollLeft = scrollableList.scrollWidth - scrollableList.clientWidth;
  
    if (currentPosition === 0) {
      console.log("Te veel links");
    } else if (currentPosition >= maxScrollLeft) {
      console.log("Te veel rechts");
    }
  });