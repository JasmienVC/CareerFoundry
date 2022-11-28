const courses = document.querySelector('#courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const info = document.querySelector('#info');
const slugs = []
const accessKey = "b604a70d37074e3a391d744f9d46e8656646cbbf58a81dabd89083e3"
const ipdata = `https://api.ipdata.co/?api-key=${accessKey}`

fetch(url)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
      const course = `<p class="course-item"}>${result.title}</p>`
      const courseButton = '<button class="course-btn">More Info</button>'
      courses.insertAdjacentHTML("beforeend", `<div class="my-card">${course}${courseButton}</div>`)
      slugs.push(result.slug)
    });

      document.querySelectorAll(".course-btn").forEach((b, index) => {
        b.addEventListener("click", (event) => {
          event.preventDefault()
          fetch(ipdata)
            .then(response => response.json())
            .then((data) => {
              if(data.is_eu) {
                fetch((url + '/' + slugs[index]))
                  .then(response => response.json())
                  .then((data) => {
                    info.innerHTML = ""
                    courses.innerHTML = ""
                    info.insertAdjacentHTML("beforeend", `<div class="course-info">
                    <p><b>Description</b>: ${data.description}</p>
                    <p><b>Next start date</b>: ${data.start_dates[0]}</p>
                    <p><b>All start dates</b>: ${data.start_dates}</p>
                    <p><b>Price</b>: ${data.prices[1].amount}€</p>
                    <a id="back" href="javascript:window.location.href=window.location.href">Back</a>
                    </div>`)
                  })
              } else
              {
                fetch((url + '/' + slugs[index]))
                  .then(response => response.json())
                  .then((data) => {
                    info.innerHTML = ""
                    courses.innerHTML = ""
                    info.insertAdjacentHTML("beforeend", `
                    <p>Description: ${data.description}</p>
                    <p>Next start date: ${data.start_dates[0]}</p>
                    <p>All start dates: ${data.start_dates}</p>
                    <p>Price: ${data.prices[0].amount}$</p>
                    <button><a href="javascript:window.location.href=window.location.href">Back</a></button>
                    `)
                  })
              }
            })
        })
      })
  })
