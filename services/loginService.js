function LoginService() {
    this.signIn = function (email,password) {
        return axios({
            method: "POST",
            url: "https://nike-sever-vtcoder.glitch.me/users/login",
            data : {
                email: email,
                password: password,
              }

        });
    };

    this.signUp = function (user) {
        return axios({
            method: "POST",
            url: "https://nike-sever-vtcoder.glitch.me/users/create",
            data :  user

        });
    };
}

