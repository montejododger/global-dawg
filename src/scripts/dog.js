import { getDogInfo, getDogImg } from "./dogAPI.js";

// Fetches data about a predefined list of dog breeds.
export const fetchSelectedDogs = async () => {
    const dogs = [
        "Rottweiler",
        "Labrador Retriever",
        "Golden Retriever",
        "Great Dane",
        "Shiba Inu",
        "Chinese Shar-Pei",
        "Yorkshire Terrier",
        "German Shepherd",
    ];

    const dogInfoContainers = [];
    const dogImgContainers = [];

    try {
        const dogPromises = dogs.map(async (dog) => {
            const dogData = await getDogInfo(dog);
            const dogImg = await getDogImg(dogData.id);
            return { dogData, dogImg };
        });
        console.log(dogPromises); 

        const results = await Promise.all(dogPromises);

        results.forEach((result) => {
            dogImgContainers.push(createImgContainer(result.dogImg));
            dogInfoContainers.push(createDogContainer(result.dogData));
        });

        const dogInfoGallery = document.getElementById(
            "dog-eight-info-container"
        );

        dogInfoContainers.forEach((container) => {
            dogInfoGallery.appendChild(container);
        });
    } catch (error) {
        console.log("Error occurred while fetching dog information: ", error);
    }
};

// Creates and returns an HTML element containing dog information.
export function createDogContainer(dogData) {
    try {
        const formattedName = dogData.name.toLowerCase().replace(/\s+/g, "-");
        const li = document.createElement("li");
        li.classList.add("dog-item-info", formattedName);
        li.style.display = "none";

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
    } catch (error) {
        console.log(
            "Error occurred while creating dog info container: ",
            error
        );
    }
}

// Creates and returns an HTML element containing a dog image.
function createImgContainer(dogImgData) {
    try {
        const dog = dogImgData[0].breeds[0];
        const formattedName = dog.name.toLowerCase().replace(/\s+/g, "-");

        const imgItem = document.createElement("li");
        imgItem.className = `dog-left-img-item ${formattedName}`;
        imgItem.dataset.dog = formattedName;

        imgItem.innerHTML = `<img src="${dogImgData[0].url}" alt="${dog.name}">`;
        imgItem.onclick = displayDogInfo.bind(null, formattedName);

        document.querySelector(".dog-eight-img-list").appendChild(imgItem);

        return imgItem;
    } catch (error) {
        console.log(
            "Error occurred while creating dog image container: ",
            error
        );
    }
}

// Displays detailed information for the clicked dog breed.
function displayDogInfo(clickedDog) {
    try {
        const allInfoContainers = document.querySelectorAll(".dog-item-info");
        allInfoContainers.forEach(
            (container) => (container.style.display = "none")
        );

        const blackBox = document.querySelector(".dog-eight-info-container");

        const infoContainer = document.querySelector(
            `.dog-item-info.${clickedDog}`
        );

        if (infoContainer) {
            blackBox.classList.remove("hidden");
            infoContainer.style.display = "block";
        } else {
            console.error(`No info container found for ${clickedDog}`);
        }
    } catch (error) {
        console.log("Error occurred while displaying dog info: ", error);
    }
}
