import type { CommercialVocation } from '../types';

export const commercialData = {
  totalArea: 74405, // m²
  lotSizeMin: 500,
  lotSizeMax: 8000,
  referencePricePerM2: 1200, // R$ 1.200/m²
  maxInstallments: 120, // 120 meses direto
  downPaymentMinPct: 20, // 20% de entrada
  consumerBase: 100000, // 100 mil moradores
  highlights: [
    'Área comercial privativa de 74.405m² integrada ao masterplan',
    'Lotes versáteis de 500m² até 8.000m² para grandes operações',
    'Público cativo de alta renda de até 100.000 habitantes na região',
    'Financiamento facilitado em até 120 meses direto com a Alphaville',
    'Localização estratégica no corredor do Anel Viário (BR-116 e CE-040)'
  ],
  vocations: [
    {
      title: 'Colégios & Centros Educacionais',
      description: 'Estrutura para acolher unidades de colégios bilíngues e escolas de referência para atender centenas de crianças da Cidade Alpha.',
      icon: 'school'
    },
    {
      title: 'Hospitais, Clínicas & Day Hospital',
      description: 'Polo médico e de saúde com consultórios, centros de diagnóstico e laboratórios em uma região de altíssima densidade qualificada.',
      icon: 'hospital'
    },
    {
      title: 'Mall, Shopping & Conveniência',
      description: 'Espaço para centros de compras ao ar livre, strip malls, boutiques, cafés de alta gastronomia e serviços essenciais.',
      icon: 'shopping'
    },
    {
      title: 'Supermercados & Farmácias',
      description: 'Redes de atacarejo premium, supermercados gourmet e drogarias 24h com acesso facilitado para pedestres e veículos.',
      icon: 'pharmacy'
    },
    {
      title: 'Posto de Combustíveis & Serviços',
      description: 'Pontos autorizados para postos de combustíveis com conveniência e serviços rápidos no eixo de fluxo do complexo.',
      icon: 'gas'
    },
    {
      title: 'Edifícios Corporativos & Coworking',
      description: 'Salas comerciais e hubs corporativos para profissionais liberais, advogados e executivos que residem na Cidade Alpha.',
      icon: 'office'
    }
  ] as CommercialVocation[]
};
