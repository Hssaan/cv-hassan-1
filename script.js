var logo = document.getElementById('logo')
var profile = document.getElementById('profile')
var email = document.getElementById('email')
var api = 'https://script.google.com/macros/s/AKfycbwKM0cnkmznPn74VgV3sWIAW2ZakuDmGZwNtmSeBT8KxSI5JnEMGxjctnfRFI22ViDFww/exec'

//promise
fetch(api).then( res => res.json()).then(function(res){
    console.log(res)
    logo.src = res.pic
    profile.innerText = res.name
    email.href = `mailto:${res.email}`
})