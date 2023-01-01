// link to API typicon
const SearchField = document.getElementById('inputVal');
let dataList  = [];
let datas = [];
SearchField.addEventListener("keyup", function(e){
    const searchInp = e.target.value;
    const jj = searchInp.toLowerCase();
    const filteredResults = dataList.filter(sItem => {
        const dataItem = sItem.brand.toLowerCase();
        return dataItem.includes(jj)
    })
    const filteredList = filteredResults.map(item =>
        `<div class = 'briefInfo p-5 mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12'>
        <div class = "descr">
           <h2 class = 'brand'> ${item.brand} </h2>
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
    document.getElementById('productList').innerHTML = filteredList
})


fetch('https://dummyjson.com/products')
.then((resp) => resp.json())
.then((data) =>{
     dataList = data.products;
    // console.log(dataList);
    const brandinf = dataList.map(item =>
        `<div class = 'briefInfo p-5 mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12'>
        <div class = "descr">
           <h2 class = 'brand'> ${item.brand} </h2>
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

// function Getdata(dataL){
//     const ListProduct = dataL 
//     .map(item =>{
//         return
//         `<div class = 'briefInfo p-5 mb-5 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12'>
//         <div class = "descr">
//            <h2 class = 'brand'> ${item.brand} </h2>
//            <p> ${item.description} </p>
//            </div>
//            <div class = "imageDiv">
//                      <img class = "img-feature" src ="${item.images[0]}"
         
//            <div class = "price d-flex">
//            <h6> Price: $ ${item.price}</h6>
//            <h6 class = "disc"> Discount:  ${item.discountPercentage} %</h6>
//            <h5 class = "btn btn-primary text-white"> More </h5>
//             </div>
//             </div>
//         </div>`
//     }).join(" ")
//     // console.log(brandinf);
//     document.getElementById('productList').innerHTML = ListProduct
// }
