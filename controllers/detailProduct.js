const qlsp = new ServiceProducts()

const getIDFromURL = () => window.location.search.substr(1).split("=")[1] //id


const getDetailProduct = () => {
    qlsp.getProductbyID(getIDFromURL())
        .then((res) => {
            // console.log(res.data);
            const price = res.data.price.toLocaleString("en-US")
            document.querySelector(".detailImg img").src = res.data.img
            document.querySelector(".info h1").innerHTML = res.data.name
            document.querySelector(".info p").innerHTML = price + ' VNĐ'
            document.getElementById("detail").innerHTML = 'Detail : ' +res.data.message
            document.getElementById('addCart').onclick = function(e){
                addToCart(res.data,e,currentInd)
            }
            // document.getElementById('color1').innerHTML = res.data.imgDetails[0].color
            // document.getElementById('color2').innerHTML = res.data.imgDetails[1].color
            document.getElementById('color1').style.backgroundColor = `${res.data.imgDetails[0].color}`
            document.getElementById('color2').style.backgroundColor = `${res.data.imgDetails[1].color}`
            document.getElementById('description').innerHTML= + res.data.description 
        })
        .catch((error) => {
            console.log(error);
        })
}
getDetailProduct()


let sizeList = document.querySelectorAll('.sizeType div')
let currentInd;

let setCurrent = (index) => {

    currentInd =index;
    console.log(currentInd);
    sizeList.forEach((div,index)=>{
        div.style = 'border: 2px solid rgba(0, 0, 0, .1);'

    })
}

sizeList.forEach((div,index)=> {
    div.addEventListener('click',()=>{
        setCurrent(index)
        div.style = 'border: 2px solid rgba(0, 0, 0, .9);'
    })
})