//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// Pdgpn76oR0SCDKTH0ahz0BV7bOFGjqhGocs3GF2O

 document.querySelector('button').addEventListener('click', getPicture)
 console.log(choice)

 function getPicture (){
     let date = document.querySelector('#userInput').value
     let url = `https://api.nasa.gov/planetary/apod?api_key=Pdgpn76oR0SCDKTH0ahz0BV7bOFGjqhGocs3GF2O&date=${date}`
    
    //const url = 'https://api.nasa.gov/planetary/apod?api_key=Pdgpn76oR0SCDKTH0ahz0BV7bOFGjqhGocs3GF2O&date=${date}'
    // fetch using nasa api by date 
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
           document.querySelector('img').src =data.url 
        }else if (data.media_type === 'video'){
            document.querySelector('iframe').src =data.url 
        }else{
            alert('Unsupported Media Type')
        }
        document.querySelector('h1').innerText = data.title
       //ordata.hdurl
        document.querySelector('h2').innerText = data.explanation
    })
    .catch(err => {
        console.log('error $(err)')
    })
}