let result = {
  tag: '',
  free: false,
  role: false,
  user: 'akshaykumar',
  email: 'akshaykumar@codewithharry.com',
  score: 0.64,
  state: 'undeliverable',
  domain: 'codewithharry.com',
  reason: 'invalid_mailbox',
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: '',
  format_valid: true,
};

let outputSection = document.getElementById('outputSection');

emailBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  // console.log('Clicked!');
  let outputResult = document.getElementById('outputResult');
  outputResult.innerHTML = `<img src="assets/img/loading.svg" alt="loading">`;
  let key = 'ema_live_7W3WBQtVlnh0wkOhrPac8gXwNLNJtIswmAIacJPG';
  let email = document.getElementById('emailId').value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== '' && result[key] !== ' ') {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  console.log(str);
  outputResult.innerHTML = str;
});
