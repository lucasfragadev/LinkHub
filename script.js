/**
 * Olá, seja bem vindo (a)! Meu nome é Lucas Avelino Fraga. 
 * Sou desenvolvedor backend e professor de programação.
 * 
 * Vamos às explicações do código.
 * 
 * A função toggleMode() Alterna entre os modos "light" (claro) e "dark" (escuro) em uma página HTML.
 * 
 * Esta função modifica a classe do elemento raiz (`<html>`), 
 * alternando entre os estilos definidos para os modos claro e escuro. 
 * Além disso, ajusta a imagem de perfil e seu atributo `alt` 
 * dependendo do modo ativo. Caso a imagem não seja encontrada, 
 * uma mensagem de erro é registrada no console.
 * 
 * Abaixo deixarei outros comentários. 
 * Sempre trazendo primeiro a utilidade daquele trecho de código.
 * 
 */



function toggleMode() {
    // Obtém o elemento raiz do documento HTML.
    const html = document.documentElement;

    // Alterna a classe 'light' no elemento <html>.
    // Se a classe 'light' não existir, ela será adicionada; caso contrário, será removida.
    html.classList.toggle('light');
    
    // Seleciona o elemento de imagem dentro de um elemento com a classe 'profile'.
    const img = document.querySelector(".profile img");

    if (img) {
        // Verifica se o modo 'light' está ativo no elemento <html>.
        if (html.classList.contains("light")) {
            // Atualiza o atributo 'src' da imagem para o avatar do modo claro.
            img.setAttribute('src', '/assets/avatar-light.png');
            // Atualiza o atributo 'alt' para descrever a imagem no modo claro.
            img.setAttribute('alt', 'imagem de perfil de lucas com fundo colorido e faixas pretas 2');
        } else {
            // Atualiza o atributo 'src' da imagem para o avatar do modo escuro.
            img.setAttribute('src', '/assets/avatar-dark.png');
            // Atualiza o atributo 'alt' para descrever a imagem no modo escuro.
            img.setAttribute('alt', 'imagem de perfil de lucas com fundo colorido e faixas pretas');
        }
    } else {
        // Exibe um erro no console caso o elemento de imagem não seja encontrado.
        console.error('Elemento de imagem não encontrado.');
    }
}