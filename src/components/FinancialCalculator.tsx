import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { calculateHOAFee, calculateFinancing, formatCurrencyBRL } from '../services/calculatorService';
import { IconCalculator, IconCheck, IconWhatsApp, IconArrowRight } from './Icons';
import { getSimulationWhatsAppUrl } from '../services/whatsappService';

export const FinancialCalculator: Component = () => {
  // HOA State
  const [lotSize, setLotSize] = createSignal<number>(450);

  // Financing State
  const [propertyPrice, setPropertyPrice] = createSignal<number>(450000);
  const [downPaymentPct, setDownPaymentPct] = createSignal<number>(20);
  const [termMonths, setTermMonths] = createSignal<number>(120);
  const [planType, setPlanType] = createSignal<'ipca' | 'interest_free'>('ipca');

  // Computed HOA
  const hoaResult = () => calculateHOAFee(lotSize());

  // Computed Financing
  const financingResult = () => calculateFinancing(
    propertyPrice(),
    downPaymentPct(),
    termMonths(),
    planType()
  );

  const handlePlanTypeChange = (type: 'ipca' | 'interest_free') => {
    setPlanType(type);
    if (type === 'interest_free') {
      setTermMonths(24);
    } else {
      setTermMonths(120);
    }
  };

  const getWhatsAppSimLink = () => {
    const f = financingResult();
    const h = hoaResult();
    const planName = f.planType === 'interest_free' ? 'Sem Juros (Parcelas Fixas)' : 'Direto Alphaville (Corrigido por IPCA)';
    return getSimulationWhatsAppUrl(
      f.propertyValue,
      f.downPaymentValue,
      f.termMonths,
      f.monthlyInstallment,
      planName,
      h.monthlyTotal
    );
  };

  return (
    <section id="calculadora" class="section-padding" style={{ background: '#FFFFFF' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Transparência e Simulação Financeira</span>
          <h2 class="section-title">Calculadora de Custos & Financiamento</h2>
          <p class="section-subtitle">
            Simule com precisão a taxa condominial exata do seu lote e as condições de pagamento 
            direto com a loteadora sem burocracia bancária.
          </p>
        </div>

        {/* 2-Column Grid: Condomínio + Simulador de Financiamento */}
        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px'
        }}>
          
          {/* Card 1: HOA Fee Calculator */}
          <div style={{
            background: '#FAF8F5',
            'border-radius': '22px',
            padding: '36px 32px',
            border: '1px solid rgba(18, 56, 44, 0.12)',
            'box-shadow': 'var(--shadow-md)',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'margin-bottom': '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  'border-radius': '10px',
                  background: 'rgba(27, 77, 62, 0.1)',
                  color: '#1B4D3E',
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center'
                }}>
                  <IconCalculator size={22} />
                </div>
                <div>
                  <h3 style={{ 'font-size': '1.35rem', color: '#0B241C', 'font-weight': '700' }}>
                    Taxa Condominial Mensal
                  </h3>
                  <div style={{ 'font-size': '0.78rem', color: '#6E7D77' }}>
                    Fórmula oficial: R$ 1,17 × m² + R$ 103,50
                  </div>
                </div>
              </div>

              {/* Metragem Presets */}
              <div style={{ 'margin-top': '20px', 'margin-bottom': '16px' }}>
                <label style={{ 'font-size': '0.85rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '8px' }}>
                  Metragem do Lote:
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[275, 330, 450].map((size) => (
                    <button
                      onClick={() => setLotSize(size)}
                      style={{
                        flex: '1',
                        padding: '10px',
                        'border-radius': '8px',
                        'font-size': '0.88rem',
                        'font-weight': '700',
                        background: lotSize() === size ? '#0B241C' : '#FFFFFF',
                        color: lotSize() === size ? '#E9D29F' : '#33413B',
                        border: lotSize() === size ? '1px solid #CBA258' : '1px solid var(--border-light)'
                      }}
                    >
                      {size} m²
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for custom m² */}
              <div style={{ 'margin-bottom': '24px' }}>
                <div style={{ display: 'flex', 'justify-content': 'space-between', 'font-size': '0.86rem', color: '#4A5853' }}>
                  <span>Ajuste personalizado:</span>
                  <strong>{lotSize()} m²</strong>
                </div>
                <input
                  type="range"
                  min="250"
                  max="600"
                  step="5"
                  value={lotSize()}
                  onInput={(e) => setLotSize(Number(e.currentTarget.value))}
                  class="luxury-range"
                />
              </div>

              {/* HOA Live Result Box */}
              <div style={{
                background: '#FFFFFF',
                padding: '24px',
                'border-radius': '16px',
                border: '1px solid rgba(203, 162, 88, 0.4)',
                'margin-bottom': '22px'
              }}>
                <div style={{ 'font-size': '0.8rem', color: '#6E7D77', 'text-transform': 'uppercase', 'letter-spacing': '0.04em' }}>
                  Condomínio Estimado ({lotSize()} m²)
                </div>
                <div class="font-luxury" style={{
                  'font-size': '2.4rem',
                  'font-weight': '800',
                  color: '#0B241C',
                  'margin-top': '4px',
                  'margin-bottom': '6px'
                }}>
                  {formatCurrencyBRL(hoaResult().monthlyTotal)}
                  <span style={{ 'font-size': '0.95rem', 'font-weight': '500', color: '#6E7D77' }}> / mês</span>
                </div>
                <div style={{ 'font-size': '0.82rem', color: '#296855', 'font-weight': '600' }}>
                  Apenas R$ {(hoaResult().monthlyTotal / 30).toFixed(2).replace('.', ',')} por dia para segurança total e clube completo.
                </div>
              </div>

              {/* What is included */}
              <div style={{ 'font-size': '0.84rem', color: '#4A5853', display: 'flex', 'flex-direction': 'column', gap: '8px' }}>
                <div style={{ 'font-weight': '700', color: '#0B241C' }}>O que está 100% incluso na taxa:</div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                  <span style={{ color: '#CBA258' }}><IconCheck size={14} /></span>
                  <span>Segurança armada 24h e monitoramento perimetral</span>
                </div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                  <span style={{ color: '#CBA258' }}><IconCheck size={14} /></span>
                  <span>Manutenção completa de piscinas, quadras e academia</span>
                </div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                  <span style={{ color: '#CBA258' }}><IconCheck size={14} /></span>
                  <span>Jardinagem, poda e conservação das praças ecológicas</span>
                </div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                  <span style={{ color: '#CBA258' }}><IconCheck size={14} /></span>
                  <span>Linha de transporte público gratuito de Eusébio na portaria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Installment Simulator */}
          <div style={{
            background: 'linear-gradient(135deg, #0B241C 0%, #164234 100%)',
            'border-radius': '22px',
            padding: '36px 32px',
            border: '1px solid rgba(203, 162, 88, 0.4)',
            'box-shadow': 'var(--shadow-lg)',
            color: '#FAF8F5',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'margin-bottom': '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  'border-radius': '10px',
                  background: 'rgba(203, 162, 88, 0.2)',
                  color: '#E9D29F',
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center'
                }}>
                  <IconCalculator size={22} />
                </div>
                <div>
                  <h3 style={{ 'font-size': '1.35rem', color: '#FFFFFF', 'font-weight': '700' }}>
                    Simulador de Parcelas
                  </h3>
                  <div style={{ 'font-size': '0.78rem', color: '#CBD6D1' }}>
                    Direto com a Alphaville • Faixa: R$ 375.000 a R$ 700.000
                  </div>
                </div>
              </div>

              {/* Mode Toggle: 120x IPCA vs 24x Sem Juros */}
              <div style={{
                display: 'grid',
                'grid-template-columns': '1fr 1fr',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '4px',
                'border-radius': '10px',
                'margin-bottom': '20px'
              }}>
                <button
                  onClick={() => handlePlanTypeChange('ipca')}
                  style={{
                    padding: '10px 8px',
                    'border-radius': '8px',
                    'font-size': '0.82rem',
                    'font-weight': '700',
                    background: planType() === 'ipca' ? '#CBA258' : 'transparent',
                    color: planType() === 'ipca' ? '#0B241C' : '#CBD6D1',
                    border: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Até 120x com IPCA
                </button>
                <button
                  onClick={() => handlePlanTypeChange('interest_free')}
                  style={{
                    padding: '10px 8px',
                    'border-radius': '8px',
                    'font-size': '0.82rem',
                    'font-weight': '700',
                    background: planType() === 'interest_free' ? '#CBA258' : 'transparent',
                    color: planType() === 'interest_free' ? '#0B241C' : '#CBD6D1',
                    border: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Até 24x Sem Juros
                </button>
              </div>

              {/* Price Range Slider */}
              <div style={{ 'margin-bottom': '18px' }}>
                <div style={{ display: 'flex', 'justify-content': 'space-between', 'font-size': '0.86rem', color: '#CBD6D1' }}>
                  <span>Valor do Lote:</span>
                  <strong style={{ color: '#E9D29F', 'font-size': '1.1rem' }}>
                    {formatCurrencyBRL(propertyPrice())}
                  </strong>
                </div>
                <input
                  type="range"
                  min="375000"
                  max="700000"
                  step="25000"
                  value={propertyPrice()}
                  onInput={(e) => setPropertyPrice(Number(e.currentTarget.value))}
                  class="luxury-range"
                />
                {/* Presets */}
                <div style={{ display: 'flex', 'justify-content': 'space-between', 'font-size': '0.72rem', color: '#9BB1A8' }}>
                  <span>Min: R$ 375k (275m²)</span>
                  <span>R$ 450k (330m²)</span>
                  <span>R$ 550k (450m²)</span>
                  <span>Max: R$ 700k</span>
                </div>
              </div>

              {/* Down Payment Slider & Term Inputs */}
              <div style={{
                display: 'grid',
                'grid-template-columns': '1fr 1fr',
                gap: '12px',
                'margin-bottom': '20px'
              }}>
                <div>
                  <div style={{ display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', 'margin-bottom': '4px' }}>
                    <label style={{ 'font-size': '0.76rem', color: '#B3C2BC' }}>
                      Entrada ({downPaymentPct()}%):
                    </label>
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '8px 12px',
                    'border-radius': '8px',
                    'font-weight': '700',
                    color: '#FFFFFF',
                    'font-size': '0.95rem'
                  }}>
                    {formatCurrencyBRL(financingResult().downPaymentValue)}
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    step="5"
                    value={downPaymentPct()}
                    onInput={(e) => setDownPaymentPct(Number(e.currentTarget.value))}
                    class="luxury-range"
                    style={{ margin: '6px 0 0 0', height: '5px' }}
                  />
                </div>

                <div>
                  <label style={{ 'font-size': '0.76rem', color: '#B3C2BC', display: 'block', 'margin-bottom': '4px' }}>
                    Prazo Escolhido:
                  </label>
                  <select
                    value={termMonths()}
                    onChange={(e) => setTermMonths(Number(e.currentTarget.value))}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '8px 12px',
                      'border-radius': '8px',
                      'font-weight': '700',
                      color: '#FFFFFF',
                      'font-size': '0.92rem',
                      border: '1px solid rgba(203, 162, 88, 0.3)',
                      outline: 'none'
                    }}
                  >
                    {planType() === 'interest_free' ? (
                      <>
                        <option value="12" style={{ background: '#0B241C' }}>12 parcelas fixas</option>
                        <option value="18" style={{ background: '#0B241C' }}>18 parcelas fixas</option>
                        <option value="24" style={{ background: '#0B241C' }}>24 parcelas fixas</option>
                      </>
                    ) : (
                      <>
                        <option value="36" style={{ background: '#0B241C' }}>36 parcelas (IPCA)</option>
                        <option value="60" style={{ background: '#0B241C' }}>60 parcelas (IPCA)</option>
                        <option value="84" style={{ background: '#0B241C' }}>84 parcelas (IPCA)</option>
                        <option value="120" style={{ background: '#0B241C' }}>120 parcelas (IPCA)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Installment Result Box */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.35)',
                padding: '22px',
                'border-radius': '16px',
                border: '1px solid rgba(203, 162, 88, 0.45)',
                'margin-bottom': '24px'
              }}>
                <div style={{ 'font-size': '0.76rem', color: '#CBD6D1', 'text-transform': 'uppercase', 'letter-spacing': '0.04em' }}>
                  {termMonths()}x Parcelas Mensais Estimadas
                </div>
                <div class="font-luxury" style={{
                  'font-size': '2.3rem',
                  'font-weight': '800',
                  color: '#E9D29F',
                  'margin-top': '4px'
                }}>
                  {formatCurrencyBRL(financingResult().monthlyInstallment)}
                  <span style={{ 'font-size': '0.9rem', 'font-weight': '500', color: '#CBD6D1' }}> / mês</span>
                </div>
                <div style={{ 'font-size': '0.78rem', color: '#A1B7AF', 'margin-top': '4px' }}>
                  Saldo financiado: {formatCurrencyBRL(financingResult().financedAmount)} • Entrada de {downPaymentPct()}% facilitada
                </div>
              </div>

            </div>

            {/* Direct WhatsApp CTA with simulation payload */}
            <a
              href={getWhatsAppSimLink()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold"
              style={{
                width: '100%',
                'justify-content': 'center',
                padding: '16px',
                'font-size': '0.98rem'
              }}
            >
              <IconWhatsApp size={20} />
              <span>Receber Simulação Detalhada no WhatsApp</span>
              <IconArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
