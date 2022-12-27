
const userProfileEl = document.getElementsByClassName('userProfile')[0];
const AddInfoEl = document.getElementsByClassName('bottom')[0];
console.log(userProfileEl);
fetch('https://randomuser.me/api')
.then((respond) =>{
    if(respond.ok){
        return respond.json()
    }
})
.then((userInfo) =>{

    // create a user Picture
     let userPic = document.createElement('div')
    // let userPic = document.getElementsByClassName('userP')
     userPic.innerHTML = `<img src="${userInfo.results[0].picture.large}"/>`
     userProfileEl.append(userPic)
     console.log(userPic);

    // create a userName div
    let AccInfo = document.createElement('div')
    let UserClass = AccInfo.classList.add('UserName')
    console.log(AccInfo);
    AccInfo.innerHTML = userInfo.results[0].name.title
    AccInfo.innerHTML += " " + userInfo.results[0].name.first
    AccInfo.innerHTML += " " + userInfo.results[0].name.last
    userProfileEl.append(AccInfo)

    // create a email add div
    let Email =  document.createElement('div')
    let EmailAdd = Email.classList.add('email')
    console.log(Email);
    Email.innerHTML = userInfo.results[0].email
    userProfileEl.append(Email)

    // create a phone div
    let phone =  document.createElement('div')
    let phoneAdd = phone.classList.add('phone')
    console.log(phone);
    phone.innerHTML = userInfo.results[0].phone
    userProfileEl.append(phone)

    // create a location div
    let location =  document.createElement('div')
    let locationAdd = location.classList.add('location')
    console.log(location);
    location.innerHTML =  'Location'
    location.innerHTML += " - " + userInfo.results[0].location.country
    location.innerHTML += " , " + userInfo.results[0].location.state
    AddInfoEl.append(location)

        // create a address div
        let address =  document.createElement('div')
        let addressAdd = address.classList.add('address')
        console.log(address);
        address.innerHTML =  'address'
        address.innerHTML += " - " + userInfo.results[0].location.street.number
        address.innerHTML += " , " + userInfo.results[0].location.street.name
        AddInfoEl.append(address)

        // create a timezone div
        let timeZone =  document.createElement('div')
        let timeZoneAdd = timeZone.classList.add('timeZone')
        console.log(timeZone);
        timeZone.innerHTML =  'timeZone '
        timeZone.innerHTML += userInfo.results[0].location.timezone.offset
        // timeZone.innerHTML += " , " + userInfo.results[0].location.street.name
        AddInfoEl.append(timeZone)
})