const courses = document.querySelector('#courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const info = document.querySelector('#info');
const urls = []
const accessKey = "b604a70d37074e3a391d744f9d46e8656646cbbf58a81dabd89083e3"
const ipdata = `https://api.ipdata.co/?api-key=${accessKey}`

fetch(url)
  .then(response => response.json())
  .then((data) => {
      data.forEach((result) => {
      const course = `<li class=course-item}>${result.title}</li>`
      courses.insertAdjacentHTML("beforeend",  course)
      urls.push(result.slug)
      courses.insertAdjacentHTML("beforeend", '<button>More Info</button>')
    });

      document.querySelectorAll("button").forEach((b, index) => {
        b.addEventListener("click", (event) => {
          event.preventDefault()
          fetch(ipdata)
            .then(response => response.json())
            .then((data) => {
              if(data.is_eu) {
                fetch((url + '/' + urls[index]))
                  .then(response => response.json())
                  .then((data) => {
                    info.innerHTML = ""
                    courses.innerHTML = ""
                    info.insertAdjacentHTML("beforeend", `
                    <p>Description: ${data.description}</p>
                    <p>Next start date: ${data.start_dates[0]}</p>
                    <p>All start dates: ${data.start_dates}</p>
                    <p>Price: ${data.prices[1].amount}€</p>
                    <button><a href="javascript:window.location.href=window.location.href">Back</a></button>
                    `)
                  })
              } else
              {
                fetch((url + '/' + urls[index]))
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
