/**
 * Componente de Contato e Lojas - Mateus Sposito
 * Versão revisada para manter a fidelidade ao design original.
 */
function renderContato() {
    const contatoContainer = document.getElementById('contato-placeholder');
    
    if (contatoContainer) {
        contatoContainer.innerHTML = `
            <!-- Contact Section -->
            <section id="contato" class="mb-16">
                <div class="card p-8 md:p-10 text-center">
                    <h2 class="section-title text-center mb-8">Entre em Contato</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        Para encomendas personalizadas ou dúvidas, entre em contato diretamente. Se deseja adquirir uma peça pronta, visite as lojas online abaixo.
                    </p>
                    
                    <!-- E-MAIL -->
                    <div class="mb-8">
                        <a href="mailto:mateus@sposito.art.br" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg inline-block w-full sm:w-auto">
                            Enviar E-mail
                        </a>
                    </div>

                    <!-- ONDE COMPRAR (Lojas Online) -->
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Onde Comprar</h3>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        
                        <!-- Mercado Livre -->
                        <a href="https://lista.mercadolivre.com.br/_CustId_3092494021?item_id=MLB6106482676&category_id=MLB412060&seller_id=3092494021&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic">
                        target="_blank" 
                           class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md w-full sm:w-auto">
                            Mercado Livre
                        </a>
                        
                        <!-- Amazon -->
                        <a href="https://www.amazon.com.br/s?me=ANLB1TOU9RKWJ&ref=sf_seller_app_share_new" target="_blank" class="bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg inline-block w-full sm:w-auto">
                            Amazon
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Garante que o script rode independente de onde for chamado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderContato);
} else {
    renderContato();
}
