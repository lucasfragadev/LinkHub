function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    
    const img = document.querySelector(".profile img");

    if (img) {
        if (html.classList.contains("light")) {
            img.setAttribute('src', '/assets/avatar-light.png');
            img.setAttribute('alt', 'imagem de perfil de lucas com fundo colorido e faixas pretas 2');
        } else {
            img.setAttribute('src', '/assets/avatar-dark.png');
            img.setAttribute('alt', 'imagem de perfil de lucas com fundo colorido e faixas pretas');
        }
    } else {
        console.error('Elemento de imagem não encontrado.');
    }
}