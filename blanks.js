function createImgContainer(dogImgData) {
    // Format the name of the breed for usage in class and data attribute
    const formattedName = dogImgData[0].breeds[0].name
        .toLowerCase()
        .replace(/\s+/g, "-");

    // Grab container and unordered list
    let container = document.querySelector(".dog-img-container");
    let imgList = container.querySelector(".dog-img-list");

    // Create an li for each image and add its class
    const imgItem = document.createElement("li");
    imgItem.classList.add("dog-img-item", formattedName);
    imgItem.setAttribute("data-dog", formattedName);

    // Create an event listener for clicks on the image
    imgItem.addEventListener("click", () => {
        // Get the dog type from the clicked image
        let clickedDog = imgItem.getAttribute("data-dog");

        // Get all dog information containers
        const allInfoContainers = document.querySelectorAll(".dog-item-info");

        // Hide all dog information containers
        allInfoContainers.forEach((container) => {
            container.style.display = "none";
        });

        // Display only the container with the same dog type as the clicked image
        const infoContainer = document.querySelector(
            `.dog-item-info.${clickedDog}`
        );
        if (infoContainer) {
            infoContainer.style.display = "block";
        } else {
            console.log(`No info container found for ${clickedDog}`);
        }

        // Show country container for the clicked dog
        showCountryContainer(clickedDog);
    });

    // Create an image element from the API data
    const imgEle = document.createElement("img");
    imgEle.src = dogImgData[0].url;
    imgEle.alt = `${dogImgData[0].breeds[0].name}`;

    // Append the image element to the li and the li to the image list
    imgItem.appendChild(imgEle);
    imgList.appendChild(imgItem);

    return container;
}
