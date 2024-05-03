const IndexController = () => {

    const cards: any = [
        {
            title: 'Gerencie suas finanças com um simples comando',
            message: 'Envie pix e tenha informações sobre suas despesas, receitas e muito mais.',
            icon: '',
        },
        {
            title: 'Quando o dia chegar é só confirmar',
            message: 'Suas contas agendadas poderão ser pagas a qualquer momento. Tudo o que você precisa fazer é confirmar.',
            icon: '',
        },
        {
            title: 'Receba informações personalizadas',
            message: 'Se supreenda com o que a inteligência artificial pode dizer sobre suas finanças.',
            icon: '',
        }
    ];
    const cards2: any = [
        {
            icon: '',
            title: 'Inicie uma conversa',
            message: 'Escreva uma mensagem, grave áudio, envie imagens ou documentos.',
            image: './assets/images/home-screen.png'
        },
        {
            icon: '',
            title: 'Descomplique suas finanças',
            message: 'Gestão financeira de forma fácil com ajuda da Carteira IA. Nunca mais fique perdido nas suas finanças.',
            image: './assets/images/chat-table-screen.png'
        },
        {
            icon: '',
            title: 'Resolva tudo em um instante',
            message: 'Otimize seu tempo e simplifique sua rotina financeira com simples comandos. Tudo em uma conversa.',
            image: './assets/images/chat-screen.png'
        }
    ]

    return {
        cards,
        cards2
    }

}

export default IndexController