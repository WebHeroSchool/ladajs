fetch('https://api.github.com/users/6thSence')
  .then(res => res.json())
  .then(json => console.log(json.login))
  .catch(err => console.log(err));