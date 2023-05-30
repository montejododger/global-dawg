export function initMap() {
    drawMap();
}
window.initMap = initMap;

async function drawMap() {
    google.charts.load("current", {
        packages: ["geochart"],
        mapsApiKey: "AIzaSyBKs1KRFvsVDje7wSqK8LuK9AzJunG_4ro",
        callback: drawRegionsMap,
    });

    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ["Continent", "Dog Population(million's)"],
            ["USA", 75.8], // austrilian
            ["BRAZIL", 35.7], //  rott
            ["CHINA", 27.4], // shar
            ["RUSSIA", 15], // dobberman
            ["JAPAN", 12], //shibu
            ["PHILLIPINES", 11.6], // Shih Tzu
            ["INDIA", 10.2], // Golden
            ["ARGENTINA", 9.2], // bull
        ]);


        var options = { colorAxis: { colors: ["white", "white"] } };

        var chart = new google.visualization.GeoChart(
            document.getElementById("regions_div")
        );

        chart.draw(data, options);
    }
}
