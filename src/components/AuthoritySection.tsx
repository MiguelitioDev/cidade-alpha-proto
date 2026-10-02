import { For } from 'solid-js';
import type { Component } from 'solid-js';
import { agentAuthorityData, testimonialsData } from '../data/testimonialsData';
import { IconWhatsApp, IconBadgeCheck, IconStar, IconCheck, IconArrowRight } from './Icons';
import { getHeroWhatsAppUrl } from '../services/whatsappService';

export const AuthoritySection: Component = () => {
  return (
    <section id="especialista" class="section-padding" style={{ background: '#FAF8F5' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Autoridade & Vivência Real</span>
          <h2 class="section-title">Corretor Morador: A Experiência de Quem Vive Aqui</h2>
          <p class="section-subtitle">
            A consultoria de quem não é apenas um intermediador comercial, mas acorda todos os dias, 
            cria seus filhos e convive na Cidade Alpha Ceará há anos.
          </p>
        </div>

        {/* Highlight Badge Bar: 100% em 4 Horas */}
        <div style={{
          background: 'linear-gradient(135deg, #0B241C 0%, #164234 100%)',
          'border-radius': '18px',
          padding: '20px 28px',
          border: '1px solid rgba(203, 162, 88, 0.5)',
          'box-shadow': 'var(--shadow-md)',
          'margin-bottom': '48px',
          display: 'flex',
          'flex-wrap': 'wrap',
          'align-items': 'center',
          'justify-content': 'space-between',
          gap: '20px',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', 'align-items': 'center', gap: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              'border-radius': '50%',
              background: '#CBA258',
              color: '#061510',
              display: 'flex',
              'align-items': 'center',
              'justify-content': 'center',
              flex: 'none'
            }}>
              <IconBadgeCheck size={28} />
            </div>
            <div>
              <div class="font-luxury" style={{ 'font-size': '1.15rem', 'font-weight': '700', color: '#E9D29F' }}>
                Recorde Histórico Nacional: 100% dos Lotes Vendidos em 4 Horas
              </div>
              <div style={{ 'font-size': '0.85rem', color: '#D4DDD9', 'margin-top': '2px' }}>
                No lançamento histórico do Alphaville Ceará 4. Uma demanda recorde comprovando a solidez e liquidez do complexo.
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(203, 162, 88, 0.18)',
            padding: '8px 18px',
            'border-radius': '9999px',
            border: '1px solid #DCBA77',
            'font-size': '0.82rem',
            'font-weight': '700',
            color: '#FAF8F5'
          }}>
            Liquidez Imediata
          </div>
        </div>

        {/* Agent Profile & Credibility Grid */}
        <div style={{
          background: '#FFFFFF',
          'border-radius': '24px',
          border: '1px solid rgba(18, 56, 44, 0.1)',
          overflow: 'hidden',
          'box-shadow': 'var(--shadow-lg)',
          'margin-bottom': '64px',
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(340px, 1fr))'
        }}>
          {/* Portrait Image */}
          <div style={{
            position: 'relative',
            'min-height': '420px'
          }}>
            <img
              src="/images/resident-agent.jpg"
              alt={agentAuthorityData.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                'object-fit': 'cover',
                'object-position': 'center top'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(11, 36, 28, 0.95) 100%)',
              padding: '24px',
              color: '#FFFFFF'
            }}>
              <span class="badge-luxury" style={{ 'font-size': '0.72rem', 'margin-bottom': '6px' }}>
                Consultoria Residencial & Comercial
              </span>
              <div style={{ 'font-size': '1.4rem', 'font-weight': '700', 'font-family': 'var(--font-serif)' }}>
                {agentAuthorityData.name}
              </div>
              <div style={{ 'font-size': '0.82rem', color: '#E9D29F' }}>
                {agentAuthorityData.creci} • Morador Residente no Alphaville
              </div>
            </div>
          </div>

          {/* Agent Narrative */}
          <div style={{
            padding: '40px',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <span class="section-eyebrow" style={{ 'margin-bottom': '6px' }}>Assessoria Especializada</span>
              <h3 style={{ 'font-size': '1.75rem', color: '#0B241C', 'margin-bottom': '16px', 'font-family': 'var(--font-serif)' }}>
                {agentAuthorityData.headline}
              </h3>

              <p style={{ color: '#4A5853', 'font-size': '0.96rem', 'line-height': 1.65, 'margin-bottom': '20px' }}>
                {agentAuthorityData.bio}
              </p>

              {/* 3 Authority Reasons */}
              <div style={{ display: 'flex', 'flex-direction': 'column', gap: '12px', 'margin-bottom': '28px' }}>
                <div style={{ display: 'flex', 'align-items': 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#CBA258', 'margin-top': '2px' }}><IconCheck size={18} /></span>
                  <div>
                    <strong style={{ color: '#0B241C', 'font-size': '0.92rem' }}>Acesso Direto a Oportunidades Fora do Mercado:</strong>
                    <p style={{ 'font-size': '0.85rem', color: '#4A5853' }}>Por morar aqui, sou o primeiro a saber quando um vizinho ou investidor decide vender um lote exclusivo.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', 'align-items': 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#CBA258', 'margin-top': '2px' }}><IconCheck size={18} /></span>
                  <div>
                    <strong style={{ color: '#0B241C', 'font-size': '0.92rem' }}>Análise Técnica de Orientação Solar & Topografia:</strong>
                    <p style={{ 'font-size': '0.85rem', color: '#4A5853' }}>Evite surpresas de custos em terraplanagem e receba orientação de ventilação permanente para o seu projeto.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', 'align-items': 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#CBA258', 'margin-top': '2px' }}><IconCheck size={18} /></span>
                  <div>
                    <strong style={{ color: '#0B241C', 'font-size': '0.92rem' }}>Acompanhamento Cartorário Completo:</strong>
                    <p style={{ 'font-size': '0.85rem', color: '#4A5853' }}>Assessoria integral em contratos, cessão de direitos com a Alphaville, ITBI em Eusébio e escritura pública.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA with Marcus */}
            <a
              href={getHeroWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp"
              style={{
                'justify-content': 'center',
                padding: '16px',
                'font-size': '1rem'
              }}
            >
              <IconWhatsApp size={20} />
              <span>Agendar Café & Visita Guiada na Cidade Alpha</span>
              <IconArrowRight size={18} />
            </a>

          </div>
        </div>

        {/* Appreciation Case Studies */}
        <div style={{ 'margin-bottom': '64px' }}>
          <div style={{ 'text-align': 'center', 'margin-bottom': '32px' }}>
            <span class="section-eyebrow">Histórico Documentado</span>
            <h3 style={{ 'font-size': '1.75rem', color: '#0B241C', 'font-family': 'var(--font-serif)' }}>
              Casos Reais de Valorização Patrimonial
            </h3>
            <p style={{ 'font-size': '0.95rem', color: '#4A5853' }}>
              Investir na Cidade Alpha no lançamento ou na fase de expansão consolidou rentabilidade acima de 100% a 300%.
            </p>
          </div>

          <div style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {agentAuthorityData.appreciationCases.map((c) => (
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(18, 56, 44, 0.1)',
                'border-radius': '18px',
                padding: '28px',
                'box-shadow': 'var(--shadow-sm)',
                display: 'flex',
                'flex-direction': 'column',
                'justify-content': 'space-between'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    'justify-content': 'space-between',
                    'align-items': 'center',
                    'margin-bottom': '14px'
                  }}>
                    <span style={{ 'font-weight': '700', 'font-size': '1.1rem', color: '#0B241C' }}>
                      {c.development}
                    </span>
                    <span class="badge-green" style={{ 'font-size': '0.74rem' }}>
                      {c.tag}
                    </span>
                  </div>

                  <div style={{
                    display: 'grid',
                    'grid-template-columns': '1fr 1fr',
                    gap: '12px',
                    background: '#FAF8F5',
                    padding: '16px',
                    'border-radius': '12px',
                    'margin-bottom': '16px'
                  }}>
                    <div>
                      <div style={{ 'font-size': '0.72rem', color: '#6E7D77' }}>Lançamento ({c.launchYear})</div>
                      <div style={{ 'font-weight': '700', color: '#4A5853', 'font-size': '1rem' }}>{c.launchPricePerM2}</div>
                    </div>
                    <div>
                      <div style={{ 'font-size': '0.72rem', color: '#6E7D77' }}>Valor Atual Médio</div>
                      <div style={{ 'font-weight': '800', color: '#1B4D3E', 'font-size': '1.05rem' }}>{c.currentPricePerM2}</div>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'space-between',
                  'border-top': '1px solid var(--border-light)',
                  'padding-top': '14px'
                }}>
                  <span style={{ 'font-size': '0.84rem', color: '#6E7D77' }}>Valorização acumulada:</span>
                  <span class="font-luxury" style={{ 'font-size': '1.45rem', 'font-weight': '800', color: '#B89244' }}>
                    {c.roiPercentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resident Testimonials */}
        <div>
          <div style={{ 'text-align': 'center', 'margin-bottom': '32px' }}>
            <span class="section-eyebrow">Depoimentos dos Vizinhos</span>
            <h3 style={{ 'font-size': '1.75rem', color: '#0B241C', 'font-family': 'var(--font-serif)' }}>
              O Que Dizem Nossos Clientes e Moradores
            </h3>
          </div>

          <div style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            <For each={testimonialsData}>
              {(t) => (
                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(18, 56, 44, 0.1)',
                  'border-radius': '20px',
                  padding: '32px',
                  'box-shadow': 'var(--shadow-sm)',
                  display: 'flex',
                  'flex-direction': 'column',
                  'justify-content': 'space-between'
                }}>
                  <div>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '4px', 'margin-bottom': '16px' }}>
                      {[1, 2, 3, 4, 5].map(() => (
                        <IconStar size={16} />
                      ))}
                    </div>

                    <p style={{
                      color: '#33413B',
                      'font-size': '0.94rem',
                      'line-height': 1.65,
                      'font-style': 'italic',
                      'margin-bottom': '22px'
                    }}>
                      "{t.content}"
                    </p>
                  </div>

                  <div>
                    <div style={{
                      'font-size': '0.8rem',
                      color: '#B89244',
                      'font-weight': '700',
                      'margin-bottom': '14px'
                    }}>
                      ✦ {t.appreciationNote}
                    </div>

                    <div style={{
                      display: 'flex',
                      'align-items': 'center',
                      gap: '12px',
                      'border-top': '1px solid var(--border-light)',
                      'padding-top': '14px'
                    }}>
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        style={{
                          width: '46px',
                          height: '46px',
                          'border-radius': '50%',
                          'object-fit': 'cover',
                          border: '2px solid #CBA258'
                        }}
                      />
                      <div>
                        <div style={{ 'font-weight': '700', color: '#0B241C', 'font-size': '0.94rem' }}>
                          {t.name}
                        </div>
                        <div style={{ 'font-size': '0.78rem', color: '#6E7D77' }}>
                          {t.title} • {t.residential}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

      </div>
    </section>
  );
};
