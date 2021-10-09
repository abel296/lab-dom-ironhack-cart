// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const priceElement = product.querySelector('.price span')
  const price = priceElement.innerHTML

  const quantityElement = product.querySelector('.quantity input')
  const quantity = quantityElement.value

  const subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerText = price * quantity
  const subtotal = subtotalElement.innerHTML

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let total = 0
  const products = document.querySelectorAll('.product')
  products.forEach(elm => {
    total += parseFloat(updateSubtotal(elm))
  })

  // ITERATION 3
  //... your code goes here
  const totalBtnSpan = document.querySelector('#total-value span')
  totalBtnSpan.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productSubtotal = parseFloat(target.parentNode.parentNode.querySelector('.subtotal span').innerHTML)
  document.querySelector('#total-value span').innerText -= productSubtotal
  document.querySelector('tbody').removeChild(target.parentNode.parentNode)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnsArray = document.querySelectorAll('.btn-remove')
  removeBtnsArray.forEach(elm => elm.onclick = event => removeProduct(event))
});
