function localStorageCart(size,buttons,productId,name,price,image) {

  if (!size) {
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
  }

  //obtener el carrito del localStorage y en caso que no exixsta, vamos a crear uno
  const carGet = localStorage.getItem('cart')
  const arrayCart=JSON.parse(carGet) || []

  /*[
    {size:'s', productId:1, name:'', price:'', image:'', quality:1}
    {size:'m', productId:1, name:'', price:'', image:'', quality:2}
    {size:'s', productId:18, name:'', price:'', image:'', quality:1}
    {size:'l', productId:12, name:'', price:'', image:'', quality:1}
  ]
  */
 const matched = arrayCart.find((product)=> product.productId === productId && product.zise === size)//me retorna el find el producto que cumpla con la condicion que estableci, o me devolvera undefined

 if(matched){
  //si el producto esta en el carrito aumentare la cantidad
  matched.quantity++;
 }else {
  //si el producto no esta en el carro lo creare, Recordar que estoy discriminando por id y talla de ropa
  arrayCart.push({size, productId, name, price,quantity:1 })
 }
 //({size:size, productId:productId, name:name, price:price,quantity:1 })


// guardar el carrito actualizado en localStorage


const arrayJSON = JSON.stringify(arrayCart)
localStorage.setItem("cart", arrayJSON)

  buttons.forEach((btn) => {
    btn.classList.remove('div__button--active')
  })

}

export default localStorageCart