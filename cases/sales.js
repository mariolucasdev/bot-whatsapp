import { dictionary } from './../constants/index.js';

class Sales {

    async execute(client, message, clientCalled) {
        try {
            const option = parseInt(message.body);

            switch(option){

                // Gestão de Midais Sociais
                case 1: {
                    await client.sendText(message.from, dictionary.SALES_SOCIALMEDIA);
                    await client.sendFile(message.from,
                        "docs/proposta-social-media.pdf",
                        "PROPOSTA-COMERCIAL-SOCIALMEDIA.pdf",
                        "Segue nossa proposta comercial para *Gestão de Mídias Sociais*")

                    clientCalled.dialog = 'sales'
                    break;
                }
                
                // Identidade Visual
                case 2: {
                    await client.sendText(message.from, dictionary.SALES_VISUAL_ID);
                    await client.sendFile(message.from,
                        "docs/proposta-identidade-visual.pdf",
                        "PROPOSTA-COMERCIAL-IDENTIDADE-VISUAL.pdf",
                        "Segue nossa proposta comercial para *Desenvolvimento de Identidades Visuais*")
    
                    clientCalled.dialog = 'sales'
                    break;
                }
                
                // Pacotes de Artes
                case 3: {
                    await client.sendText(message.from, dictionary.SALES_ART_PACKS);
                    await client.sendFile(message.from,
                        "docs/proposta-pacote-de-artes.pdf",
                        "PROPOSTA-COMERCIAL-ARTES.pdf",
                        "Segue nossa proposta comercial para *Pacotes de Artes Profissionais para Mídias Sociais*")
                        
                        clientCalled.dialog = 'sales'
                        break;
                    }
                    
                // Arte Avulsa
                case 4: {
                    await client.sendText(message.from, dictionary.SALES_ART_PACKS);
                    await client.sendFile(message.from,
                        "docs/proposta-pacote-de-artes.pdf",
                        "PROPOSTA-COMERCIAL-ARTES.pdf",
                        "Segue nossa proposta comercial para *Pacotes de Artes Profissionais para Mídias Sociais*")

                    clientCalled.dialog = 'sales'
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
            client.sendText(message.from, "❌ Desculpe, mas não consegui entender sua solicitação. Tente novamente!");
            await client.sendText(message.from, dictionary.SALES_WELLCOME);
        }
        
        return
    }
}

export default new Sales();