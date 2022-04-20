let elMarketProduct = document.querySelector(".market-product");
let elMarBtn = document.querySelector(".mar-btn");
let elMarketListn = document.querySelector(".market-list");

let arr = []

elMarBtn.onclick = (e)=> {
  e.preventDefault();
  if (elMarketProduct.value.length==0){
    elMarketProduct.setAttribute( 'style', 'border-color: red !important');
    return
  }
  elMarketListn.innerHTML = ""
  let m = elMarketProduct.value.trim()
  arr.push(m)

arr.map(e => {
  let li = document.createElement("li")
  li.textContent = e

  elMarketListn.append(li)

  li.style.color = "green";
  li.style.fontSize = "28px";
})

}

