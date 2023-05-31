// imports
import { fetchSelectedDogs, fetchAllDogs } from "./scripts/dog";

document.addEventListener("DOMContentLoaded", () => {
    fetchSelectedDogs();
    fetchAllDogs();
});
