import './index.scss';

var d = new Date();
var n = d.toLocaleTimeString();

let questionNum = 0;
let question = '';

let output = document.getElementById('output');
output.innerHTML = question;

function bot() {

  let input = document.getElementById('input').value;

  if (questionNum === 0) {
    output.innerHTML = ('<div class="d-flex justify-content-between mb-4"> <div class="chat-body white p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p> </div> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1">');
    document.getElementById('input').value = '';
    question = ('<div class="d-flex justify-content-between mb-4"> <img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"> <div class="chat-body white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small></div><hr class="w-100"> <p class="mb-0"> Hello you. I am Lugia. I am a legendary Pokemon. How are you ?</p> </div> </div>');
    setTimeout(timedQuestion, 2000);
  }

  else if (questionNum === 1) {
    output.innerHTML = ('<div class="d-flex justify-content-between mb-4"> <div class="chat-body white p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p> </div> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1">');
    document.getElementById('input').value = '';
    question = ('<div class="d-flex justify-content-between mb-4"> <img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"> <div class="chat-body white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0"> So Happy Today. What is your name ?</p> </div> </div>');
    setTimeout(timedQuestion, 2000);
  }

  else if (questionNum === 2) {
    output.innerHTML = ('<div class="d-flex justify-content-between mb-4"> <div class="chat-body white p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p> </div> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1">');
    document.getElementById('input').value = '';
    question = ('<div class="d-flex justify-content-between mb-4"> <img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"> <div class="chat-body white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">Great. ' + input + ', What is your level ?</p> </div> </li>');
    setTimeout(timedQuestion, 2000);
  }

  else if (questionNum === 3) {
    output.innerHTML = ('<div class="d-flex justify-content-between mb-4"> <div class="chat-body white p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p> </div> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1">');
    document.getElementById('input').value = '';
    question = ('<div class="d-flex justify-content-between mb-4"> <img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"> <div class="chat-body white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">Cool, you\'ve done a quarter of the Pokemon game! Where are you from ?</p> </div> </div>');
    setTimeout(timedQuestion, 2000);
  }

  else if (questionNum === 4) {
    output.innerHTML = ('<div class="d-flex justify-content-between mb-4"> <div class="chat-body white p-3 z-depth-1"> <div class="header"> <strong class="primary-font">Draco</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">' + input + '</p> </div> <img src="http://pm1.narvii.com/7023/5fc9eb7e5053b9e0a6a765c32464b3acbe13ebb7r1-720-720v2_00.jpg" alt="Dracaufeu" class="image-circle-120 rounded-circle mr-0 ml-3 z-depth-1">');
    document.getElementById('input').value = '';
    question = ('<div class="d-flex justify-content-between mb-4"> <img src="https://pm1.narvii.com/5894/4e9ca496f890bf6a4035ef418b75ab7de407acae_hq.jpg" alt="Lugia" class="image-circle-120 rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"> <div class="chat-body white p-3 ml-2 z-depth-1"> <div class="header"> <strong class="primary-font">Lugia</strong> <small class="pull-right text-muted"><i class="far fa-clock"></i> <span>' + n + '</span></small> </div> <hr class="w-100"> <p class="mb-0">Cool, you done a quarter of the Pokemon game! What can I do for you ?</p> </div> </div>');
    setTimeout(timedQuestion, 2000);
  }

}

function timedQuestion() {

  output.innerHTML = question;

}

let buttonSend = document.getElementById('send');
buttonSend.addEventListener('click', function() {

    bot();
    questionNum++;

});

$(document).keypress(function (e) {

  if (e.which === 13) {
    bot();
    questionNum++;
  }

});
