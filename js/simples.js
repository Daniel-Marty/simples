const body = document.getElementById('body')
const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const burger = document.getElementById('burger');
const questionWord = document.getElementById('questionWord');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const textSolution = document.getElementById('textSolution');
const colorsList = document.getElementById('colorsList');
const generateBtn = document.getElementById('generateButton');
const mark = document.getElementById('mark');
const verbPrompt = document.getElementById('verbPrompt');
const input = document.getElementById('input');
const verbDiv = document.getElementById('verb');
const verbPic = document.getElementById('verbPic');
const subjectPic = document.getElementById('subject');
const subjectPrompt = document.getElementById('subjectPrompt');
const colorBlueBtn = document.getElementById('colorBlue');
const colorGreenBtn = document.getElementById('colorGreen');
const colorRedBtn = document.getElementById('colorRed');
const timeMarker = document.getElementById('timeMarker');
const connectionWord = document.getElementById('firstConnection');
const connectionLi = document.getElementById('connectionLi');
const content = document.querySelector('.content');
let tensePrompt = document.getElementById('tensePrompt');
const PrSActivate = document.getElementById('PrSmenu');
const PSActivate = document.getElementById('PSmenu');
const FSActivate = document.getElementById('FSmenu');
const popup = document.getElementById('popup');


const PrSStyle = 'rgb(0, 165, 50)';
const FSStyle = 'rgb(252, 56, 56)';
const PSStyle = 'rgb(60, 124, 241)';

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'I.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'nobody.jpg', 'cat.jpg', 'dog.jpg', 'somebody.jpg', 'David.jpg', 'Charlie.jpg', 'Emilia.jpg',]
let verbs_array = ['be.jpg', 'need.jpg', 'can.jpg', 'want.jpg', 'fight.gif', 'drive.gif',]
let markNegative = './images-marks/2.png';
let markQuestion = './images-marks/3.png';

let currentTense = ' ';
// =========================================FUNCTIONS CHANGE===============================
function closePopup() {
    popup.classList.add('close');
    burger.style.zIndex = '13';
}
function changeVerb(verbName) {
    verbPic.src = `./images-verbs/${verbName}`;
    verbPrompt.innerHTML = `${verbName.slice(0, -4)}`

};
function changeSubject(subjectName) {
    subjectPic.src = `./images-subject/${subjectName}`;
    subjectPrompt.innerHTML = `${subjectName.slice(0, -4)}`
    // mark.style.right = '105px';
};
let fuckingShit = '';
function changeMark(markName) {
    mark.src = `./images-marks/${markName}`
    if (markName === "3.png") {
        mark.style.right = '105px';
    } else { mark.style.right = '0px' }
};
function changeBodyStyle(selectedStyle) {
    body.style.backgroundColor = selectedStyle;
};
function changeTensePrompt(auxVerb) {
    tensePrompt.style.opacity = '1';
    tensePrompt.innerHTML = `${auxVerb}`;
};
function moveContent() {
    if (window.innerWidth < 415 && window.innerHeight < 740) {
        content.style.padding = '120px 0 0 30px';
    } else if (window.innerWidth > 666) {
        content.style.padding = '16% 0 0 0'
    }
};
// =====================================RANDOM NUMBERS=====================================
let randomNumbersAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,];
let pastArray = [2, 3, 4, 9, 16, 33, 17, 28, 18, 36, 37, 41, 42, 43, 44, 45, 46, 48, 49, 54,];
let presentArray = [0, 1, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 31, 32, 38, 39, 40, 50, 55, 58, 59, 60,];
let futureArray = [5, 30, 34, 35, 47, 51, 52, 53, 61,];
let testRandomNumber = 0;
// function getRandoms(array, ID, folder) {
//     random_pic = Math.floor(Math.random() * array.length);
//     selected_image = array[random_pic];
//     ID.src = `${folder}${selected_image}`
// }
// let testRandomNumber = Math.floor(Math.random() * 62)
function getRandoms(array) {
    random_number = Math.floor(Math.random() * array.length);
    testRandomNumber = array[random_number];
    array.splice(random_number, 1);
}

