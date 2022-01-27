function validateRegister()
{
    var name=document.getElementById("name").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var check = document.getElementById("chk").checked;

    if(name !="")
    {
        if(name.length>5)
        {
            if(name == name.toLowerCase())
            {              
                if(lastName!="")
                {
                    if(lastName.length>=1)
                    {
                        if(email!="")
                        {
                            if(email.length>4 &&email.length<16)
                            {
                                if(password!="")
                                {
                                    if(password.length>8 && password.length<18)
                                    {
                                        if(check == true)
                                        {
                                            alert("Account Created Succesfully please Login.");
                                            location.replace("index.html");
                                            //document.getElementById("resp").innerHTML="Account created";
                                        }
                                        else
                                        {
                                            alert("Agree Dropbox terms..");
                                        }
                                    }
                                    else
                                    {
                                        alert("Password should be of 8 to 18 characters.");
                                        //document.getElementById("resp").innerHTML="Invalid password";
                                    }
                                }

                                else
                                {
                                    alert("Password cannot be empty");
                                    //document.getElementById("resp").innerHTML="password cannot be empty";
                                }
                            }
                            else
                            {
                                alert("Invalid Email id");
                                //document.getElementById("resp").innerHTML="Invalid Email";
                            }
                        } 
                        else
                        {
                            alert("Email cannot be empty");
                           // document.getElementById("resp").innerHTML="Email cannot be empty";
                        }   
                    }
                    else
                    {
                        alert("Invalid Lastname");
                        //document.getElementById("resp").innerHTML="Invalid lastName";
                    }
                }
                else
                {
                    alert("Lastname canot be Empty");
                    //document.getElementById("resp").innerHTML="lastName cannot be empty";
                }
            }  
            else
            {
                alert("Invalid Username");
                //document.getElementById("resp").innerHTML="Invalid UserName";
            }
        }
        else
        {
            alert("Invalid name");
            //document.getElementById("resp").innerHTML="Invalid name";
        }

    }
    else
    {
        alert("Name cannot be empty");
        //document.getElementById("resp").innerHTML="name cannot be empty";
    }       
}




                
            
        
            

