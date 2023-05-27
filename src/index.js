// imports
import { fetchSelectedDogs } from "./scripts/dog";
import { drawMap } from "./scripts/maps";

document.addEventListener("DOMContentLoaded", () => {
    fetchSelectedDogs();
    drawMap();
});
