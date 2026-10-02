import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { IconWhatsApp } from './Icons';
import { WHATSAPP_PHONE_DISPLAY, getHeroWhatsAppUrl } from '../services/whatsappService';

export const Header: Component = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen());
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header style={{ position: 'sticky', top: 0, 'z-index': 1000, width: '100%' }}>
      {/* Top Gold & Dark Green Bar */}
      <div style={{
        background: '#081C15',
        color: '#E9D29F',
        'font-size': '0.78rem',
        padding: '7px 16px',
        'border-bottom': '1px solid rgba(203, 162, 88, 0.25)',
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center'
      }}>
        <div class="container" style={{
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
          width: '100%'
        }}>
          <div style={{ display: 'flex', 'align-items': 'center', gap: '10px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              'border-radius': '50%',
              background: '#25D366',
              'box-shadow': '0 0 8px #25D366'
            }} />
            <span style={{ 'font-weight': '500', 'letter-spacing': '0.04em' }}>
              Plantão de Vendas na Cidade Alpha • Atendimento Direto com Morador Credenciado
            </span>
          </div>

          <div style={{ display: 'flex', 'align-items': 'center', gap: '20px' }} class="header-top-right">
            <span style={{ color: '#FAF8F5', opacity: 0.85 }}>Eusébio - Ceará (Anel Viário)</span>
            <a
              href={getHeroWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#E9D29F',
                'font-weight': '700',
                display: 'flex',
                'align-items': 'center',
                gap: '5px'
              }}
            >
              <IconWhatsApp size={14} />
              {WHATSAPP_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Glassmorphism */}
      <nav class="glass-header" style={{
        padding: '14px 0',
        transition: 'all 0.3s ease'
      }}>
        <div class="container" style={{
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          gap: '24px'
        }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', 'align-items': 'center', gap: '12px', 'text-decoration': 'none' }}>
            <img
              src="/images/brand/site-logo-icon.png"
              alt="Cidade Alpha Ceará"
              width="36"
              height="36"
              style={{
                width: '36px',
                height: 'auto',
                'object-fit': 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
              }}
            />
            <div style={{ display: 'flex', 'flex-direction': 'column' }}>
              <span class="font-luxury" style={{
                'font-size': '1.35rem',
                'font-weight': '800',
                color: '#0B241C',
                'letter-spacing': '0.08em',
                'line-height': 1.1
              }}>
                CIDADE ALPHA
              </span>
              <span style={{
                'font-size': '0.68rem',
                'text-transform': 'uppercase',
                'letter-spacing': '0.18em',
                color: '#B89244',
                'font-weight': '700',
                'margin-top': '2px'
              }}>
                CEARÁ • ALPHAVILLE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div class="desktop-nav-links" style={{
            display: 'flex',
            'align-items': 'center',
            gap: '24px',
            'font-size': '0.88rem',
            'font-weight': '600'
          }}>
            <a href="#o-conceito" class="nav-item">O Conceito</a>
            <a href="#empreendimentos" class="nav-item">Residenciais</a>
            <a href="#comparativo" class="nav-item">Comparativo</a>
            <a href="#localizacao" class="nav-item">Localização</a>
            <a href="#comercial" class="nav-item">Lotes Comerciais</a>
            <a href="#calculadora" class="nav-item">Calculadoras</a>
            <a href="#especialista" class="nav-item">Especialista</a>
            <a href="#faq" class="nav-item">Dúvidas</a>
          </div>

          {/* Desktop Right Action */}
          <div style={{ display: 'flex', 'align-items': 'center', gap: '12px' }} class="desktop-nav-cta">
            <a
              href={getHeroWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp"
              style={{
                padding: '10px 18px',
                'font-size': '0.86rem',
                'border-radius': '8px'
              }}
            >
              <IconWhatsApp size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="#empreendimentos"
              class="btn-primary"
              style={{
                padding: '10px 18px',
                'font-size': '0.86rem',
                'border-radius': '8px'
              }}
            >
              Ver Lotes
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Abrir Menu"
            class="mobile-menu-toggle"
            style={{
              display: 'none',
              padding: '8px',
              color: '#0B241C',
              'border-radius': '6px',
              border: '1px solid rgba(11, 36, 28, 0.15)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              {mobileMenuOpen() ? (
                <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen() && (
          <div style={{
            background: '#FAF8F5',
            'border-bottom': '2px solid rgba(203, 162, 88, 0.4)',
            padding: '20px 24px',
            display: 'flex',
            'flex-direction': 'column',
            gap: '16px',
            'box-shadow': '0 20px 30px rgba(0,0,0,0.1)'
          }}>
            <a href="#o-conceito" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>O Conceito</a>
            <a href="#empreendimentos" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Residenciais & Lotes</a>
            <a href="#comparativo" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Tabela Comparativa</a>
            <a href="#localizacao" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Localização & Trajetos</a>
            <a href="#comercial" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Lotes Comerciais</a>
            <a href="#calculadora" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Calculadora & Financiamento</a>
            <a href="#especialista" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Corretor Especialista</a>
            <a href="#faq" onClick={closeMobileMenu} style={{ padding: '8px 0', 'font-weight': '600' }}>Perguntas Frequentes</a>

            <div style={{ display: 'flex', 'flex-direction': 'column', gap: '10px', 'margin-top': '10px' }}>
              <a
                href={getHeroWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                class="btn-whatsapp"
                style={{ 'justify-content': 'center' }}
              >
                <IconWhatsApp size={18} />
                <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
              </a>
              <a
                href="#empreendimentos"
                onClick={closeMobileMenu}
                class="btn-primary"
                style={{ 'justify-content': 'center' }}
              >
                Ver Lotes Disponíveis
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .nav-item {
          color: #2D3E37;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-item:hover {
          color: #B89244;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #B89244;
          transition: width 0.25s ease;
        }
        .nav-item:hover::after {
          width: 100%;
        }
        @media (max-width: 980px) {
          .desktop-nav-links, .desktop-nav-cta, .header-top-right {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
