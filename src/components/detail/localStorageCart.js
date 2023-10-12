function localStorageCart(size,buttons,productId,name,price,image) {

  if (!size) {
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
  }

  //obtener el carrito del localStorage y en caso que no exixsta, vamos a crear uno
  const carGet = localStorage.getItem('cart')
  const arrayCart=JSON.parse(carGet) || []


// guardar el carrito actualizado en localStorage


const arrayJSON = JSON.stringify(arrayCart)
localStorage.setItem("cart", arrayJSON)

  buttons.forEach((btn) => {
    btn.classList.remove('div__button--active')
  })

}

export default localStorageCart