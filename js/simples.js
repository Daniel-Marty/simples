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
const randomActive = document.getElementById('randomMenu');
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
        content.style.padding = '90px 0 0 30px';
    } else if (window.innerWidth > 666) {
        content.style.padding = '16% 0 0 0'
    }
};
// ============================DEBOUNCE======================
const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}
// =====================================RANDOM NUMBERS=====================================
let randomNumbersAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240,];
let pastArray = [1, 2, 3, 8, 9, 10, 15, 19, 21, 27, 28, 29, 31, 32, 34, 36, 37, 42, 51, 52, 53, 54, 58, 65, 66, 75, 76, 78, 80, 82, 84, 85, 93, 97, 98, 99, 100, 102, 104, 105, 108, 109, 114, 119, 122, 123, 129, 130, 131, 134, 135, 140, 145, 152, 153, 158, 159, 161, 166, 169, 171, 172, 173, 174, 177, 181, 184, 187, 190, 191, 195, 197, 200, 203, 204, 207, 220, 234, 235, 237, 239, 240,];
let presentArray = [0, 5, 7, 12, 13, 14, 16, 17, 18, 22, 23, 24, 25, 30, 35, 38, 39, 40, 41, 45, 46, 47, 49, 50, 55, 56, 57, 62, 63, 64, 69, 71, 72, 77, 79, 86, 87, 89, 90, 91, 92, 96, 103, 111, 112, 113, , 115, 116, 118, 121, 126, 133, 136, 137, 146, 147, 148, 149, 150, 151, 154, 155, 156, 157, 162, 163, 165, 170, 175, 176, 179, 180, 182, 183, 185, 186, 188, 189, 192, 193, 194, 196, 198, 201, 202, 208, 209, 210, 211, 216, 217, 218, 219, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 236, 238, 241,];
let futureArray = [4, 6, 11, 20, 26, 33, 43, 44, 48, 59, 60, 61, 67, 68, 70, 73, 74, 81, 83, 88, 94, 95, 101, 106, 107, 110, 117, 120, 124, 125, 127, 128, 132, 138, 139, 141, 142, 143, 160, 164, 167, 168, 178, 199, 205, 206, 212, 213, 214, 215,];
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
function generateSentence() {
    textSolution.style.opacity = '0';
    if (currentTense === ' ') {
        getRandoms(randomNumbersAll);
    } else if (currentTense === 'Present') {
        getRandoms(presentArray);
    } else if (currentTense === 'Past') {
        getRandoms(pastArray);
    } else { getRandoms(futureArray); }
    testSimple();
}
// =======================================EVENT LISTENERS==============================
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    console.log('fucking burger');
});
const menuList = document.querySelector('.header__menu');
menuList.addEventListener('click', () => {
    menuList.classList.remove('active');
    burgerMenu.classList.remove('active');
})
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
    textAreaQuestion.style.scale = '1.4';
    textSolution.style.opacity = '1';
    closePopup();
    setTimeout(returnScale, 190);
})
textAreaQuestion.addEventListener('click', debounce(e => {
    sayItBitch();
}, 700));
textSolution.addEventListener('click', debounce(e => {
    sayItBitch();
}, 700));
generateBtn.addEventListener('click', () => {
    generateBtn.style.scale = '1.4';
    closePopup();
    moveContent();
    generateSentence();
    setTimeout(returnScale, 190);

});
generateBtn.addEventListener('click', debounce(e => {
    sayTense();
}, 700));
function returnScale() {
    generateBtn.style.scale = '1';
    colorBlueBtn.style.scale = '1';
    colorGreenBtn.style.scale = '1';
    colorRedBtn.style.scale = '1';
    textAreaQuestion.style.scale = '1';
}
function greenActivation() {
    body.style.backgroundColor = 'rgb(0, 165, 50)';
    currentTense = 'Present';
    PrSActivate.classList.add('active__green');
    PSActivate.classList.remove('active__blue');
    FSActivate.classList.remove('active__red');
    randomActive.classList.remove('active__random');
}

PrSActivate.addEventListener('click', greenActivation);
colorGreenBtn.addEventListener('click', () => {
    colorGreenBtn.style.scale = '1.4'
    greenActivation();
    generateSentence();
    setTimeout(returnScale, 200);
});
colorGreenBtn.addEventListener('click', debounce(e => {
    sayTense();
    tenseCheck();
}, 700));
function blueActivation() {
    body.style.backgroundColor = 'rgb(60, 124, 241)';
    currentTense = 'Past';
    PSActivate.classList.add('active__blue');
    PrSActivate.classList.remove('active__green');
    FSActivate.classList.remove('active__red');
    randomActive.classList.remove('active__random');
}
PSActivate.addEventListener('click', blueActivation)
colorBlueBtn.addEventListener('click', () => {
    colorBlueBtn.style.scale = '1.4'
    blueActivation();
    generateSentence();
    setTimeout(returnScale, 200)
});
colorBlueBtn.addEventListener('click', debounce(e => {
    sayTense();
    tenseCheck();
}, 700));
function redActivation() {
    body.style.backgroundColor = 'rgb(252, 56, 56)';
    currentTense = 'Future';
    FSActivate.classList.add('active__red');
    PSActivate.classList.remove('active__blue');
    PrSActivate.classList.remove('active__green');
    randomActive.classList.remove('active__random');
}
FSActivate.addEventListener('click', redActivation);
colorRedBtn.addEventListener('click', () => {
    colorRedBtn.style.scale = '1.4';
    redActivation();
    generateSentence();
    setTimeout(returnScale, 200);
});
colorRedBtn.addEventListener('click', debounce(e => {
    sayTense();
    tenseCheck();
}, 700));

