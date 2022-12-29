// link to API typicon
fetch('https://dummyjson.com/products')
.then((resp) => resp.json())
.then((data) =>{
    const dataList = data.products;
    console.log(dataList);
    const brandinf = dataList.map(item =>
        `<div class = 'briedInfo col-lg-12'>
           <h2> ${item.brand} </h2>
           <p> ${item.description} </p>
           <img src ="${item.images[0]}"
           <div class = "price d-flex">
           <h6>${item.price}</h6>
           <h6> ${item.discountPercentage}</h6>
            </div>
        </div>`
    ).join(" ")
    console.log(brandinf);
    document.getElementById('productList').innerHTML = brandinf
    
})
