const getData = async () => {
  let response = await axios.get(`http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e9d46735e9d4461193696028432e3092`)

const newsData =  response.data.articles
  console.log(newsData)
 newsInfo(newsData)
}
const value = (e) => {
  e.preventDefault()
  const sourceValue = document.querySelector("#choices").value
  console.log(sourceValue)
  getData(sourceValue)
  
}
getData()


 const newsInfo = (newsData) => {
   return newsData.forEach((source) => {
     const option = document.createElement("option")
     option.textContent = source.source.name
    //  console.log(source.source.name)
     //const sourceName = source.source.name
     document.querySelector("#choices").appendChild(option) 
  
     //displayInfo(newsData)
 })
 }


function removeChoice() {
  const removeChoice1 = document.querySelector('#append-choices')
  while (removeChoice1.lastChild) {
    removeChoice1.removeChild(removeChoice1.lastChild)
  }
}


// function displayInfo(newsData) {
//   // let title = document.createElement('h1')
//   // title.textContent = newsData[0].title
  
//   console.log(newsData[0].title)
//   const removeChoice1 = document.querySelector('#append-choices')
//   removeChoice1.appendChild(title)
//   //console.log(newsInfo)
  
  
// }

//const displayInfo = (newsData) => {
  const displayInfo = () => {
  // return newsData.forEach((article) => {
  //   let title = document.createElement('h1')
  // title.textContent = newsData[0].title
  // console.log(newsData[0].title)
  // const removeChoice1 = document.querySelector('#append-choices')
  // removeChoice1.appendChild(title)
  // return title
    // displayInfo(newsData)
    
  }


const search = document.querySelector("#search")
search.addEventListener("click", function () {
  console.log("plz work")
})






