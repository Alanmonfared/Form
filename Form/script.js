'use strict'

const  unique = Date.now().toString();
const  card = document.querySelector('#card');
const  form = document.querySelector('#form');
const  firstName = document.querySelector('#firstName');
const  lastName = document.querySelector('#lastName');
const  email = document.querySelector('#email');
const  btnDanger = document.querySelector('#btnDanger')
const  output = document.querySelector('#output');
let users =[];




const validateText = id =>  {
    const input = document.querySelector('#'+ id);
    
    
    const invalid = input.nextElementSibling;
    if(input.value === '') {
        input.classList.add('is-invalid');
        invalid.innerText = 'You need to fill in a name.';
        return false;
        
        
    } else if ( input.value.length < 2) {
        input.classList.add('is-invalid');
        invalid.innerText = 'Your name needs to be more then two characters.';
        return false;
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
        
    }
}

const validateEmail = id => {
    
    
    const input = document.querySelector('#'+ id);
    const invalid = input.nextElementSibling;
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)){
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    } 
    else  email.value === '' 
    invalid.innerText = 'Please enter a correct email address';
    input.classList.add('is-invalid');
    return false;
            
}

const validate = () => {
    document.querySelectorAll('input').forEach(input => {
        if(input.type === 'text') {
            validateText(input.id);
        }
        
        if(input.type === 'email') {
            validateEmail(input.id)
        }
    })
}



const createUser = (firstName, lastName, email) => {
    let user = {
        
        id:Date.now().toString(),
        firstName: firstName,
        lastName:lastName,
        email:email,
    } 
    
    users.push(user);
    console.log(users);
    
}


const listUsers = () => {
    
    
    output.innerHTML = '';
    
    
    
    
    users.forEach(user => {
        let template = `
        <div class="userinfo justify-content-center align-content-center text-center  shadow">
            <div class="text ">
                <h3>${user.firstName} ${user.lastName}</h3>
                
                
                <small>${user.email}</small>
            
        
            </div>
        
        </div>
        `
        
        
        output.innerHTML += template;
        
        
    })
    
    
    
};






listUsers();

form.addEventListener('submit', (e)  => {
    e.preventDefault();

    validate();


   
if(validateText('firstName') && validateText('lastName') && validateEmail('email')) {
    createUser(firstName.value, lastName.value, email.value);
    listUsers()
   
  form.reset();
    
 } 
 


})


