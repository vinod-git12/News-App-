const getData = async () => {
  let response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=e9d46735e9d4461193696028432e3092`)

const newsData =  response.data.articles
  console.log(newsData)
  newsInfo(newsData)
}
const value = (e) => {
  e.preventDefault()
  const sourceValue = document.querySelector("#choices").value
  getData(sourceValue)
}
getData()

 const newsInfo = (newsData) => {
   return newsData.forEach((source) => {
     const option = document.createElement("option")
     option.textContent = source.source.name
     document.querySelector("#choices").appendChild(option)
     
     
 })
 }
// function removeChoice() {
//   const removeChoice1 = document.querySelector('#append-choices')
//   while (removeChoice1.lastChild) {
//     removeChoice1.removeChild(removeChoice1.lastChild)
//   }
// }

const search = document.querySelector("#search")
search.addEventListener("click", 

function (displayInfo) {
  let title = document.createElement('h1')
  title.innerHTML = newsData[0].title
  console.log(newsData[0].title)
  const removeChoice1 = document.querySelector('#append-choices')
  removeChoice1.appendChild(title)
  
  return title
})




