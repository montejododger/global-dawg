import { getDogInfo, getDogImg } from "./dogAPI.js";

export const fetchSelectedDogs = async () => {
    const dogs = [
        "Chinese Shar-Pei",
        "Labrador Retriever",
        "Golden Retriever",
        "Shih Tzu",
        "Alaskan Husky",
        "Shiba Inu",
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
        console.log(error);
    }
};

export function createDogContainer(dogData) {
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
    li.append(name);  // Append the dog name to the li element

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

export function createImgContainer(dogImgData) {
    const dog = dogImgData[0].breeds[0];
    const formattedName = dog.name.toLowerCase().replace(/\s+/g, "-");
    // console.log(formattedName);

    const imgItem = document.createElement("li");
    imgItem.className = `dog-left-img-item ${formattedName}`;
    imgItem.dataset.dog = formattedName;
    // console.log("item list: ", imgItem);

    imgItem.innerHTML = `<img src="${dogImgData[0].url}" alt="${dog.name}">`;
    imgItem.onclick = displayDogInfo.bind(null, formattedName);

    document.querySelector(".dog-eight-img-list").appendChild(imgItem);

    return imgItem;
}

function displayDogInfo(clickedDog) {
    const allInfoContainers = document.querySelectorAll(".dog-item-info");
    allInfoContainers.forEach(
        (container) => (container.style.display = "none")
    );

    const blackBox = document.querySelector(".dog-eight-info-container");


    const infoContainer = document.querySelector(
        `.dog-item-info.${clickedDog}`
    );

    
    if (infoContainer) {
        blackBox.classList.remove("hidden")
        infoContainer.style.display = "block";
    } else {
        console.error(`No info container found for ${clickedDog}`);
    }
}
