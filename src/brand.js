'use strict';
// Identidade da loja. Para replicar o site para outra loja, troque este arquivo e as logos em public/img/.
module.exports = {
  name: 'Fernanda Veículos',
  slogan: 'A rainha da aprovação',
  slug: 'fernanda-veiculos',
  tagline: 'Seminovos com crédito facilitado em Igarassu',
  heroTitle: 'Seu carro aprovado<br><em>está aqui.</em>',
  heroLead: '{total} veículos à pronta entrega, com especialistas em aprovação de crédito. Aqui você trata com amigos.',
  about: 'Há 12 anos realizando sonhos em Igarassu, a Fernanda Veículos já vendeu mais de 10.000 carros. Especialistas em aprovação de crédito: aqui você trata com amigos.',
  email: '',
  instagram: 'https://instagram.com/fernandaveiculoss',
  why: [
    ['money', 'Especialista em aprovação', 'Somos conhecidos como a rainha da aprovação: trabalhamos com vários bancos para aprovar o seu crédito.'],
    ['shield', 'Mais de 10.000 carros vendidos', 'Experiência de quem já entregou milhares de carros para clientes satisfeitos.'],
    ['store', '12 anos realizando sonhos', 'Uma empresa sólida, com história em Igarassu e região.'],
    ['swap', 'Seu usado na troca', 'Avaliação justa e rápida do seu carro como parte do pagamento.']
  ],
  // Cores do site (azul e vermelho da logo)
  colors: {
    dark: '#0d1a5c',
    primary: '#1630a0',
    primary2: '#2443c4',
    accent: '#d9141a',
    accent2: '#b00f14',
    accentSoft: '#ffb0b0',
    accentBright: '#ff4d52',
    hero1: '#081040', hero2: '#0f2280', hero3: '#1630a0', heroGlow: '#2a4fd6',
    footer: '#070d33',
    onDarkMuted: '#cdd6f5'
  },
  // Lojas iniciais (podem ser editadas, adicionadas ou removidas no painel)
  units: [
    {
      name: 'Fernanda Veículos', address: 'Av. Barão de Vera Cruz, 217', neighborhood: 'Cruz de Rebouças', city: 'Igarassu - PE',
      phone: '(81) 9505-1132', whatsapp: '558195051132',
      hours_json: [...Array(5)].map(() => ({ open: '08:00', close: '18:00' })).concat([{ open: '08:00', close: '12:00' }, null])
    }
  ]
};
