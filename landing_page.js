const courses = document.getElementById('courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";


fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.forEach((result) => {
      const course = `<li class="course-item"><a href="">${result.title}</a></li>`
      courses.insertAdjacentHTML("beforeend", course)
    })
  })
