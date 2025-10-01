// Filtro por temporada
function filterBySeason(season) {
    const episodes = document.querySelectorAll('.episode-item');
    episodes.forEach(episode => {
        if (season === 'all' || episode.dataset.season === season) {
            episode.style.display = 'block';
        } else {
            episode.style.display = 'none';
        }
    });
}

// Galeria interativa de personagens
function showCharacterDetails(character) {
    const modal = document.getElementById('character-modal');
    const content = document.getElementById('modal-content');
    
    // Carregar informações do personagem
    content.innerHTML = getCharacterInfo(character);
    modal.style.display = 'block';
}