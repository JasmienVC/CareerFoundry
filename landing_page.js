const courses = document.getElementById('courses');
const my_courses = courses.querySelectorAll(".course-item");
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const my_object = {}

const allCourses = () =>  {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.forEach((result) => {
        my_object[result.title] = result.slug
        const course = `<li class="course-item"><a href="">${result.title}</a></li>`
        courses.insertAdjacentHTML("beforeend", course)
      })
    })
}

const courseDetails = (query) => {
  fetch(`https://private-e05942-courses22.apiary-mock.com/courses/${query}`)
    .then(response => response.json())
    .then((data) => {
      const details = `<ul class="list-items">
        <li><p>Description: ${data.description}</p></li>
        <li><p>Next start date: ${data.start_dates[0]}</p></li>
        <li><p> All start dates: ${data.start_dates}</p></li>
        <li><p>Price in dollar: ${data.prices[0].amount}</p></li>
        <li><p>Price in euro: ${data.prices[1].amount}</p></li>
      </ul>`
      courses.insertAdjacentHTML("beforeend", details)
    })
}

document.addeventlistener("DOMContentLoaded", (event) => {
  event.preventdefault() // <-- to prevent <form>'s native behaviour
  allCourses()
});

my_courses.addeventlistener("click", (event) => {
  event.preventdefault() // <-- to prevent <form>'s native behaviour
  const title = event.currenttarget.innerText
  const slug = my_object[title]
  courseDetails(slug)
});
