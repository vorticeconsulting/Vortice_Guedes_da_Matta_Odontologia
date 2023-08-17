
$(document).ready(function () {
    site.eventos.init();
})

var site = {};

site.eventos = {

    init: () => {
        site.metodos.carregarBotaoLigar();
        site.metodos.carregarBotaoWhatsapp();
    }

}

var CELULAR_EMPRESA = '553230612136'; // Altere o telefone da Empresa aqui

site.metodos = {
    // Carrega o botão de ligar (telefone)
    carregarBotaoLigar: () => {

        $("#btnLigar").attr('href', `tel:${CELULAR_EMPRESA}`);
        $("#btnLigar2").attr('href', `tel:${CELULAR_EMPRESA}`);
        $("#btnLigar3").attr('href', `tel:${CELULAR_EMPRESA}`);


    },

    // Carrega o botão do WhatsApp
    carregarBotaoWhatsapp: () => {

        // Converte a URL
        let encode = encodeURI("Olá! Gostaria de informações.");
        let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;

        $("#btnWhatsapp").attr('href', URL);
        $("#btnWhatsapp2").attr('href', URL);

    },

}
