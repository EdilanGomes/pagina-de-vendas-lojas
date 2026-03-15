import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Sua loja começa do jeito certo',
        desc: 'Arquitetura, páginas, categorias e experiência pensadas para transformar visitantes em clientes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Tudo integrado para vender',
        desc: 'Pagamentos, envios, automações e ferramentas conectadas para sua loja rodar sem problemas.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Aprenda a usar sua loja de verdade',
        desc: 'Treinamos você e sua equipe de forma fácil para usar a loja com segurança desde o primeiro dia.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Crescimento',
        price: 'R$1397',
        desc: 'Ideal para começar do zero absoluto',
        credits: 'Valor único',
        features: [
            'Estratégia inicial da loja',
            'Design profissional da loja',
            'Cadastro inicial de produtos',
            'Pagamentos online configurados',
            'Cálculo automático de frete',
            'Domínio e segurança SSL',
            'Treinamento para usar a loja'
        ]
    },
    {
        id: 'pro',
        name: 'Expansão',
        price: 'R$2497',
        desc: 'Para lojistas que já querem dar um Boost',
        credits: 'Valor único',
        features: [
            'Tudo do plano Crescimento',
            'SEO otimizado para Google',
            'Estratégia de conversão da loja',
            'Produtos sugeridos no checkout',
            'Cupom automático de desconto',
            'Integração com ferramentas de marketing',
            'Consultoria estratégica de vendas',
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Avançado',
        price: 'Sob consulta',
        desc: 'Para marcas prontas para escalar',
        credits: 'Comercial',
        features: [
            'Tudo do plano Expansão',
            'Gerente de projeto dedicado',
            'Otimização contínua da loja',
            'Estratégia completa de marketing',
            'Apoio em conteúdo e campanhas',
            'Gestão de tráfego pago (Meta Ads)',
            'Relatórios e acompanhamento'
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