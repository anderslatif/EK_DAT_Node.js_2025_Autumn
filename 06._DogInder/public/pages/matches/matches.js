let dogs = [];

const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");

function getMatches() {
    fetch("/api/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data;
        createMatchesProfile(dogs.pop());
    });
}

getMatches();

function createMatchesProfile(dog) {

    const dogMatchesImageImg = document.createElement("img");
    dogMatchesImageImg.src = dog.imageURL;
    dogMatchesImageImg.alt = "dog match profile picture";
    dogMatchesImageImg.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = "";

    dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg);
}
