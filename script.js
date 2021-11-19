/**
 * Please finish the lesson by adding needed js:
 * - You can write code with jquery OR VanillaJs
 * - but are better to try them both, two variants are recommended for learning
 *
 *
 * - To display errors please use .matchError class
 * - To display match result please use .matchResult class
*/

// Jquery

// VanillaJs

const formResultDelay = 2000;

const matchResultBox = document.querySelector('.matchResult');
const matchErrorBox = document.querySelector('.matchError');

const startMatchButton = document.getElementById('startMatch');

startMatchButton.addEventListener('click', function(event) {
    startMatch();
});

const startMatch = function () {
    clearMatch();

    if (validateMatch() === false) {
        return;
    }

    matchResultBox.classList.remove('hide');

    setTimeout(function() {
        const scoreFirst = randomIntFromInterval(0, 10);
        const scoreSecond = randomIntFromInterval(0, 10);

        setMatchResult(`${scoreFirst} : ${scoreSecond}`)
    }, formResultDelay);
}

const validateMatch = function () {
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');

    if (team1.value === '' || team2.value === '') {
        setMatchError('Please select teams');

        return false;
    }

    if (team1.value === team2.value) {
        setMatchError('Teams should be different');

        return false;
    }

    return true;
}

const clearMatch = function () {
    matchResultBox.innerHTML = 'Loading ...';
    matchErrorBox.innerHTML = '';

    matchResultBox.classList.add('hide');
    matchErrorBox.classList.add('hide');
}

const randomIntFromInterval = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const setMatchResult = function (text) {
    matchResultBox.innerHTML = text;

    matchResultBox.classList.remove('hide');
}

const setMatchError = function (text) {
    matchResultBox.classList.add('hide');
    matchErrorBox.classList.remove('hide');

    matchErrorBox.innerHTML = text;
}