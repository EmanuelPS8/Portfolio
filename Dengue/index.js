document.addEventListener("DOMContentLoaded", function () {
    let myMap = L.map("map").setView([-14.235, -51.9253], 5);

    let bounds = [
        [-34, -73],  // Sudoeste (ponto mais ao sul e oeste)
        [4, -30]     // Nordeste (ponto mais ao norte e leste)
    ];

    let floripa = L.polygon([
        [-27.826614, -48.586839],
        [-27.833762, -48.459235],  // <-- Vírgula estava faltando aqui
        [-27.383511, -48.356458],
        [-27.395815, -48.530832],
    ], {
        color: "green",
        fillColor: "#36ba40",
        fillOpacity: 0.5 // <-- Removido aspas de "0.5", pois deve ser um número
    }).addTo(myMap);

    

    myMap.setMaxBounds(bounds); // Define os limites do mapa
    myMap.on('drag', function () {
        myMap.panInsideBounds(bounds, { animate: false }); // Impede o usuário de sair dos limites
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20,
        minZoom: 1
    }).addTo(myMap);
});
