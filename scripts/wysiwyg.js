(function() {
    "use strict";
})(); //needed on all JS files to run Grunt Watch

var objectsContainer = document.getElementById("objectsContainer");
var inputArea = document.getElementById("inputArea");
var personIdNum = 0;
var selectedPerson = null;
var userText = null;

// Create an array of objects that represents famous people (see structure below). #1

var famousPeople = [{
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "../images/tomoegozen.jpg",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}, {
    title: "American Hero",
    name: "Benjamin Franklin",
    bio: "Benjamin Franklin was one of the Founding Fathers of the United States. Franklin was a renowned polymath and a leading author, printer, political theorist, politician, freemason, postmaster, scientist, inventor, civic activist, statesman, and diplomat. ",
    image: "../images/benfranklin.jpg",
    lifespan: {
        birth: 1706,
        death: 1790
    }
}, {
    title: "Animal Guardian",
    name: "Joy Adamson",
    bio: "Joy Adamson won international renown with her African wildlife books, especially the trilogy describing how the couple raised a lion cub, Elsa. In 1961 she founded the Elsa Wild Animal Appeal. At age 69 she was murdered by a disgruntled employee.",
    image: "images/joyadamson.jpg",
    lifespan: {
        birth: 1910,
        death: 1980
    }
}, {
    title: "Indian Dancer",
    name: "Rukmini Devi Arundale",
    bio: "Rukmini Devi Arundale was an Indian theosophist, dancer and choreographer of the Indian classical dance form of Bharatanatyam, and an activist for animal rights and welfare.",
    image: "images/rukminideviarundale.jpg",
    lifespan: {
        birth: 1904,
        death: 1986
    }
}];
// create a DOM element to hold each individual object
famousPeople.forEach(function(item, index){//loops through famousPeople array and creates a individual objects named famousPerson
    var bgcolor;
    if(index % 2 === 0) {
        bgcolor = "yellowBack";
    }
    else {
        bgcolor = "blueBack";
    }
    let famousPerson = `<div id="person--${index}" class="${bgcolor}">
                            <h4>Title: ${item.title}</h4>
                            <h4>Name: ${item.name}</h4>
                            <p>Bio: ${item.bio}</p>
                            <img src="${item.image}" alt="${item.name}" class="pics">
                            <h5>Born: ${item.lifespan.birth}</h5>
                            <h5>Died: ${item.lifespan.death}</h5>
                        </div>`;
                    objectsContainer.innerHTML += `<div class="divObjects">${famousPerson}</div>`;
                    let personContainer = document.getElementById(`person--${index}`);
                    // console.log("personContainer", personContainer);


});



Array.from(objectsContainer.children).forEach(function(item){
     item.addEventListener("click", function(event){
                    if(selectedPerson !== null){
                    selectedPerson.classList.remove("dotTheBox");
                    }
                    selectedPerson = item;
                    selectedPerson.classList.add("dotTheBox");
                    userText = selectedPerson.getElementsByTagName("p")[0];
                    inputArea.focus();
         });
 });

inputArea.addEventListener("keyup", function(event){
     userText.innerHTML = inputArea.value;
        if(event.keyCode === 13){
        inputArea.value = "";
    }
});





