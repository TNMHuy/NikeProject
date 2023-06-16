var qlsp = new ServiceProducts()

function showSixProduct() {
    qlsp.getAllProduct()//=> promise
        .then(function (res) {
            // console.log(res.data);
            renderMainProducts(res.data.slice(2,60));
            // console.log(res.data);
        })
        .catch(function (err) {
            // console.log(err.message);
        })
}
showSixProduct()

let mainProducts=[];
const renderMainProducts = (list) => {
    let content="";
    
    for(var i =0; i<list.length;i++){
        if(list[i].typeProduct==='shoes'){
            mainProducts.push(list[i])
        }
    }
    // console.log(list);
    // console.log(mainProducts);
    
    mainProducts.forEach((item) => {
        const price = item.price.toLocaleString("en-US")
        content +=`
        <div class="product ">
        <a class="deafalt" href="/detail.html?id=${item._id}">
        <img class="productImage" src="${item.img}" alt="" />
        <div class="subProduct">
        <span class="productName">${item.name}<span/>
        <p class="productPrice"> ${price} VND<p/>
        </div>
        </a>
    </div>
        `
    })
    document.getElementById("mainProduct").innerHTML = content;

}

