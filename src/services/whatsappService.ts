import type { LeadFormData } from '../types';
import { formatCurrencyBRL } from './calculatorService';

export const WHATSAPP_PHONE_DISPLAY = '(85) 99199-8466';
export const WHATSAPP_PHONE_RAW = '5585991998466';

function buildWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodedText}`;
}

export function getHeroWhatsAppUrl(): string {
  const msg = `Olá Marcus! Estou no site da Cidade Alpha Ceará e gostaria de receber a disponibilidade atualizada de lotes (residenciais e comerciais) e tirar dúvidas com você como corretor morador.`;
  return buildWhatsAppUrl(msg);
}

export function getDevelopmentWhatsAppUrl(developmentName: string, lotSize: number): string {
  const msg = `Olá Marcus! Tenho interesse no ${developmentName} (${lotSize}m²). Você pode me enviar o mapa atualizado das quadras, tabela de valores e as melhores opções disponíveis para visita?`;
  return buildWhatsAppUrl(msg);
}

export function getCommercialWhatsAppUrl(): string {
  const msg = `Olá Marcus! Gostaria de receber informações comerciais completas sobre os lotes empresariais da Cidade Alpha (74.405m² no Anel Viário / Eusébio), metragens de 500m² a 8.000m² e condições de parcelamento em até 120 meses.`;
  return buildWhatsAppUrl(msg);
}

export function getSimulationWhatsAppUrl(
  propertyValue: number,
  downPayment: number,
  termMonths: number,
  monthlyInstallment: number,
  planLabel: string,
  hoaFee: number
): string {
  const msg = `Olá Marcus! Realizei uma simulação no site da Cidade Alpha:
• Valor do Lote: ${formatCurrencyBRL(propertyValue)}
• Entrada (20%): ${formatCurrencyBRL(downPayment)}
• Plano: ${termMonths}x de ${formatCurrencyBRL(monthlyInstallment)} (${planLabel})
• Taxa Condominial estimada: ${formatCurrencyBRL(hoaFee)}/mês

Gostaria de verificar a viabilidade dessa proposta e opções disponíveis nessa faixa de preço!`;
  return buildWhatsAppUrl(msg);
}

export function getLeadFormWhatsAppUrl(data: LeadFormData): string {
  const interestMap = {
    residential: 'Lotes Residenciais (275m² a 450m²)',
    commercial: 'Lotes Comerciais / Empresariais (500m² a 8.000m²)',
    investment: 'Investimento para Valorização / Construção'
  };

  const msg = `Olá Marcus! Preenchi o formulário no site da Cidade Alpha:
• Nome: ${data.name}
• WhatsApp: ${data.phone}
• Interesse: ${interestMap[data.interest]}
${data.lotSizePreference ? `• Metragem preferida: ${data.lotSizePreference}\n` : ''}${data.message ? `• Mensagem: ${data.message}\n` : ''}
Poderia me contatar com mais detalhes?`;
  return buildWhatsAppUrl(msg);
}
