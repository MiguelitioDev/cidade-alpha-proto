/**
 * Business rules and calculators for Cidade Alpha Ceará
 */

export interface HOAResult {
  lotSize: number;
  ratePerM2: number;
  fixedBase: number;
  monthlyTotal: number;
  yearlyTotal: number;
}

export interface FinancingResult {
  propertyValue: number;
  downPaymentPct: number;
  downPaymentValue: number;
  financedAmount: number;
  termMonths: number;
  monthlyInstallment: number;
  planType: 'ipca' | 'interest_free';
}

/**
 * Formula explicitada nos requisitos:
 * Taxa de Condomínio = R$ 1.17 × m² + R$ 103.50
 */
export function calculateHOAFee(lotSizeM2: number): HOAResult {
  const ratePerM2 = 1.17;
  const fixedBase = 103.50;
  const rawTotal = (ratePerM2 * lotSizeM2) + fixedBase;
  const monthlyTotal = Math.round(rawTotal * 100) / 100;
  const yearlyTotal = Math.round(monthlyTotal * 12 * 100) / 100;

  return {
    lotSize: lotSizeM2,
    ratePerM2,
    fixedBase,
    monthlyTotal,
    yearlyTotal
  };
}

/**
 * Simulador de Financiamento:
 * Faixa de preço: R$ 375.000 a R$ 700.000
 * Entrada de 20%
 * Modalidade 1: Até 120 parcelas corrigidas pelo IPCA
 * Modalidade 2: Até 24 parcelas sem juros
 */
export function calculateFinancing(
  propertyValue: number,
  downPaymentPct: number = 20,
  termMonths: number = 120,
  planType: 'ipca' | 'interest_free' = 'ipca'
): FinancingResult {
  const safeDownPaymentPct = Math.max(20, Math.min(80, downPaymentPct));
  const downPaymentValue = propertyValue * (safeDownPaymentPct / 100);
  const financedAmount = propertyValue - downPaymentValue;

  let safeTerm = termMonths;
  if (planType === 'interest_free') {
    safeTerm = Math.min(24, Math.max(6, termMonths));
  } else {
    safeTerm = Math.min(120, Math.max(12, termMonths));
  }

  const monthlyInstallment = financedAmount / safeTerm;

  return {
    propertyValue,
    downPaymentPct: safeDownPaymentPct,
    downPaymentValue,
    financedAmount,
    termMonths: safeTerm,
    monthlyInstallment: Math.round(monthlyInstallment * 100) / 100,
    planType
  };
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  }).format(value);
}

export function formatNumberBR(value: number): string {
  return new Intl.NumberFormat('pt-BR').format(value);
}
