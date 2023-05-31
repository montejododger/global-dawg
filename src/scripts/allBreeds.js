import { getAllBreeds, getDogImg } from "./dogAPI";

export const fetchAllDogs = async () => {
    // Create a container object to store the dog info and image elements for each dog
    const dogElements = {};

    try {
        const allDogs = await getAllBreeds();

        // Get the select element from the page
        const dogSelector = document.getElementById("dog-selector");

        allDogs.forEach((dog) => {
            // Create an option element for the dog and add it to the select element
            const option = document.createElement("option");
            option.value = dog.name;
            option.textContent = dog.name;
            dogSelector.appendChild(option);

            // Create the dog info and image elements and store them in the container object
            const dogInfoElement = createDogContainer(dog);
            const dogImgElement = createImgContainer(dog.image);
            dogElements[dog.name] = { dogInfoElement, dogImgElement };

            // Start with the dog info and image hidden
            dogInfoElement.style.display = "none";
            dogImgElement.style.display = "none";

            // Add the dog info and image elements to the page
            document
                .getElementById("all-dog-info-container")
                .appendChild(dogInfoElement);
            document
                .querySelector(".all-dog-img-container")
                .appendChild(dogImgElement);
        });

        // Add an event listener to the select element to show the correct dog info and image when a dog name is selected
        dogSelector.addEventListener("change", (event) => {
            const selectedDogName = event.target.value;

            // Hide all dog info and images
            for (let dogName in dogElements) {
                dogElements[dogName].dogInfoElement.style.display = "none";
                dogElements[dogName].dogImgElement.style.display = "none";
            }

            // Show the selected dog's info and image
            if (dogElements[selectedDogName]) {
                dogElements[selectedDogName].dogInfoElement.style.display =
                    "block";
                    dogElements[selectedDogName].dogImgElement.children[0].classList.add("dawg")
                dogElements[selectedDogName].dogImgElement.style.display =
                    "block";
            }
        });
    } catch (error) {
        console.log(error);
    }
};

function createDogContainer(dogData) {
    const formattedName = dogData.name.toLowerCase().replace(/\s+/g, "-");
    const li = document.createElement("li");
    li.classList.add("all-dog-info-container", formattedName);

    const propsToDisplay = {
        bred_for: "Bred For",
        temperament: "Temperament",
        life_span: "Life Span",
        breed_group: "Breed Group",
        height: "Height",
        weight: "Weight",
    };

    // Create an h3 element for the dog name
    const name = document.createElement("h3");
    name.textContent = dogData.name;
    li.append(name); // Append the dog name to the li element

    for (let prop in propsToDisplay) {
        const item = document.createElement("p");
        if (typeof dogData[prop] === "object") {
            // This handles height and weight which are objects
            item.textContent = `${propsToDisplay[prop]}: ${dogData[prop].imperial} (imperial) / ${dogData[prop].metric} (metric)`;
        } else {
            item.textContent = `${propsToDisplay[prop]}: ${dogData[prop]}`;
        }
        li.append(item);
    }

    return li;
}

function createImgContainer(dogImgData) {
    const dogImgId = dogImgData.id;

    const imgItem = document.createElement("li");
    imgItem.className = `all-dog-img-container ${dogImgId}`;
    imgItem.dataset.dog = dogImgId;

    imgItem.innerHTML = `<img src="${dogImgData.url}" alt="${dogImgData.id}">`;

    return imgItem;
}
