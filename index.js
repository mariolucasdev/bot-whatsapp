import { create } from 'venom-bot'

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

            client.sendText(message.from, "Olá eu sou a *Six*, sua atendente virtual.\nSeja bem vindo(a) a central de atendimento da *Agência Sixtec!*");
            client.sendText(message.from, "Selecione uma das opções:\n\n*1* - Suporte\n*2* - Financeiro\n*3* - Comercial.\n*4* - Projeto Meta Batida.\n*0* - Encerrar Atendimento.");

            return;
        }
    })
}