// Variables
const btn = document.getElementById('géo_btn');
const paragraph = document.getElementById('adress');

// Geolocalisation Event
btn.addEventListener('click', () => {
    // Initialiser la géolocalisation
    navigator.geolocation.getCurrentPosition(async (result) => {
        // Obtenir ses informations de sa localisation
        const response = await getLocalisation(result.coords.latitude, result.coords.longitude);
        const localisation = response.features[0].properties;
        // Afficher l'adresse
        paragraph.innerText = `Votre adresse : ${localisation.label}`;
    }, err => console.log(err), {enableHighAccuracy: true});
})

// Fetch les données de la localisation
const getLocalisation = async (lat, lon) => {
    return (await fetch(`https://api-adresse.data.gouv.fr/reverse/?lat=${lat}&lon=${lon}`)).json();
}