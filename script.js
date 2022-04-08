var logo = document.getElementById('logo')
var profile = document.getElementById('profile')
var email = document.getElementById('email')
var api = 'https://script.google.com/macros/s/AKfycbzgfRvd1I_WXDOxz-CyQ4sjdI9p6UbFIn-Pa15A1ii7SG28N5JnbEO_Pr3UyxnqHdkJ/exec'

//promise
fetch(api).then( res => res.json()).then(function(res){
    console.log(res)
    logo.src = res.pic
    profile.innerText = res.name
    email.href = `mailto:${res.email}`
})