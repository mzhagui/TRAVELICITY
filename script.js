// select our button
const selectButton = document.querySelector("#search");
console.log(selectButton);
// Attach event listener
selectButton.addEventListener("click", destination);



const input = document.querySelector("input");
const lists = document.querySelector(".returnMyData");
const title = document.querySelector(".title");
let listDiv = document.createElement("div")
listDiv.classList.add("detailsDiv")

async function destination() {
  try {
    removeDestinations()
    let res = await axios.get(`https://api.roadgoat.com/api/v2/destinations/${input.value}`, {
      auth: {
        username: '410baaf2d19c1a61ddb6ce8fe3e76441',
        password: 'c562ed1a393a50bdea4d7a9293a838ca'
      }
    })
    input.value = ""
    let results = res.data
    console.log(results);
    destinationData(results)
  } catch (error) {
    console.log(error);
  }
}



function destinationData(results) {
  let titleDiv = document.createElement("div")
  let titleTag = document.createElement("p")
  titleDiv.classList.add("titleclass")
  titleTag.innerText = results.data.attributes.name
  title.append(titleDiv)
  titleDiv.append(titleTag)

  // creating links 

  // airbnb Links
  let linksDiv = document.createElement("div")
  linksDiv.classList.add("links")
  let a = document.createElement('a')
  a.setAttribute("href", results.data.attributes.airbnb_url)
  a.setAttribute('target', '_blank')
  a.innerText = "AirbNb link "

  lists.append(linksDiv)
  linksDiv.appendChild(a)


  // some of the destinations don't have a link for car rental so I guided it to kayak.com/cars.. the default website

  if (results.data.attributes.kayak_car_rental_url) {
    let c = document.createElement('a')
    c.setAttribute("href", results.data.attributes.kayak_car_rental_url)
    c.setAttribute('target', '_blank')
    c.innerText = "Rent a car here "
    lists.append(linksDiv)
    linksDiv.appendChild(c)
  } else {
    let clink = document.createElement('a')
    clink.setAttribute("href", "https://www.kayak.com/cars")
    clink.setAttribute('target', '_blank')
    clink.innerText = "Rent a car here"
    lists.append(linksDiv)
    linksDiv.appendChild(clink)
  }


  let t = document.createElement('a')
  t.setAttribute("href", results.data.attributes.getyourguide_url)
  t.setAttribute('target', '_blank')
  t.innerText = "Let's get Exploring "
  lists.append(linksDiv)
  linksDiv.appendChild(t)


  // generating pictures of destination
  let imgDiv = document.createElement("div")
  imgDiv.classList.add("image_div")
  // console.log(results.data.relationships.photos)
  if (results.data.relationships.photos) {
    let img = document.createElement("img")
    // results.relationships.photos.data[0].id 
    let obj = results.included.find(str => str.id === results.data.relationships.photos.data[0].id)
    // console.log(obj)
    img.setAttribute("src", obj.attributes.image.large)
    img.classList.add("image")
    imgDiv.append(img)
    lists.appendChild(imgDiv)
  } else {
    let imgs = document.createElement("img")
    imgs.setAttribute("src", results.included[1].attributes.image.large)
    imgs.classList.add("defaultimage")
    imgDiv.append(imgs)
    lists.appendChild(imgDiv)
  }

  // generating the safety object of the destination
  let safetyDiv = document.createElement("div")
  safetyDiv.classList.add("safety")
  let s = document.createElement("p")
  s.classList.add("s")
  s.innerText = "Safety"
  let sTag = document.createElement("p")
  let safetyObj = results.data.attributes.safety
  let safetyLocation = Object.values(safetyObj)[0]
  sTag.innerText = safetyLocation.text
  lists.append(safetyDiv)
  safetyDiv.appendChild(s)
  safetyDiv.appendChild(sTag)

  let s2Tag = document.createElement("p")
  s2Tag.innerText = safetyLocation.subText
  lists.append(safetyDiv)
  safetyDiv.appendChild(s2Tag)

  // generating budget object of destination
  let budgetDiv = document.createElement("div")
  budgetDiv.classList.add("budget")
  let b = document.createElement("div")
  b.classList.add("b")
  b.innerText = "Budget"
  let bTag = document.createElement("p")
  let budgetObj = results.data.attributes.budget
  let budgetLocation = Object.values(budgetObj)[0]
  console.log(budgetLocation)
  bTag.innerText = budgetLocation.text
  lists.append(budgetDiv)
  budgetDiv.appendChild(b)
  budgetDiv.appendChild(bTag)

  let b2Tag = document.createElement("p")
  b2Tag.innerText = budgetLocation.subText
  lists.append(budgetDiv)
  budgetDiv.appendChild(b2Tag)

  // generating covid object of destiation
  let covidDiv = document.createElement("div")
  covidDiv.classList.add("covid")
  let c2Tag = document.createElement("p")
  c2Tag.innerText = "COVID"
  let cTag = document.createElement("p")
  let covidObj = results.data.attributes.covid
  let covidLocation = Object.values(covidObj)[0]
  console.log(covidLocation)
  cTag.innerText = covidLocation.text
  lists.append(covidDiv)
  covidDiv.appendChild(c2Tag)
  covidDiv.appendChild(cTag)


}


function removeDestinations() {
  lists.innerHTML = ""
  title.innerHTML = ""
}



