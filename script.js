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
    // console.log(results);
    destinationData(results)
  } catch (error) {
    console.log(error);
  }

} destination();


function destinationData(results) {
  let listDiv = document.createElement("div")
  let titleTag = document.createElement("p")
  titleTag.innerText = results.data.attributes.name
  lists.append(listDiv)

  listDiv.append(titleTag)


  let languageTag = document.createElement("h4")
  languageTag.innerText = results.data.attributes.airbnb_url
  lists.append(listDiv)

  listDiv.append(languageTag)
  // let airbnbTag = document.createAttribute("href")
  // airbnbTag.value = results.data.attributes.airbnb_url
  // lists.append(listDiv)

  // listDiv.setAttributeNode(airbnbTag)
  // results.included.forEach((icon) => {

  // })
  // Object.values(results).forEach((result) => {
  //   console.log(result)
  // listDiv.classList.add("city")
  // lists.append(newDiv)

  // let h3 = document.createElement("h3")
  // h3.innerText = attributes.name
  // console.log(h3)
  // listDiv.append(h3)
}

destinationData(citys);







