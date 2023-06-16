var qlsp = new ServiceProducts()

// const getIDFromURL = () => window.location.search.substr(1).split("=")[1];
// console.log(getIDFromURL());

// const getEle = (id) => document.getElementById(id);

function showAllProduct() {
    qlsp.getAllProduct()//=> promise
        .then(function (res) {
            // console.log(res.data);
            renderAllProducts(res.data);
            // console.log(res.data);
        })
        .catch(function (err) {
            // console.log(err.message);
        })
}
showAllProduct()

const renderAllProducts = (list) => {
    let content = "";
    list.forEach((item) => {
        // console.log(item.img);
        content += `
        <div class="product proCate">
            <a href="${item._id}">
            <img src="${item.img}" alt="" />
            <div>
            <span>${item.name}<span/>
            <p> ${item.price} <p/>
            <p> ${item.gender} <p/>
            </div>
            </a>
        </div>
            `
    });
    document.getElementById("showProducts").innerHTML = content;
}

