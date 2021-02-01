console.log("okay");
var user_password="hello"; //predefined password
console.log("userpass=",user_password);
function validate(){
    var name=document.getElementById("usname");
    var pass=document.getElementById("pass");
    var label=document.getElementsByClassName("error_msg");

    console.log("name dom:",name);
    console.log("label dom:",label);
    console.log( label[1].style.display);
    if (name.value=="")
    {
        label[1].style.visibility="hidden";
        console.log("name error");
        // alert("name error");
        // document.write("invalid name");
        name.style.border="2px solid red";
       label[0].style.visibility="visible";

      


        return false;
    }
    else if (pass.value!=user_password){
        label[0].style.visibility="hidden";
        console.log("CRT Pass=",user_password);
        console.log("entered PAssword=",pass.value);
        console.log("Username or Password mismatch");
        label[1].style.visibility="visible";
        // console.log( label[1].style.display);
        name.value="";
        pass.value="";
        return false;


       
    }
    else{
    return true;
    }

}