import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { IconWhatsApp, IconClose } from './Icons';
import { getHeroWhatsAppUrl } from '../services/whatsappService';

export const FloatingWhatsApp: Component = () => {
  const [showTooltip, setShowTooltip] = createSignal(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      'z-index': 9999,
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'flex-end',
      gap: '10px'
    }}>
      {/* Speech Bubble / Notification */}
      {showTooltip() && (
        <div style={{
          background: '#FFFFFF',
          padding: '12px 16px',
          'border-radius': '14px',
          'box-shadow': '0 8px 30px rgba(0,0,0,0.18)',
          border: '1px solid rgba(203, 162, 88, 0.4)',
          'max-width': '260px',
          position: 'relative',
          display: 'flex',
          'align-items': 'flex-start',
          gap: '10px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div>
            <div style={{ 'font-size': '0.78rem', 'font-weight': '700', color: '#0B241C', display: 'flex', 'align-items': 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', 'border-radius': '50%', background: '#25D366', display: 'inline-block' }} />
              <span>Plantão Cidade Alpha</span>
            </div>
            <div style={{ 'font-size': '0.8rem', color: '#4A5853', 'margin-top': '4px', 'line-height': 1.35 }}>
              Olá! Quer ver os lotes disponíveis hoje ou fazer uma simulação?
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar mensagem"
            style={{
              color: '#8A9791',
              padding: '2px',
              cursor: 'pointer'
            }}
          >
            <IconClose size={14} />
          </button>
        </div>
      )}

      {/* Floating Pulse Button */}
      <a
        href={getHeroWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        style={{
          width: '62px',
          height: '62px',
          'border-radius': '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#FFFFFF',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'box-shadow': '0 10px 25px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.25s ease',
          position: 'relative'
        }}
        class="floating-whatsapp-btn"
      >
        <IconWhatsApp size={34} />
        
        {/* Pulsing Outer Ring */}
        <span style={{
          position: 'absolute',
          inset: '-4px',
          'border-radius': '50%',
          border: '2px solid rgba(37, 211, 102, 0.6)',
          animation: 'pulseRing 2s infinite ease-out'
        }} />
      </a>

      <style>{`
        .floating-whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 14px 35px rgba(37, 211, 102, 0.6) !important;
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
