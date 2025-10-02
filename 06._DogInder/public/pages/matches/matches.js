
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");

function getMatches() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((result) => {
        const dog = {
            imageURL: result.message
        };
        createMatchesProfile(dog);
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
