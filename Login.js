function validate(){
    let Nickname = document.getElementById("txtnickname").value
    let Fullname = document.getElementById("txtfullname").value
    let Email = document.getElementById("txtemail").value
    let Password = document.getElementById("txtpassword").value
    let Alamat = document.getElementById("txtalamat").value
    let CB = document.getElementById("check").checked

    if(Nickname == ""){
        return showerror("Name must be filled")
    }else if(Fullname == ""){
        return showerror("Please fill the full name")
    }else if(Email.indexof("@") == "-1"){
        return showerror("Email must be contains '@'")
    }else if(!Email.endsWith(".com")){
        return showerror("Email must be ends with '.com'")
    }else if(Password.length < 3 || password.length > 12){
        return showerror("Password must be 3 - 12 characters")
    }else if(Alamat == ""){
        return showerror("Fill the Address Please")
    }else if(!CB){
        return showerror("Check the privacy & policy box")
    }
}
let error = document.getElementById("error")
function showerror(massage){
    error.innerHTML=massage
    return false
}