// Your code goes here


const funBus = document.querySelector('.main-navigation .logo-heading');
funBus.addEventListener('mouseover', function(eventObject){
    funBus.innerText = "Not-So Fun Bus";
});
funBus.addEventListener('mouseleave', function(eventObject){
    funBus.innerText = "Fun Bus";
   });


const welcomeToTheFunBus = document.querySelector('.container .intro h2');
welcomeToTheFunBus.addEventListener('dblclick', function(event){
    welcomeToTheFunBus.style.color = "red"; 
});
welcomeToTheFunBus.addEventListener('mouseleave', function(event){
    welcomeToTheFunBus.style.color = "black"; 
   });


const introText = document.querySelector('.container .intro p');
introText.addEventListener('click', function(event){
    introText.style.fontSize = "x-large";
    event.preventDefault();
});
introText.addEventListener('mouseleave', function(event){
    introText.style.fontSize = "medium";
});

const imageHidden = document.querySelector('.intro img');
imageHidden.addEventListener('mouseover', function(eventObject){
    imageHidden.width = 500;
});
imageHidden.addEventListener('mouseleave', function(eventObject){
    imageHidden.width = 800;
});

const imgMap = document.querySelector('.img-map');   
const imgFluid = document.querySelector('.img-fluid');

imgMap.addEventListener('mouseover', function(eventObject){
    imgMap.setAttribute("src", "https://picsum.photos/376/282?random");
});
imgMap.addEventListener('mouseleave', function(eventObject){
imgMap.setAttribute("src", "img/adventure.jpg");
imgMap.setAttribute("class", "bounce");
});   

imgFluid.addEventListener('mouseover', function(eventObject){
    imgFluid.setAttribute("src", "https://picsum.photos/376/282?random");
});
imgFluid.addEventListener('mouseleave', function(eventObject){
    imgFluid.setAttribute("src", "img/fun.jpg");
    imgFluid.setAttribute("class", "bounce");
});   