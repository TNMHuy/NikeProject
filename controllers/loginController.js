
var loginService = new LoginService()
const getEle = (id) => document.getElementById(id);
//sign in
const login =() =>{

    let email = getEle('txtEmail1').value
    let password = getEle('txtPass1').value
    if(email==""){
        getEle('checkEmail').innerHTML = "(*) chua dien email";
        getEle('checkEmail').style.color = 'red';
    }
    if(password==""){
        getEle('checkPass').innerHTML = "(*) chua dien password";
        getEle('checkPass').style.color = 'red';
    }

    loginService.signIn(email,password)
    .then((res)=>{
        // console.log(res);
        localStorage.setItem("LOGIN",JSON.stringify(res.data));
        let data = JSON.parse(localStorage.getItem("LOGIN"));

        if(data){
            window.location.assign("./index.html")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

//sign up
const signUp=()=>{
    // lay input
    
    let  name = getEle('txtName').value
    let  email = getEle('txtEmail').value
    let  password = getEle('txtPass').value
    let  age = getEle('txtAge').value
    let  userType = "user"
    var user = new User(name,email,password,age,userType);
    console.log(user);
    loginService
       .signUp(user)
       .then((res)=>{
        localStorage.setItem("LOGIN", JSON.stringify(res.data));
        window.location.assign("./index.html");

       })
       .catch((error)=>{
        console.log(error);
       })
}
//check validate