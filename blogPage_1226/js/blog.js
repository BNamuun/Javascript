
const postEl = document.getElementsByClassName('container')

fetch('https://jsonplaceholder.typicode.com/posts')
.then((postInf)=>{
    if (postInf.ok){
        return postInf.json()
    }
})
.then ((Intro) =>{
    // <div class="bg-light p-5 rounded">
    const infTitle = document.createElement('div')
    infTitle.className = "bg-light p-5 rounded" ` `
    const examp = infTitle.createElement('h1')
    postEl.append(infTitle)
    
})