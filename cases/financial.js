import { dictionary } from './../constants/index.js';

class Financial {
    async execute(client, message, clientCalled) {

        try {
            const option = parseInt(message.body);

            switch(option){
                case 1: {
                    await client.sendText(message.from, dictionary.FINANCIAL_BYE);
                    
                    clientCalled.dialog = 'done'
                    break;
                }
                case 2: {
                    await client.sendText(message.from, dictionary.FINANCIAL_REQUIRE_ACCESS);
                    
                    clientCalled.dialog = 'financial'
                    break;
                }
                case 3: {
                    await client.sendText(message.from, dictionary.WELLCOME);
                    clientCalled.dialog = 'wellcome'
                    break;
                }
                case 0: {
                    await client.sendText(message.from, dictionary.FINANCIAL_BYE);
                    clientCalled.dialog = 'done'
                    break;
                }
                default: {
                    await client.sendText(message.from, dictionary.FINANCIAL_WAITING);
                    break;
                }
            }

            return;
        } catch (error) {
            console.log(error);
            client.sendText(message.from, "❌ Desculpe, mas não conseguimos processar seu pedido.\nO técnico responsável pela manutenção do auto-atendimento foi avisado e em breve o auto-atendimento voltará a funcionar.");
        }
            
        return;
    }
}

export default new Financial();