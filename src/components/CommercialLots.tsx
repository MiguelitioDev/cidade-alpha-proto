import type { Component } from 'solid-js';
import { commercialData } from '../data/commercialData';
import { IconWhatsApp, IconArrowRight, IconCheck, IconBuilding, IconBadgeCheck } from './Icons';
import { formatCurrencyBRL, formatNumberBR } from '../services/calculatorService';
import { getCommercialWhatsAppUrl } from '../services/whatsappService';

export const CommercialLots: Component = () => {
  return (
    <section id="comercial" class="section-padding" style={{ background: '#FAF8F5' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Investimento Empresarial de Alta Rentabilidade</span>
          <h2 class="section-title">Lotes Comerciais Cidade Alpha</h2>
          <p class="section-subtitle">
            Uma área comercial privativa de <strong>{formatNumberBR(commercialData.totalArea)} m²</strong> integrada 
            ao masterplan, desenvolvida para atender à demanda de consumo diário de mais de <strong>100.000 habitantes</strong> de alto poder aquisitivo.
          </p>
        </div>

        {/* Hero Commercial Showcase Box */}
        <div style={{
          background: 'linear-gradient(135deg, #061510 0%, #0F2E23 100%)',
          'border-radius': '24px',
          overflow: 'hidden',
          border: '1px solid rgba(203, 162, 88, 0.4)',
          'box-shadow': 'var(--shadow-lg)',
          'margin-bottom': '48px',
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(360px, 1fr))'
        }}>
          {/* Image Container */}
          <div style={{
            position: 'relative',
            'min-height': '360px'
          }}>
            <img
              src="/images/commercial-hub.jpg"
              alt="Área Comercial Cidade Alpha Ceará"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                'object-fit': 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(6, 21, 16, 0.4) 0%, rgba(6, 21, 16, 0.8) 100%)'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px'
            }}>
              <span class="badge-luxury" style={{ 'font-size': '0.74rem' }}>
                Boulevard Comercial Privativo
              </span>
              <h3 style={{ color: '#FFFFFF', 'font-size': '1.6rem', 'margin-top': '8px', 'font-family': 'var(--font-serif)' }}>
                Um Polo de Serviços & Negócios
              </h3>
            </div>
          </div>

          {/* Details & Specs Container */}
          <div style={{
            padding: '40px',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between',
            color: '#FAF8F5'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                'align-items': 'center',
                gap: '8px',
                color: '#E9D29F',
                'font-size': '0.82rem',
                'font-weight': '700',
                'letter-spacing': '0.1em',
                'text-transform': 'uppercase',
                'margin-bottom': '16px'
              }}>
                <IconBadgeCheck size={18} />
                <span>Condições Comerciais Especiais</span>
              </div>

              {/* Price & Metragem Grid */}
              <div style={{
                display: 'grid',
                'grid-template-columns': '1fr 1fr',
                gap: '16px',
                'margin-bottom': '24px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '20px',
                'border-radius': '16px',
                border: '1px solid rgba(203, 162, 88, 0.25)'
              }}>
                <div>
                  <div style={{ 'font-size': '0.76rem', color: '#B3C2BC', 'text-transform': 'uppercase' }}>
                    Preço Referencial
                  </div>
                  <div class="font-luxury" style={{ 'font-size': '1.7rem', 'font-weight': '800', color: '#E9D29F' }}>
                    {formatCurrencyBRL(commercialData.referencePricePerM2)} / m²
                  </div>
                </div>

                <div>
                  <div style={{ 'font-size': '0.76rem', color: '#B3C2BC', 'text-transform': 'uppercase' }}>
                    Dimensões dos Lotes
                  </div>
                  <div style={{ 'font-size': '1.35rem', 'font-weight': '800', color: '#FFFFFF' }}>
                    {commercialData.lotSizeMin} a {formatNumberBR(commercialData.lotSizeMax)} m²
                  </div>
                </div>

                <div>
                  <div style={{ 'font-size': '0.76rem', color: '#B3C2BC', 'text-transform': 'uppercase' }}>
                    Parcelamento Direto
                  </div>
                  <div style={{ 'font-size': '1.35rem', 'font-weight': '800', color: '#FFFFFF' }}>
                    Até {commercialData.maxInstallments} meses
                  </div>
                </div>

                <div>
                  <div style={{ 'font-size': '0.76rem', color: '#B3C2BC', 'text-transform': 'uppercase' }}>
                    Público Alvo
                  </div>
                  <div style={{ 'font-size': '1.35rem', 'font-weight': '800', color: '#E9D29F' }}>
                    100.000 clientes
                  </div>
                </div>
              </div>

              {/* Commercial Highlights List */}
              <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '10px', 'margin-bottom': '30px' }}>
                {commercialData.highlights.map((h) => (
                  <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.92rem', color: '#D2DDD8' }}>
                    <span style={{ color: '#E9D29F' }}><IconCheck size={16} /></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial CTA */}
            <a
              href={getCommercialWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold"
              style={{
                width: '100%',
                'justify-content': 'center',
                padding: '16px',
                'font-size': '1rem'
              }}
            >
              <IconWhatsApp size={20} />
              <span>Solicitar Estudo de Viabilidade & Disponibilidade</span>
              <IconArrowRight size={18} />
            </a>

          </div>
        </div>

        {/* Commercial Vocations Grid */}
        <h3 style={{
          'text-align': 'center',
          'font-size': '1.6rem',
          color: '#0B241C',
          'margin-bottom': '28px',
          'font-family': 'var(--font-serif)'
        }}>
          Vocações Estratégicas para o Setor Comercial
        </h3>

        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {commercialData.vocations.map((voc) => (
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(18, 56, 44, 0.1)',
              'border-radius': '16px',
              padding: '28px',
              'box-shadow': 'var(--shadow-sm)',
              transition: 'var(--transition-smooth)'
            }} class="vocation-card">
              <div style={{
                width: '48px',
                height: '48px',
                'border-radius': '12px',
                background: 'rgba(203, 162, 88, 0.15)',
                color: '#B89244',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'margin-bottom': '16px'
              }}>
                <IconBuilding size={24} />
              </div>
              <h4 style={{ 'font-size': '1.15rem', color: '#0B241C', 'margin-bottom': '10px', 'font-weight': '700' }}>
                {voc.title}
              </h4>
              <p style={{ 'font-size': '0.9rem', color: '#4A5853', 'line-height': 1.6 }}>
                {voc.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .vocation-card:hover {
          transform: translateY(-3px);
          border-color: rgba(203, 162, 88, 0.5);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </section>
  );
};
