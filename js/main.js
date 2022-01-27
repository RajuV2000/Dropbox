function validateLogin(){
    
    var uName = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;

    if(uName != " ")
    {
        if(pass != " ")
        {
            document.getElementById("resp").alert = "Login success";
        }
        else{
            document.getElementById("resp").innerHTML = "Password is empty";
        }
    }
    else{
        document.getElementById("resp").innerHTML = "User name is Empty";
    }

}