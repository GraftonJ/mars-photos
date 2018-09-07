document.addEventListener('DOMContentLoaded', (event) => {
      //Step 0: Ensure event listener works
      console.log('DOMContentLoaded')

      //Step 1: fetch some data from a server. axios? OMDBAPI
      let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&camera=fhaz&api_key=gAxMXQNXlPnc6I9neT00BCxN2vk5Cq0Qj5gLSSgf'
      axios.get(url)
        .then((response) => {
            //Step 2: Log Data and see what you are getting back as a response

            console.log();
            console.log(response.data);
            console.log(response.data.photos[0]['img_src'])
            console.log(response.status)
            //     //Step 3: Insert that data into your DOM, with some DOM creation/manipulation

            const marsPhoto = response.data.photos[0]['img_src']
            const div = document.getElementById('photo-div')
            const DOM_img = document.createElement("img")
            DOM_img.src = marsPhoto
            div.appendChild(DOM_img)
              //
              //     // ml3.innerText
              //     // loop over movie results, creating <li>'s inside an <ol>
              //
              //     // create ol
              //     let ol = document.createElement('ol')
              //     let li
              //
              //     for (var i = 0; i < movies.length; i++) {
              //       // create li
              //       li = document.createElement('li')
              //       li.innerText = `${movies[i].Title} (${movies[i].Year})`
              //       ol.appendChild(li)
              //     }
              //
              //     ml3.appendChild(ol)
              //
            })
        })
