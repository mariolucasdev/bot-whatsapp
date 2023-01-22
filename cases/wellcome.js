import { dictionary } from './../constants/index.js';

class Wellcome {

    async execute(client, message, clientCalled) {
        try {
            const option = parseInt(message.body);

            switch(option){
                // Suporte
                case 1: {
                    await client.sendText(message.from, dictionary.SUPPORT_WELLCOME);
                    break;
                }
                
                // Financeiro
                case 2: {
                    await client
                    .sendLinkPreview(
                        message.from,
                        'https://client.gepin.com.br',
                        'Gepin - Área do Cliente'
                        );
                    await client.sendText(message.from, dictionary.FINANCIAL_WELLCOME);
                    
                    clientCalled.dialog = 'financial'
                    break;
                }
                
                // Comercial
                case 3: {
                    await client.sendText(message.from, dictionary.SALES_WELLCOME);
                    clientCalled.dialog = 'sales'
                    break;
                }
                
                default: {
                    await client.sendText(message.from, dictionary.WELLCOME_UNSERSTEND);
                    await client.sendText(message.from, dictionary.WELLCOME);
                    break;
                }
            }

            return
        } catch (error) {
            console.log(error);
            client.sendText(message.from, "❌ Desculpe, mas não consegui entender sua solicitação.");
        }
        
        return
    }
}

export default new Wellcome();