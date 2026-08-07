document.addEventListener("DOMContentLoaded", function() {
    const galeria = document.getElementById("galeria-chaveiros");
    
    // Busca o arquivo JSON
    fetch('chaveiros.json')
        .then(response => response.json())
        .then(chaveiros => {
            galeria.innerHTML = ''; // Limpa a mensagem de "Carregando..."

            // Para cada item no JSON, monta o card HTML
            chaveiros.forEach(item => {
                const cardHTML = `
                    <a href="${item.pagina}" class="card overflow-hidden p-0">
                        <div class="gallery-item-container">
                            <img src="${item.imagem}" alt="${item.descricao}" class="gallery-img-content">
                        </div>
                    </a>
                `;
                // Injeta o HTML dentro da galeria
                galeria.insertAdjacentHTML('beforeend', cardHTML);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os chaveiros:", error);
            galeria.innerHTML = '<p class="col-span-full text-center text-red-500">Erro ao carregar o catálogo.</p>';
        });
});