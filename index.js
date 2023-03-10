import { create } from 'venom-bot'
import Wellcome from './cases/wellcome.js';
import Financial from './cases/financial.js';
import Sales from './cases/sales.js';
import { dictionary } from './constants/index.js';

create({
    session: 'sixtec',
    multidevice: true })
.then((client) => start(client))
.catch((error) => {
    console.log(error)
})

function start(client) {

    var clientCalled = {
        stared: false,
        number: '',
        dialog: 'wellcome',
        message: ''
    };

    client.onMessage( async (message) => {

        if ( !message.isGroupMsg && clientCalled.stared == false ) {
            console.log("- inicio de atendimento.");
            
            clientCalled.stared = true
            clientCalled.number = message.from
            clientCalled.message = message.body

            await client.sendText(message.from, "Olá eu sou a *Six*, sua atendente virtual.\nSeja bem vindo(a) a central de atendimento da *Agência Sixtec!*");
            await client.sendText(message.from, dictionary.WELLCOME);
            
            console.log("- Movido para Case Boas Vindas.");
            clientCalled.dialog = 'wellcome'
            return;
        }
        
        var dialogCalled = clientCalled.dialog;

        switch (dialogCalled) {
            case 'wellcome':
                console.log("- Wellcome Case.");
                Wellcome.execute(client, message, clientCalled)
                break;
            case 'financial':
                console.log("- Financial Case.");
                Financial.execute(client, message, clientCalled)
                break;
            case 'sales':
                console.log("- Sales Case.");
                Sales.execute(client, message, clientCalled)
                break;
            case 'done':
                clientCalled.stared = false;
                break;
            default:
                break;
        }
    })
}