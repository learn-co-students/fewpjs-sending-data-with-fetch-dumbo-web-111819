// Add your code here
let bodyText=document.querySelector('script')
function submitData(name,email){
    return fetch('http://localhost:3000/users',
        {   method:'POST',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({name:name,email:email})
          }
    ).then(resp=>resp.json())
    .then(resp=>{
        console.log(resp)
        console.log(resp['id'])
        // console.log(bodyText,resp.id)
        bodyText.innerHTML=resp['id']
    })
    .catch(error =>{
        // alert("Bad things! Ragnarők!")
        bodyText.innerHTML=error.message
    });
}
