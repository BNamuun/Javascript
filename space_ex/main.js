fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json#')
.then((resp) => resp.json())
.then((data) =>{
    console.log(data);
})