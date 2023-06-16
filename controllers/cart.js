const setCartLocal = () => {
    let cart = localStorage.getItem('cart')
    if(!cart){
        const cartString= JSON.stringify(qlsp.list)
        // console.log(qlsp.list);
        localStorage.setItem('cart',cartString)
    }
    
}

 setCartLocal();
 const renderCart =(list) => {
    

    // console.log((list));    
    // bước 2 : dom cart ra giao diện
}

 const getCartLocal = () => {
    let cart = localStorage.getItem('cart')
    qlsp.list = JSON.parse(cart)
    document.getElementById('quantity').attributes[2].value = qlsp.list.length
    renderCart(qlsp.list)
 }

 getCartLocal();


 const addToCart = (product,e,index) => {
    const productSelected= {
        product: product,
        index : index
    }
    e.preventDefault()
    let cart = localStorage.getItem('cart')
    qlsp.list = JSON.parse(cart)
    qlsp.list.push(productSelected)
    const cartString= JSON.stringify(qlsp.list)
    localStorage.setItem('cart',cartString)
    location.reload()
 }

