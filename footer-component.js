/**
 * Componente de Contato e Lojas - Mateus Sposito
 * Este script injeta a seção de contato exatamente como definida no index.html original.
 */
document.addEventListener("DOMContentLoaded", function() {
    const contatoContainer = document.getElementById('contato-placeholder');
    
    if (contatoContainer) {
        contatoContainer.innerHTML = `
            <section id="contato" class="mb-16">
                <div class="card p-8 text-center">
                    <h2 class="section-title">Entre em Contato</h2>
                    <p class="text-gray-600 mb-6">Para encomendas e dúvidas, entre em contato pelo e-mail:</p>
                    <a href="mailto:mateus@sposito.art.br" class="text-blue-600 font-bold text-xl hover:underline">mateus@sposito.art.br</a>
                    
                    <div class="mt-10 pt-10 border-t border-gray-100">
                        <h3 class="text-lg font-semibold mb-6">Onde comprar:</h3>
                        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="https://lista.mercadolivre.com.br/_CustId_473927?item_id=MLB4160436087&category_id=MLB186814&seller_id=473927&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" 
                               target="_blank" 
                               class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto">
                                Mercado Livre
                            </a>
                            <a href="https://www.amazon.com.br/s?me=ANLB1TOU9RKWJ&ref=sf_seller_app_share_new" 
                               target="_blank" 
                               class="bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto">
                                Amazon
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
});