function randomActivate() {
    body.style.backgroundColor = 'rgb(252, 56, 56)';
    currentTense = ' ';
    randomActive.classList.add('active__random');
    FSActivate.classList.remove('active__red');
    PSActivate.classList.remove('active__blue');
    PrSActivate.classList.remove('active__green');
}
randomActive.addEventListener('click', randomActivate);


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

    // let testRandomNumber = 117;
    console.log(testRandomNumber);
    if (testRandomNumber === 0) {
        testCallback('Usually', 'she.jpg', ' ', '1.png', 'walk.gif', PrSStyle, 'to school', "Usually she walks to school");
    } else if (testRandomNumber === 1) {
        testCallback(' ', 'Charlie.jpg', ' ', '2.png', 'walk.gif', PSStyle, 'with her', "Charlie didn't walk with her");
    } else if (testRandomNumber === 2) {
        testCallback(' ', 'Nobody.jpg', 'can', '1.png', 'walk.gif', PSStyle, ' ', "Nobody will be able to walk");
    } else if (testRandomNumber === 3) {
        testCallback(' ', 'Nobody.jpg', 'can', '1.png', 'walk.gif', PSStyle, 'because they were drunk', "Nobody could walk because they were drunk");
    } else if (testRandomNumber === 4) {
        testCallback(' ', 'David.jpg', ' ', '1.png', 'walk.gif', FSStyle, 'you home', "David will walk you home");
    } else if (testRandomNumber === 5) {
        testCallback(" ", ',.png', ' ', '2.png', 'walk.gif', PrSStyle, 'there', "Don't walk there");
    } else if (testRandomNumber === 6) {
        testCallback(" ", 'Emilia.jpg', ' ', '2.png', 'walk.gif', FSStyle, 'with you', "Emilia won't walk with you");
    } else if (testRandomNumber === 7) {
        testCallback('Usually', 'he.jpg', ' ', '2.png', 'cook.gif', PrSStyle, ' ', "Usually he doesn't cook");
    } else if (testRandomNumber === 8) {
        testCallback(' ', 'he.jpg', ' ', '1.png', 'cook.gif', PSStyle, ' fish last time', "He cooked fish last time");
    } else if (testRandomNumber === 9) {
        testCallback(' ', 'he.jpg', ' ', '2.png', 'cook.gif', PSStyle, 'anything yesterday', "He didn't cook anything yesterday");
    } else if (testRandomNumber === 10) {
        testCallback(' ', 'she.jpg', ' ', '3.png', 'cook.gif', PSStyle, 'anything yesterday', "Did she cook anything yesterday?");
    } else if (testRandomNumber === 11) {
        testCallback('I promise', 'I.jpg', ' ', '1.png', 'cook.gif', FSStyle, 'something tomorrow', "I promise I'll cook something tomorrow");
    } else if (testRandomNumber === 12) {
        testCallback(' ', 'Charlie.jpg', ' ', '1.png', 'cook.gif', PrSStyle, 'from time to time', "Charlie cooks from time to time");
    } else if (testRandomNumber === 13) {
        testCallback(' ', 'I.jpg', ' ', '2.png', 'like.gif', PrSStyle, 'cooking at all', "I don't like cooking at all");
    } else if (testRandomNumber === 14) {
        testCallback(' ', 'she.jpg', ' ', '3.png', 'like.gif', PrSStyle, 'cooking at all', "Does she like cooking at all");
    } else if (testRandomNumber === 15) {
        testCallback(' ', 'David.jpg', 'never', '1.png', 'like.gif', PSStyle, 'cooking', "David never liked cooking");
    } else if (testRandomNumber === 16) {
        testCallback(' ', ',.png', ' ', '2.png', 'cook.gif', PrSStyle, 'anything', "Don't cook anything");
    } else if (testRandomNumber === 17) {
        testCallback(' ', 'he.jpg', 'ever', '3.png', 'cry.gif', PrSStyle, ' ', "Does he ever cry");
    } else if (testRandomNumber === 18) {
        testCallback(' ', 'he.jpg', 'never', '1.png', 'cry.gif', PrSStyle, ' ', "He never cries");
    } else if (testRandomNumber === 19) {
        testCallback(' ', 'Emilia.jpg', ' ', '1.png', 'cry.gif', PSStyle, 'yesterday', "Emilia cried yesterday");
    } else if (testRandomNumber === 20) {
        testCallback(' ', 'she.jpg', ' ', '1.png', 'cry.gif', FSStyle, 'if she fails the exam', "She will cry if she fails the exam");
    } else if (testRandomNumber === 21) {
        testCallback(' ', 'we.jpg', ' ', '1.png', 'cry.gif', PSStyle, 'when we saw it', "We cried when we saw it");
    } else if (testRandomNumber === 22) {
        testCallback(' ', ',.png', ' ', '2.png', 'cry.gif', PrSStyle, ' ', "Don't cry");
    } else if (testRandomNumber === 23) {
        testCallback(' ', 'he.jpg', 'never', '1.png', 'fight.gif', PrSStyle, 'at school', "He never fights at school");
    } else if (testRandomNumber === 24) {
        testCallback('Can', 'she.jpg', ' ', '3.png', 'fight.gif', PrSStyle, ' ', "Can she fight?");
    } else if (testRandomNumber === 25) {
        testCallback(' ', 'she.jpg', "can", '2.png', 'fight.gif', PrSStyle, ' ', "She can't fight");
    } else if (testRandomNumber === 26) {
        testCallback(' ', 'he.jpg', " ", '1.png', 'fight.gif', FSStyle, 'for me', "He'll fight for me");
    } else if (testRandomNumber === 27) {
        testCallback(' ', 'Charlie.jpg', " ", '1.png', 'fight.gif', PSStyle, 'well', "Charlie fought well");
    } else if (testRandomNumber === 28) {
        testCallback(' ', 'she.jpg', " ", '1.png', 'fight.gif', PSStyle, 'with the police', "She fought with the police");
    } else if (testRandomNumber === 29) {
        testCallback(' ', ',.png', " ", '2.png', 'fight.gif', PSStyle, 'with each other', "Don't fight with each other");
    } else if (testRandomNumber === 30) {
        testCallback('Let', 'Emilia.jpg', " ", '1.png', 'sing.gif', PrSStyle, ' ', "Let Emilia sing");
    } else if (testRandomNumber === 31) {
        testCallback(' ', 'he.jpg', "can", '1.png', 'sing.gif', PSStyle, 'when he was younger', "He could sing when he was younger");
    } else if (testRandomNumber === 32) {
        testCallback(' ', 'cat.jpg', " ", '1.png', 'sing.gif', PSStyle, 'a song', "The cat sang a song");
    } else if (testRandomNumber === 33) {
        testCallback(' ', 'dog.jpg', " ", '3.png', 'sing.gif', FSStyle, 'a song', "Will the dog sing a song?");
    } else if (testRandomNumber === 34) {
        testCallback(' ', 'I.jpg', " ", '2.png', 'sing.gif', PSStyle, '5 minutes ago', "I didn't sing 5 minutes ago");
    } else if (testRandomNumber === 35) {
        testCallback(' ', ',.png', " ", '2.png', 'sing.gif', PrSStyle, 'anything', "Don't sing anything");
    } else if (testRandomNumber === 36) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'explain.gif', PSStyle, 'twice', "I explained twice");
    } else if (testRandomNumber === 37) {
        testCallback(' ', 'he.jpg', " ", '2.png', 'explain.gif', PSStyle, 'anything', "He didn't explain anything");
    } else if (testRandomNumber === 38) {
        testCallback(' ', 'I.jpg', "can", '1.png', 'explain.gif', PrSStyle, 'it', "I can explain it");
    } else if (testRandomNumber === 39) {
        testCallback(' ', 'you.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "You don't need to explain it");
    } else if (testRandomNumber === 40) {
        testCallback(' ', 'Emilia.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "Emilia doesn't need to explain it");
    } else if (testRandomNumber === 41) {
        testCallback('Can', 'you.jpg', " ", '3.png', 'explain.gif', PrSStyle, 'it', "Can you explain it?");
    } else if (testRandomNumber === 42) {
        testCallback(' ', 'Nobody.jpg', " ", '1.png', 'explain.gif', PSStyle, 'anything', "Nobody explained anything");
    } else if (testRandomNumber === 43) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'explain.gif', FSStyle, 'it', "Will you explain it?");
    } else if (testRandomNumber === 44) {
        testCallback(' ', 'cat.jpg', " ", '2.png', 'explain.gif', FSStyle, 'the situation', "The cat won't explain the situation");
    } else if (testRandomNumber === 45) {
        testCallback(' ', ',.png', " ", '2.png', 'explain.gif', PrSStyle, 'anything', "Don't explain anything");
    } else if (testRandomNumber === 46) {
        testCallback(' ', 'you.jpg', "have to", '1.png', 'do.gif', PrSStyle, 'it', "You have to do it");
    } else if (testRandomNumber === 47) {
        testCallback(' ', 'you.jpg', "have to", '2.png', 'do.gif', PrSStyle, 'it', "You don't have to do it");
    } else if (testRandomNumber === 48) {
        testCallback('When', 'Kianu.jpg', " ", '3.png', 'do.gif', FSStyle, 'it', "When will Kianu do it?");
    } else if (testRandomNumber === 49) {
        testCallback(' ', 'David.jpg', "usually", '1.png', 'do.gif', PrSStyle, ' ', "David usually does it");
    } else if (testRandomNumber === 50) {
        testCallback(' ', 'Charlie.jpg', "never", '1.png', 'do.gif', PrSStyle, ' ', "Carlie never does it");
    } else if (testRandomNumber === 51) {
        testCallback(' ', 'dog.jpg', " ", '3.png', 'do.gif', PSStyle, 'it', "Did the dog do it?");
    } else if (testRandomNumber === 52) {
        testCallback(' ', 'Emilia.jpg', " ", '3.png', 'do.gif', PSStyle, 'her homework', "Did Emilia do her homework?");
    } else if (testRandomNumber === 53) {
        testCallback(' ', 'she.jpg', " ", '3.png', 'do.gif', PSStyle, ' ', "Did she?");
    } else if (testRandomNumber === 54) {
        testCallback(' ', 'Kianu.jpg', " ", '2.png', 'do.gif', PSStyle, 'the task', "Kianu didn't do the task");
    } else if (testRandomNumber === 55) {
        testCallback(' ', ',.png', " ", '2.png', 'do.gif', PrSStyle, 'it', "Don't do it");
    } else if (testRandomNumber === 56) {
        testCallback(' ', 'it.jpg', " ", '2.png', 'do.gif', PrSStyle, ' ', "It doesn't");
    } else if (testRandomNumber === 57) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'do.gif', PrSStyle, ' ', "It does");
    } else if (testRandomNumber === 58) {
        testCallback('Why', 'Emilia.jpg', " ", '3.png', 'do.gif', PSStyle, ' ', "Why did Emilia do it?");
    } else if (testRandomNumber === 59) {
        testCallback(' ', 'dog.jpg', " ", '3.png', 'do.gif', FSStyle, 'again', "Will the dog do it again?");
    } else if (testRandomNumber === 60) {
        testCallback(' ', 'he.jpg', " ", '3.png', 'do.gif', FSStyle, 'the same', "Will he do the same?");
    } else if (testRandomNumber === 61) {
        testCallback(' ', 'we.jpg', " ", '2.png', 'do.gif', FSStyle, 'it', "We won't do it");
    } else if (testRandomNumber === 62) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'need.jpg', PrSStyle, 'it now', "Do you need it now?");
    } else if (testRandomNumber === 63) {
        testCallback(' ', 'Emilia.jpg', " ", '1.png', 'need.jpg', PrSStyle, 'your help', "Emilia needs your help");
    } else if (testRandomNumber === 64) {
        testCallback(' ', 'cat.jpg', " ", '2.png', 'need.jpg', PrSStyle, 'to go outside', "The cat doesn't need to go outside");
    } else if (testRandomNumber === 65) {
        testCallback(' ', 'she.jpg', " ", '1.png', 'need.jpg', PSStyle, 'your help yesterday', "She needed your help yesterday");
    } else if (testRandomNumber === 66) {
        testCallback(' ', 'David.jpg', " ", '2.png', 'need.jpg', PSStyle, 'to ask', "David didn't need to ask");
    } else if (testRandomNumber === 67) {
        testCallback(' ', 'nobody.jpg', " ", '1.png', 'need.jpg', FSStyle, 'move out', "Nobody will need to move out");
    } else if (testRandomNumber === 68) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'need.jpg', FSStyle, 'to drive', "Will you need to drive?");
    } else if (testRandomNumber === 69) {
        testCallback(' ', 'dog.jpg', "never", '1.png', 'help.gif', PrSStyle, ' ', "The dog never helps");
    } else if (testRandomNumber === 70) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'help.gif', FSStyle, ' ', "I'll help");
    } else if (testRandomNumber === 71) {
        testCallback(' ', 'he.jpg', "usually", '1.png', 'help.gif', PrSStyle, ' ', "He usually helps");
    } else if (testRandomNumber === 72) {
        testCallback(' ', 'it.jpg', " ", '2.png', 'help.gif', PrSStyle, ' ', "It doesn't help");
    } else if (testRandomNumber === 73) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'help.gif', FSStyle, 'a little', "It will help a little");
    } else if (testRandomNumber === 74) {
        testCallback(' ', 'David.jpg', " ", '2.png', 'help.gif', FSStyle, 'ever', "David won't help ever");
    } else if (testRandomNumber === 75) {
        testCallback(' ', 'Emilia.jpg', " ", '1.png', 'help.gif', PSStyle, 'to kill everybody', "Emilia helped to kill everybody");
    } else if (testRandomNumber === 76) {
        testCallback(' ', 'cat.jpg', " ", '2.png', 'help.gif', PSStyle, ' ', "The cat didn't help");
    } else if (testRandomNumber === 77) {
        testCallback('There is', 'nobody.jpg', "to", '1.png', 'help.gif', PrSStyle, 'you', "There is nobody to help you")
    } else if (testRandomNumber === 78) {
        testCallback('There was', 'nobody.jpg', "to", '1.png', 'help.gif', PSStyle, 'you yesterday', "There was nobody to help you yesterday")
    } else if (testRandomNumber === 79) {
        testCallback(' ', 'he.jpg', "usually", '1.png', 'go.gif', PrSStyle, 'there on Sundays', "He usually goes there on Sundays");
    } else if (testRandomNumber === 80) {
        testCallback(' ', 'Charlie.jpg', " ", '1.png', 'go.gif', PSStyle, 'there a day ago', "Charlie went there a day ago");
    } else if (testRandomNumber === 81) {
        testCallback(' ', 'somebody.jpg', " ", '1.png', 'go.gif', FSStyle, 'there some day', "Somebody will go there some day");
    } else if (testRandomNumber === 82) {
        testCallback(' ', 'Emilia.jpg', " ", '1.png', 'go.gif', PSStyle, 'home', "Emilia went home");
    } else if (testRandomNumber === 83) {
        testCallback(' ', 'I.jpg', " ", '2.png', 'go.gif', FSStyle, 'there', "I won't go there");
    } else if (testRandomNumber === 84) {
        testCallback(' ', 'she.jpg', " ", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone?");
    } else if (testRandomNumber === 85) {
        testCallback(' ', 'I.jpg', " ", '2.png', 'go.gif', PSStyle, 'anywhere', "I didn't go anywhere");
    } else if (testRandomNumber === 86) {
        testCallback(' ', 'Emilia.jpg', " ", '2.png', 'go.gif', PrSStyle, 'to school', "Emilia doesn't go to school");
    } else if (testRandomNumber === 87) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'go.gif', PrSStyle, 'like this', "It goes like this");
    } else if (testRandomNumber === 88) {
        testCallback(' ', 'we.jpg', " ", '3.png', 'go.gif', FSStyle, 'there together', "Will we go there together?");
    } else if (testRandomNumber === 89) {
        testCallback(' ', ',.png', " ", '2.png', 'go.gif', PrSStyle, ' ', "Don't go");
    } else if (testRandomNumber === 90) {
        testCallback(' ', 'I.jpg', "normally", '1.png', 'drink.gif', PrSStyle, 'coffee in the morning', "I normally drink coffee in the morning");
    } else if (testRandomNumber === 91) {
        testCallback(' ', 'she.jpg', "never", '1.png', 'drink.gif', PrSStyle, 'vodka in the morning', "She never drinks vodka in the morning");
    } else if (testRandomNumber === 92) {
        testCallback(' ', 'Kianu.jpg', "never", '1.png', 'drink.gif', PrSStyle, ' ', "Kianu never drinks");
    } else if (testRandomNumber === 93) {
        testCallback(' ', 'they.jpg', " ", '1.png', 'drink.gif', PSStyle, 'it all', "They drank it all");
    } else if (testRandomNumber === 94) {
        testCallback(' ', 'I.jpg', " ", '2.png', 'drink.gif', FSStyle, 'anything', "I won't drink");
    } else if (testRandomNumber === 95) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'drink.gif', FSStyle, 'anything', "Will you drink anything");
    } else if (testRandomNumber === 96) {
        testCallback(' ', ',.png', " ", '2.png', 'drink.gif', PrSStyle, 'it', "Don't drink it");
    } else if (testRandomNumber === 97) {
        testCallback(' ', 'somebody.jpg', " ", '1.png', 'be.jpg', PSStyle, 'here 5 minutes ago', "Somebody was here 5 minutes ago");
    } else if (testRandomNumber === 98) {
        testCallback(' ', 'it.jpg', " ", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995");
    } else if (testRandomNumber === 99) {
        testCallback(' ', 'it.jpg', " ", '2.png', 'be.jpg', PSStyle, 'like this', "It wasn't like this");
    } else if (testRandomNumber === 100) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', PSStyle, 'a boy', "There was a boy");
    } else if (testRandomNumber === 101) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', FSStyle, 'somebody at the station', "There will be somebody at the station");
    } else if (testRandomNumber === 102) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', PSStyle, 'a party last Friday', "There was a party last friday");
    } else if (testRandomNumber === 103) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', PrSStyle, 'no mistake', "There is no mistake");
    } else if (testRandomNumber === 104) {
        testCallback('There', ',.png', " ", '3.png', 'be.jpg', PSStyle, 'anything', "Was there anything?");
    } else if (testRandomNumber === 105) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', PSStyle, 'nothing to eat', "There was nothing to eat");
    } else if (testRandomNumber === 106) {
        testCallback('There', ',.png', " ", '3.png', 'be.jpg', FSStyle, 'anything else', "Will there be anything else?");
    } else if (testRandomNumber === 107) {
        testCallback('There', ',.png', " ", '1.png', 'be.jpg', FSStyle, 'a supermarket on the right', "There will be a supermarket on the right");
    } else if (testRandomNumber === 108) {
        testCallback(' ', 'I.jpg', "just", '1.png', 'arrive.gif', PSStyle, 'yesterday', "I just arrived yesterday");
    } else if (testRandomNumber === 109) {
        testCallback('When', 'he.jpg', " ", '3.png', 'arrive.gif', PSStyle, ' ', "When did he arrive?");
    } else if (testRandomNumber === 110) {
        testCallback('I think', 'she.jpg', " ", '1.png', 'arrive.gif', FSStyle, 'on Friday', "I think she will arrive on Friday");
    } else if (testRandomNumber === 111) {
        testCallback('When', 'Emilia.jpg', " ", '3.png', 'arrive.gif', PrSStyle, ' ', "When does Emilia arrive?");
    } else if (testRandomNumber === 112) {
        testCallback(' ', 'Emilia.jpg', " ", '1.png', 'arrive.gif', PrSStyle, ' ', "Emilia arrives next Saturday");
    } else if (testRandomNumber === 113) {
        testCallback('It', ',.jpg', " ", '1.png', 'be.jpg', PrSStyle, "your sister's birthday tomorrow", "It's your sister's birthday tomorrow");
    } else if (testRandomNumber === 114) {
        testCallback('Where', 'he.jpg', " ", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year?");
    } else if (testRandomNumber === 115) {
        testCallback(' ', 'David.jpg', " ", '2.png', 'work.gif', PrSStyle, 'here', "David doesn't work here");
    } else if (testRandomNumber === 116) {
        testCallback('Where', 'she.jpg', " ", '3.png', 'work.gif', PrSStyle, ' ', "Where does she work?");
    } else if (testRandomNumber === 117) {
        testCallback(' ', 'anybody.jpg', " ", '3.png', 'work.gif', FSStyle, 'here next year', "Will anybody work here next year?");
    } else if (testRandomNumber === 118) {
        testCallback(' ', 'it.jpg', " ", '2.png', 'work.gif', PrSStyle, 'on weekends', "It doesn't work on weekends");
    } else if (testRandomNumber === 119) {
        testCallback(' ', 'it.jpg', " ", '3.png', 'work.gif', PSStyle, ' ', "Did it work?");
    } else if (testRandomNumber === 120) {
        testCallback('I think', 'you.jpg', " ", '1.png', 'quit.gif', FSStyle, ' ', "I think you'll quit");
    } else if (testRandomNumber === 121) {
        testCallback('How often', 'he.jpg', " ", '3.png', 'quit.gif', PrSStyle, ' ', "How often does he quit?");
    } else if (testRandomNumber === 122) {
        testCallback(' ', 'Charlie.jpg', " ", '1.png', 'quit.gif', PSStyle, 'last week', "Charlie quit his job last week");
    } else if (testRandomNumber === 123) {
        testCallback(' ', 'cat.jpg', " ", '2.png', 'quit.gif', PSStyle, ' ', "The cat didn't quit");
    } else if (testRandomNumber === 124) {
        testCallback(' ', 'we.jpg', " ", '3.png', 'quit.gif', FSStyle, ' ', "Will we quit");
    } else if (testRandomNumber === 125) {
        testCallback(' ', 'dog.jpg', " ", '2.png', 'quit.gif', FSStyle, ' ', "The dog won't quit");
    } else if (testRandomNumber === 126) {
        testCallback(' ', ',.png', " ", '2.png', 'quit.gif', PrSStyle, ' ', "Don't quit");
    } else if (testRandomNumber === 127) {
        testCallback('I think', 'she.jpg', "definitely", '1.png', 'tell.gif', FSStyle, 'you', "I think she'll definitely tell you");
    } else if (testRandomNumber === 128) {
        testCallback('I think', 'cat.jpg', " ", '2.png', 'tell.gif', FSStyle, 'you', "I think the cat won't tell you");
    } else if (testRandomNumber === 129) {
        testCallback(' ', 'I.jpg', " ", '1.png', 'tell.gif', PSStyle, 'you before', "I told you before");
    } else if (testRandomNumber === 130) {
        testCallback(' ', 'you.jpg', " ", '2.png', 'tell.gif', PSStyle, 'me anything', "You didn't tell me anything");
    } else if (testRandomNumber === 131) {
        testCallback(' ', 'they.jpg', " ", '3.png', 'tell.gif', PSStyle, 'anybody', "Did they tell anybody?");
    } else if (testRandomNumber === 132) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'tell.gif', FSStyle, 'me', "Will you tell me?");
    } else if (testRandomNumber === 133) {
        testCallback(' ', ',.png', " ", '2.png', 'tell.gif', PrSStyle, 'anyone', "Don't tell anyone");
    } else if (testRandomNumber === 134) {
        testCallback('Why', 'you.jpg', " ", '2.png', 'tell.gif', PSStyle, 'me', "Why didn't you tell me?");
    } else if (testRandomNumber === 135) {
        testCallback('What', 'you.jpg', " ", '3.png', 'tell.gif', PSStyle, 'her', "What did you tell her?");
    } else if (testRandomNumber === 136) {
        testCallback(' ', ',.png', " ", '1.png', 'tell.gif', PrSStyle, 'me why', "Tell me why");
    } else if (testRandomNumber === 137) {
        testCallback(' ', ',.png', " ", '1.png', 'tell.gif', PrSStyle, 'me what time it is', "Tell me what time it is");
    } else if (testRandomNumber === 138) {
        testCallback('I think', 'dog.jpg', "surely", '1.png', 'come back.gif', FSStyle, 'to you', "I think the dog will surely come back to you");
    } else if (testRandomNumber === 139) {
        testCallback('I think', 'David.jpg', " ", '2.png', 'come back.gif', FSStyle, ' ', "I think David won't come back");
    } else if (testRandomNumber === 140) {
        testCallback(' ', 'Kianu.jpg', " ", '1.png', 'come back.gif', PSStyle, 'a month ago', "Kianu came back a month ago");
    } else if (testRandomNumber === 141) {
        testCallback(' ', 'you.jpg', " ", '3.png', 'come back.gif', FSStyle, ' ', "Will you come back?");
    } else if (testRandomNumber === 142) {
        testCallback(' ', ',.png', "ever", '2.png', 'come back.gif', FSStyle, ' ', "Don't ever come back");
    } else if (testRandomNumber === 143) {
        testCallback(' ', ',.png', " ", '1.png', 'come back.gif', FSStyle, 'here', "Come back here");
    } else if (testRandomNumber === 145) {
        testCallback('I think', 'dog.jpg', " ", '1.png', 'be.jpg', PSStyle, 'here a moment ago', "I think the dog was here a moment ago");
    } else if (testRandomNumber === 146) {
        testCallback('It seems like', 'he.jpg', " ", '2.png', 'understand.gif', PrSStyle, 'what his job is', "It seems like he doesn't understand what his job is");
    } else if (testRandomNumber === 147) {
        testCallback("It doesn't seem like", 'she.jpg', " ", '1.png', 'understand.gif', PrSStyle, "what's going on", "It doesn't seem like she understands what's going on");
    } else if (testRandomNumber === 148) {
        testCallback("It doesn't seem like", 'you.jpg', " ", '1.png', 'understand.gif', PrSStyle, "what it is", "It doesn't seem like you understand what it is");
    } else if (testRandomNumber === 149) {
        testCallback(" ", 'I.jpg', " ", '2.png', 'understand.gif', PrSStyle, " ", "I don't understand");
    } else if (testRandomNumber === 150) {
        testCallback(" ", 'Emilia.jpg', " ", '2.png', 'understand.gif', PrSStyle, " ", "Emilia doesn't understand");
    } else if (testRandomNumber === 151) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'understand.gif', PrSStyle, " ", "Do you understand?");
    } else if (testRandomNumber === 152) {
        testCallback(" ", 'they.jpg', " ", '2.png', 'understand.gif', PSStyle, " ", "They didn't understand");
    } else if (testRandomNumber === 153) {
        testCallback(" ", 'anybody.jpg', " ", '3.png', 'understand.gif', PSStyle, " ", "Did anybody understand?");
    } else if (testRandomNumber === 154) {
        testCallback("It doesn't seem like", 'you.jpg', " ", '1.png', 'know.gif', PrSStyle, "him", "It doesn't seem like you know him");
    } else if (testRandomNumber === 155) {
        testCallback(" ", 'I.jpg', " ", '2.png', 'know.gif', PrSStyle, "you", "I don't know you");
    } else if (testRandomNumber === 156) {
        testCallback(" ", 'she.jpg', " ", '3.png', 'know.gif', PrSStyle, "him", "Does she know him?");
    } else if (testRandomNumber === 157) {
        testCallback(" ", 'she.jpg', " ", '2.png', 'know.gif', PrSStyle, "the rules", "She doesn't know the rules");
    } else if (testRandomNumber === 158) {
        testCallback(" ", 'David.jpg', " ", '2.png', 'know.gif', PSStyle, "that", "David didn't know that");
    } else if (testRandomNumber === 159) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'know.gif', PSStyle, " ", "Did you know?");
    } else if (testRandomNumber === 160) {
        testCallback(" ", 'Emilia.jpg', " ", '2.png', 'know.gif', FSStyle, " ", "Emilia won't know");
    } else if (testRandomNumber === 161) {
        testCallback("When", 'he.jpg', " ", '3.png', 'know.gif', PSStyle, "this", "When did he know this?");
    } else if (testRandomNumber === 162) {
        testCallback("It seems like", 'she.jpg', " ", '2.png', 'can.jpg', PrSStyle, "drive", "It seems like she can't drive");
    } else if (testRandomNumber === 163) {
        testCallback(" ", 'I.jpg', "can", '2.png', 'hear.gif', PrSStyle, "you", "I can't hear you");
    } else if (testRandomNumber === 164) {
        testCallback(" ", 'I.jpg', "can", '2.png', 'hear.gif', FSStyle, "you", "I won't be able to hear you");
    } else if (testRandomNumber === 165) {
        testCallback(" ", 'you.jpg', "can", '3.png', 'hear.gif', PrSStyle, "me", "Can you hear me?");
    } else if (testRandomNumber === 166) {
        testCallback(" ", 'dog.jpg', " ", '2.png', 'hear.gif', PSStyle, "anything", "The dog didn't hear anything");
    } else if (testRandomNumber === 167) {
        testCallback(" ", 'I.jpg', " ", '1.png', 'drive.gif', FSStyle, " ", "I'll drive");
    } else if (testRandomNumber === 168) {
        testCallback(" ", 'Charlie.jpg', " ", '2.png', 'drive.gif', FSStyle, " ", "Charlie won't drive");
    } else if (testRandomNumber === 169) {
        testCallback(" ", 'dog.jpg', " ", '3.png', 'drive.gif', PSStyle, " ", "Did the dog drive?");
    } else if (testRandomNumber === 170) {
        testCallback(" ", ',.png', " ", '2.png', 'drive.gif', PrSStyle, "when drunk", "Don't drive when drunk");
    } else if (testRandomNumber === 171) {
        testCallback(" ", 'cat.jpg', " ", '1.png', 'run.gif', PSStyle, "outside", "The cat ran outside");
    } else if (testRandomNumber === 172) {
        testCallback("Why", 'they.jpg', " ", '3.png', 'run.gif', PSStyle, " ", "Why did they run?");
    } else if (testRandomNumber === 173) {
        testCallback(" ", 'David.jpg', " ", '2.png', 'run.gif', PSStyle, " ", "David didn't run");
    } else if (testRandomNumber === 174) {
        testCallback(" ", 'we.jpg', " ", '1.png', 'run.gif', PSStyle, "out of sugar", "We ran out of sugar");
    } else if (testRandomNumber === 175) {
        testCallback(" ", ',.png', " ", '2.png', 'run.gif', PrSStyle, "at school", "Don't run at school");
    } else if (testRandomNumber === 176) {
        testCallback(" ", 'she.jpg', "never", '1.png', 'run.gif', PrSStyle, "out of sugar", "She never runs");
    } else if (testRandomNumber === 177) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'like.gif', PSStyle, "it", "Did you like it?");
    } else if (testRandomNumber === 178) {
        testCallback(" ", 'cat.jpg', " ", '2.png', 'like.gif', FSStyle, "it", "The cat won't like it");
    } else if (testRandomNumber === 179) {
        testCallback(" ", 'she.jpg', " ", '2.png', 'like.gif', PrSStyle, "you", "She doesn't like you");
    } else if (testRandomNumber === 180) {
        testCallback("What", 'he.jpg', " ", '3.png', 'like.gif', PrSStyle, " ", "What does he like?");
    } else if (testRandomNumber === 181) {
        testCallback(" ", 'Emilia.jpg', " ", '3.png', 'want.jpg', PSStyle, "that", "Did Emilia want that?");
    } else if (testRandomNumber === 182) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'want.jpg', PrSStyle, "me", "Do you want me?");
    } else if (testRandomNumber === 183) {
        testCallback(" ", 'anybody.jpg', " ", '3.png', 'want.jpg', PrSStyle, "anything", "Does anybody want anything?");
    } else if (testRandomNumber === 184) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'want.jpg', PSStyle, "her to help", "Did you want her to help?");
    } else if (testRandomNumber === 185) {
        testCallback(" ", 'I.jpg', " ", '1.png', 'want.jpg', PrSStyle, "you to stop", "I want you to stop");
    } else if (testRandomNumber === 186) {
        testCallback(" ", 'she.jpg', " ", '2.png', 'want.jpg', PrSStyle, "you to leave", "She doesn't want you to leave");
    } else if (testRandomNumber === 187) {
        testCallback("Why", 'they.jpg', " ", '2.png', 'want.jpg', PSStyle, "us to come", "Why didn't they want us to come?");
    } else if (testRandomNumber === 188) {
        testCallback("What", 'you.jpg', " ", '3.png', 'want.jpg', PrSStyle, "me to do", "What do you want me to do?");
    } else if (testRandomNumber === 189) {
        testCallback("What", 'you.jpg', " ", '3.png', 'want.jpg', PrSStyle, "me to do", "What do you want me to do?");
    } else if (testRandomNumber === 190) {
        testCallback("Why", 'anybody.jpg', " ", '3.png', 'want.jpg', PSStyle, "her to die", "Why did anybody want her to die?");
    } else if (testRandomNumber === 191) {
        testCallback(" ", 'I.jpg', " ", '2.png', 'want.jpg', PSStyle, "it to happen", "I didn't want it to happen");
    } else if (testRandomNumber === 192) {
        testCallback(" ", 'I.jpg', " ", '1.png', 'need.jpg', PrSStyle, "you to focus", "I need you to focus");
    } else if (testRandomNumber === 193) {
        testCallback(" ", 'I.jpg', " ", '2.png', 'need.jpg', PrSStyle, "you to help me", "I don't need you to help me");
    } else if (testRandomNumber === 194) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'need.jpg', PrSStyle, "them to help you", "Do you need them to help you?");
    } else if (testRandomNumber === 195) {
        testCallback(" ", 'David.jpg', " ", '2.png', 'need.jpg', PSStyle, "them to bring anything", "David didn't need them to bring anything");
    } else if (testRandomNumber === 196) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'happen.gif', PrSStyle, "sometimes", "It happens sometimes");
    } else if (testRandomNumber === 197) {
        testCallback(" ", 'it.jpg', " ", '3.png', 'happen.jpg', PSStyle, "to you yesterday", "Did it happen to you yesterday?");
    } else if (testRandomNumber === 198) {
        testCallback("Usually", 'it.jpg', " ", '2.png', 'happen.gif', PrSStyle, " ", "Usually it doesn't happen");
    } else if (testRandomNumber === 199) {
        testCallback(" ", 'it.jpg', " ", '2.png', 'happen.gif', FSStyle, "to me", "It won't happen to me");
    } else if (testRandomNumber === 200) {
        testCallback(" ", 'it.jpg', "never", '2.png', 'happen.gif', PSStyle, "here", "It never happened here");
    } else if (testRandomNumber === 201) {
        testCallback(" ", 'it.jpg', " ", '2.png', 'can.jpg', PrSStyle, "be true", "It can't be true");
    } else if (testRandomNumber === 202) {
        testCallback(" ", 'Charlie.jpg', " ", '2.png', 'can.jpg', PrSStyle, "read", "Charlie can't read");
    } else if (testRandomNumber === 203) {
        testCallback(" ", 'he.jpg', " ", '2.png', 'can.jpg', PSStyle, "sleep last night", "He couldn't sleep last night");
    } else if (testRandomNumber === 204) {
        testCallback(" ", 'cat.jpg', " ", '2.png', 'can.jpg', PSStyle, "tell you", "The cat couldn't tell you");
    } else if (testRandomNumber === 205) {
        testCallback(" ", 'Emilia.jpg', " ", '2.png', 'can.jpg', FSStyle, "make it in time", "She won't be able to make it in time");
    } else if (testRandomNumber === 206) {
        testCallback(" ", 'you.jpg', " ", '3.png', 'can.jpg', FSStyle, "to come", "Will you be able to come?");
    } else if (testRandomNumber === 207) {
        testCallback(" ", 'it.jpg', " ", '3.png', 'can.jpg', PSStyle, "be yours", "Could it be yours?");
    } else if (testRandomNumber === 208) {
        testCallback("Where", 'you.jpg', " ", '3.png', 'be.jpg', PrSStyle, "from", "Where are you from?");
    } else if (testRandomNumber === 209) {
        testCallback("What", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "your name", "What's your name?");
    } else if (testRandomNumber === 210) {
        testCallback("What", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "this", "What's this?");
    } else if (testRandomNumber === 211) {
        testCallback("Who", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "it over there", "Who is it over there?");
    } else if (testRandomNumber === 212) {
        testCallback("Who", ',.png', " ", '3.png', 'be.jpg', FSStyle, "there", "Who will be there?");
    } else if (testRandomNumber === 213) {
        testCallback("Who", ',.png', " ", '3.png', 'be.jpg', FSStyle, "there", "Who will be there?");
    } else if (testRandomNumber === 214) {
        testCallback("Where", ',.png', " ", '3.png', 'be.jpg', FSStyle, "it", "Where is it?");
    } else if (testRandomNumber === 215) {
        testCallback("Where", ',.png', " ", '3.png', 'be.jpg', FSStyle, "the bathroom", "Where is the bathroom?");
    } else if (testRandomNumber === 216) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'be.jpg', PrSStyle, " ", "It's over there");
    } else if (testRandomNumber === 217) {
        testCallback("How", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "you", "How are you?");
    } else if (testRandomNumber === 218) {
        testCallback("How", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "she", "How is she?");
    } else if (testRandomNumber === 219) {
        testCallback("How", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "the weather", "How is the weather?");
    } else if (testRandomNumber === 220) {
        testCallback("How", ',.png', " ", '3.png', 'be.jpg', PSStyle, "the weather yesterday", "How was the weather yesterday?");
    } else if (testRandomNumber === 221) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'be.jpg', PrSStyle, "cloudy today", "It's cloudy today");
    } else if (testRandomNumber === 222) {
        testCallback("What", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "up man", "What's up man?");
    } else if (testRandomNumber === 223) {
        testCallback(" ", 'I.jpg', " ", '1.png', 'be.jpg', PrSStyle, "alright", "I'm alright");
    } else if (testRandomNumber === 224) {
        testCallback("What color", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "it", "What color is it?");
    } else if (testRandomNumber === 225) {
        testCallback("What", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "your favorite animal", "What is your favorite animal?");
    } else if (testRandomNumber === 226) {
        testCallback("How old", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "you", "How old are you?");
    } else if (testRandomNumber === 227) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'be.jpg', PrSStyle, "blue", "It's blue");
    } else if (testRandomNumber === 228) {
        testCallback(" ", 'I.jpg', " ", '1.png', 'be.jpg', PrSStyle, "99 years old", "I'm 99 years old");
    } else if (testRandomNumber === 229) {
        testCallback("What day", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "it today", "What day is it today?");
    } else if (testRandomNumber === 230) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'be.jpg', PrSStyle, "blue", "It's Thursday");
    } else if (testRandomNumber === 231) {
        testCallback("What time", ',.png', " ", '3.png', 'be.jpg', PrSStyle, "is it", "What time is it?");
    } else if (testRandomNumber === 232) {
        testCallback("Yes", 'she.jpg', " ", '1.png', 'be.jpg', PrSStyle, " ", "Yes, she is");
    } else if (testRandomNumber === 233) {
        testCallback("No", 'I.jpg', " ", '2.png', 'be.jpg', PrSStyle, " ", "No I'm not");
    } else if (testRandomNumber === 234) {
        testCallback(" ", 'it.jpg', " ", '1.png', 'be.jpg', PSStyle, "warm", "It was warm");
    } else if (testRandomNumber === 235) {
        testCallback(" ", 'it.jpg', " ", '2.png', 'be.jpg', PSStyle, "cold", "It wasn't cold");
    } else if (testRandomNumber === 236) {
        testCallback("Where", 'you.jpg', " ", '3.png', 'want.jpg', PrSStyle, "to go", "Where do you want to go?");
    } else if (testRandomNumber === 237) {
        testCallback("Where", 'Emilia.jpg', " ", '3.png', 'want.jpg', PSStyle, "to go", "Where did Emilia want to go?");
    } else if (testRandomNumber === 238) {
        testCallback("What", 'she.jpg', " ", '3.png', 'want.jpg', PrSStyle, "to do", "What does she want to do?");
    } else if (testRandomNumber === 239) {
        testCallback("What", 'she.jpg', " ", '3.png', 'want.jpg', PSStyle, "to eat", "What did she want to eat?");
    } else if (testRandomNumber === 240) {
        testCallback("What", 'she.jpg', " ", '3.png', 'want.jpg', PSStyle, "to eat", "What did she want to eat?");
    } else if (testRandomNumber === 241) {
        testCallback("Yes", 'we.jpg', " ", '1.png', 'be.jpg', PrSStyle, " ", "Yes, we are");
    }

    questionOpacityCheck();
    connectionHiddenCheck();
    timeMarkerOpacityCheck();
    // sayTense();
    // tenseCheck();
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