import { useEffect, useRef, useState } from "react";
import { isArray } from "util";

const IndexController = () => {

    const [shareModelVisible, setShareModelVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const sectionForm = useRef(null)
    const components: any = {
        section1ColumnLeft: {
            className: 'animate__fast animate__animated animate__backInLeft',
            ref: useRef(null)
        },
        section1ColumnRight: {
            className: 'animate__fast animate__animated animate__backInRight',
            ref: useRef(null)
        },
        section2: {
            className: 'animate__fast animate__animated animate__backInDown',
            ref: useRef(null),
        },
        section2TextFragment: {
            delay: 750,
            className: 'animate__delay-500ms animate__fast animate__animated animate__fadeInRight',
            ref: useRef(null)
        },
        section3ColumnLeft: {
            className: 'animate__fast animate__animated animate__backInLeft',
            ref: useRef(null)
        },
        section3ColumnRight: {
            className: 'animate__fast animate__animated animate__backInRight',
            ref: useRef(null)
        },
        section4Title: {
            className: 'animate__fast animate__animated animate__backInRight',
            ref: useRef(null)
        },
        section4Cards: {
            className: 'animate__fast animate__animated animate__pulse',
            ref: useRef(null)
        },
        section5Title: {
            className: 'animate__fast animate__animated animate__fadeInDown',
            ref: useRef(null)
        },
        section5: {
            className: 'animate__fast animate__animated animate__fadeInDown',
            ref: useRef(null)
        },
        section5ItemsLeft: [
            {
                className: 'animate__fast animate__animated animate__fadeInLeft',
                ref: useRef(null)
            },
            {
                className: 'animate__fast animate__animated animate__fadeInRight',
                ref: useRef(null)
            },
            {
                className: 'animate__fast animate__animated animate__fadeInLeft',
                ref: useRef(null)
            }
        ],
        section5ItemsRight: [
            {
                className: 'animate__fast animate__animated animate__fadeInRight',
                ref: useRef(null)
            },
            {
                className: 'animate__fast animate__animated animate__fadeInLeft',
                ref: useRef(null)
            },
            {
                className: 'animate__fast animate__animated animate__fadeInRight',
                ref: useRef(null)
            }
        ],
        section8ColumnLeft: {
            className: 'animate__fast animate__animated animate__backInLeft',
            ref: useRef(null)
        },
        section8ColumnRight: {
            className: 'animate__fast animate__animated animate__backInRight',
            ref: useRef(null)
        },
    };
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
            icon: './assets/images/icon-home-screen.png',
            title: 'Inicie uma conversa',
            message: 'Escreva uma mensagem, grave áudio, envie imagens ou documentos.',
            image: './assets/images/home-screen.png'
        },
        {
            icon: './assets/images/icon-chat-table-screen.png',
            title: 'Descomplique suas finanças',
            message: 'Gestão financeira de forma fácil com ajuda da Carteira IA. Nunca mais fique perdido nas suas finanças.',
            image: './assets/images/chat-table-screen.png'
        },
        {
            icon: './assets/images/icon-chat-screen.png',
            title: 'Resolva tudo em um instante',
            message: 'Otimize seu tempo e simplifique sua rotina financeira com simples comandos. Tudo em uma conversa.',
            image: './assets/images/chat-screen.png'
        }
    ]
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = async (event: any) => {

        event.preventDefault();
        event.stopPropagation();

        await fetch(event.target.action, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json'
            }
        });

        setFormSubmitted(true);

        setFormData({
            name: '',
            email: '',
            phone: ''
        })

    }
    const scrollToForm = () => {
        (sectionForm.current as any).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {

        const observers: any[] = [];
        const initComponent = (component: any) => {

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        if (!entry.target.classList.contains('animate__animated')) {
                            component.className.split(' ').forEach((_class: string) => {
                                setTimeout(() => {
                                    entry.target.classList.add(_class)
                                }, component.delay ?? 0)
                            })
                        }
                    }
                },
                { threshold: 0.8 }
            );

            observers.push({
                observer,
                ref: component.ref
            });

            if (component.ref.current) {
                observer.observe(component.ref.current);
            }

        }


        for (const key in components) {
            const component = components[key]
            if (Array.isArray(component))
                for (const item of component) {
                    initComponent(item);
                }
            else
                initComponent(component);
        }

        return () => {
            if (observers.length) {
                for (const item of observers) {
                    if (item.ref.current)
                        item.observer.unobserve(item.ref.current);
                }
            }
        };

    }, []);

    return {
        cards,
        cards2,
        components,
        formData,
        sectionForm,
        shareModelVisible,
        formSubmitted,
        submitForm,
        handleChange,
        scrollToForm,
        setShareModelVisible,
        setFormSubmitted
    }

}

export default IndexController