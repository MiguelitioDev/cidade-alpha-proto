import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { locationData } from '../data/locationData';
import { IconMapPin, IconClock, IconArrowRight } from './Icons';

export const StrategicLocation: Component = () => {
  const [mapMode, setMapMode] = createSignal<'gps' | 'arterial'>('gps');
  return (
    <section id="localizacao" class="section-padding" style={{ background: '#FFFFFF' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">A 15 Minutos de Fortaleza</span>
          <h2 class="section-title">Localização Privilegiada no Eusébio</h2>
          <p class="section-subtitle">
            Situada no coração do Anel Viário, no entroncamento ágil entre a <strong>BR-116</strong> e a <strong>CE-040</strong>, 
            a Cidade Alpha oferece mobilidade estratégica com pistas duplicadas e trânsito livre para os principais polos de negócios, lazer e praias.
          </p>
        </div>

        {/* 2-Column Grid: Commute Times + Interactive Map */}
        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px',
          'align-items': 'stretch'
        }}>
          
          {/* Left Column: Commute Cards */}
          <div style={{
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{
                background: 'var(--bg-card-muted)',
                padding: '16px 20px',
                'border-radius': '14px',
                'margin-bottom': '20px',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ 'font-weight': '700', color: '#0B241C', 'margin-bottom': '4px', 'font-size': '0.96rem' }}>
                  Conectividade Direta pelo Anel Viário
                </div>
                <div style={{ 'font-size': '0.86rem', color: '#4A5853' }}>
                  Acesso rápido sem engarrafamentos urbanos. Vias recém-duplicadas com iluminação de LED e viadutos estratégicos.
                </div>
              </div>

              {/* Commute Times List */}
              <div style={{
                display: 'grid',
                'grid-template-columns': '1fr 1fr',
                gap: '12px'
              }}>
                {locationData.destinations.map((dest) => (
                  <div style={{
                    background: '#FAF8F5',
                    border: '1px solid rgba(18, 56, 44, 0.1)',
                    'border-radius': '14px',
                    padding: '16px',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }} class="commute-card">
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: '#CBA258'
                    }} />
                    
                    <div style={{ display: 'flex', 'align-items': 'baseline', gap: '6px', 'margin-bottom': '6px' }}>
                      <span class="font-luxury" style={{ 'font-size': '1.7rem', 'font-weight': '800', color: '#0B241C' }}>
                        {dest.timeMin}
                      </span>
                      <span style={{ 'font-size': '0.85rem', 'font-weight': '700', color: '#B89244' }}>
                        minutos
                      </span>
                    </div>

                    <div style={{ 'font-weight': '700', color: '#1B4D3E', 'font-size': '0.92rem', 'line-height': 1.3 }}>
                      {dest.name}
                    </div>

                    <div style={{
                      'font-size': '0.76rem',
                      color: '#6E7D77',
                      'margin-top': '4px',
                      display: 'flex',
                      'align-items': 'center',
                      gap: '4px'
                    }}>
                      <IconClock size={12} />
                      <span>{dest.distance} • {dest.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculate Route CTA */}
            <div style={{ 'margin-top': '16px' }}>
              <a
                href={locationData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
                style={{
                  width: '100%',
                  'justify-content': 'center',
                  padding: '16px',
                  'font-size': '1rem'
                }}
              >
                <IconMapPin size={20} />
                <span>Calcular Rota no Google Maps</span>
                <IconArrowRight size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Embed with Luxury Styling */}
          <div style={{
            background: '#FFFFFF',
            'border-radius': '20px',
            border: '1px solid rgba(203, 162, 88, 0.4)',
            overflow: 'hidden',
            'box-shadow': 'var(--shadow-md)',
            display: 'flex',
            'flex-direction': 'column',
            'min-height': '440px'
          }}>
            {/* Map Header with View Toggle */}
            <div style={{
              background: '#0B241C',
              color: '#FAF8F5',
              padding: '12px 18px',
              display: 'flex',
              'flex-wrap': 'wrap',
              'justify-content': 'space-between',
              'align-items': 'center',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                <IconMapPin size={18} color="#E9D29F" />
                <span style={{ 'font-weight': '700', 'font-size': '0.9rem', 'letter-spacing': '0.04em' }}>
                  Cidade Alpha Ceará • Eusébio, CE
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  onClick={() => setMapMode('gps')}
                  style={{
                    background: mapMode() === 'gps' ? '#CBA258' : 'rgba(255, 255, 255, 0.1)',
                    color: mapMode() === 'gps' ? '#061510' : '#FAF8F5',
                    border: 'none',
                    padding: '4px 10px',
                    'border-radius': '6px',
                    'font-size': '0.74rem',
                    'font-weight': '700',
                    cursor: 'pointer'
                  }}
                >
                  GPS Google Maps
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode('arterial')}
                  style={{
                    background: mapMode() === 'arterial' ? '#CBA258' : 'rgba(255, 255, 255, 0.1)',
                    color: mapMode() === 'arterial' ? '#061510' : '#FAF8F5',
                    border: 'none',
                    padding: '4px 10px',
                    'border-radius': '6px',
                    'font-size': '0.74rem',
                    'font-weight': '700',
                    cursor: 'pointer'
                  }}
                >
                  Mapa de Acessos Oficial
                </button>
              </div>
            </div>

            {/* Map Content */}
            <div style={{ flex: '1', width: '100%', 'min-height': '380px', position: 'relative' }}>
              {mapMode() === 'gps' ? (
                <iframe
                  title="Mapa Cidade Alpha Ceará"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31846.541315573426!2d-38.483163351367184!3d-3.898622100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74ed4a29a007f%3A0xc39f97651a5c68f1!2sAlphaville%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, 'min-height': '380px' }}
                  allowfullscreen={true}
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%', 'min-height': '380px', background: '#0F2E23' }}>
                  <img
                    src="/images/plans/mapa-localizacao-acessos.jpg"
                    alt="Mapa Estratégico de Acessos Cidade Alpha Ceará"
                    style={{ width: '100%', height: '100%', 'min-height': '380px', 'object-fit': 'contain' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'rgba(6, 21, 16, 0.85)',
                    padding: '6px 12px',
                    'border-radius': '6px',
                    'font-size': '0.74rem',
                    color: '#E9D29F',
                    border: '1px solid rgba(203, 162, 88, 0.3)'
                  }}>
                    Mapa Oficial de Acessos BR-116 & CE-040 (Alphaville Urbanismo)
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .commute-card:hover {
          transform: translateY(-2px);
          background: #FFFFFF !important;
          box-shadow: var(--shadow-sm);
          border-color: #CBA258 !important;
        }
      `}</style>
    </section>
  );
};
