// Dom Loaded Event
document.addEventListener('DOMContentLoaded', async () => {
    // Dom Element
    const cinemaList = document.getElementById('cinemas');
    const geo_btn = document.getElementById('geoloc');

    // Initialisation des 20 premiers cinémas
    const { results } = await getCinema();
    results.sort((a, b) => b.fauteuils - a.fauteuils).forEach(cinema => {
        const adresse = `${cinema.adresse}, ${cinema.code_insee} ${cinema.unite_urbaine}`;
        loadList(cinema.nom, adresse, cinemaList);
    });

    // Geolocalisation Event
    geo_btn.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(async (result) => {
            // Obtenir ses informations de sa localisation
            const response = await getLocalisation(result.coords.latitude, result.coords.longitude);
            const localisation = response.features[0].properties;
            
            // Obtenir les cinémas autour de soi
            const cinemas = await getLocatedCinemas(localisation.city);

            // Réinitialisation de la liste
            cinemaList.innerHTML = "";

            // Affichage des cinémas
            cinemas.results.sort((a, b) => b.fauteuils - a.fauteuils).forEach(cinema => {
                const adresse = `${cinema.adresse}, ${cinema.code_insee} ${cinema.unite_urbaine}`;
                loadList(cinema.nom, adresse, cinemaList);
            })
        }, err => console.log(err), {enableHighAccuracy: true});
    })
})

// Fetch des 20 premiers Cinémas
const getCinema = async () => {
    return (await fetch('https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=20')).json();
}

// Fetch des cinémas autour de soi
const getLocatedCinemas = async (commune) => {
    return (await fetch(`https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?where='${commune}'`)).json();
}

// Charger des li
const loadList = (nom, adresse, where) => {
    where.innerHTML += `<li><span class='bold'>${nom}</span> | ${adresse}</li>`;
}

// Fetch les données de la localisation (repris du fichier adresse)
const getLocalisation = async (lat, lon) => {
    return (await fetch(`https://api-adresse.data.gouv.fr/reverse/?lat=${lat}&lon=${lon}`)).json();
}