fetch('https://api.github.com/users/defunkt')
  .then(res => res.json())
  .then(json => console.log(json.login))
  .catch(err => console.log(err));