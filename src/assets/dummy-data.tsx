import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Implementação completa',
        desc: 'Vamos construir juntos um e-commerce que vai surpreender seus clientes e gerar resultados.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Integrações gerais',
        desc: 'Sua loja com as melhores integrações em relação a envio, pagamento, segurança e marketing.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Treinamento & suporte',
        desc: 'Você não fica para trás, te ajudamos em todos os processos de aprendizado e dúvidas.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: 'R$699',
        desc: 'Ideal para lojas em estágio inicial',
        credits: 'Valor único',
        features: [
            'Planejamento do projeto',
            'UI/UX design',
            'Cadastro de produtos',
            'Integrações gerais',
            'Suporte & Treinamento'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: 'R$1,490',
        desc: 'Lojas e comércios em crescimento',
        credits: 'Valor único',
        features: [
            'Tudo no pacote Starter',
            'SEO avançado',
            'Produtos no check-out',
            'Cupom flutuante',
            'Consultoria de MKT'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Enterprise',
        price: 'Sob consulta',
        desc: 'Para marcas prontas para escalar',
        credits: 'Comercial',
        features: [
            'Tudo no pacote Growth',
            'Gerente de projeto dedicado',
            'Otimização contínua',
            'Apoio em marketing e conteúdo',
            'Tráfego Pago: Meta Ads'
        ]
    }
];

export const faqData = [
    {
        question: 'Como funciona o processo de criação do meu e-commerce?',
        answer: 'Nosso processo começa com uma consulta para entender suas necessidades e objetivos. Em seguida, criamos um design personalizado, escolhemos as melhores ferramentas e implementamos estratégias de marketing, tudo alinhado à sua visão.'
    },
    {
        question: 'Quanto tempo leva para meu e-commerce ficar pronto?',
        answer: 'O tempo de entrega varia conforme a complexidade do projeto, mas geralmente podemos lançar seu e-commerce em 30 dias, garantindo que cada detalhe seja perfeito.'
    },
    {
        question: 'Posso integrar meu e-commerce com redes sociais e outras ferramentas?',
        answer: 'Com certeza! Facilitamos a integração do seu e-commerce com redes sociais, ferramentas de marketing por e-mail, sistemas de pagamento e muito mais, para maximizar suas vendas e facilitar a gestão do seu negócio.'
    },
    {
        question: 'Vocês oferecem suporte após o lançamento?',
        answer: 'Sim! Oferecemos um suporte contínuo, incluindo manutenção, atualizações e consultoria para garantir que seu e-commerce continue a prosperar.'
    }
];

export const footerLinks = [
    {
        title: "Fale conosco",
        links: [
            { name: "Implementação", url: "https://wa.me/554796648695?text=Ol%C3%A1!%20Sou%20lojista%20e%20quero%20criar%20uma%20loja%20de%20alta%20convers%C3%A3o.%20Quero%20saber%20como%20funciona." },
            { name: "Tráfego Pago", url: "https://wa.me/554796648695?text=Ol%C3%A1!%20Sou%20lojista%20e%20quero%20criar%20uma%20loja%20de%20alta%20convers%C3%A3o.%20Quero%20saber%20como%20funciona." },
            { name: "Branding", url: "https://wa.me/554796648695?text=Ol%C3%A1!%20Sou%20lojista%20e%20quero%20criar%20uma%20loja%20de%20alta%20convers%C3%A3o.%20Quero%20saber%20como%20funciona." },
            { name: "Social Media", url: "https://wa.me/554796648695?text=Ol%C3%A1!%20Sou%20lojista%20e%20quero%20criar%20uma%20loja%20de%20alta%20convers%C3%A3o.%20Quero%20saber%20como%20funciona." }
        ]
    },
    {
        title: "Termos & Boas Práticas",
        links: [
            { name: "Política de Privacidade", url: "#" },
            { name: "Termos de Serviço", url: "#" }
        ]
    },
    {
        title: "Nossas redes",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/agencia_estrutura/" },
            { name: "Facebook", url: "https://www.facebook.com/people/Estrutura-Ecommerce/61565783343071/?locale=pt_BR" },
        ]
    }
];