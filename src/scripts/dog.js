const api_key =
    "live_IMV5RlpU4XaI26YknUNIxE1fFnIbdBbStDAFX71eTd7LRttKRLdca6c8f2UDhLng";

// this is the fetch mechanics to get the information about a specific dog
export const getDogInfo = async (dog) => {
    const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${dog}`
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
};

export const getDogImg = async (id) => {
    const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?breed_ids=${id}
        `,
        {
            headers: {
                "x-api-key": api_key,
            },
        }
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
};

export const fetchSelectedDogs = async () => {
    const dogs = [
        "Labrador Retriever",
        "German Shepherd",
        "Golden Retriever",
        "French Bulldog",
        "Beagle",
        "Poodle (Miniature)",
        "Rottweiler",
        "Yorkshire Terrier",
    ];

    const dogContainers = [];

    for (const dog of dogs) {
        try {
            const dogData = await getDogInfo(dog);
            // console.log(dogData);
            const dogImg = await getDogImg(dogData.id)
            dogContainers.push(createImgContainer(dogImg))
            dogContainers.push(createDogContainer(dogData));
        } catch (error) {
            console.log(error);
        }
    }

    const dogGallery = document.getElementById("dog-gallery");
    dogContainers.forEach((container) => {
        dogGallery.append(container);
    });
};

// Create dog container element
// For every dog it will grab all the info and append it to the container
// return the container with all the info appended

function createDogContainer(dogData) {
    const container = document.createElement("div");
    container.classList.add("dog-container");

    const name = document.createElement("h3");
    name.textContent = dogData.name;
    container.append(name);

    const bredFor = document.createElement("p");
    bredFor.textContent = `Bred For: ${dogData.bred_for}`;
    container.append(bredFor);

    const temperament = document.createElement("p");
    temperament.textContent = `Temperament: ${dogData.temperament}`;
    container.append(temperament);

    const lifeSpan = document.createElement("p");
    lifeSpan.textContent = `Life Span: ${dogData.life_span}`;
    container.append(lifeSpan);

    const breedGroup = document.createElement("p");
    breedGroup.textContent = `Breed Group: ${dogData.breed_group}`;
    container.append(breedGroup);

    const height = document.createElement("p");
    height.textContent = `Height: ${dogData.height.imperial} inches (${dogData.height.metric} cm)`;
    container.append(height);

    const weight = document.createElement("p");
    weight.textContent = `Weight: ${dogData.weight.imperial} lbs (${dogData.weight.metric} kg)`;
    container.append(weight);

    return container;
}

function createImgContainer(dogImgData) {
    const container = document.createElement("div");
    container.classList.add("dog-container", "dog-img");

    const imgEle = document.createElement("img")
    imgEle.src = dogImgData[0].url;
    container.append(imgEle)

    return container;
}
