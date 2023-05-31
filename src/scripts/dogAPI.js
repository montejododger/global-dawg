const api_key =
    "live_IMV5RlpU4XaI26YknUNIxE1fFnIbdBbStDAFX71eTd7LRttKRLdca6c8f2UDhLng";

export const getDogInfo = (dog) => {
    return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then((data) => {
            return data[0];
        });
};

export const getDogImg = (id) => {
    return fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`, {
        headers: {
            "x-api-key": api_key,
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        });
};

export const getAllBreeds = () => {
    return fetch("https://api.thedogapi.com/v1/breeds", {
        headers: {
            "x-api-key": api_key,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    });
};
