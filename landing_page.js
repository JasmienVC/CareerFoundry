const courses = document.querySelector('#courses');
const url = "https://private-e05942-courses22.apiary-mock.com/courses";
const info = document.querySelector('#info');
const urls = []



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
          fetch((url + '/' + urls[index]))
            .then(response => response.json())
            .then((data) => {
              info.innerHTML = ""
              courses.innerHTML = ""
              info.insertAdjacentHTML("beforeend", `
              <p>Description: ${data.description}</p>
              <p>Next start date: ${data.start_dates[0]}</p>
              <p> All start dates: ${data.start_dates}</p>
              <p>Price in dollar: ${data.prices[0].amount}$</p>
              <p>Price in euro: ${data.prices[1].amount}€</p>
              <button><a href="javascript:window.location.href=window.location.href">Back</a></button>
              `)
            })
        })
      })
  })


//   document.querySelectorAll("button").forEach((b) => {
//     b.addEventListener("click", (event) => {
//       event.preventDefault()
//       console.log(urls);
//       fetch((url + '/' + urls[j]))
//         .then(response => response.json())
//         .then((data) => {
//           info.innerHTML = ""
//           courses.innerHTML = ""
//           info.insertAdjacentHTML("beforeend", `
//           <p>Description: ${data.description}</p>
//           <p>Next start date: ${data.start_dates[0]}</p>
//           <p> All start dates: ${data.start_dates}</p>
//           <p>Price in dollar: ${data.prices[0].amount}$</p>
//           <p>Price in euro: ${data.prices[1].amount}€</p>
//           <button>Back</button>
//           `)
//         })
//         j = j + 1
//     })
//   })
// })
