// select our button
const selectButton = document.querySelector("#search");
console.log(selectButton);
// Attach event listener
selectButton.addEventListener("click", destination);

const input = document.querySelector("input");
const lists = document.querySelector(".returnMyData");



async function destination() {
  try {
    let res = await axios.get(`https://api.roadgoat.com/api/v2/destinations/${input.value}`, {
      auth: {
        username: '410baaf2d19c1a61ddb6ce8fe3e76441',
        password: 'c562ed1a393a50bdea4d7a9293a838ca'
      }
    })
    let results = res.data
    console.log(results);
    destinationData(results)
  } catch (error) {
    console.log(error);
  }
}


function destinationData(results) {
  let listDiv = document.createElement("div")
  let titleTag = document.createElement("p")
  titleTag.innerText = results.data.attributes.name
  titleTag.classList.add("title")
  lists.append(listDiv)
  listDiv.append(titleTag)


  let a = document.createElement('a')
  a.setAttribute("href", results.data.attributes.airbnb_url)
  a.setAttribute('target', '_blank')
  a.innerText = "AirbNb link "
  lists.append(listDiv)
  listDiv.appendChild(a)

  let c = document.createElement('a')
  c.setAttribute("href", results.data.attributes.kayak_car_rental_url)
  c.setAttribute('target', '_blank')
  c.innerText = "Rent a car here "
  lists.append(listDiv)
  listDiv.appendChild(c)

  let t = document.createElement('a')
  t.setAttribute("href", results.data.attributes.getyourguide_url)
  t.setAttribute('target', '_blank')
  t.innerText = "Let's get Exploring "
  lists.append(listDiv)
  listDiv.appendChild(t)


  // generating the safety object of the destination

  let sTag = document.createElement("p")
  let safetyObj = results.data.attributes.safety
  let safetyLocation = Object.values(safetyObj)[0]
  sTag.innerText = safetyLocation.text
  lists.append(listDiv)
  listDiv.appendChild(sTag)

  let s2Tag = document.createElement("p")
  s2Tag.innerText = safetyLocation.subText
  lists.append(listDiv)
  listDiv.appendChild(s2Tag)

  // generating budget object of destination

  let bTag = document.createElement("p")
  let budgetObj = results.data.attributes.budget
  let budgetLocation = Object.values(budgetObj)[0]
  console.log(budgetLocation)
  bTag.innerText = budgetLocation.text
  lists.append(listDiv)
  listDiv.appendChild(bTag)

  let b2Tag = document.createElement("p")
  b2Tag.innerText = budgetLocation.subText
  lists.append(listDiv)
  listDiv.appendChild(b2Tag)

  // generating covid object of destiation

  let cTag = document.createElement("p")
  let covidObj = results.data.attributes.covid
  let covidLocation = Object.values(covidObj)[0]
  console.log(covidLocation)
  cTag.innerText = covidLocation.text
  lists.append(listDiv)
  listDiv.appendChild(cTag)




  // generating pictures of destination

  // console.log(results.data.relationships.photos)
  if (results.data.relationships.photos) {
    let img = document.createElement("img")
    // results.relationships.photos.data[0].id 
    let obj = results.included.find(str => str.id === results.data.relationships.photos.data[0].id)
    // console.log(obj)
    img.setAttribute("src", obj.attributes.image.large)
    img.classList.add("images")
    lists.append(listDiv)
    listDiv.appendChild(img)
  } else {
    let imgs = document.createElement("img")
    imgs.setAttribute("src", results.included[1].attributes.image.large)
    imgs.classList.add("defaultimage")
    lists.append(listDiv)
    listDiv.appendChild(imgs)
  }
}

// } destinationCity(citys)



