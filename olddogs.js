// import { getDogInfo, getDogImg, getAllBreeds } from "./dogAPI";

// export const fetchAllDogs = async () => {
//     try {
//         const allDogs = await getAllBreeds();

//         // this grabs the div all-dog-container
//         const allDogContainer = document.getElementById("all-dog-container");
//         // const select = document.getElementById("dogs-select");
//         const select = document.createElement("select");
//         select.id = "dogs-select";

//         allDogs.forEach((dog) => {
//             const option = document.createElement("option");
//             option.value = dog.name;
//             option.text = dog.name;
//             select.appendChild(option);
//         });

//         // add all the options to the select bar
//         allDogContainer.appendChild(select);

//         // console.log(allDogGallery);

//         select.addEventListener("change", async (event) => {
//             const selectedDogName = event.target.value;
//             const dogData = await getDogInfo(selectedDogName);
//             const dogImg = await getDogImg(dogData.id);

//             // Create the containers for the selected dog and append them
//             const dogImgContainer = createImgContainer(dogImg);
//             const dogInfoContainer = createDogContainer(dogData);

//             // console.log(dogImgContainer);

//             const allDogInfo = document.getElementById("all-dog-info-container");
//             // console.log(dogInfoGallery);
//             allDogInfo.innerHTML = ""; // Clear previous data
//             allDogInfo.appendChild(dogInfoContainer);
//             // console.log(dogInfoContainer);

//             const dogImgList = document.querySelector(".all-dog-img");
//             // console.log(dogImgList);
//             // console.log(dogImgContainer);
//             dogImgList.innerHTML = ""; // Clear previous data
//             dogImgList.appendChild(dogImgContainer);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };
// export function createDogContainer(dogData) {
//     const formattedName = dogData.name.toLowerCase().replace(/\s+/g, "-");
//     const li = document.createElement("li");
//     li.classList.add("one-dog-container", formattedName);
//     li.style.display = "none";

//     const propsToDisplay = {
//         name: "Name",
//         bred_for: "Bred For",
//         temperament: "Temperament",
//         life_span: "Life Span",
//         breed_group: "Breed Group",
//         height: "Height",
//         weight: "Weight",
//     };

//     for (let prop in propsToDisplay) {
//         const item = document.createElement("p");
//         if (typeof dogData[prop] === "object") {
//             // This handles height and weight which are objects
//             item.textContent = `${propsToDisplay[prop]}: ${dogData[prop].imperial} (imperial) / ${dogData[prop].metric} (metric)`;
//         } else {
//             item.textContent = `${propsToDisplay[prop]}: ${dogData[prop]}`;
//         }
//         // console.log("item: ", item);
//         li.append(item);
//     }

//     return li;
// }

// export function createImgContainer(dogImgData) {
//     const dog = dogImgData[0].breeds[0];
//     const formattedName = dog.name.toLowerCase().replace(/\s+/g, "-");
//     console.log(formattedName);

//     const imgItem = document.createElement("li");
//     imgItem.className = `dog-right-img-item ${formattedName}`;
//     imgItem.dataset.dog = formattedName;
//     // console.log("item list: ", imgItem);

//     imgItem.innerHTML = `<img src="${dogImgData[0].url}" alt="${dog.name}">`;
//     imgItem.onclick = displayDogInfo.bind(null, formattedName);

//     document.querySelector(".all-dog-img").appendChild(imgItem);

//     return imgItem;
// }

// function displayDogInfo(clickedDog) {
//     const allInfoContainers = document.querySelectorAll(".dog-item-info");
//     allInfoContainers.forEach(
//         (container) => (container.style.display = "none")
//     );

//     const infoContainer = document.querySelector(
//         `.dog-item-info.${clickedDog}`
//     );
//     if (infoContainer) {
//         infoContainer.style.display = "block";
//     } else {
//         console.error(`No info container found for ${clickedDog}`);
//     }
// }