// ===============================================GET RANDOMS===========================
function randomArrayElement(array, changeFunction) {
    random_subject = Math.floor(Math.random() * array.length);
    selected_image = array[random_subject]
    changeFunction(selected_image);
}
function get_random_subject() {
    randomArrayElement(subject_array, changeSubject);
}
function get_random_mark() {
    randomArrayElement(marks_array, changeMark);
}
function get_random_verb() {
    randomArrayElement(verbs_array, changeVerb);
}
// =======================================EVENT LISTENERS==============================
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    console.log('fucking burger');
});
verbPic.addEventListener('click', () => {
    get_random_verb();
});
mark.addEventListener('click', () => {
    get_random_mark();
})
subjectPic.addEventListener('click', () => {
    get_random_subject();
})
textAreaQuestion.addEventListener('click', () => {
    textSolution.style.opacity = '1';
    sayItBitch();
    closePopup()
})
textSolution.addEventListener('click', () => {
    sayItBitch();

})
PrSActivate.addEventListener('click', () => {
    currentTense = 'Present';
});
PSActivate.addEventListener('click', () => {
    currentTense = 'Past';
});
FSActivate.addEventListener('click', () => {
    currentTense = 'Future';
});
generateBtn.addEventListener('click', () => {
    closePopup();
    // colorsList.classList.add('hidden');
    moveContent();
    textSolution.style.opacity = '0';
    if (currentTense === ' ') {
        getRandoms(randomNumbersAll);
    } else if (currentTense === 'Present') {
        getRandoms(presentArray);
    } else if (currentTense === 'Past') {
        getRandoms(pastArray);
    } else { getRandoms(futureArray); }
    testSimple();
});
colorBlueBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(60, 124, 241)';
});
colorGreenBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(0, 165, 50)';
});
colorRedBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(252, 56, 56)';
});


//=========================================  TEST  ==================================

let currentSentence = '';

