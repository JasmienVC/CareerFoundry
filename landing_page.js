const courses = document.querySelector('#courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const my_object = {}



fetch(url)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
      my_object[result.title] = result.slug
      const course = `<li class="course-item"><a href="">${result.title}</a></li>`
      courses.insertAdjacentHTML("beforeend", course)
    })
  })

courses.addEventListener("click", (event) => {
  event.preventDefault() // <-- to prevent <form>'s native behaviour
  console.log(event.currentTarget)
})
