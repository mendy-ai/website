import IndexController from "./IndexController";
import './index.css';

const IndexPage = () => {

    const controller = IndexController();

    return <>
        <section className="w-full min-h-screen xl:h-screen flex flex-column" style={{ backgroundColor: '#00988D' }}>
            <header style={{ backgroundColor: '#058078' }}>
                <div className="m-auto w-11 stage p-4 flex flex-row justify-content-between">
                    <img src="./assets/images/logo.png" style={{ height: '38px' }} className="xl:ml-8" />
                    <button className="hidden md:block py-3 px-6 border-round-md text-white default-button cursor-pointer border-none mr-6">Cadastre-se</button>
                </div>
            </header>
            <div className="stage m-auto w-11 flex flex-column xl:flex-row w-full flex-1 h-full">
                <div className="w-12 xl:w-5 h-full flex flex-column justify-content-center align-items-center md:align-items-start">
                    <span className="w-full text-4xl xl:text-7xl title text-white text-center xl:text-left xl:pl-8 pt-6 xl:pt-0">
                        A <b>carteira</b> desta geração
                    </span>
                    <span className="w-full text-2xl xl:text-3xl my-6 text-center line-height-3 xl:text-left xl:pl-8" style={{ color: '#D9EEE8' }}>
                        Banco, gerenciador de finanças e muito mais em um super app.
                    </span>
                    <div className="block xl:hidden w-12 full flex flex-column justify-content-center align-items-center mb-2">
                        <img src="./assets/images/mobile.png" alt="" className="w-12 lg:w-10 my-6 xl:mt-0" />
                    </div>
                    <div className="w-full xl:w-auto text-center xl:ml-8 mb-5 xl:mb-0">
                        <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} className="cursor-pointer max-w-6" />
                        <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2 cursor-pointer max-w-6" />
                    </div>
                </div>
                <div className="hidden w-7 h-full xl:flex flex-column justify-content-center align-items-start mb-2 md:mb-0">
                    <img src="./assets/images/mobile.png" alt="" className="w-12 lg:w-10 my-6 xl:mt-0" />
                </div>
                {/* <div className="hidden xl:block w-12 lg:w-7 h-full flex-1 mb-2 md:mb-0">
                    <img src="./assets/images/mobile.png" alt="" className="w-12 lg:w-10 my-6 xl:mt-0" />
                </div> */}
            </div>
        </section>
        <section className="w-full flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#985699', height: '720px' }}>
            <div className="w-6 stage">
                <span className="text-4xl lg:text-7xl title text-white">
                    <b>E se</b> suas necessidades financeiras fossem <b>resolvidas</b>
                </span>
            </div>
        </section>
        <section className="w-full min-h-screen md:h-screen" style={{ backgroundColor: '#F4F9F8' }}>
            <div className="m-auto w-11 stage flex flex-column lg:flex-row h-full">
                <div className="w-12 lg:w-6 flex flex-1 justify-content-center xl:justify-content-end align-items-center">
                    <img src="./assets/images/mobile-2.png" alt="" className="w-10 h-auto mt-5 md:mt-0" />
                </div>
                <div className="w-12 lg:w-6 flex flex-column justify-content-center align-items-center mt-6 md:mt-0">
                    <span className="text-4xl xl:text-7xl xl:ml-5 text-center xl:text-left w-10 line-height-2" style={{ color: '#00988D' }}>
                        A <b>Carteira IA</b> combina <b className="subl">banco</b> e <b className="subl">gestão financeira</b>, com inteligência artificial.
                    </span>
                </div>
            </div>
        </section>
        <section className="w-full flex flex-row align-items-start justify-content-center"
            style={{ backgroundColor: '#F4F9F8' }}>
            <div className="w-11 stage flex flex-column my-8 xl:my-3">
                <span className="text-4xl xl:text-7xl text-center title mb-5" style={{ color: '#00988D' }}>
                    3 motivos para ter sua <b>Carteira IA</b>
                </span>
                <div className="flex flex-column md:flex-row w-12 m-auto">
                    {
                        controller.cards.map((item: any) => {
                            return <div className="w-12 md:w-4 py-2 md:py-2 md:px-2 flex">
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
                    <span className="text-4xl xl:text-6xl title pt-5 md:p-8 block text-center" style={{ color: '#985699' }}>
                        Como sua carteira funciona?
                    </span>

                    {
                        controller.cards2.map((item: any, index: number) => {

                            const flexRowDirection = index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
                            const alignItemsLeft = index % 2 == 0 ? 'align-items-end' : 'align-items-start';
                            const alignItemsRight = index % 2 == 0 ? 'align-items-start' : 'align-items-end';

                            return <div className={`m-auto w-11 md:w-full flex flex-column lg:${flexRowDirection} mb-5`}>
                                <div className={`w-12 lg:w-5 flex flex-column justify-content-center align-items-center lg:${alignItemsLeft} lg:px-4`}>

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
                                <div className={`w-12 lg:w-7 flex flex-column justify-content-center align-items-center lg:${alignItemsRight} lg:px-4 mt-5 lg:mt-0`}>
                                    <img src={item.image} alt="" className={`w-10 lg:w-7 xl:w-9 ${index % 2 == 0 ? 'xl:ml-4' : ''}`} />
                                </div>
                            </div>

                        })
                    }

                </div>
            </div>

        </section>
        <section className="w-full min-h-screen flex flex-column align-items-center justify-content-between" style={{ backgroundColor: '#F7EFF8' }}>

            <span className="w-11 text-4xl xl:text-7xl title xl:w-6 mt-8 mb-5 text-center" style={{ color: '#985699' }}>
                <b>Assista nossa apresentação oficial</b>
            </span>

            <img src="assets/images/video.png" alt="" className="w-11 xl:w-6 mb-5" />

            <div className="w-11 flex flex-column justify-content-center align-items-center mt-5 mb-8">
                <p className="text-lg xl:text-2xl text-center xl:text-left" style={{ color: '#058078' }}>Compartilhe essa inovação com seus amigos.</p>
                <button type="button" className="text-base py-3 px-6 border-round-md share-button bg-transparent cursor-pointer flex flex-row justify-content-center">
                    Compartilhe
                    <img src="./assets/images/share.png" style={{ height: '22px' }} alt="" className="pl-2" />
                </button>
            </div>

        </section>
        <section className="w-full min-h-screen lg:h-screen flex flex-column align-items-center justify-content-center p-2 md:p-5 lg:p-8" style={{ boxSizing: "border-box" }}>

            <div className="w-full xl:w-8" style={{ backgroundColor: '#B4DBD3', borderRadius: 40 }}>
                <p className="text-4xl xl:text-7xl text-center mt-7 mb-4" style={{ color: '#058078' }}>
                    <b>Entre na lista de espera</b>
                </p>
                <span className="text-lg xl:text-2xl block text-center" style={{ color: '#566461' }}>
                    Faça seu cadastro e seja um dos primeiros a usar a carteira desta geração.
                </span>

                <div className="w-full flex flex-column xl:flex-row my-6">

                    <div className="xl:w-7 text-center xl:text-right">
                        <img src="assets/images/form-mobile.png" alt="" className="w-10 xl:w-10" />
                    </div>
                    <div className="xl:w-5 lg:pl-4 flex flex-column align-items-center xl:align-items-start justify-content-center">
                        <form className="my-4 xl:my-0">
                            <div className="field">
                                <label className="text-base" style={{ color: '#616162' }}>Nome</label>
                                <input placeholder="Digite seu nome completo" type="text"
                                    className="w-12 p-3 border-1 border-solid border-round-sm block bg-white" />
                            </div>
                            <div className="field">
                                <label className="text-base" style={{ color: '#616162' }}>Email</label>
                                <input placeholder="Digite seu email" type="email"
                                    className="w-12 p-3 border-1 border-solid border-round-sm block bg-white" />
                            </div>
                            <div className="field">
                                <label className="text-base" style={{ color: '#616162' }}>Celular</label>
                                <input placeholder="Digite seu número" type="phone"
                                    className="w-12 p-3 border-1 border-solid border-round-sm block bg-white" />
                            </div>
                            <div className="mt-4">
                                <button type="button" className="w-full py-3 px-5 border-round-md text-white default-button cursor-pointer border-none">Enviar</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
        <section className="bg-linear w-full min-h-screen lg:h-screen flex flex-column lg:flex-row align-items-center justify-content-center">
            <div className="w-11 lg:w-5 xl:w-3 xl:pr-4">
                <span className="mt-4 lg:mt-0 text-center lg:text-left block w-full text-4xl xl:text-6xl title line-height-2" style={{ color: '#00988D' }}>
                    Baixe o app e <b>economize</b> de forma inteligente
                </span>
                <div className="block xl:hidden w-full mt-5 text-center">
                    <img src="assets/images/mobile-3.png" alt="" className="w-10" />
                </div>
                <div className="my-7 text-center xl:text-left">
                    <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} className="cursor-pointer" />
                    <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2 cursor-pointer" />
                </div>
            </div>
            <div className="hidden xl:block w-8 lg:w-5 xl:w-3 xl:pl-4">
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
                        <img src="./assets/images/apple-play-button.png" style={{ height: '56px' }} className="cursor-pointer" />
                        <img src="./assets/images/google-play-button.png" style={{ height: '56px' }} className="md:ml-2 cursor-pointer" />
                    </div>
                </div>
                <div className="w-11 lg:w-4 py-4 lg:py-0 flex flex-column align-items-center justify-content-center">
                    <ul className="pl-0 list-none line-height-4" style={{ color: '#D9EEE8' }}>
                        <li className="text-lg"><b>Fale conosco</b></li>
                        <li className="text-base">contato@carteiraia.com</li>
                        <li className="text-base">Política de Privacidade</li>
                        <li className="text-base">Exclusão de Conta</li>
                    </ul>
                </div>
                <div className="w-11 lg:w-4 py-4 lg:py-0 flex flex-row align-items-center justify-content-center">

                    <img src="assets/images/facebook.png" style={{ width: '32px' }} />
                    <img src="assets/images/instagram.png" style={{ width: '32px' }} className="mx-4" />
                    <img src="assets/images/linkedin.png" style={{ width: '32px' }} />

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
    </>

}

export default IndexPage