function testCallback(question, who, connection, mark1, verb, style, time, sentence) {
    questionWord.innerHTML = `${question}`
    changeSubject(who);
    connectionWord.innerHTML = `${connection}`
    changeMark(mark1)
    verbPic.src = `${verbsFolder}${verb}`
    changeBodyStyle(style);
    changeVerb(verb);
    timeMarker.innerHTML = `${time}`
    textSolution.innerHTML = `${sentence}`
    currentSentence = sentence;
    if (mark1 === "1.png") {
        fuckingShit = '1';
    } else { fuckingShit = '2' }
};
function questionOpacityCheck() {
    if (questionWord.innerHTML === ' ') {
        questionWord.style.opacity = '0';
    } else { questionWord.style.opacity = '1' }
};
function connectionHiddenCheck() {
    if (connectionWord.innerHTML === ' ') {
        connectionLi.classList.add('hidden');
    } else { connectionLi.classList.remove('hidden') }
};
function timeMarkerOpacityCheck() {
    if (timeMarker.innerHTML === ' ') {
        timeMarker.style.opacity = '0';
    } else { timeMarker.style.opacity = '1' }
};
function testSimple() {

    // let testRandomNumber = 61;
    console.log(testRandomNumber);
    if (testRandomNumber === 0) {
        testCallback('Usually', 'she.jpg', ' ', '1.png', 'walk.gif', PrSStyle, 'to school', "Usually she walks to school")
    } else if (testRandomNumber === 1) {
        testCallback('Usually', 'he.jpg', ' ', '2.png', 'cook.gif', PrSStyle, ' ', "Usually he doesn't cook")
    } else if (testRandomNumber === 2) {
        testCallback(' ', 'he.jpg', ' ', '1.png', 'cook.gif', PSStyle, ' fish last time', "He cooked fish last time")
    } else if (testRandomNumber === 3) {
        testCallback(' ', 'he.jpg', ' ', '2.png', 'cook.gif', PSStyle, 'anything yesterday', "He didn't cook anything yesterday")
    } else if (testRandomNumber === 4) {
        testCallback(' ', 'she.jpg', ' ', '3.png', 'cook.gif', PSStyle, 'anything yesterday', "Did she cook anything yesterday")
    } else if (testRandomNumber === 5) {
        testCallback('I promise', 'I.jpg', ' ', '1.png', 'cook.gif', FSStyle, 'something tomorrow', "I promise I'll cook something tomorrow")
    } else if (testRandomNumber === 6) {
        testCallback(' ', 'I.jpg', ' ', '1.png', 'cook.gif', PrSStyle, 'from time to time', "I cook from time to time")
    } else if (testRandomNumber === 7) {
        testCallback(' ', 'I.jpg', ' ', '2.png', 'like.gif', PrSStyle, 'cooking at all', "I don't like cooking at all")
    } else if (testRandomNumber === 8) {
        testCallback(' ', 'she.jpg', ' ', '3.png', 'like.gif', PrSStyle, 'cooking at all', "Does she like cooking at all")
    } else if (testRandomNumber === 9) {
        testCallback(' ', 'she.jpg', 'never', '1.png', 'like.gif', PSStyle, 'cooking', "She never liked cooking")
    } else if (testRandomNumber === 10) {
        testCallback(' ', 'he.jpg', 'ever', '3.png', 'cry.gif', PrSStyle, ' ', "Does he ever cry")
    } else if (testRandomNumber === 11) {
        testCallback(' ', 'he.jpg', 'never', '1.png', 'cry.gif', PrSStyle, ' ', "He never cries")
    } else if (testRandomNumber === 12) {
        testCallback(' ', 'he.jpg', 'never', '1.png', 'fight.gif', PrSStyle, 'at school', "He never fights at school")
    } else if (testRandomNumber === 13) {
        testCallback('Can', 'she.jpg', ' ', '3.png', 'fight.gif', PrSStyle, ' ', "Can she fight")
    } else if (testRandomNumber === 14) {
        testCallback(' ', 'she.jpg', "can", '2.png', 'fight.gif', PrSStyle, ' ', "She can't fight")
    } else if (testRandomNumber === 15) {
        testCallback(' ', 'she.jpg', "can", '1.png', 'sing.gif', PrSStyle, ' ', "She can sing")
    } else if (testRandomNumber === 16) {
        testCallback(' ', 'he.jpg', "can", '1.png', 'sing.gif', PSStyle, 'when he was 9', "He could sing when he was 9")
    } else if (testRandomNumber === 17) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'explain.gif', PSStyle, 'twice', "I explained twice")
    } else if (testRandomNumber === 18) {
        testCallback(' ', 'he.jpg', " ", '2.png', 'explain.gif', PSStyle, 'anything', "He didn't explain anything")
    } else if (testRandomNumber === 18) {
        testCallback(' ', 'I.jpg', "can", '1.png', 'explain.gif', PrSStyle, 'it', "I can explain it")
    } else if (testRandomNumber === 19) {
        testCallback(' ', 'you.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "You don't need to explain it")
    } else if (testRandomNumber === 20) {
        testCallback(' ', 'she.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "She doesn't need to explain it")
    } else if (testRandomNumber === 21) {
        testCallback('Can', 'you.jpg', " ", '3.png', 'explain.gif', PrSStyle, 'it', "Can you explain it")
    } else if (testRandomNumber === 22) {
        testCallback(' ', 'you.jpg', "have to", '1.png', 'do.gif', PrSStyle, 'it', "You have to do it")
    } else if (testRandomNumber === 23) {
        testCallback(' ', 'you.jpg', "have to", '2.png', 'do.gif', PrSStyle, 'it', "You don't have to do it")
    } else if (testRandomNumber === 24) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'need.jpg', PrSStyle, 'it now', "Do you need it now")
    } else if (testRandomNumber === 25) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'need.jpg', PrSStyle, 'it now', "Do you need it now")
    } else if (testRandomNumber === 26) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'need.jpg', PrSStyle, 'your help', "I need your help")
    } else if (testRandomNumber === 27) {
        testCallback(' ', 'she.jpg', " ", '2.png', 'need.jpg', PrSStyle, 'your help', "She doesn't need your help")
    } else if (testRandomNumber === 28) {
        testCallback(' ', 'she.jpg', " ", '1.png', 'need.jpg', PSStyle, 'your help yesterday', "She needed your help yesterday")
    } else if (testRandomNumber === 29) {
        testCallback(' ', 'she.jpg', "never", '1.png', 'help.gif', PrSStyle, ' ', "She never helps")
    } else if (testRandomNumber === 30) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'help.gif', FSStyle, ' ', "I'll help")
    } else if (testRandomNumber === 31) {
        testCallback(' ', 'he.jpg', "usually", '1.png', 'help.gif', PrSStyle, ' ', "He usually helps")
    } else if (testRandomNumber === 32) {
        testCallback(' ', 'he.jpg', "usually", '1.png', 'go.gif', PrSStyle, 'there on Sundays', "He usually goes there on Sundays")
    } else if (testRandomNumber === 33) {
        testCallback(' ', 'he.jpg', " ", '1.png', 'go.gif', PSStyle, 'there a day ago', "He went there a day ago")
    } else if (testRandomNumber === 34) {
        testCallback(' ', 'somebody.jpg', " ", '1.png', 'go.gif', FSStyle, 'there some day', "Somebody will go there some day")
    } else if (testRandomNumber === 35) {
        testCallback(' ', 'I.jpg', " ", '2.png', 'go.gif', FSStyle, 'there', "I won't go there")
    } else if (testRandomNumber === 36) {
        testCallback(' ', 'she.jpg', " ", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone")
    } else if (testRandomNumber === 37) {
        testCallback(' ', 'she.jpg', " ", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone")
    } else if (testRandomNumber === 38) {
        testCallback(' ', 'I.jpg', "normally", '1.png', 'drink.gif', PrSStyle, 'coffee in the morning', "I normally drink coffee in the morning")
    } else if (testRandomNumber === 39) {
        testCallback(' ', 'she.jpg', "never", '1.png', 'drink.gif', PrSStyle, 'vodka in the morning', "She never drinks vodka in the morning")
    } else if (testRandomNumber === 40) {
        testCallback('There is', 'nobody.jpg', "to", '1.png', 'help.gif', PrSStyle, 'you', "There is nobody to help you")
    } else if (testRandomNumber === 41) {
        testCallback('There was', 'nobody.jpg', "to", '1.png', 'help.gif', PSStyle, 'you yesterday', "There was nobody to help you yesterday")
    } else if (testRandomNumber === 42) {
        testCallback(' ', 'somebody.jpg', " ", '1.png', 'be.jpg', PSStyle, 'here 5 minutes ago', "Somebody was here 5 minutes ago")
    } else if (testRandomNumber === 43) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995")
    } else if (testRandomNumber === 44) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995")
    } else if (testRandomNumber === 45) {
        testCallback(' ', 'I.jpg', "just", '1.png', 'arrive.gif', PSStyle, 'yesterday', "I just arrived yesterday")
    } else if (testRandomNumber === 46) {
        testCallback('When', 'he.jpg', " ", '3.png', 'arrive.gif', PSStyle, ' ', "When did he arrive")
    } else if (testRandomNumber === 47) {
        testCallback('I think', 'she.jpg', " ", '1.png', 'arrive.gif', FSStyle, 'on Friday', "I think she will arrive on Friday")
    } else if (testRandomNumber === 48) {
        testCallback('Where', 'he.jpg', " ", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year")
    } else if (testRandomNumber === 49) {
        testCallback('Where', 'he.jpg', " ", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year")
    } else if (testRandomNumber === 50) {
        testCallback('Where', 'she.jpg', " ", '3.png', 'work.gif', PrSStyle, ' ', "Where does she work")
    } else if (testRandomNumber === 51) {
        testCallback('I think', 'you.jpg', " ", '1.png', 'quit.gif', FSStyle, ' ', "I think you'll quit")
    } else if (testRandomNumber === 52) {
        testCallback('I think', 'she.jpg', "definitely", '1.png', 'tell.gif', FSStyle, 'you', "I think she'll definitely tell you")
    } else if (testRandomNumber === 53) {
        testCallback('I think', 'dog.jpg', "surely", '1.png', 'come back.gif', FSStyle, 'to you', "I think the dog will surely come back to you")
    } else if (testRandomNumber === 54) {
        testCallback('I think', 'dog.jpg', " ", '1.png', 'be.jpg', PSStyle, 'here a moment ago', "I think the dog was here a moment ago")
    } else if (testRandomNumber === 55) {
        testCallback('It seems like', 'he.jpg', " ", '2.png', 'understand.gif', PrSStyle, 'what his job is', "It seems like he doesn't understand what his job is")
    } else if (testRandomNumber === 56) {
        testCallback("It doesn't seem like", 'she.jpg', " ", '1.png', 'understand.gif', PrSStyle, "what's going on", "It doesn't seem like she understands what's going on")
    } else if (testRandomNumber === 57) {
        testCallback("It doesn't seem like", 'you.jpg', " ", '1.png', 'understand.gif', PrSStyle, "what it is", "It doesn't seem like you understand what it is")
    } else if (testRandomNumber === 58) {
        testCallback("It doesn't seem like", 'you.jpg', " ", '1.png', 'know.gif', PrSStyle, "him", "It doesn't seem like you know him")
    } else if (testRandomNumber === 59) {
        testCallback("It seems like", 'she.jpg', " ", '2.png', 'can.jpg', PrSStyle, "drive", "It seems like she can't drive")
    } else if (testRandomNumber === 60) {
        testCallback(" ", 'I.jpg', "can", '2.png', 'hear.gif', PrSStyle, "you", "I can't hear you")
    } else if (testRandomNumber === 61) {
        testCallback(" ", 'I.jpg', "can", '2.png', 'hear.gif', FSStyle, "you", "I won't be able to hear you")
    }
    questionOpacityCheck();
    connectionHiddenCheck();
    timeMarkerOpacityCheck();
    sayTense();
    tenseCheck();
}

// ===================================SPEECH========================
// var voices = window.speechSynthesis.getVoices();
var speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.lang = 'en-US';
// speech.name = 'Google US English'

speech.rate = 1;
speech.pitch = 1;
// speech.voice = window.speechSynthesis.getVoices()[6];
var voiceName = 'Google US English'
console.log(speech);

for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
    if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
        speech.voice = window.speechSynthesis.getVoices()[i];
    }
}
setTimeout(function () {
    for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
        if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
            speech.voice = window.speechSynthesis.getVoices()[i];
        }
    }
}, 2000);

