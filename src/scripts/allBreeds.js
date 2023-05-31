import { getAllBreeds } from "./dogAPI";

export const fetchAllDogs = async () => {
    // an array to push the names into for the scrool down
    const dogNamesContainer = [];
    // an array of all the bio
    const dogBioContainer = [];
    //all img info 
    const dogImgContainer = []

    try {
        const allDogs = await getAllBreeds();
        // console.log(allDogs);

        allDogs.forEach((dog) => {
            dogNamesContainer.push(dog.name)
            dogBioContainer.push(createDogContainer(dog))
            dogImgContainer.push(createImgContainer(dog.image))
        });

        console.log(dogImgContainer);
        // console.log(dogBioContainer);


    } catch (error) {
        console.log(error);
    }
};

export function createDogContainer(dogData) {
    const formattedName = dogData.name.toLowerCase().replace(/\s+/g, "-");
    const li = document.createElement("li");
    li.classList.add("all-dog-container", formattedName);
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


function createImgContainer(dogImgData) {
    // console.log(dogImgData);
    const dogImgId = dogImgData.id

    const imgItem = document.createElement("li");
    imgItem.className = `all-img-container ${dogImgId}`;
    imgItem.dataset.dog = dogImgId;

    imgItem.innerHTML = `<img src="${dogImgData.url}" alt="${dogImgData.id}">`;
    // imgItem.onclick = displayDogInfo.bind(null, formattedName);

    document.querySelector(".all-dog-img").appendChild(imgItem);

    return imgItem;
}