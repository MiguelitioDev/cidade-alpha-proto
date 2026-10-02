import { Show } from 'solid-js';
import type { Component } from 'solid-js';
import type { Development } from '../types';
import { IconClose, IconCheck, IconWhatsApp } from './Icons';
import { formatNumberBR } from '../services/calculatorService';
import { getDevelopmentWhatsAppUrl } from '../services/whatsappService';

interface LotModalProps {
  development: Development | null;
  onClose: () => void;
}

export const LotModal: Component<LotModalProps> = (props) => {
  return (
    <Show when={props.development}>
      {(dev) => (
        <div class="modal-overlay" onClick={props.onClose}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: 0 }}>
            
            {/* Modal Header Image */}
            <div style={{
              position: 'relative',
              height: '240px',
              'background-image': `linear-gradient(180deg, rgba(6, 21, 16, 0.4) 0%, rgba(9, 28, 22, 0.85) 100%), url('${dev().image}')`,
              'background-size': 'cover',
              'background-position': 'center',
              'border-top-left-radius': 'var(--radius-lg)',
              'border-top-right-radius': 'var(--radius-lg)',
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'space-between',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', 'justify-content': 'space-between', 'align-items': 'center' }}>
                <span class={`status-pill ${dev().statusColor}`} style={{ 'font-size': '0.78rem', padding: '6px 14px' }}>
                  {dev().statusBadge}
                </span>
                <button
                  onClick={props.onClose}
                  aria-label="Fechar"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#FFFFFF',
                    width: '36px',
                    height: '36px',
                    'border-radius': '50%',
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }}
                >
                  <IconClose size={20} />
                </button>
              </div>

              <div>
                <h3 style={{ color: '#FFFFFF', 'font-size': '1.8rem', 'font-family': 'var(--font-serif)', 'margin-bottom': '4px' }}>
                  {dev().name}
                </h3>
                <p style={{ color: '#E9D29F', 'font-size': '0.92rem', 'font-weight': '600' }}>
                  {dev().highlight}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px' }}>
              
              {/* Key Specs Grid */}
              <div style={{
                display: 'grid',
                'grid-template-columns': 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                'margin-bottom': '24px',
                background: 'var(--bg-card-muted)',
                padding: '16px',
                'border-radius': '14px',
                border: '1px solid var(--border-light)'
              }}>
                <div>
                  <div style={{ 'font-size': '0.75rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Metragem do Lote</div>
                  <div style={{ 'font-size': '1.15rem', 'font-weight': '800', color: '#0B241C' }}>{dev().lotSize} m²</div>
                </div>
                <div>
                  <div style={{ 'font-size': '0.75rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área do Clube</div>
                  <div style={{ 'font-size': '1.15rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev().clubArea)} m²</div>
                </div>
                <div>
                  <div style={{ 'font-size': '0.75rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área Verde</div>
                  <div style={{ 'font-size': '1.15rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev().greenArea)} m²</div>
                </div>
                <div>
                  <div style={{ 'font-size': '0.75rem', color: '#6E7D77', 'text-transform': 'uppercase' }}>Área Total</div>
                  <div style={{ 'font-size': '1.15rem', 'font-weight': '800', color: '#0B241C' }}>{formatNumberBR(dev().totalArea)} m²</div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#4A5853', 'font-size': '0.98rem', 'line-height': 1.6, 'margin-bottom': '20px' }}>
                {dev().description}
              </p>

              {/* Features Checklist */}
              <h4 style={{ 'font-size': '1rem', color: '#0B241C', 'margin-bottom': '12px', 'font-weight': '700' }}>
                Diferenciais Deste Residencial:
              </h4>
              <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '8px', 'margin-bottom': '28px' }}>
                {dev().features.map((feature) => (
                  <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.9rem', color: '#1B4D3E' }}>
                    <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Modal CTAs */}
              <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '12px' }}>
                <a
                  href={getDevelopmentWhatsAppUrl(dev().name, dev().lotSize)}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-whatsapp"
                  style={{ flex: '1', 'justify-content': 'center', padding: '14px 20px' }}
                >
                  <IconWhatsApp size={18} />
                  <span>Receber Disponibilidade & Mapa das Quadras</span>
                </a>
                <button
                  onClick={props.onClose}
                  class="btn-secondary"
                  style={{ padding: '14px 20px' }}
                >
                  Fechar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </Show>
  );
};
