import axios from 'axios';

const $joke = document.getElementById('joke');
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    $joke.innerHTML = res.data.joke;
  });
}
export default generateJoke;
