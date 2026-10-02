import type { Component } from 'solid-js';
import { IconWhatsApp, IconArrowRight, IconBadgeCheck } from './Icons';
import { WHATSAPP_PHONE_DISPLAY, getHeroWhatsAppUrl } from '../services/whatsappService';

export const Hero: Component = () => {
  return (
    <section style={{
      position: 'relative',
      'min-height': '90vh',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      overflow: 'hidden',
      color: '#FFFFFF'
    }}>
      {/* Background Image / Aerial Visual with cinematic dark emerald overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        'background-image': "linear-gradient(180deg, rgba(6, 21, 16, 0.78) 0%, rgba(11, 36, 28, 0.85) 60%, rgba(9, 28, 22, 0.96) 100%), url('/images/hero-aerial.jpg')",
        'background-size': 'cover',
        'background-position': 'center 35%',
        'z-index': 1
      }} />

      {/* Hero Content Container */}
      <div class="container" style={{
        position: 'relative',
        'z-index': 2,
        'padding-top': '80px',
        'padding-bottom': '60px'
      }}>
        <div style={{ 'max-width': '920px', margin: '0 auto', 'text-align': 'center' }}>
          
          {/* Resident & Specialist Credibility Badge */}
          <div style={{ 'margin-bottom': '24px', display: 'inline-block' }}>
            <div style={{
              display: 'inline-flex',
              'align-items': 'center',
              gap: '10px',
              padding: '8px 18px',
              'border-radius': '9999px',
              background: 'rgba(203, 162, 88, 0.16)',
              border: '1px solid rgba(220, 186, 119, 0.45)',
              'backdrop-filter': 'blur(10px)',
              color: '#F4F0E8'
            }}>
              <span style={{ color: '#E9D29F', display: 'flex', 'align-items': 'center' }}>
                <IconBadgeCheck size={18} />
              </span>
              <span style={{ 'font-size': '0.85rem', 'font-weight': '600', 'letter-spacing': '0.05em' }}>
                Atendimento com Corretor Especialista & Morador da Cidade Alpha
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 style={{
            'font-family': 'var(--font-serif)',
            'font-size': 'clamp(2.4rem, 5vw, 4.1rem)',
            'font-weight': '700',
            'line-height': 1.15,
            color: '#FFFFFF',
            'margin-bottom': '22px',
            'text-shadow': '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            Viva ou Invista na Maior Cidade Planejada do Ceará – <span style={{ color: '#E9D29F', 'font-style': 'italic' }}>Padrão Alphaville</span>
          </h1>

          {/* Sub-headline */}
          <p style={{
            'font-size': 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#D4DDD9',
            'line-height': 1.65,
            'max-width': '800px',
            margin: '0 auto 36px auto',
            'font-weight': '400'
          }}>
            Localização privilegiada a apenas <strong style={{ color: '#FFFFFF', 'text-decoration': 'underline', 'text-decoration-color': '#CBA258' }}>15 minutos de Fortaleza</strong>, 
            no Anel Viário entre a BR-116 e a CE-040 em Eusébio. Um masterplan de 19 milhões de m² com lotes 
            residenciais de <strong style={{ color: '#FFFFFF' }}>275m² a 450m²</strong> e comerciais de <strong style={{ color: '#FFFFFF' }}>500m² a 8.000m²</strong>, 
            segurança armada 24h e valorização superior a 100%.
          </p>

          {/* 2 Primary Conversion CTAs */}
          <div style={{
            display: 'flex',
            'flex-wrap': 'wrap',
            'align-items': 'center',
            'justify-content': 'center',
            gap: '16px',
            'margin-bottom': '48px'
          }}>
            <a
              href={getHeroWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp pulse-badge"
              style={{
                padding: '18px 34px',
                'font-size': '1.05rem'
              }}
            >
              <IconWhatsApp size={22} />
              <span>Falar no WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
            </a>

            <a
              href="#empreendimentos"
              class="btn-gold"
              style={{
                padding: '18px 34px',
                'font-size': '1.05rem'
              }}
            >
              <span>Ver Lotes Disponíveis</span>
              <IconArrowRight size={20} />
            </a>
          </div>

          {/* Live Urgency Indicator */}
          <div style={{
            display: 'inline-flex',
            'align-items': 'center',
            gap: '8px',
            'font-size': '0.85rem',
            color: '#B8C7C1'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              'border-radius': '50%',
              background: '#E9D29F',
              display: 'inline-block'
            }} />
            <span>Últimas unidades de lançamento e revendas selecionadas direto com proprietários.</span>
          </div>

        </div>

        {/* Hero Quick Credibility Statistics Strip */}
        <div style={{
          'margin-top': '54px',
          background: 'rgba(16, 41, 33, 0.75)',
          'border-radius': '18px',
          border: '1px solid rgba(203, 162, 88, 0.3)',
          padding: '24px 28px',
          'backdrop-filter': 'blur(16px)',
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 'text-align': 'center' }}>
            <div class="font-luxury" style={{ 'font-size': '1.85rem', 'font-weight': '800', color: '#E9D29F' }}>
              19 Milhões m²
            </div>
            <div style={{ 'font-size': '0.82rem', color: '#CBD6D1', 'margin-top': '4px' }}>
              Maior complexo planejado do Ceará
            </div>
          </div>

          <div style={{ 'text-align': 'center' }}>
            <div class="font-luxury" style={{ 'font-size': '1.85rem', 'font-weight': '800', color: '#E9D29F' }}>
              15 Minutos
            </div>
            <div style={{ 'font-size': '0.82rem', color: '#CBD6D1', 'margin-top': '4px' }}>
              De Fortaleza (Anel Viário BR-116 / CE-040)
            </div>
          </div>

          <div style={{ 'text-align': 'center' }}>
            <div class="font-luxury" style={{ 'font-size': '1.85rem', 'font-weight': '800', color: '#E9D29F' }}>
              400.000 m²
            </div>
            <div style={{ 'font-size': '0.82rem', color: '#CBD6D1', 'margin-top': '4px' }}>
              Áreas verdes preservadas e orla
            </div>
          </div>

          <div style={{ 'text-align': 'center' }}>
            <div class="font-luxury" style={{ 'font-size': '1.85rem', 'font-weight': '800', color: '#E9D29F' }}>
              100.000
            </div>
            <div style={{ 'font-size': '0.82rem', color: '#CBD6D1', 'margin-top': '4px' }}>
              População estimada de alta renda
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
