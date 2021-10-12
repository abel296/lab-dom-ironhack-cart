// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText

  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal

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
    total += updateSubtotal(elm)
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
  target.closest('.product').remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.querySelectorAll('.create-product input')[0].value
  const newProductPrice = document.querySelectorAll('.create-product input')[1].value

  const newProductRow = `<td class="name">
                            <span>Ironhack Rubber Duck</span>
                          </td>
                          <td class="price">$<span>25.00</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity" />
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                         </td>`

  const newProduct = document.createElement('tr')

  newProduct.classList.add('product')
  newProduct.innerHTML = newProductRow

  newProduct.querySelector('.name span').innerText = newProductName
  newProduct.querySelector('.price span').innerText = parseNewPrice() 

  function parseNewPrice() {
    newProductPrice.length === 1 ? newParsedPrice = `0${ newProductPrice }` : newParsedPrice = newProductPrice
    return parseFloat(newParsedPrice).toFixed(2)
  }

  document.querySelector('tbody').appendChild(newProduct)

  document.querySelectorAll('.create-product input')[0].value = ""
  document.querySelectorAll('.create-product input')[1].value = "0"

  const removeBtnNewProduct = newProduct.querySelector('.btn-remove')
  removeBtnNewProduct.onclick = event => {
    removeProduct(event)
    calculateAll()
  }
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnsArray = document.querySelectorAll('.btn-remove')
  removeBtnsArray.forEach(elm => {
    elm.onclick = event => {
      removeProduct(event)
    }
  })

  const createBtn = document.querySelector('#create')
  createBtn.onclick = () => {
    createProduct()
  }
});
