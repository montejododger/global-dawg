import { getDogInfo, getDogImg, getAllBreeds } from "./dogAPI.js";

export const fetchSelectedDogs = async () => {
    const dogs = [
        "Chinese Shar-Pei",
        "Bull Terrier",
        "Golden Retriever",
        "Shih Tzu",
        "Australian Shepherd",
        "Shiba Inu",
        "Rottweiler",
        "Doberman Pinscher",
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

        const dogInfoGallery = document.getElementById("dog-info-container");

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
        name: "Name",
        bred_for: "Bred For",
        temperament: "Temperament",
        life_span: "Life Span",
        breed_group: "Breed Group",
        height: "Height",
        weight: "Weight",
    };

    for (let prop in propsToDisplay) {
        const item = document.createElement("p");
        if (typeof dogData[prop] === "object") {
            // This handles height and weight which are objects
            item.textContent = `${propsToDisplay[prop]}: ${dogData[prop].imperial} (imperial) / ${dogData[prop].metric} (metric)`;
        } else {
            item.textContent = `${propsToDisplay[prop]}: ${dogData[prop]}`;
        }
        // console.log("item: ", item);
        li.append(item);
    }

    return li;
}

export function createImgContainer(dogImgData) {
    const dog = dogImgData[0].breeds[0];
    const formattedName = dog.name.toLowerCase().replace(/\s+/g, "-");

    const imgItem = document.createElement("li");
    imgItem.className = `dog-img-item ${formattedName}`;
    imgItem.dataset.dog = formattedName;

    imgItem.innerHTML = `<img src="${dogImgData[0].url}" alt="${dog.name}">`;
    imgItem.onclick = displayDogInfo.bind(null, formattedName);

    document.querySelector(".dog-img-list").appendChild(imgItem);
}

function displayDogInfo(clickedDog) {
    const allInfoContainers = document.querySelectorAll(".dog-item-info");
    allInfoContainers.forEach(
        (container) => (container.style.display = "none")
    );

    const infoContainer = document.querySelector(
        `.dog-item-info.${clickedDog}`
    );
    if (infoContainer) {
        infoContainer.style.display = "block";
    } else {
        console.error(`No info container found for ${clickedDog}`);
    }
}


export const fetchAllDogs = async () => {
    try {
        const allDogs = await getAllBreeds();
        const allDogContainter = []; 

        const select = document.createElement("select");
        select.id = "dogs-select";

        allDogs.forEach((dog) => {
            const option = document.createElement("option");
            option.value = dog.name;
            option.text = dog.name;
            select.appendChild(option);
        });

        console.log(select);
        document.body.appendChild(select); // Append the select to the body (or to another container)

        select.addEventListener("change", async (event) => {
            const selectedDogName = event.target.value;
            const dogData = await getDogInfo(selectedDogName);
            const dogImg = await getDogImg(dogData.id);

            // Create the containers for the selected dog and append them
            const dogImgContainer = createImgContainer(dogImg);
            const dogInfoContainer = createDogContainer(dogData);

            const dogInfoGallery =
                document.getElementById("dog-info-container");
            dogInfoGallery.innerHTML = ""; // Clear previous data
            dogInfoGallery.appendChild(dogInfoContainer);

            const dogImgList = document.querySelector(".dog-img-list");
            dogImgList.innerHTML = ""; // Clear previous data
            dogImgList.appendChild(dogImgContainer);
        });
    } catch (error) {
        console.log(error);
    }
};

