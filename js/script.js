console.log("JS is gelinkt");



// Variabelen om DOM aan te wijzen, images in een array en om progressie aan te wijzen

var imgEl = document.querySelector("img");

var imgEl2 = document.querySelector("img:last-of-type");

var bodyEl = document.querySelector("body");

var textVak = document.querySelector("p");

var textVak2 = document.querySelector("p:last-of-type");

var buttonEl = document.querySelector("button");

var objectImg = ['objectimg1.png', 'objectimg2.png', 'objectimg3.png', 'objectimg4.png', 'objectimg5.png'];

var progressieStap = 0;



// Function voor progressie van schermen met de click event listeners op: img1, img2 en button

function screenChange(){
    switch(progressieStap){
        case 0:
            textVak.textContent = "Score:0 of 80 sound:on";
            textVak2.textContent = "Space, the endless void... But who cares? You're hungry for burgers. Let the spaceburger quest begin!";
            bodyEl.classList.add("achtergrondA");
            imgEl.src = "img/"+objectImg[0];
            progressieStap = 1;
            buttonEl.remove();
            console.log(progressieStap);
            break;
        case 1:
            playAudio('audiosucces.mp3');
            textVak.textContent = "Score:20 of 80 sound:on";
            textVak2.textContent = 'As you begin to leave the Thijssenhuis planet, your stomache begins to rumble. "I wonder where the nearest Space Donalds is."';
            bodyEl.classList.remove("achtergrondA");
            bodyEl.classList.add("achtergrondB");
            imgEl.src = "img/"+objectImg[1];
            progressieStap = 2;
            console.log(progressieStap);
            break;
        case 2:
            robotEventChance();
            break;
        case 3:
            playAudio('audiounsuccessful.mp3');
            textVak2.textContent = 'Looks like an evil teacher robot has finally found you "MUST UPLOAD HOMEWORK TO DLO FIRST SCUMBAG" It seems you forgot your homework. Next time be a bit faster you glutton.';
            bodyEl.classList.remove("achtergrondB");
            bodyEl.classList.add("achtergrondC");
            imgEl.src = "img/";
            document.addEventListener("keydown", loadState);
            console.log(progressieStap);
            break;
        case 4:
            playAudio('audiosucces.mp3');
            textVak.textContent = "Score:40 of 80 sound:on";
            textVak2.textContent = "Finally you found it, Space Donalds. Somehow, even in space, you can still smell the grease.";
            bodyEl.classList.remove("achtergrondC");
            bodyEl.classList.add("achtergrondD");
            imgEl.src = "img/"+objectImg[2];
            progressieStap = 5;
            console.log(progressieStap);
            document.removeEventListener("keydown", loadState);
            break;
        case 5:
            playAudio('audiosucces.mp3');
            textVak.textContent = "Score:60 of 80 sound:on";
            textVak2.textContent = 'When entering, you swiftly walk towards the Space Donalds employee. "Xoombloa ni ooana chulumi, bagagagong bi." which roughly translates to: Order please.';
            bodyEl.classList.remove("achtergrondD");
            bodyEl.classList.add("achtergrondE");
            imgEl.src = "img/"+objectImg[3];
            imgEl2.src = "img/"+objectImg[4];
            progressieStap = 6;
            console.log(progressieStap);
            break;
        case 6:
            playAudio('space-quest-1-intro.mp3');
            textVak.textContent = "Score:80 of 80 sound:on";
            textVak2.textContent = "As you greedily bite into your burger. You realize that it doesn't really taste good, but hey it's not as if a killer robot suddenly came in and killed you... Anyways, Congratulations and thanks for playing Burger Quest 1!";
            bodyEl.classList.remove("achtergrondE");
            bodyEl.classList.add("achtergrondF");
            imgEl.src = "img/";
            imgEl2.src = "img/";
            console.log(progressieStap);
            break;
        case 7:
            playAudio('audiounsuccessful.mp3');
            textVak.textContent = "Score:79 of 80 sound:on";
            textVak2.textContent = "As you greedily bite into your burger. You realize that it doesn't taste quite right. Everything is starting to turn blue... Gee whiz, you could actually be a winner if you weren't so clumsy. Wise up. Thank you for playing Burger Quest I.";
            bodyEl.classList.remove("achtergrondF");
            bodyEl.classList.add("achtergrondG");
            imgEl.src = "img/";
            imgEl2.src = "img/";
            console.log(progressieStap);
            break;
        default:
            console.log('Je bent op een verkeerd scherm beland');
            break;
    }
}

imgEl.addEventListener("click", screenChange);

imgEl2.addEventListener("click", screenChangeAlt);

buttonEl.addEventListener("click", screenChange);



// Function voor robot event kans, 50% kans op doodgaan

function robotEventChance(){
    var randomGetal = Math.random()* 2;
    randomGetal = Math.floor(randomGetal);
    if (randomGetal == 1){
        progressieStap = 3;
    } else {
        progressieStap = 4;
    }
    console.log(randomGetal);
    screenChange();
}



// Function om je state te loaden

