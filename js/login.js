function validateLogin(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email!="")
    {
        if(email.length >4 && email.length<16)
        {
            if(password!="")
            {
                if(password.length>8 && password.length<18)
                {
                    alert("Login Success");
                    location.replace("home.html");
                    //document.getElementById("resp").innerHTML="Login Success";
                }
                else
                {
                    alert("Password length should be between 8 to 18");
                    //document.getElementById("resp").innerHTML="Invalid password";
                }
            }
            
            else
            {
                alert("Password cannot be Empty");
                //document.getElementById("resp").innerHTML="password cannot be empty";
            }
        }
        
        else
        {
            alert("Email id length should be between 4 to 15");
            //document.getElementById("resp").innerHTML="Invalid Email";
        }
    }

    else
    {
        alert("Email cannot be Empty");
        //document.getElementById("resp").innerHTML="Email cannot be empty";
    }
}