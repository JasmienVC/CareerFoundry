const courses = document.querySelector('#courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const info = document.querySelector('#info');
const array = []



fetch(url)
  .then(response => response.json())
  .then((data) => {
    let i = 0
      data.forEach((result) => {
      array.push(result.slug)
      const course = `<li id=course-item-${i}><a href="">${result.title}</a></li>`
      courses.insertAdjacentHTML("beforeend",  course)
      i = i + 1
    })
  })

document.addEventListener("click", (event) => {
  event.preventDefault()
  fetch(`${url}/${array[0]}`)
    .then(response => response.json())
    .then((data) => {
      info.innerHTML = ""
      info.insertAdjacentHTML("beforeend", `
      <p>Description: ${data.description}</p>
      <p>Next start date: ${data.start_dates[0]}</p>
      <p> All start dates: ${data.start_dates}</p>
      <p>Price in dollar: ${data.prices[0].amount}$</p>
      <p>Price in euro: ${data.prices[1].amount}€</p>
      `)
    })
})
