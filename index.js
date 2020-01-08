function submitData(name, email){
    return fetch("http://localhost:3000/users", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, email
        })
    })
    .then(r => r.json())
    .then(function(data){
        document.body.innerHTML = data.id
    })
    .catch(function(error){
        document.body.innerHTML += error.message
    })
}