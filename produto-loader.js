document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("produto-container");
    
    // Pega o parâmetro ?id= da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    
    if (!produtoId) {
        container.innerHTML = '<p class="text-center text-red-500 py-10">Produto não encontrado.</p>';
        return;
    }
    
    // Busca o JSON
    fetch('produtos.json')
        .then(response => response.json())
        .then(data => {
            const produto = data.produtos[produtoId];
            
            if (!produto) {
                container.innerHTML = '<p class="text-center text-red-500 py-10">Produto não encontrado.</p>';
                return;
            }
            
            // Atualiza o título da página
            document.title = `${produto.nome} - Mateus Sposito`;
            
            // Monta o HTML do produto
            let html = `
                <!-- Botão de Voltar -->
                <div class="mb-8">
                    <a href="${produto.link_categoria}" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Voltar para ${produto.categoria}
                    </a>
                </div>
                
                <!-- Detalhes da Obra -->
                <section class="mb-16">
                    <div class="card p-8 md:p-10 text-center">
                        <h2 class="section-title text-center mb-8">${produto.nome}</h2>
            `;
            
            // Adiciona os parágrafos de descrição
            produto.descricao.forEach(paragrafo => {
                html += `<p class="text-lg text-gray-700 leading-relaxed mb-6">${paragrafo}</p>`;
            });
            
            // Adiciona ficha técnica
            html += `
                <div class="my-8 text-left max-w-lg mx-auto">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Detalhes Técnicos</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li><span class="font-semibold text-blue-700">Medidas:</span> ${produto.ficha_tecnica.medidas}</li>
                        <li><span class="font-semibold text-blue-700">Material:</span> ${produto.ficha_tecnica.material}</li>
                        <li><span class="font-semibold text-blue-700">Acabamento:</span> ${produto.ficha_tecnica.acabamento}</li>
                    </ul>
                </div>
            `;
            
            // Adiciona botão de compra se existir link_venda
            if (produto.link_venda) {
                html += `
                    <div class="my-10">
                        <a href="${produto.link_venda}" target="_blank" rel="noopener noreferrer" class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                            🛒 Comprar no Mercado Livre
                        </a>
                    </div>
                `;
            }
            
            // Adiciona vídeo se existir
            if (produto.video) {
                html += `
                    <h3 class="text-2xl font-bold text-gray-800 mt-12 mb-6">Vídeo</h3>
                    <div class="video-container mb-12">
                        <iframe src="${produto.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;
            }
            
            // Adiciona galeria de fotos
            html += `
                <h3 class="text-2xl font-bold text-gray-800 mt-12 mb-6">Galeria de Fotos</h3>
                <div class="gallery grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            `;
            
            produto.fotos.forEach((foto, index) => {
                html += `
                    <a href="${foto}" target="_blank" class="card gallery-item-container">
                        <img src="${foto}" alt="Foto ${index + 1} de ${produto.nome}">
                    </a>
                `;
            });
            
            html += `
                </div>
            </div>
        </section>
            `;
            
            // Injeta tudo no container
            container.innerHTML = html;
        })
        .catch(error => {
            console.error("Erro ao carregar produto:", error);
            container.innerHTML = '<p class="text-center text-red-500 py-10">Erro ao carregar o produto.</p>';
        });
});
