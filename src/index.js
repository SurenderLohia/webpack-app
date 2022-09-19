import generateJoke from './generateJokes';
import '../src/styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
const $getJokeBtn = document.getElementById('get-joke-btn');

laughImg.src = laughing;
$getJokeBtn.addEventListener('click', generateJoke);
generateJoke();
