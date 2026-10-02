import type { Testimonial } from '../types';

export const agentAuthorityData = {
  name: 'Marcus Vasconcelos',
  creci: 'CRECI 18.420-F / CE',
  title: 'Corretor Especialista & Morador da Cidade Alpha Ceará',
  headline: 'A autoridade de quem não apenas vende, mas vive o dia a dia da Cidade Alpha.',
  experienceYears: 11,
  dealsCount: '+340 lotes negociados',
  phone: '(85) 99199-8466',
  whatsappRaw: '5585991998466',
  instagram: 'https://instagram.com/cidadealphaceara.especialista',
  bio: 'Residente no Alphaville Ceará há mais de 5 anos, Marcus conhece cada rua, topografia, incidência solar dos lotes e o regulamento de obras em detalhes. Sua consultoria vai além da intermediação tradicional: proporciona segurança técnica na escolha do lote com a melhor vista, ventilação e potencial de valorização futura.',
  badges: [
    {
      title: '100% dos Lotes Vendidos em 4 Horas',
      subtitle: 'Recorde nacional no lançamento histórico do Alphaville Ceará 4'
    },
    {
      title: 'Morador Residente',
      subtitle: 'Vivência real da segurança, clube e convivência entre famílias'
    },
    {
      title: '+100% de Valorização Comprovada',
      subtitle: 'Histórico documentado de rentabilidade para os primeiros adquirentes'
    }
  ],
  appreciationCases: [
    {
      development: 'Alphaville Ceará 1',
      launchYear: '2014',
      launchPricePerM2: 'R$ 310 / m²',
      currentPricePerM2: 'R$ 1.350 / m²',
      roiPercentage: '+335%',
      tag: 'Valorização Consolidada'
    },
    {
      development: 'Alphaville Ceará 4',
      launchYear: '2021',
      launchPricePerM2: 'R$ 490 / m²',
      currentPricePerM2: 'R$ 1.200 / m²',
      roiPercentage: '+145%',
      tag: 'Recorde de Vendas (4 Horas)'
    },
    {
      development: 'Terras Alphaville 4 & 5',
      launchYear: '2022',
      launchPricePerM2: 'R$ 580 / m²',
      currentPricePerM2: 'R$ 1.150 / m²',
      roiPercentage: '+98%',
      tag: 'Alta Liquidez Residencial'
    }
  ]
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Leonardo Albuquerque',
    title: 'Médico Cardiologista',
    residential: 'Morador do Alphaville Ceará 2',
    residentSince: 'Morando há 3 anos',
    content: 'Mudar de Fortaleza para a Cidade Alpha foi a melhor decisão para nossa família. Meus filhos brincam na rua de bicicleta até tarde com segurança armada absoluta. O Marcus nos ajudou a escolher um lote nascente e plano que economizou muito na nossa fundação.',
    appreciationNote: 'Lote valorizou mais de 120% desde a aquisição.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&h=180&q=80'
  },
  {
    id: 'test-2',
    name: 'Mariana & Roberto Fontenelle',
    title: 'Empresários e Investidores',
    residential: 'Proprietários de 2 lotes no Terras 3 e Alphaville 5',
    residentSince: 'Investidores desde 2019',
    content: 'A consultoria do Marcus foi essencial. Ele identificou uma oportunidade de repasse que nos garantiu um retorno inacreditável. O acompanhamento em toda a parte cartorária e documental nos deu tranquilidade total.',
    appreciationNote: 'Construíram para locação e venda com retorno anual expressivo.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&h=180&q=80'
  },
  {
    id: 'test-3',
    name: 'Dra. Patricia Siqueira',
    title: 'Advogada & Arquiteta',
    residential: 'Moradora do Alphaville Ceará 1',
    residentSince: 'Morando há 4 anos',
    content: 'O padrão construtivo e o respeito às normas urbanísticas fazem da Cidade Alpha um oásis. A manutenção do condomínio é impecável e a taxa condominial é extremamente justa para tudo que usufruímos.',
    appreciationNote: 'Qualidade de vida incomparável com infraestrutura subterrânea.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=180&h=180&q=80'
  }
];
