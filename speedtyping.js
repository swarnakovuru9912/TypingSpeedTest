let speedTypingTest = document.getElementById('speedTypingTest');
let timer = document.getElementById('timer');
let quoteDisplay = document.getElementById('quoteDisplay');
let result = document.getElementById('result');
let quoteInput = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let spinnerEl = document.getElementById('spinner');

let para;
let count;
let intervalId;

let url = 'https://apis.ccbp.in/random-quote';
let options = {
    method: 'GET'
};
spinnerEl.classList.remove('d-none');
speedTypingTest.classList.add('d-none');

count = -1;
intervalId = setInterval(function() {
    count = count + 1;
    timer.textContent = count;
}, 1000);

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add('d-none');
        speedTypingTest.classList.remove('d-none');
        para = jsonData;
        quoteDisplay.textContent = jsonData.content;
    });





resetBtn.addEventListener('click', function() {
    clearInterval(intervalId);
    quoteInput.value = "";
    result.textContent = "";
    spinnerEl.classList.remove('d-none');
    speedTypingTest.classList.add('d-none');

    count = -1;
    intervalId = setInterval(function() {
        count = count + 1;
        timer.textContent = count;
    }, 1000);

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add('d-none');
            speedTypingTest.classList.remove('d-none');
            para = jsonData;
            quoteDisplay.textContent = jsonData.content;
        });

});

submitBtn.addEventListener('click', function() {
    console.log(count);
    console.log(quoteInput.value);
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(intervalId);
        result.textContent = 'You typed in ' + count + ' seconds';
    } else {
        result.textContent = 'You typed incorrect sentence';
    }
});