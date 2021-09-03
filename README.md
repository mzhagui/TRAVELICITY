
# Project Overview

## Project Name

TRAVELICITY

## Project Description

My project is based on inspiration of traveling. I really like TripAdvisor website and I am trying to create my own version of it.

## API and Data Sample
https://api.roadgoat.com/api/v2/destinations/barcelona-spain
https://api.roadgoat.com/api/v2/destinations/auto_complete?q=barcelona
{"data":[{"id":"7831779","type":"destination","attributes":{"slug":"barcelona-spain","destination_type":"City","short_name":"Barcelona","name":"Barcelona, Spain","long_name":"Barcelona, Spain","latitude":41.38879,"longitude":2.15899,"bounding_box":null,"countable":true,"average_rating":4.68965517241379,"check_in_count":4803},"relationships":{"known_for":{"data":[{"id":"12","type":"known_for"},{"id":"4","type":"known_for"},{"id":"3","type":"known_for"},{"id":"17","type":"known_for"},{"id":"2","type":"known_for"},{"id":"8","type":"known_for"},{"id":"7","type":"known_for"},{"id":"21","type":"known_for"},{"id":"18","type":"known_for"},{"id":"1","type":"known_for"},{"id":"19","type":"known_for"},{"id":"6","type":"known_for"}]},"featured_photo":{"data":


## Wireframes
[!Wireframe] link https://www.figma.com/file/IHZfQo2vliJB4EcaJXMYu9/Travelicity?node-id=21%3A3
Desktop and tablet version

### MVP/PostMVP
 
#### MVP 
- Customize using flexbox
- Find and use external api 
- Render data on page 
- Allow user to select city, country and return data and images. 


#### PostMVP  

- Add second API, including flights/hotel accomodations and more information about the destination
- Use local storage to save user favorites
- Create more links in webpage

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 28| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 30| Project Approval | Complete
|August 30| Core Application Structure (HTML, CSS, etc.) | Complete
|August 31| Pseudocode / actual code | Complete
|September 1| Initial Clickable Model  | Ccomplete
|September 2| MVP | Complete
|September 3| Presentations | Incomplete

## Priority Matrix

https://docs.google.com/document/d/1sLyvbfBC0eVwtptoygTaRBTYzqXsegmFROUdIXQP3QA/edit

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3hrs |
| CSS | M | 2.5hrs| 3hrs | 6hrs|
| Tablet version | L | 2hrs | 2hrs |
| Post MVP | L | 3hrs | 3hrs | 0hrs |
| Responsivness | H | 3hrs | 3hrs | 4hrs|
| Creating HTML  | L | 2.5hrs | 2hrs | 3hrs |
| Creating DIV | L | 2hrs | 2hrs | 6hrs |
| Working with API | H | 3hrs| 2.5hrs | 6hrs |
| Generating data | H | 3hrs | 3hrs | 3hrs |
| Javascript Functions | H | 3hrs| 3hrs| 6hrs|
| Javascript Appending | H | 3hrs | 3hrs | 3hrs |
| Javascript ForEach | H | 3hrs | 3hrs | 3hrs |
| Total | H | 33.5hrs| 40hrs | 45hrs |

## Code Snippet

  I came across a problem where some destinations didn't have images so I had to create default images for those destinations. This allowed every place to have an image to display.

  
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
  } -->


## Change Log
 
 I made a lot of changes with the layout of my project. I also made changes in the data I wanted to display.