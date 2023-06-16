function ServiceProducts() {
    this.list =[]
    this.getAllProduct = function () {
        return axios({
            method: "GET",
            url: "https://nike-sever-vtcoder.glitch.me/product",
        });
    };
    this.getProductbyID = function (id) {
        return axios({
            method: "GET",
            url: `https://nike-sever-vtcoder.glitch.me/product/${id}`,
        });
    };
}

