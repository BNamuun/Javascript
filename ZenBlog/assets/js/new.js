
// link to the API
fetch('https://dummyjson.com/posts')
.then((resp) => resp.json())
.then((data) => {
    const filteredList = data.posts.filter((item, index) => index >= 0 && index < 5);
    const titleP = filteredList.map(item =>
       ` <div class="d-md-flex post-entry-2 half">
        <a href="single-post.html" class="me-4 thumbnail">
          <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid">
        </a>
        <div>
          <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
          <h3><a href="single-post.html">${item.title}
          <div class="d-flex align-items-center author">
            <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid"></div>
            <div class="name">
              <h3 class="m-0 p-0">Wade Warren</h3>
            </div>
          </div>
        </div>
      </div>)`).join('');
    //   console.log(titleP);
      document.getElementsByClassName('infoDiv')[0].innerHTML = titleP;
})

fetch('https://jsonplaceholder.typicode.com/photos')
.then((resp) => resp.json())
.then((photoUrl) =>{
    // console.log(photoUrl[0].url);
    const filteredPhoto = photoUrl.filter((item1, index1) => index1 >= 0 && index1 < 5);
    const photoPath = filteredPhoto.url.map(item2 =>{
        console.log(photoPath);
    })

})