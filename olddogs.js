import { getDogInfo, getDogImg, getAllBreeds } from './dogAPI.js';

// // Func that calls getInfo/getImg
// // builds a container for each for each of them
// // calls both createDogContainer & createImgContainer
// export const fetchSelectedDogs = () => {
//     const dogs = [
//         "Chinese Shar-Pei",
//         "Bull Terrier", //Argentina
//         "Golden Retriever", // INDIA
//         "Shih Tzu", //Phill
//         "Australian Shepherd", // USA
//         "Shiba Inu", // Japan
//         "Rottweiler", //Brazil
//         "Doberman Pinscher", // Russia
//     ];

//     // initialize and empty array for conatiners to append to
//     const dogInfoContainers = [];
//     const dogImgContainers = [];

//     // Go over the dog Arr and map them
//     // grab every dogs promise(info/img)
//     const dogPromises = dogs.map((dog) => {
//         return getDogInfo(dog)
//             .then((dogData) => {
//                 return getDogImg(dogData.id).then((dogImg) => {
//                     return {
//                         dogData,
//                         dogImg,
//                     };
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     });
//     // console.log(dogPromises); -- gives an arry of 8 promises

//     // Go thru all the promises and extract the info/img
//     // push to the container
//     return Promise.all(dogPromises).then((results) => {
//         // each result has a DogData and dogImg in it
//         results.forEach((result) => {
//             // console.log(result);
//             dogImgContainers.push(createImgContainer(result.dogImg));
//             dogInfoContainers.push(createDogContainer(result.dogData));
//         });

//         const dogInfoGallery = document.getElementById("dog-info-container");
//         dogInfoContainers.forEach((container) => {
//             dogInfoGallery.appendChild(container);
//         });
//     });
// };

// //Make a container for every dog which houses all its info
// // 1 container and info appeneded
// function createDogContainer(dogData) {
//     //initalize a "div" container with class added

//     const formattedName = dogData.name.toLowerCase().replace(/\s+/g, "-");
//     const li = document.createElement("li");
//     li.classList.add("dog-item-info", formattedName);
//     li.style.display = "none";

//     //Grab name data and appened it to container
//     const name = document.createElement("h3");
//     name.textContent = dogData.name;
//     li.append(name);

//     //Grab Bred data ...
//     const bredFor = document.createElement("p");
//     bredFor.textContent = `Bred For: ${dogData.bred_for}`;
//     li.append(bredFor);

//     //Grab temperment....
//     const temperament = document.createElement("p");
//     temperament.textContent = `Temperament: ${dogData.temperament}`;
//     li.append(temperament);

//     //Grab life span....
//     const lifeSpan = document.createElement("p");
//     lifeSpan.textContent = `Life Span: ${dogData.life_span}`;
//     li.append(lifeSpan);

//     //Grab... breed group
//     const breedGroup = document.createElement("p");
//     breedGroup.textContent = `Breed Group: ${dogData.breed_group}`;
//     li.append(breedGroup);

//     //Grab height in both(in, cm) ...
//     const height = document.createElement("p");
//     height.textContent = `Height: ${dogData.height.imperial} inches (${dogData.height.metric} cm)`;
//     li.append(height);

//     // Grab weight .......
//     const weight = document.createElement("p");
//     weight.textContent = `Weight: ${dogData.weight.imperial} lbs (${dogData.weight.metric} kg)`;
//     li.append(weight);

//     return li;
// }

// function createImgContainer(dogImgData) {
//     // Format the name of the breed for usage in class and data attribute
//     const formattedName = dogImgData[0].breeds[0].name
//         .toLowerCase()
//         .replace(/\s+/g, "-");

//     // Grab container and unordered list
//     let container = document.querySelector(".dog-img-container");
//     let imgList = container.querySelector(".dog-img-list");

//     // Create an li for each image and add its class
//     const imgItem = document.createElement("li");
//     imgItem.classList.add("dog-img-item", formattedName);
//     imgItem.setAttribute("data-dog", formattedName);

//     // Create an event listener for clicks on the image
//     imgItem.addEventListener("click", () => {
//         // Get the dog type from the clicked image
//         let clickedDog = imgItem.getAttribute("data-dog");

//         // Get all dog information containers
//         const allInfoContainers = document.querySelectorAll(".dog-item-info");

//         // Hide all dog information containers
//         allInfoContainers.forEach((container) => {
//             container.style.display = "none";
//         });

//         // Display only the container with the same dog type as the clicked image
//         const infoContainer = document.querySelector(
//             `.dog-item-info.${clickedDog}`
//         );
//         if (infoContainer) {
//             infoContainer.style.display = "block";
//         } else {
//             console.log(`No info container found for ${clickedDog}`);
//         }
//     });

//     // Create an image element from the API data
//     const imgEle = document.createElement("img");
//     imgEle.src = dogImgData[0].url;
//     imgEle.alt = `${dogImgData[0].breeds[0].name}`;

//     // Append the image element to the li and the li to the image list
//     imgItem.appendChild(imgEle);
//     imgList.appendChild(imgItem);

//     return container;
// }

//  const populateDropdown = (breeds) => {
//     const dropdown = document.getElementById("dog-breed-dropdown"); // Add this dropdown in your HTML
//     breeds.forEach((breed) => {
//         const option = document.createElement("option");
//         option.value = breed.name;
//         option.text = breed.name;
//         dropdown.add(option);
//     });
// };
// getAllBreeds().then(populateDropdown);