function loadState(event){
    if(event.keyCode == 70){
        textVak2.textContent = 'As you begin to leave the Thijssenhuis planet, your stomache begins to rumble. "I wonder where the nearest Space Donalds is"';
        bodyEl.classList.remove("achtergrondC");
        bodyEl.classList.add("achtergrondB");
        imgEl.src = "img/"+objectImg[2];
        progressieStap = 2;
        console.log(progressieStap);
        console.log("keyCode F, 70 is af gegaan.");
    }
}



// Function voor keuze 2 op het een-na-laatste progressie scherm

function screenChangeAlt(){
    progressieStap = 7;
    screenChange();
}



// Function om audio af te spelen voor: succesvolle actie, onsuccesvolle actie en win theme met parameters

function playAudio(audioNaam) {
    var audio = new Audio("./sfx/" + audioNaam);
    audio.play();
}



// ------------------- BRONNEN THEORIE ------------------- //
// Keycode theorie van: Aya (Uitgelegd door Robert). - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// Switch theorie van Walter, Robert & definitie van: MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Audio theorie van Walter & definitie van: MDN - https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
// Element.remove() theorie van: MDN - https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
// eventTarget.removeEventListener() theorie van: MDN -  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener



// ------------------- BRONNEN RESOURCES ------------------- //
// Alle sound effects van: Brand Name Audio - https://www.youtube.com/watch?v=nzjtkaLCn60
// Alle backgrounds van: Sierra, Space Quest 3, van de website - https://adventuregamesbackgrounds.blogspot.com/search/label/Space%20Quest%203
// Win theme van: Sierra, Space Quest 1 intro song - https://www.youtube.com/watch?v=OawebuM-4I8



// ------------------- ALTERNATIEF VOOR DE SWITCH (MIJN OUDE CODE) ------------------- //
// function screenChange(){
//     if (progressieStap == 0){
//         textVak.textContent = "Score:0 of 80 sound:on";
//         textVak2.textContent = "Space, the endless void... But who cares? You're hungry for burgers. Let the spaceburger quest begin!";
//         bodyEl.classList.add("achtergrondA");
//         imgEl.src = "img/"+objectImg[1];
//         progressieStap = 1;
//         buttonEl.remove()
//         console.log(progressieStap)
//     } else if (progressieStap == 1){
//         sfxCorrect();
//         textVak.textContent = "Score:20 of 80 sound:on";
//         textVak2.textContent = 'As you begin to leave the Thijssenhuis planet, your stomache begins to rumble. "I wonder where the nearest Space Donalds is"';
//         bodyEl.classList.add("achtergrondB");
//         imgEl.src = "img/"+objectImg[2];
//         progressieStap = 2;
//         console.log(progressieStap)
//     } else if (progressieStap == 2){
//         robotEventChance();
//     } else if (progressieStap == 3){
//         sfxUnsuccessful();
//         textVak2.textContent = 'Looks like an evil teacher robot has finally found you "MUST UPLOAD HOMEWORK TO DLO FIRST SCUMBAG" It seems you forgot your homework. Next time be a bit faster you glutton.';
//         bodyEl.classList.add("achtergrondC");
//         imgEl.src = "img/";
//         document.addEventListener("keydown", loadState);
//         console.log(progressieStap);
//     } else if (progressieStap == 4){
//         sfxCorrect();
//         textVak.textContent = "Score:40 of 80 sound:on";
//         textVak2.textContent = "Finally you found it, Space Donalds. Somehow, even in space, you can still smell the grease";
//         bodyEl.classList.add("achtergrondD");
//         imgEl.src = "img/"+objectImg[3];
//         progressieStap = 5;
//         console.log(progressieStap);
//     } else if (progressieStap == 5){
//         sfxCorrect();
//         textVak.textContent = "Score:60 of 80 sound:on";
//         textVak2.textContent = 'When entering, you swiftly walk towards the Space Donalds employee. "Xoombloa ni ooana chulumi, bagagagong bi." which roughly translates to: Order please.';
//         bodyEl.classList.add("achtergrondE");
//         imgEl.src = "img/"+objectImg[4];
//         imgEl2.src = "img/"+objectImg[5];
//         progressieStap = 6;
//         console.log(progressieStap);
//     } else if (progressieStap == 6){
//         sfxEndTheme();
//         textVak.textContent = "Score:80 of 80 sound:on";
//         textVak2.textContent = "As you greedily bite into your burger. You realize that it doesn't really taste good, but hey it's not as if a killer robot suddenly came in and killed you... Anyways, Congratulations and thanks for playing Burger Quest 1!";
//         bodyEl.classList.add("achtergrondF");
//         imgEl.src = "img/";
//         imgEl2.src = "img/";
//         console.log(progressieStap);
//     } else if (progressieStap == 7){
//         sfxUnsuccessful();
//         textVak.textContent = "Score:79 of 80 sound:on";
//         textVak2.textContent = "As you greedily bite into your burger. You realize that it doesn't taste quite right. Everything is starting to turn blue... Gee whiz, you could actually be a winner if you weren't so clumsy. Wise up. Thank you for playing Burger Quest I.";
//         bodyEl.classList.add("achtergrondG");
//         imgEl.src = "img/";
//         imgEl2.src = "img/";
//         console.log(progressieStap);
//     }
// }