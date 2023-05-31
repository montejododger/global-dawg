// imports
import { fetchSelectedDogs } from "./scripts/dog";
import {  fetchAllDogs } from "./scripts/allBreeds";

document.addEventListener("DOMContentLoaded", () => {
    fetchSelectedDogs();
    fetchAllDogs();
});
