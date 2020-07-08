function alreadyAccount() {
    location.replace("./login.html")
}

function signup(){

    var username=document.getElementById('user1').value
    var emailID=document.getElementById("email1").value
    var password=document.getElementById('password1').value

    var error=document.getElementById('pass-Error')
    if(password.length<6){

        error.innerHTML="Password too short"
        
        error.style.color="Red"
        error.style.display="Block"
    }

    else if (password.search(/[0-9]/)==-1) {

        error.innerHTML="Password must contain numbers"
        error.style.display="Block"
        
    }

    else if(password.search(/[a-z]/)==-1){
        error.innerHTML="Password must contain lower case letter"
        error.style.display="Block"
    }

    else if(password.search(/[A-Z]/)==-1){
        
        
        error.innerHTML="Password must contain upper case letter"
        error.style.color="Red"
        error.style.display="Block"
    }

    else if(password.search(/[!\@\$\%\^\&\*\(\)\_\+]/)==-1){

        
        error.innerHTML="Password must contain special characters"
        error.style.color="Red"
        error.style.display="Block"
    }

    else{

        var error= document.getElementById("pass-Error")
        error.innerHTML="Password is Good"
        error.style.color="Green"
        error.style.display="Block"
    }
   
var userName={

    user:username,
    email:emailID,
    paswd:password,
    

}

var data=JSON.stringify(userName)

if (emailID.length>=3 && error.innerHTML==="Password is Good"){


    firebase.auth().createUserWithEmailAndPassword(emailID, password).then(function()
    {   
        firebase.firestore().collection('userData').add(
            userName
        ).then(function(){
            localStorage.setItem("userName",data)
        
            location.replace("./src/transaction.html")
            alert("Everyting working")
        })
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
      });

    
}

else{

    error.innerHTML="Invalid Password or Username"
    error.style.color="Red"
    error.style.display="Block"

}
var username=document.getElementById('user1').value=""
var emailID=document.getElementById("email1").value=""
var password=document.getElementById("password1").value=""

}




function login(){

    event.preventDefault()

    var emailID=document.getElementById('exampleInputEmail1').value
    var password=document.getElementById('exampleInputPassword1').value

    firebase.auth().signInWithEmailAndPassword(emailID, password).then(function()
    {

    
    window.location.href="./src/transaction.html"

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    


        
    }

    


