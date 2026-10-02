import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import { faqData } from '../data/faqData';
import { IconChevronDown, IconWhatsApp, IconBadgeCheck } from './Icons';
import { getHeroWhatsAppUrl } from '../services/whatsappService';

export const FaqSection: Component = () => {
  const [activeId, setActiveId] = createSignal<string>('documentacao');
  const [selectedCategory, setSelectedCategory] = createSignal<string>('all');

  const toggleAccordion = (id: string) => {
    setActiveId(activeId() === id ? '' : id);
  };

  const filteredFaqs = () => {
    const cat = selectedCategory();
    if (cat === 'all') return faqData;
    return faqData.filter((item) => item.category === cat);
  };

  return (
    <section id="faq" class="section-padding" style={{ background: '#FFFFFF' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Tire Todas as Suas Dúvidas</span>
          <h2 class="section-title">Perguntas Frequentes sobre a Cidade Alpha</h2>
          <p class="section-subtitle">
            Informações claras e transparentes sobre documentação, normas construtivas, 
            custos de escritura e o dia a dia nos residenciais.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{
          display: 'flex',
          'flex-wrap': 'wrap',
          'justify-content': 'center',
          gap: '8px',
          'margin-bottom': '36px'
        }}>
          {[
            { id: 'all', label: 'Todas as Dúvidas' },
            { id: 'documentacao', label: 'Documentação & Compra' },
            { id: 'construcao', label: 'Construção & Lotes' },
            { id: 'custos', label: 'Escritura & Financiamento' },
            { id: 'infraestrutura', label: 'Transporte & Serviços' }
          ].map((cat) => (
            <button
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 18px',
                'border-radius': '9999px',
                'font-size': '0.84rem',
                'font-weight': selectedCategory() === cat.id ? '700' : '500',
                background: selectedCategory() === cat.id ? '#0B241C' : '#FAF8F5',
                color: selectedCategory() === cat.id ? '#E9D29F' : '#4A5853',
                border: selectedCategory() === cat.id ? '1px solid #CBA258' : '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div style={{
          'max-width': '880px',
          margin: '0 auto 48px auto',
          display: 'flex',
          'flex-direction': 'column',
          gap: '14px'
        }}>
          <For each={filteredFaqs()}>
            {(faq) => {
              const isOpen = () => activeId() === faq.id;

              return (
                <div style={{
                  background: isOpen() ? '#FAF8F5' : '#FFFFFF',
                  border: isOpen() ? '1px solid #CBA258' : '1px solid rgba(18, 56, 44, 0.1)',
                  'border-radius': '16px',
                  overflow: 'hidden',
                  'box-shadow': isOpen() ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}>
                  {/* Header Button */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    style={{
                      width: '100%',
                      padding: '22px 24px',
                      display: 'flex',
                      'justify-content': 'space-between',
                      'align-items': 'center',
                      gap: '16px',
                      'text-align': 'left',
                      background: 'transparent'
                    }}
                  >
                    <span style={{
                      'font-size': '1.05rem',
                      'font-weight': '700',
                      color: isOpen() ? '#0B241C' : '#1E2925',
                      'line-height': 1.4
                    }}>
                      {faq.question}
                    </span>

                    <span style={{
                      transform: isOpen() ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen() ? '#B89244' : '#6E7D77',
                      flex: 'none'
                    }}>
                      <IconChevronDown size={20} />
                    </span>
                  </button>

                  {/* Body Content */}
                  {isOpen() && (
                    <div style={{
                      padding: '0 24px 24px 24px',
                      color: '#4A5853',
                      'font-size': '0.96rem',
                      'line-height': 1.65,
                      'border-top': '1px solid rgba(18, 56, 44, 0.06)',
                      'margin-top': '2px',
                      'padding-top': '18px'
                    }}>
                      <p style={{ 'margin-bottom': '14px' }}>
                        {faq.answer}
                      </p>

                      {faq.highlight && (
                        <div style={{
                          display: 'inline-flex',
                          'align-items': 'center',
                          gap: '8px',
                          background: 'rgba(203, 162, 88, 0.12)',
                          padding: '6px 14px',
                          'border-radius': '8px',
                          border: '1px solid rgba(203, 162, 88, 0.35)',
                          'font-size': '0.82rem',
                          color: '#7D5C1E',
                          'font-weight': '600'
                        }}>
                          <IconBadgeCheck size={16} />
                          <span>Ponto chave: {faq.highlight}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }}
          </For>
        </div>

        {/* Still Have Questions Box */}
        <div style={{
          'max-width': '740px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #0B241C 0%, #164234 100%)',
          'border-radius': '20px',
          padding: '28px 34px',
          border: '1px solid rgba(203, 162, 88, 0.35)',
          display: 'flex',
          'flex-wrap': 'wrap',
          'align-items': 'center',
          'justify-content': 'space-between',
          gap: '20px',
          color: '#FFFFFF'
        }}>
          <div>
            <h3 style={{ 'font-size': '1.3rem', color: '#E9D29F', 'margin-bottom': '6px', 'font-family': 'var(--font-serif)' }}>
              Tem alguma dúvida específica sobre o seu caso?
            </h3>
            <p style={{ 'font-size': '0.88rem', color: '#D2DDD8' }}>
              Envie sua pergunta direto para o corretor morador pelo WhatsApp com resposta imediata.
            </p>
          </div>

          <a
            href={getHeroWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp"
            style={{
              padding: '12px 22px',
              'font-size': '0.92rem',
              'white-space': 'nowrap'
            }}
          >
            <IconWhatsApp size={18} />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
