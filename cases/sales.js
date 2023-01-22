import { dictionary } from './../constants/index.js';

class Sales {

    async execute(client, message, clientCalled) {
        try {
            const option = parseInt(message.body);

            switch(option){

                // Gestão de Midais Sociais
                case 1: {
                    await client.sendText(message.from, dictionary.SALES_SOCIALMEDIA);
                    break;
                }
                
                // Sites
                case 2: {
                    await client.sendText(message.from, dictionary.SALES_SOCIALMEDIA);
                    break;
                }

                // Identidade Visual
                case 3: {
                    await client.sendText(message.from, dictionary.SALES_SOCIALMEDIA);
                    break;
                }
                
                // Arte Avulsa
                case 4: {
                    await client.sendText(message.from, dictionary.SALES_SOCIALMEDIA);
                    break;
                }
                
                default: {
                    await client.sendText(message.from, dictionary.WELLCOME_UNSERSTEND);
                    await client.sendText(message.from, dictionary.SALES_WELLCOME);
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

export default new Sales();