function sayItBitch() {
    speech.text = currentSentence;
    window.speechSynthesis.speak(speech);
    // speechSynthesis.speak(new SpeechSynthesisUtterance(`${currentSentence}`))
}
function sayTense() {
    if (body.style.backgroundColor == 'rgb(60, 124, 241)') {
        speech.text = "past";
        window.speechSynthesis.speak(speech);
    } else if (body.style.backgroundColor == 'rgb(0, 165, 50)') {
        speech.text = "present";
        window.speechSynthesis.speak(speech);
    } else {
        speech.text = "future";
        window.speechSynthesis.speak(speech);
    }
};
// =========================================================
function tenseCheck() {
    if ((subjectPrompt.innerHTML === 'he' || subjectPrompt.innerHTML === 'she' || subjectPrompt.innerHTML === 'it') && body.style.backgroundColor === PrSStyle && connectionWord.innerHTML !== 'can' && questionWord.innerHTML !== 'can') {
        changeTensePrompt('s');
    } else if (fuckingShit === "1" && body.style.backgroundColor === PSStyle) {
        changeTensePrompt('V2');
    } else if (body.style.backgroundColor === PSStyle && fuckingShit === '2') {
        changeTensePrompt('did');
    } else if (body.style.backgroundColor === FSStyle && (connectionWord.innerHTML === 'can' || verbPic.src === '/images-verbs/can.jpg')) {
        changeTensePrompt("will be able");
    } else if (body.style.backgroundColor === FSStyle) {
        changeTensePrompt("will");
    } else { tensePrompt.style.opacity = '0' }
};