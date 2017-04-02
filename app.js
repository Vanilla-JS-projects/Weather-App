const api =  'https://api.darksky.net/forecast/'
let getweather = document.getElementById("submit")
let condition = []
let temp = 0
let cloud = 'icons/cloud.png'
let cloud1 = 'icons/cloud1.png'
let cloud2 = 'icons/cloud2.png'
let rain1 = 'icons/rain1.png'
let rain2 = 'icons/rain2.png'
let rain3 = 'icons/rain3.png'
let snow1 = 'icons/snow1.png'
let snow2 = 'icons/snow2.png'
let storm1 = 'icons/storm1.png'
let storm2 = 'icons/storm2.png'
let sun1 = 'icons/sun1.png'
let sun2 = 'icons/sun2.png'

getweather.addEventListener('click', (e) => {
    e.preventDefault()
    let key = "966d82030b7d19a04bc492ce1c8c28ea"
    let lat = document.getElementById("latitude").value
    let long = document.getElementById("longitude").value
    let link = api+key+"/"+lat+','+long
  
     fetch(`${link}`)
    .then((res) => res.json())
    
    .then(function(data){
     temp = Math.round((data.currently.temperature - 32) * 5 / 9)
     condition.push(JSON.stringify(data.currently.summary))
     
      if(condition.includes("cloudy","clouds","partly cloudy","mostly cloudy","over-cast"))
      {    
        document.getElementById("images").innerHTML = '<img src="' + cloud + '">' + '<img src="' + cloud1 + '">' + '<img src="' + cloud2 + '">'
      }
      if(condition.includes("sunny","sun","sunshine","partly sunny"))
      {    
        document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
      }
     if(condition.includes("rain","rainy","light drizzle","drizzle","showers","rain showers"))
      {    
        document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
      }
     if(condition.includes("snow","snowy","snowfall"))
      {    
        document.getElementById("images").innerHTML = '<img src="' + snow1 + '">' + '<img src="' + snow2 + '">'
      }
     if(condition.includes("storm","snowstorm","stormy"))
      {    
        document.getElementById("images").innerHTML = '<img src="' + storm1 + '">' + '<img src="' + storm2 + '">' 
      }
     
     document.getElementById("temp").innerHTML = "Temperature: " +  temp+" C" 
     document.getElementById("condition").innerHTML = "Description: " + condition
     
    })
    
    .catch((e)=>console.log(`something is wrong`))
    
})


// long :51.5074
// lat  :0.1278


// ERROR IN CONSOLE :::::::::::::
//  Fetch API cannot load https://api.darksky.net/forecast/966d82030b7d19a04bc492ce1c8c28ea/51.5074,0.1278.
// No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://preview.c9users.io'
// is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to 
// fetch the resource with CORS disabled.

// SO I HAVE USED A CHROME EXTENSION : https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
// PROGRAM ONLY WORKS AFTER ENABLING IT.




