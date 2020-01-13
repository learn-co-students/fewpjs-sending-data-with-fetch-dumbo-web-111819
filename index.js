let userName = "test user name"
let userEmail = "byron@poodles.com"

function submitData(userName, userEmail){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then(r => r.json()
  })
  .then(newObj => {
    document.body.innerHTML = newObj.id
  })
  .catch(error => {
    document.body.innerHTML = error.message
  })
}

submitData(userName, userEmail)
