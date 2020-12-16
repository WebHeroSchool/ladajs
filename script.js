let body = document.body;
let href = document.location.href;

let request = (href) => {
  let userName = href.split('=');
  if (userName[1]) {
    username = userName[1];
  } else {
    username = 'ladariugina'
  }
  return username;
}

let data = new Date().toLocaleDateString();
let userData = document.createElement('p');

const getData = new Promise((resolve, reject) => {
  setTimeout(() => data ? resolve(userData.innerHTML = data) : reject('Data is not found'), 1000);
});


Promise.all([getData])
  .then(() => fetch(`https://api.github.com/users/${request(href)}`))
  .then(res => res.json())
  .then(json => {
    let userImg = document.createElement('img');
    if (json.avatar_url != null) {
      userImg.src = json.avatar_url;
    } else {
      userImg.innerHTML = 'Error. No avatar.'
    }
    body.append(userImg);

    let userUrl = document.createElement('a');
    if (json.name != null) {
      userUrl.href = json.html_url;
      userUrl.innerHTML = json.name;
    } else {
      userUrl.innerHTML = 'Error. No name.'
    }
    body.append(userUrl);

    let userBio = document.createElement('p');
    if (json.bio != null) {
      userBio.innerHTML = json.bio;
    } else {
      userBio.innerHTML = 'Error. No bio.'
    }
    body.append(userBio);

    body.append(userData);
  })
  .catch(err => {
    let userError = document.createElement('h1');
    userError.innerHTML = 'Информация о пользователе не доступна.';
    body.append(userError);
  });

const preloader = document.getElementById('preloader');
setTimeout(() => preloader.classList.add('hidden'), 2000);