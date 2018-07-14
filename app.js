
///////////////globaldeclaration
const api =  `http://api.openweathermap.org/data/2.5/weather?q=`
let getweather = document.getElementById("submit")
let tempshow = document.getElementById("temp")
let description = document.getElementById("condition")
let cords = document.getElementById("cords")
let condition = ""
let condition2
let latitude = ""
let longitude = ""
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

/////////////////click event
getweather.addEventListener('click', (e) => {
    e.preventDefault()
    let key = "{key}"
    let city  = document.getElementById("city").value
    let country = document.getElementById("country").value
    let link = api+city+','+country+"&appid="+key
    fetchweather(link)    
})


//////////////////fetching from api
function fetchweather(link){
     fetch(`${link}`)
    .then((res) => res.json())
    .then(function(data){
     temp = Math.round(data.main.temp-273.15)
     condition = (JSON.stringify(data.weather[0].description))
     condition2 = condition.toLocaleLowerCase().split(" ")
     longitude = data.coord.lon
     latitude = data.coord.lat
     print()     
    })
    .catch((e)=>console.log(`something is wrong`))
}


/////////////////////converting into fahrenheit 
function convert(){
   let faren = document.getElementById("faren") 
   faren.innerHTML = "Fahrenheit: " + temp * 9 / 5 + 32
   faren.style.fontWeight= 'bold'
}

//////////////////////////printing weather details on screen
function print(){
       
         if(condition.includes("broken clouds")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + cloud + '">' + '<img src="' + cloud1 + '">' + '<img src="' + cloud2 + '">'
          }

          if(condition.includes("cloudy")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + cloud + '">' + '<img src="' + cloud1 + '">' + '<img src="' + cloud2 + '">'
          }
           if(condition.includes("clouds")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + cloud + '">' + '<img src="' + cloud1 + '">' + '<img src="' + cloud2 + '">'
          }
           if(condition.includes("over-cast")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + cloud + '">' + '<img src="' + cloud1 + '">' + '<img src="' + cloud2 + '">'
          }
          if(condition.includes("sunny")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
          }
          if(condition.includes("haze")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
          }
           if(condition.includes("sun")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
          }
           if(condition.includes("sunshine")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
          }
            if(condition.includes("clear")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + sun1 + '">' + '<img src="' + sun2 + '">'
          }
         if(condition.includes("rain")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
          }
          if(condition.includes("shower")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
          }
         
         if(condition.includes("rainy")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
          }
         
         if(condition.includes("mist")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
          }
         
         if(condition.includes("drizzle")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + rain1 + '">' + '<img src="' + rain2 + '">' + '<img src="' + rain3 + '">'
          }
         
         if(condition.includes("snow")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + snow1 + '">' + '<img src="' + snow2 + '">'
          }
         if(condition.includes("snowy")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + snow1 + '">' + '<img src="' + snow2 + '">'
          }
         if(condition.includes("snowfall")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + snow1 + '">' + '<img src="' + snow2 + '">'
          }

         if(condition.includes("storm")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + storm1 + '">' + '<img src="' + storm2 + '">' 
          }
         if(condition.includes("snowstorm")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + storm1 + '">' + '<img src="' + storm2 + '">' 
          }
         if(condition.includes("stormy")==true)
          {    
            document.getElementById("images").innerHTML = '<img src="' + storm1 + '">' + '<img src="' + storm2 + '">' 
          }

         tempshow.innerHTML = "Temperature: " +  temp+"°" +"C" 
         description.innerHTML = "Description: " + condition
         cords.innerHTML =  "Latitude: " + latitude + "   " + " Longitude: " + longitude  
         
         //////////////// Little Bit of CSS Styling ////////
         document.getElementById("convert").style.display = 'block'
         tempshow.style.fontWeight = 'bold' 
         description.style.fontWeight = 'bold'
         cords.style.fontWeight = 'bold'

}

