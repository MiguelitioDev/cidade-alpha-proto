import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import type { LeadFormData } from '../types';
import { IconWhatsApp, IconArrowRight, IconCheck, IconBadgeCheck } from './Icons';
import { getLeadFormWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../services/whatsappService';

export const ContactSection: Component = () => {
  const [name, setName] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [interest, setInterest] = createSignal<'residential' | 'commercial' | 'investment'>('residential');
  const [lotSize, setLotSize] = createSignal('450m²');
  const [message, setMessage] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!name() || !phone()) return;

    const data: LeadFormData = {
      name: name(),
      phone: phone(),
      interest: interest(),
      lotSizePreference: lotSize(),
      message: message()
    };

    const url = getLeadFormWhatsAppUrl(data);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contato" class="section-padding" style={{ background: '#FAF8F5' }}>
      <div class="container">
        
        <div style={{
          'max-width': '960px',
          margin: '0 auto',
          background: '#FFFFFF',
          'border-radius': '24px',
          border: '1px solid rgba(203, 162, 88, 0.4)',
          'box-shadow': 'var(--shadow-lg)',
          overflow: 'hidden',
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(340px, 1fr))'
        }}>
          
          {/* Left Visual Callout */}
          <div style={{
            background: 'linear-gradient(135deg, #061510 0%, #12382C 100%)',
            padding: '44px 36px',
            color: '#FFFFFF',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                'align-items': 'center',
                gap: '8px',
                color: '#E9D29F',
                'font-size': '0.78rem',
                'font-weight': '700',
                'letter-spacing': '0.12em',
                'text-transform': 'uppercase',
                'margin-bottom': '16px'
              }}>
                <IconBadgeCheck size={18} />
                <span>Atendimento Personalizado</span>
              </div>

              <h3 style={{ 'font-size': '2rem', 'font-family': 'var(--font-serif)', color: '#FFFFFF', 'margin-bottom': '16px', 'line-height': 1.2 }}>
                Receba a Tabela de Lotes Atualizada
              </h3>

              <p style={{ color: '#D4DDD9', 'font-size': '0.94rem', 'line-height': 1.6, 'margin-bottom': '28px' }}>
                Preencha seus dados para receber o mapa completo das quadras, opções nascentes, 
                valores de revenda e disponibilidade direto pelo WhatsApp.
              </p>

              <div style={{ display: 'flex', 'flex-direction': 'column', gap: '14px' }}>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#E9D29F' }}>
                  <IconCheck size={16} />
                  <span>Atendimento ágil em menos de 10 minutos</span>
                </div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#E9D29F' }}>
                  <IconCheck size={16} />
                  <span>Acesso a lotes exclusivos de revenda particular</span>
                </div>
                <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#E9D29F' }}>
                  <IconCheck size={16} />
                  <span>Simulações financeiras personalizadas</span>
                </div>
              </div>
            </div>

            <div style={{
              'margin-top': '36px',
              'border-top': '1px solid rgba(255, 255, 255, 0.12)',
              'padding-top': '20px',
              'font-size': '0.85rem',
              color: '#B3C2BC'
            }}>
              <div>Plantão WhatsApp Direto:</div>
              <strong style={{ color: '#FFFFFF', 'font-size': '1.1rem' }}>{WHATSAPP_PHONE_DISPLAY}</strong>
            </div>

          </div>

          {/* Right Lead Capture Form */}
          <div style={{ padding: '44px 36px' }}>
            <h4 style={{ 'font-size': '1.45rem', color: '#0B241C', 'margin-bottom': '8px', 'font-family': 'var(--font-serif)' }}>
              Fale com Nosso Consultor
            </h4>
            <p style={{ 'font-size': '0.88rem', color: '#6E7D77', 'margin-bottom': '24px' }}>
              Sem compromisso. Seus dados estão seguros e protegidos.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', 'flex-direction': 'column', gap: '16px' }}>
              {/* Name Input */}
              <div>
                <label style={{ 'font-size': '0.82rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '6px' }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={name()}
                  onInput={(e) => setName(e.currentTarget.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    'border-radius': '10px',
                    border: '1px solid rgba(18, 56, 44, 0.18)',
                    background: '#FAF8F5',
                    'font-size': '0.94rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label style={{ 'font-size': '0.82rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '6px' }}>
                  Seu WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(85) 99999-9999"
                  value={phone()}
                  onInput={(e) => setPhone(e.currentTarget.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    'border-radius': '10px',
                    border: '1px solid rgba(18, 56, 44, 0.18)',
                    background: '#FAF8F5',
                    'font-size': '0.94rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Interest Type */}
              <div>
                <label style={{ 'font-size': '0.82rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '6px' }}>
                  Principal Interesse *
                </label>
                <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', gap: '6px' }}>
                  {[
                    { id: 'residential', label: 'Residencial' },
                    { id: 'commercial', label: 'Comercial' },
                    { id: 'investment', label: 'Investimento' }
                  ].map((item) => (
                    <button
                      type="button"
                      onClick={() => setInterest(item.id as any)}
                      style={{
                        padding: '10px 4px',
                        'border-radius': '8px',
                        'font-size': '0.82rem',
                        'font-weight': interest() === item.id ? '700' : '500',
                        background: interest() === item.id ? '#0B241C' : '#FAF8F5',
                        color: interest() === item.id ? '#E9D29F' : '#4A5853',
                        border: interest() === item.id ? '1px solid #CBA258' : '1px solid var(--border-light)'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lot size preference */}
              <div>
                <label style={{ 'font-size': '0.82rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '6px' }}>
                  Metragem Preferida
                </label>
                <select
                  value={lotSize()}
                  onChange={(e) => setLotSize(e.currentTarget.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    'border-radius': '10px',
                    border: '1px solid rgba(18, 56, 44, 0.18)',
                    background: '#FAF8F5',
                    'font-size': '0.94rem',
                    outline: 'none'
                  }}
                >
                  <option value="275m² (Terras 4 ou 5)">275 m² (Terras Alphaville 4 ou 5)</option>
                  <option value="330m² (Terras 1, 2 ou 3)">330 m² (Terras Alphaville 1, 2 ou 3)</option>
                  <option value="450m² (Alphaville 1, 2, 3, 4 ou 5)">450 m² (Alphaville Ceará 1 a 5)</option>
                  <option value="Comercial (500m² a 2.000m²)">Comercial (500 m² a 2.000 m²)</option>
                  <option value="Comercial Grande Porte (2.000m² a 8.000m²)">Comercial Grande Porte (2.000 m² a 8.000 m²)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ 'font-size': '0.82rem', 'font-weight': '700', color: '#33413B', display: 'block', 'margin-bottom': '6px' }}>
                  Mensagem ou Preferência (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de lotes nascentes próximos ao clube..."
                  value={message()}
                  onInput={(e) => setMessage(e.currentTarget.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    'border-radius': '10px',
                    border: '1px solid rgba(18, 56, 44, 0.18)',
                    background: '#FAF8F5',
                    'font-size': '0.94rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                class="btn-whatsapp"
                style={{
                  width: '100%',
                  'justify-content': 'center',
                  padding: '16px',
                  'font-size': '1rem',
                  'margin-top': '8px'
                }}
              >
                <IconWhatsApp size={20} />
                <span>Enviar Solicitação no WhatsApp</span>
                <IconArrowRight size={18} />
              </button>

              {submitted() && (
                <div style={{
                  padding: '10px 14px',
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  'border-radius': '8px',
                  'font-size': '0.85rem',
                  'font-weight': '600',
                  'text-align': 'center'
                }}>
                  ✓ Abrindo conversa no WhatsApp com seus detalhes...
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
