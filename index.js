import { create } from 'venom-bot'
import database from './src/database'

create({
    session: 'sixtec',
    multidevice: true
})
.then((client) => start(client))
.catch((error) => {
    console.log(error)
})

function start(client) {

    client.onMessage( async (message) => {

        if ( !message.isGroupMsg ) {
            console.log("- inicio de atendimento.");

            const support = await database.table('supports').where({ number: message.from });

            client.sendText(message.from, "Olá eu sou a *Six*, sua atendente virtual.\nSeja bem vindo(a) a central de atendimento da *Agência Sixtec!*");
            client.sendText(message.from, "Selecione uma das opções:\n\n*1* - Suporte\n*2* - Financeiro\n*3* - Comercial.\n*4* - Projeto Meta Batida.\n*0* - Encerrar Atendimento.");

            return;
        }

        try {
            const dialogFileName = support[0].dialog;
            const { default: { execute } } = require(`./app/dialogs/${dialogFileName}`);
            execute(client, message);
        } catch (error) {
            console.log(error);
            client.sendText(message.from, "❌ Desculpe, mas não conseguimos processar seu pedido.\nO técnico responsável pela manutenção do auto-atendimento foi avisado e em breve o auto-atendimento voltará a funcionar.");
        }
    })
}