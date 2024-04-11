const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click',getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer)

const houseBtn = document.querySelector("#js-tweet1");
houseBtn.addEventListener('click', getHouse);

const answerText = document.querySelector("#js-answer-text");

const answerText1 = document.querySelector("#js-answer-text1");

const endpoint = 'https://api.gameofthronesquotes.xyz/v1/random';

let character = ''
let house = ''

async function getQuote(){
   // console.log("Test");
   try {
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }


        const json = await response.json();
        console.log(json['sentence']);
        displayQuote(json['sentence']);

        console.log(json['character']['name']);
        //console.log(json['character"]']);
        character = json['character']['name'];
        answerText.textContent = '';

        console.log(json['character']['house']['name']);
        house = json['character']['house']['name'];
        answerText1.textContent = '';

   }catch (err){
        console.log(err);
        alert('failed to fetch new quote');
   }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer(){
    answerText.textContent = character;
}

function getHouse(){
    answerText1.textContent = house;
}



getQuote();