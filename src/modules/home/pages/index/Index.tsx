import IndexController from "./IndexController";
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton,
    LinkedinIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon, XIcon
} from "react-share";
import 'animate.css';
import './index.css';

const IndexPage = () => {

    const controller = IndexController();

    return <>
        <section className="w-full min-h-screen xl:h-screen flex flex-column" style={{ backgroundColor: '#00988D' }}>
            <header style={{ backgroundColor: '#058078' }}>
                <div className="m-auto w-11 stage p-4 flex flex-row justify-content-center lg:justify-content-between">
                    <img src="./assets/images/logo.png" style={{ height: '38px' }} className="xl:ml-8" />
                    <button className="hidden lg:block py-3 px-6 border-round-md text-white default-button cursor-pointer border-none mr-6"
                        onClick={controller.scrollToForm} >Cadastre-se</button>
                </div>
            </header>
            <div className="stage m-auto w-11 flex flex-column xl:flex-row w-full flex-1 h-full">
                <div ref={controller.components.section1ColumnLeft.ref} className="w-12 xl:w-5 h-full flex flex-column justify-content-center align-items-center md:align-items-start animated">
                    <span className="w-full text-4xl xl:text-7xl title text-white text-center xl:text-left xl:pl-8 pt-6 xl:pt-0">
                        A <b>carteira</b> desta geração
                    </span>

                    <span className="w-10 lg:w-full text-2xl xl:text-3xl my-6 text-center line-height-3 xl:text-left xl:pl-8" style={{ color: '#D9EEE8' }}>
                        Banco, gerenciador de finanças e muito mais em um super app.
                    </span>

                    <div className="text-center w-full lg:hidden mb-6">
                        <button className="text-xl py-3 px-6 border-round-md text-white default-button cursor-pointer border-none"
                            onClick={controller.scrollToForm} >Cadastre-se</button>
                    </div>

                    <div className="block xl:hidden w-12 full flex flex-column justify-content-center align-items-center mb-2">
                        <img src="./assets/images/mobile.png" alt="" className="w-12 lg:w-10 my-3 xl:mt-0" />
                    </div>
                    <div className="w-full xl:w-auto text-center xl:ml-8 mb-5 xl:mb-0">
                        <a href="https://apps.apple.com/br/app/carteira-ia/id6480260085?l=pt-BR" target="_blank">
                            <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} className="cursor-pointer max-w-6" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.carteiraia.app" target="_blank">
                            <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2 cursor-pointer max-w-6" />
                        </a>
                    </div>
                </div>
                <div ref={controller.components.section1ColumnRight.ref} className="hidden w-7 h-full xl:flex flex-column justify-content-center align-items-start mb-2 md:mb-0 animated">
                    <img src="./assets/images/mobile.png" alt="" className="w-12 lg:w-10 my-6 xl:mt-0" />
                </div>
            </div>
        </section>
        <section className="w-full flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#985699', height: '720px' }}>
            <div className="w-8 xl:w-6 stage">
                <span ref={controller.components.section2.ref}
                    className="block text-5xl lg:text-7xl text-white animated section2-text">
                    <b>E se</b> suas necessidades financeiras fossem <b>resolvidas</b>
                </span>
                <span ref={controller.components.section2TextFragment.ref}
                    className="block text-5xl lg:text-7xl text-white animated  section2-text underline">
                    <b>em um só lugar ?</b>
                </span>
            </div>
        </section>
        <section className="py-6 xl:py-0 w-full xl:min-h-screen xl:h-screen" style={{ backgroundColor: '#F4F9F8' }}>
            <div className="m-auto w-11 stage flex flex-column lg:flex-row h-full">
                <div ref={controller.components.section3ColumnLeft.ref} className="w-12 lg:w-6 flex flex-1 justify-content-center xl:justify-content-end align-items-center animated">
                    <img src="./assets/images/mobile-2.png" alt="" className="w-10 h-auto mt-5 md:mt-0" />
                </div>
                <div ref={controller.components.section3ColumnRight.ref} className="w-12 lg:w-6 flex flex-column justify-content-center align-items-center mt-6 md:mt-0 animated">
                    <span className="text-4xl xl:text-7xl xl:ml-5 text-center xl:text-left w-10 line-height-2" style={{ color: '#00988D' }}>
                        A <b>Carteira IA</b> combina <b className="subl">banco</b> e <b className="subl">gestão financeira</b>, com inteligência artificial.
                    </span>
                </div>
            </div>
        </section>
        <section className="w-full flex flex-row align-items-start justify-content-center"
            style={{ backgroundColor: '#F4F9F8' }}>
            <div className="w-11 stage flex flex-column my-8 xl:my-3">
                <span ref={controller.components.section4Title.ref}
                    className="text-4xl xl:text-7xl text-center title mb-5 animated"
                    style={{ color: '#00988D' }}>
                    3 motivos para ter sua <b>Carteira IA</b>
                </span>
                <div ref={controller.components.section4Cards.ref}
                    className="flex flex-column md:flex-row w-12 xl:w-11 m-auto animated">
                    {
                        controller.cards.map((item: any, index: number) => {
                            return <div className="w-12 md:w-4 py-2 md:py-2 md:px-2 flex" key={index}>
                                <div className="bg-white p-4 border-round-lg shadow-1 flex flex-row flex-1 card-items">
                                    <div>
                                        <span className="text-2xl line-height-2" style={{ color: '#00988D' }}>
                                            <b>{item.title}</b>
                                        </span>
                                        <span className="text-xl block mt-3 line-height-2" style={{ color: '#647672' }}>
                                            {item.message}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section >
        <section className="w-full min-h-screen xl:p-8 flex flex-column align-items-center" style={{ boxSizing: 'border-box', backgroundColor: '#F4F9F8' }}>

            <div className="w-11 xl:w-11 stage">
                <div className="shadow-2 w-12 xl:w-11 m-auto pb-3" style={{ borderRadius: '40px', backgroundColor: 'white' }}>
                    <span ref={controller.components.section5Title.ref} className="text-4xl xl:text-6xl title pt-5 md:p-8 block text-center animated" style={{ color: '#985699' }}>
                        Como a carteira funciona?
                    </span>

                    {
                        controller.cards2.map((item: any, index: number) => {

                            const flexRowDirection = index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
                            const alignItemsLeft = index % 2 == 0 ? 'align-items-end' : 'align-items-start';
                            const alignItemsRight = index % 2 == 0 ? 'align-items-start' : 'align-items-end';

                            return <div className={`m-auto w-11 md:w-full flex flex-column lg:${flexRowDirection} mb-5`} key={index}>
                                <div ref={controller.components.section5ItemsLeft[index].ref} className={`w-12 lg:w-5 flex flex-column justify-content-center align-items-center lg:${alignItemsLeft} lg:px-4 animated`}>

                                    <div className="w-12 md:w-9 flex flex-row xl:flex-column align-items-center xl:align-items-start xl:justify-content-center">
                                        <div className="text-left w-2 xl:w-9">
                                            <img src={item.icon} style={{ width: '48px', height: 'auto' }} />
                                        </div>

                                        <p className="w-8 xl:w-9 text-2xl xl:text-5xl title block xl:my-4" style={{ color: '#985699' }}>
                                            <b>{item.title}</b>
                                        </p>
                                    </div>

                                    <span className="block text-xl xl:text-2xl md:w-9 line-height-2" style={{ color: '#79797B' }}>
                                        {item.message}
                                    </span>
                                </div>
                                <div ref={controller.components.section5ItemsRight[index].ref} className={`w-12 lg:w-7 flex flex-column justify-content-center align-items-center lg:${alignItemsRight} lg:px-4 mt-5 lg:mt-0 animated`}>
                                    <img src={item.image} alt="" className={`w-10 lg:w-7 xl:w-9 ${index % 2 == 0 ? 'xl:ml-4' : ''}`} />
                                </div>
                            </div>

                        })
                    }

                </div>
            </div>

        </section>
        <section className="w-full lg:min-h-screen flex flex-column align-items-center justify-content-center xl:justify-content-between" style={{ backgroundColor: '#F7EFF8' }}>

            <span className="w-11 text-4xl xl:text-7xl title xl:w-6 mt-8 mb-5 text-center" style={{ color: '#985699' }}>
                <b>Assista nossa apresentação oficial</b>
            </span>

            {/* <img src="assets/images/video.png" alt="" className="w-11 xl:w-6 mb-5" /> */}
            <div className="w-11 xl:w-6 mb-5">
                <iframe width="100%" style={{ aspectRatio: '2/1' }}
                    src="https://www.youtube.com/embed/A6XzeveuVGo"
                    title="A CARTEIRA DE AÇÕES DO CHATGPT | IA vai superar analistas e gestores escolhendo ações no Brasil?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>

            <div className="w-11 flex flex-column justify-content-center align-items-center xl:mt-5 mb-8">
                <p className="text-lg xl:text-2xl text-center xl:text-left" style={{ color: '#058078' }}>Compartilhe essa inovação com seus amigos.</p>
                <button type="button" className="text-base py-3 px-6 border-round-md share-button cursor-pointer flex flex-row justify-content-center"
                    onClick={() => controller.setShareModelVisible(true)}>
                    Compartilhe
                    <img src="./assets/images/share.png" style={{ height: '22px' }} alt="" className="pl-2" />
                </button>
            </div>

        </section>
        <section ref={controller.sectionForm} className="w-full min-h-screen lg:h-screen flex flex-column align-items-center justify-content-center p-2 md:p-5 lg:p-8" style={{ boxSizing: "border-box" }}>

            <div className="w-full xl:w-8" style={{ backgroundColor: '#B4DBD3', borderRadius: 40 }}>
                <p className="text-4xl xl:text-7xl text-center mt-7 mb-4" style={{ color: '#058078' }}>
                    <b>Entre na lista de espera</b>
                </p>
                <span className="text-lg xl:text-2xl block text-center px-2" style={{ color: '#566461' }}>
                    Faça seu cadastro e seja um dos primeiros a usar a carteira desta geração.
                </span>

                <div className="w-full flex flex-column xl:flex-row my-6">

                    <div className="xl:w-7 text-center xl:text-right">
                        <img src="assets/images/form-mobile.png" alt="" className="w-10 xl:w-10" />
                    </div>
                    <div className="xl:w-5 lg:pl-4 flex flex-column align-items-center xl:align-items-start justify-content-center">
                        {
                            controller.formSubmitted == false
                                ? <form action="https://formspree.io/f/xoqogeqy" className="my-4 xl:my-0 lg:pr-3"
                                    onSubmit={controller.submitForm}>
                                    <div className="field">
                                        <label className="text-base" style={{ color: '#616162' }}>Nome</label>
                                        <input placeholder="Digite seu nome completo" type="text" required
                                            value={controller.formData.name}
                                            onChange={controller.handleChange}
                                            name="name"
                                            className="w-12 p-3 border-1 border-solid border-round-sm block bg-white" />
                                    </div>
                                    <div className="field">
                                        <label className="text-base" style={{ color: '#616162' }}>Email</label>
                                        <input placeholder="Digite seu email" type="email" required
                                            value={controller.formData.email}
                                            onChange={controller.handleChange}
                                            name="email"
                                            className="w-12 p-3 border-1 border-solid border-round-sm block bg-white" />
                                    </div>
                                    <div className="field">
                                        <label className="text-base" style={{ color: '#616162' }}>Celular</label>
                                        <InputMask
                                            required
                                            placeholder="Digite seu telefone"
                                            mask="(99) 99999-9999"
                                            name="phone"
                                            value={controller.formData.phone}
                                            onChange={controller.handleChange}
                                            className="w-12 p-3 border-1 border-solid border-round-sm block bg-white"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="w-full py-3 px-5 border-round-md text-white default-button cursor-pointer border-none">Enviar</button>
                                    </div>
                                </form>
                                : <div className="w-full">
                                    <div className="w-8 m-auto">
                                        <p className="text-3xl text-left line-height-2" style={{ color: '#058078' }}>
                                            Agradecemos seu interesse! Em breve você fará parte da revolução financeira com a Carteira IA!
                                        </p>
                                    </div>
                                </div>
                        }

                    </div>

                </div>

            </div>

        </section>
        <section className="bg-linear w-full min-h-screen lg:h-screen flex flex-column lg:flex-row align-items-center justify-content-center">
            <div ref={controller.components.section8ColumnLeft.ref} className="w-11 lg:w-5 xl:w-3 xl:pr-4 animated">
                <span className="mt-4 lg:mt-0 text-center lg:text-left block w-full text-4xl xl:text-6xl title line-height-2" style={{ color: '#00988D' }}>
                    Baixe o app e <b>economize</b> de forma inteligente
                </span>
                <div className="block xl:hidden w-full mt-5 text-center">
                    <img src="assets/images/mobile-3.png" alt="" className="w-10" />
                </div>
                <div className="my-7 text-center xl:text-left">
                    <a href="https://apps.apple.com/br/app/carteira-ia/id6480260085?l=pt-BR" target="_blank">
                        <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} className="cursor-pointer" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.carteiraia.app" target="_blank">
                        <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2 cursor-pointer" />
                    </a>
                </div>
            </div>
            <div ref={controller.components.section8ColumnRight.ref} className="hidden xl:block w-8 lg:w-5 xl:w-3 xl:pl-4 animated">
                <img src="assets/images/mobile-3.png" alt="" className="w-full mb-5 xl:mb-0" />
            </div>
        </section>
        <section className="w-full flex flex-column lg:flex-row align-items-center justify-content-center" style={{ backgroundColor: '#00988D' }}>
            <div className="w-8 m-6 flex flex-column align-items-center lg:flex-row">
                <div className="w-11 lg:w-4">
                    <img src="assets/images/logo.png" alt="" className="w-6" />
                    <p className="text-lg line-height-2 my-4" style={{ color: '#D9EEE8' }}>
                        Lorem ipsum dolor sit amet consectetur. Quis amet scelerisque diam mauris sed. Semper fermentum quis et lobortis diam.
                    </p>
                    <div className="text-center xl:text-left">
                        <a href="https://apps.apple.com/br/app/carteira-ia/id6480260085?l=pt-BR" target="_blank">
                            <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.carteiraia.app" target="_blank">
                            <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2" />
                        </a>
                    </div>
                </div>
                <div className="w-11 lg:w-4 py-4 lg:py-0 flex flex-column align-items-center justify-content-center">
                    <ul className="pl-0 list-none line-height-4" style={{ color: '#D9EEE8' }}>
                        <li className="text-lg"><b>Fale conosco</b></li>
                        <li className="text-base">contato@carteiraia.com</li>
                        <li className="text-base">
                            <a className="text-white" href="https://carteiraia.com/politica-privacidade.html">
                                Política de Privacidade
                            </a>
                        </li>
                        <li className="text-base">
                            <a className="text-white" href="https://carteiraia.com/exclusao-de-conta.html">
                                Exclusão de Conta
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-11 lg:w-4 py-4 lg:py-0 flex flex-row align-items-center justify-content-center">

                    <a href="https://www.facebook.com/carteiraia" target="_blank">
                        <img src="assets/images/facebook.png" style={{ width: '32px' }} />
                    </a>
                    <a href="https://www.instagram.com/carteira-ia/" target="_blank" className="mx-4">
                        <img src="assets/images/instagram.png" style={{ width: '32px' }} />
                    </a>
                    <a href="https://www.linkedin.com/company/carteiraia/" target="_blank">
                        <img src="assets/images/linkedin.png" style={{ width: '32px' }} />
                    </a>
                </div>
            </div>
        </section>
        <section className="w-full flex flex-column lg:flex-row align-items-center justify-content-center" style={{ backgroundColor: '#0A6561' }}>
            <div className="w-11 lg:w-8 m-6 flex flex-column">
                <span className="text-base uppercase" style={{ color: '#D9EEE8' }}>
                    carteira ia tecnologia e pagamentos CNPJ 11.148.205/0001-35
                </span>
                <p className="text-sm line-height-2 my-4" style={{ color: '#D9EEE8' }}>
                    Lorem ipsum dolor sit amet consectetur. Phasellus orci facilisis gravida in viverra enim augue id eu. Sed urna maecenas morbi ipsum porta massa id. Et diam quam vitae ut et egestas leo ornare. Curabitur eget nibh condimentum tempus elementum et. Risus in dapibus semper ornare suspendisse sagittis rutrum posuere senectus. Consectetur ultrices ac pulvinar volutpat ut vitae lorem suscipit. Pulvinar tortor enim aliquet quisque. Id justo nibh bibendum lectus. Maecenas natoque netus metus enim ultrices aliquet nulla. Habitasse mattis sollicitudin vestibulum ultricies varius iaculis arcu. Rhoncus sed cras vestibulum amet.
                </p>
                <span className="text-base uppercase" style={{ color: '#D9EEE8' }}>
                    copyright 2024
                </span>
            </div>
        </section>

        <Modal
            isOpen={controller.shareModelVisible}
            onAfterOpen={() => controller.setShareModelVisible(true)}
            onRequestClose={() => controller.setShareModelVisible(false)}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                }
            }}

        >
            <span className="text-lg mb-3 block font-bold" style={{ color: '#985699' }}>Compartilhe essa novidade com seus amigos</span>
            <FacebookShareButton url={window.location.href} className="mx-2" hashtag="#carteriaia, #chatgpt, #inteligenciaarticial, #ia">
                <FacebookIcon size={50} round />
            </FacebookShareButton>
            <LinkedinShareButton className="mx-2"
                url={window.location.href}
                source={window.location.href}
                title="Carteira IA - a revolução para sua vida financeira"
                summary="Carteria IA - a revolução para sua vida financeira, controle o seu financeiro usando IA e cuide melhor do seu dinheiro"
            >
                <LinkedinIcon size={50} round />
            </LinkedinShareButton>
            <TwitterShareButton url={window.location.href} className="mx-2"
                title='Carteira IA - a revolução para sua vida financeira'
                hashtags={['carteiraia', 'inteligenciaarticial', 'ia', 'chatgpt']}
            >
                <XIcon size={50} round />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} className="mx-2"
                title='Carteira IA - a revolução para sua vida financeira'
            >
                <WhatsappIcon size={50} round />
            </WhatsappShareButton>
            <TelegramShareButton url={window.location.href} className="mx-2" title='Carteira IA - a revolução para sua vida financeira'>
                <TelegramIcon size={50} round />
            </TelegramShareButton>
        </Modal>
    </>

}

export default IndexPage