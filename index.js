import './index.scss';

const d = new Date();
const n = d.toLocaleTimeString();
let questionNum = 0;
let question = '';
let message = '';
const output = document.querySelector('#output');

function newMessage() {
  const newMsg = document.createElement('div');
  output.appendChild(newMsg);
  newMsg.innerHTML = message;
}

function timedQuestion() {
  const newQuestion = document.createElement('div');
  output.appendChild(newQuestion);
  newQuestion.innerHTML = question;
}

function bot() {
  const input = document.querySelector('#input').value;

  if (questionNum === 0) {
    const questionOne = [
      'Hello you. I am Lugia. I am a legendary Pokemon. How are you ?',
      'Hey nice to meet you. I\'m Lugia. I\'m a legendary Pokemon. How are you ?',
      'Hi my new friend. I\'m Lugia. I\'m a legendary Pokemon. How are you ?'
    ];
    const f = Math.floor(Math.random() * 3);
    message = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1"><div class="p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p></div>');
    setTimeout(newMessage, 0);
    document.querySelector('#input').value = '';
    question = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <div class="white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0">' + questionOne[f] + '</p> </div><img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"></div>');
    setTimeout(timedQuestion, 1500);
  } else if (questionNum === 1) {
    const questionTwo = [
      'Great today. What is your name ?',
      'Really excited to speak with you. How I\'ve to call you ?',
      'So happy to get a chat with you. Give me your name to begin the chat ?'
    ];
    const s = Math.floor(Math.random() * 3);
    message = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1"><div class="p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p></div>');
    setTimeout(newMessage, 0);
    document.querySelector('#input').value = '';
    question = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <div class="white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0">' + questionTwo[s] + '</p> </div><img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"></div>');
    setTimeout(timedQuestion, 1500);
  }

  else if (questionNum === 2) {
    const questionThree = [
      'Great ' + input + ', I need to know you. First What level are you ?',
      'OK ' + input + ', Let\'s go for more info on you. First What level are you ?',
      'Alright ' + input + 'What can you say to describe you ? First What level are you ?'
    ];
    const t = Math.floor(Math.random() * 3);
    message = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1"><div class="p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p></div>');
    setTimeout(newMessage, 0);
    document.querySelector('#input').value = '';
    question = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <div class="white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0">' + questionThree[t] + '</p> </div><img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"></div>');
    setTimeout(timedQuestion, 1500);
  }

  else if (questionNum === 3) {
    const questionFour = [
      'Where are you from ?',
      'Where in Pokeland are you from ?',
      'What Pokeland island are you from ?'
    ];
    const q = Math.floor(Math.random() * 3);
    message = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1"><div class="p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p></div>');
    setTimeout(newMessage, 0);
    document.querySelector('#input').value = '';
    question = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <div class="white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0">' + questionFour[q] + '</p> </div><img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"></div>');
    setTimeout(timedQuestion, 1500);
  }

  else if (questionNum === 4) {
    const questionFive = [
      'What is your type ?',
      'What can you say about your type ?',
      'What type are you ?'
    ];
    const c = Math.floor(Math.random() * 3);
    message = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1"><div class="p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p></div>');
    setTimeout(newMessage, 0);
    document.querySelector('#input').value = '';
    question = ('<div class="col-12 d-flex justify-content-between mb-12 gradient-gray-1 padding-20 margin-bottom-10"> <div class="white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0">' + questionFive[c] + '</p> </div><img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"></div>');
    setTimeout(timedQuestion, 1500);
  }
}

// Event click on the submit (plane) button the input value by
// user will be send to the bot

const buttonSend = document.getElementById('send');
buttonSend.addEventListener('click', () => {
  bot();
  questionNum++;
});

// When press on enter on the keyboard the input value by
// user will be send to the bot

const inputEnter = document.querySelector('#input');
inputEnter.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    bot();
    questionNum++;
  }
});
