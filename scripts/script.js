// JavaScript Document
console.log("Howdy!");

const buttonRechts = document.getElementById("buttonRechts");
const buttonLinks = document.getElementById("buttonLinks");
const scrollableList = document.querySelector('.scrollable-list');



buttonLinks.addEventListener('click', () => {
    // Scroll naar links met 50 pixels
    scrollableList.scrollBy({
      left: -50,
      behavior: 'smooth'
    });
  
    // Log de huidige scrollpositie in de console
    console.log('Huidige scrollpositie: ' + scrollableList.scrollLeft + ' pixels');
    
});

buttonRechts.addEventListener('click', () => {
    // Scroll naar rechts met 50 pixels
    scrollableList.scrollBy({
      left: 50,
      behavior: 'smooth'
    });
  
    // Log de huidige scrollpositie in de console
    console.log('Huidige scrollpositie: ' + scrollableList.scrollLeft + ' pixels');
});

console.log('Huidige scrollpositie: ' + scrollableList.scrollLeft + ' pixels');








// if Huidige scrollpositie: 1115.4544677734375 pixels

// const jaar = document.getElementById("jaar");
// const img1 = document.getElementById("img1");
// const button = document.getElementById("button");
// const myText = document.getElementById('myText');

// button.addEventListener('click', () => {
//     console.log('Hallo');
//     myText.textContent = 'Doei';
//     document.getElementById("container").scrollLeft += 20;
//   });