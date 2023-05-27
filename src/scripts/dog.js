const api_key =
    "live_IMV5RlpU4XaI26YknUNIxE1fFnIbdBbStDAFX71eTd7LRttKRLdca6c8f2UDhLng";

// Basic fetch to grab breed info
const getDogInfo = (dog) => {
    return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            return data[0];
        });
};

// i.e of how to do grab with async
// export const getDogImg = async (id) => {
//     const response = await fetch(
//         `https://api.thedogapi.com/v1/images/search?breed_ids=${id}
//         `,
//         {
//             headers: {
//                 "x-api-key": api_key,
//             },
//         }
//     );
//     if (!response.ok) {
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;
// };

// Didnt need an async for this operation
const getDogImg = (id) => {
    return fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`, {
        headers: {
            "x-api-key": api_key,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        });
};

// Func that calls getInfo/getImg
// builds a container for each for each of them
// calls both createDogContainer & createImgContainer
export const fetchSelectedDogs = () => {
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

    // initialize and empty array for conatiners to append to
    const dogContainers = [];

    // Go over the dog Arr and map them
    // grab every dogs promise(info/img)
    const dogPromises = dogs.map((dog) => {
        return getDogInfo(dog)
            .then((dogData) => {
                return getDogImg(dogData.id).then((dogImg) => {
                    return {
                        dogData,
                        dogImg,
                    };
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });
    // console.log(dogPromises); -- gives an arry of 8 promises

    // Go thru all the promises and extract the info/img
    // push to the container
    return Promise.all(dogPromises).then((results) => {
        // each result has a DogData and dogImg in it
        results.forEach((result) => {
            console.log(result);
            dogContainers.push(createImgContainer(result.dogImg));
            dogContainers.push(createDogContainer(result.dogData));
        });

        const dogGallery = document.getElementById("dog-gallery");
        dogContainers.forEach((container) => {
            dogGallery.append(container);
        });
    });
};

//Make a container for every dog which houses all its info
// 1 container and info appeneded

function createDogContainer(dogData) {
    //initalize a "div" container with class added
    const container = document.createElement("div");
    container.classList.add("dog-container");

    //Grab name data and appened it to container
    const name = document.createElement("h3");
    name.textContent = dogData.name;
    container.append(name);

    //Grab Bred data ...
    const bredFor = document.createElement("p");
    bredFor.textContent = `Bred For: ${dogData.bred_for}`;
    container.append(bredFor);

    //Grab temperment....
    const temperament = document.createElement("p");
    temperament.textContent = `Temperament: ${dogData.temperament}`;
    container.append(temperament);

    //Grab life span....
    const lifeSpan = document.createElement("p");
    lifeSpan.textContent = `Life Span: ${dogData.life_span}`;
    container.append(lifeSpan);

    //Grab... breed group
    const breedGroup = document.createElement("p");
    breedGroup.textContent = `Breed Group: ${dogData.breed_group}`;
    container.append(breedGroup);

    //Grab height in both(in, cm) ...
    const height = document.createElement("p");
    height.textContent = `Height: ${dogData.height.imperial} inches (${dogData.height.metric} cm)`;
    container.append(height);

    // Grab weight .......
    const weight = document.createElement("p");
    weight.textContent = `Weight: ${dogData.weight.imperial} lbs (${dogData.weight.metric} kg)`;
    container.append(weight);

    return container;
}

// create a new container with class added
// call the DogImg func and grab the img
// append and return
function createImgContainer(dogImgData) {
    const container = document.createElement("div");
    container.classList.add("dog-container", "dog-img");

    const imgEle = document.createElement("img");
    imgEle.src = dogImgData[0].url;
    container.append(imgEle);

    return container;
}
