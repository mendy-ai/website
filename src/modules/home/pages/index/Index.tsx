import IndexController from "./IndexController";

const IndexPage = () => {

    const controller = IndexController();

    return <>
        <section className="w-full min-h-screen md:h-screen flex flex-column" style={{ backgroundColor: '#00988D' }}>
            <header>
                <div className="w-full">
                    <div className="m-auto w-12 lg:w-8 p-4 flex flex-row justify-content-between">
                        <img src="./assets/images/logo.png" style={{ height: '32px' }} />
                        <button className="hidden md:block py-3 px-5 border-round-md text-white default-button cursor-pointer border-none">Cadastre-se</button>
                    </div>
                </div>
            </header>
            <div className="m-auto w-11 lg:w-8 flex flex-column lg:flex-row w-full flex-1">
                <div className="w-12 lg:w-6 h-full flex flex-column justify-content-center align-items-center md:align-items-start">
                    <span className="text-4xl md:text-6xl title text-white text-center md:text-left">
                        A carteira desta geração
                    </span>
                    <span className="text-xl my-4 text-center md:text-left" style={{ color: '#D9EEE8' }}>
                        Banco, gerenciador de finanças e muito mais em um super app.
                    </span>
                    <div>
                        <button className="py-3 px-5 border-round-md text-white default-button cursor-pointer border-none">Cadastre-se</button>
                    </div>
                    <div className="mt-7">
                        <img src="./assets/images/apple-play-button.png" style={{ height: '48px' }} className="cursor-pointer" />
                        <img src="./assets/images/google-play-button.png" style={{ height: '48px' }} className="md:ml-2 cursor-pointer" />
                    </div>
                </div>
                <div className="w-12 lg:w-6 h-full flex flex-column justify-content-center mb-2 md:mb-0">
                    <img src="./assets/images/mobile.png" alt="" className="w-full" />
                </div>
            </div>
        </section>
        <section className="w-full min-h-screen md:h-screen flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#985699' }}>

            <div className="w-11 md:w-5">
                <span className="text-4xl md:text-6xl title text-white">
                    E se suas necessidades financeiras fossem resolvidas em um só lugar?
                </span>
            </div>

        </section>
        <section className="w-full min-h-screen md:h-screen" style={{ backgroundColor: '#F4F9F8' }}>
            <div className="m-auto w-11 lg:w-8 flex flex-column lg:flex-row h-full">
                <div className="w-12 lg:w-4 flex flex-1 justify-content-center align-items-center pr-6">
                    <img src="./assets/images/mobile-2.png" alt="" className="w-full h-auto mt-3 md:mt-0" />
                </div>
                <div className="w-12 lg:w-8 flex flex-column justify-content-center mt-4 md:mt-0">
                    <span className="text-4xl md:text-6xl text-center md:text-left title" style={{ color: '#00988D' }}>
                        A Carteira IA é um banco e gerenciador financeiro em uma carteira digital
                    </span>
                    <span className="text-xl mt-3 text-center md:text-left" style={{ color: '#647672' }}>
                        Tudo que você precisa através de uma assistente impulsionada por inteligência artificial.
                    </span>
                </div>
            </div>
        </section>

        <section className="w-full min-h-screen md:h-screen flex align-items-center justify-content-center"
            style={{ backgroundColor: '#F4F9F8' }}>
            <div className="m-auto w-11 lg:w-8 flex flex-column">
                <span className="text-3xl text-center title mb-5" style={{ color: '#00988D' }}>
                    Razões para ela fazer parte do seu dia a dia
                </span>
                <div className="flex flex-column md:flex-row">
                    {
                        controller.cards.map((item: any) => {
                            return <div className="w-12 md:w-4 py-2 md:py-2 md:px-2 flex">
                                <div className="bg-white p-4 border-round-lg shadow-1 flex flex-row flex-1">
                                    <div className="w-2">
                                        <img src="./assets/images/expense-icon.png" style={{ height: '32px' }} />
                                    </div>
                                    <div className="w-10">
                                        <span className="text-lg" style={{ color: '#00988D' }}>
                                            {item.title}
                                        </span>
                                        <span className="text-base block mt-3 line-height-2" style={{ color: '#647672' }}>
                                            {item.message}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    </>

}

export default IndexPage;