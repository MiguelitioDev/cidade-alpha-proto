import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import { developmentsData } from '../data/developmentsData';
import type { Development } from '../types';
import { IconWhatsApp, IconArrowRight } from './Icons';
import { formatNumberBR } from '../services/calculatorService';
import { getDevelopmentWhatsAppUrl } from '../services/whatsappService';
import { LotModal } from './LotModal';

export const Developments: Component = () => {
  const [selectedFilter, setSelectedFilter] = createSignal<string>('all');
  const [activeModalDev, setActiveModalDev] = createSignal<Development | null>(null);

  const filteredDevelopments = () => {
    const filter = selectedFilter();
    if (filter === 'all') return developmentsData;
    if (filter === '450') return developmentsData.filter((d) => d.lotSize === 450);
    if (filter === '330') return developmentsData.filter((d) => d.lotSize === 330);
    if (filter === '275') return developmentsData.filter((d) => d.lotSize === 275);
    if (filter === 'launch') return developmentsData.filter((d) => d.status === 'New Launch' || d.status === 'Last Units');
    if (filter === 'alphaville') return developmentsData.filter((d) => d.category === 'alphaville');
    if (filter === 'terras') return developmentsData.filter((d) => d.category === 'terras');
    return developmentsData;
  };

  return (
    <section id="empreendimentos" class="section-padding" style={{ background: '#FFFFFF' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Portfólio de Residenciais Fechados</span>
          <h2 class="section-title">Empreendimentos na Cidade Alpha Ceará</h2>
          <p class="section-subtitle">
            Conheça todos os condomínios fechados da linha Alphaville e Terras Alphaville. 
            Lotes residenciais de <strong>275m², 330m² e 450m²</strong> com estrutura completa de lazer e segurança privada.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div style={{
          display: 'flex',
          'flex-wrap': 'wrap',
          'justify-content': 'center',
          gap: '10px',
          'margin-bottom': '44px'
        }}>
          {[
            { id: 'all', label: 'Todos os Residenciais (10)' },
            { id: '450', label: 'Lotes 450 m² (Alphaville 1 a 5)' },
            { id: '330', label: 'Lotes 330 m² (Terras 1 a 3)' },
            { id: '275', label: 'Lotes 275 m² (Terras 4 e 5)' },
            { id: 'launch', label: '⭐ Últimas Unidades & Lançamentos' },
          ].map((tab) => (
            <button
              onClick={() => setSelectedFilter(tab.id)}
              style={{
                padding: '10px 20px',
                'border-radius': '9999px',
                'font-size': '0.88rem',
                'font-weight': selectedFilter() === tab.id ? '700' : '500',
                background: selectedFilter() === tab.id ? '#0B241C' : 'var(--bg-card-muted)',
                color: selectedFilter() === tab.id ? '#E9D29F' : '#4A5853',
                border: selectedFilter() === tab.id ? '1px solid #CBA258' : '1px solid var(--border-light)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Development Cards */}
        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '30px'
        }}>
          <For each={filteredDevelopments()}>
            {(dev) => (
              <div class="dev-card" style={{
                background: '#FFFFFF',
                'border-radius': '20px',
                border: '1px solid rgba(18, 56, 44, 0.1)',
                overflow: 'hidden',
                'box-shadow': 'var(--shadow-sm)',
                display: 'flex',
                'flex-direction': 'column',
                transition: 'var(--transition-smooth)',
                position: 'relative'
              }}>
                
                {/* Card Image */}
                <div style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={dev.image}
                    alt={dev.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      'object-fit': 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    class="dev-card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(9,28,22,0.65) 100%)'
                  }} />

                  {/* Top Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    'justify-content': 'space-between',
                    'align-items': 'center'
                  }}>
                    <span class={`status-pill ${dev.statusColor}`}>
                      {dev.statusBadge}
                    </span>

                    {dev.facingLagoon && (
                      <span style={{
                        background: '#0284C7',
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        'border-radius': '9999px',
                        'font-size': '0.72rem',
                        'font-weight': '700',
                        'text-transform': 'uppercase',
                        'letter-spacing': '0.04em',
                        'box-shadow': '0 2px 8px rgba(2,132,199,0.4)'
                      }}>
                        🌊 Frente Lagoa
                      </span>
                    )}
                  </div>

                  {/* Card Title on Image Bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '18px',
                    right: '18px'
                  }}>
                    <h3 style={{
                      color: '#FFFFFF',
                      'font-size': '1.45rem',
                      'font-family': 'var(--font-serif)',
                      'text-shadow': '0 2px 6px rgba(0,0,0,0.5)'
                    }}>
                      {dev.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  'flex-direction': 'column',
                  'flex-grow': 1,
                  'justify-content': 'space-between'
                }}>
                  
                  <div>
                    {/* Highlight Pill */}
                    <div style={{
                      'font-size': '0.82rem',
                      'font-weight': '700',
                      color: '#B89244',
                      'margin-bottom': '12px'
                    }}>
                      {dev.highlight}
                    </div>

                    {/* Specifications 2x2 Grid */}
                    <div style={{
                      display: 'grid',
                      'grid-template-columns': '1fr 1fr',
                      gap: '12px',
                      padding: '14px',
                      background: 'var(--bg-card-muted)',
                      'border-radius': '12px',
                      'margin-bottom': '18px',
                      border: '1px solid var(--border-light)'
                    }}>
                      <div>
                        <div style={{ 'font-size': '0.72rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Tamanho Padrão</div>
                        <div style={{ 'font-size': '1rem', 'font-weight': '800', color: '#0B241C' }}>{dev.lotSize} m²</div>
                      </div>
                      <div>
                        <div style={{ 'font-size': '0.72rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área do Clube</div>
                        <div style={{ 'font-size': '1rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev.clubArea)} m²</div>
                      </div>
                      <div>
                        <div style={{ 'font-size': '0.72rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área Verde</div>
                        <div style={{ 'font-size': '1rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev.greenArea)} m²</div>
                      </div>
                      <div>
                        <div style={{ 'font-size': '0.72rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área Total</div>
                        <div style={{ 'font-size': '1rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev.totalArea)} m²</div>
                      </div>
                    </div>

                    <p style={{
                      'font-size': '0.9rem',
                      color: '#4A5853',
                      'line-height': 1.55,
                      'margin-bottom': '22px'
                    }}>
                      {dev.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    'flex-direction': 'column',
                    gap: '10px'
                  }}>
                    <a
                      href={getDevelopmentWhatsAppUrl(dev.name, dev.lotSize)}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-whatsapp"
                      style={{
                        padding: '12px 18px',
                        'font-size': '0.92rem',
                        'border-radius': '10px',
                        'justify-content': 'center'
                      }}
                    >
                      <IconWhatsApp size={18} />
                      <span>Consultar Lotes no WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setActiveModalDev(dev)}
                      style={{
                        padding: '10px 16px',
                        'border-radius': '10px',
                        'font-size': '0.86rem',
                        'font-weight': '600',
                        color: '#0B241C',
                        border: '1px solid rgba(11, 36, 28, 0.15)',
                        background: '#FAF8F5',
                        display: 'flex',
                        'align-items': 'center',
                        'justify-content': 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Ver Ficha Técnica Completa</span>
                      <IconArrowRight size={14} />
                    </button>
                  </div>

                </div>

              </div>
            )}
          </For>
        </div>

      </div>

      {/* Lot Detail Modal */}
      <LotModal
        development={activeModalDev()}
        onClose={() => setActiveModalDev(null)}
      />

      <style>{`
        .dev-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(203, 162, 88, 0.4);
        }
        .dev-card:hover .dev-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
