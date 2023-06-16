// const checkAuth = () => {
//     let local = localStorage.getItem("LOGIN");
//     let isLogin = window.location.pathname == '/login.html'
//     if(local){
//         if(isLogin){
//             // let userType = JSON.parse(localStorage.getItem("LOGIN")).user.userType;
//             // let isAdmin = window.location.pathname == '/index.html'
//             window.location.assign('/index.html'); 

//             // if(userType=='admin'){
//             //     if(isAdmin){
//             //         window.location.assign('/admin/index.html');
//             //     }else{
//             //     }
//             //     return
//             // }
            
//         }
//         return
//     }
//     !isLogin && window.location.assign('/login.html')
// } 
// checkAuth()
// const checkUser = () => {
//     let local = localStorage.getItem("LOGIN");
//     let isLogin = window.location.pathname == '/admin/index.html'
//     let userType = JSON.parse(localStorage.getItem("LOGIN"))?.user.userType;
//     // console.log(userType.user.userType);
//     if(local){
//         if(isLogin&&userType=='user'){
//             window.location.assign('/index.html')
//         }
//         return
//     }

//     !isLogin&&userType=='admin'&&window.location.assign('/admin/index.html')
// }
// checkUser()