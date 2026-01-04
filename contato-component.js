/**
 * Componente de Contato e Lojas - Mateus Sposito
 * Injeta a seção de contato fiel ao design original.
 */
function renderContato() {
    const contatoContainer = document.getElementById('contato-placeholder');
    
    if (contatoContainer) {
        contatoContainer.innerHTML = `
            <!-- Contact Section -->
            <section id="contato" class="mb-16">
                <div class="card p-8 md:p-10 text-center">
                    <h2 class="section-title mb-10">Entre em Contato</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-8">
                        Para encomendas personalizadas ou dúvidas, entre em contato diretamente. Se deseja adquirir uma peça pronta, visite as lojas online abaixo.
                    </p>
                    
                    <!-- E-MAIL BUTTON -->
                    <div class="mb-10">
                        <a href="mailto:mateus@sposito.art.br" class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 shadow-md inline-block">
                            Enviar E-mail
                        </a>
                    </div>

                    <!-- LOJAS ONLINE -->
                    <h3 class="text-xl font-bold text-gray-800 mb-6">Onde Comprar</h3>
                    <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                        
                        <!-- Mercado Livre -->
                        <a href="https://lista.mercadolivre.com.br/_CustId_3092494021" 
                           target="_blank" 
                           class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md w-full sm:w-auto">
                            Mercado Livre
                        </a>
                        
                        <!-- Amazon -->
                        <a href="https://www.amazon.com.br/s?me=ANLB1TOU9RKWJ&ref=sf_seller_app_share_new" 
                           target="_blank" 
                           class="bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md w-full sm:w-auto">
                            Amazon
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderContato);
} else {
    renderContato();
}
