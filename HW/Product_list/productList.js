// link to API typicon

fetch('https://dummyjson.com/products')
.then((resp) => resp.json())
.then((data) =>{
    const dataList = data.products;
    // console.log(dataList);
    const brandinf = dataList.map(item =>
        `<div class = 'briefInfo p-5 mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12'>
        <div class = "descr">
           <h2> ${item.brand} </h2>
           <p> ${item.description} </p>
           </div>
           <div class = "imageDiv">
                     <img class = "img-feature" src ="${item.images[0]}"
         
           <div class = "price d-flex">
           <h6> Price: $ ${item.price}</h6>
           <h6 class = "disc"> Discount:  ${item.discountPercentage} %</h6>
           <h5 class = "btn btn-primary text-white"> More </h5>
            </div>
            </div>
        </div>`
    ).join(" ")
    // console.log(brandinf);
    document.getElementById('productList').innerHTML = brandinf
})



const getValue = document.getElementsByClassName('inputField').Value
console.log(getValue);