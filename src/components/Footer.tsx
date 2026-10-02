import type { Component } from 'solid-js';
import { IconWhatsApp, IconInstagram, IconMapPin, IconPhone } from './Icons';
import { WHATSAPP_PHONE_DISPLAY, getHeroWhatsAppUrl } from '../services/whatsappService';

export const Footer: Component = () => {
  return (
    <footer style={{
      background: '#061510',
      color: '#FAF8F5',
      'border-top': '2px solid rgba(203, 162, 88, 0.35)',
      'padding-top': '64px',
      'padding-bottom': '40px'
    }}>
      <div class="container">
        
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          'margin-bottom': '48px'
        }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div class="font-luxury" style={{ 'font-size': '1.5rem', 'font-weight': '800', color: '#FFFFFF', 'margin-bottom': '4px' }}>
              CIDADE ALPHA
            </div>
            <div style={{ 'font-size': '0.72rem', 'letter-spacing': '0.18em', color: '#CBA258', 'font-weight': '700', 'margin-bottom': '16px', 'text-transform': 'uppercase' }}>
              Ceará • Alphaville & Terras
            </div>
            <p style={{ 'font-size': '0.88rem', color: '#B3C2BC', 'line-height': 1.6, 'margin-bottom': '20px' }}>
              Venda e consultoria especializada de lotes residenciais (275m² a 450m²) e comerciais (500m² a 8.000m²) 
              no maior complexo planejado do Ceará, em Eusébio.
            </p>
            <div style={{ display: 'flex', 'align-items': 'center', gap: '12px' }}>
              <a
                href="https://instagram.com/cidadealphaceara.especialista"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Especialista"
                style={{
                  width: '40px',
                  height: '40px',
                  'border-radius': '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center',
                  color: '#E9D29F',
                  border: '1px solid rgba(203, 162, 88, 0.25)'
                }}
              >
                <IconInstagram size={20} />
              </a>
              <a
                href={getHeroWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direto"
                style={{
                  width: '40px',
                  height: '40px',
                  'border-radius': '10px',
                  background: '#25D366',
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center',
                  color: '#FFFFFF'
                }}
              >
                <IconWhatsApp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ 'font-size': '1.05rem', color: '#E9D29F', 'margin-bottom': '18px', 'font-family': 'var(--font-serif)' }}>
              Navegação Rápida
            </h4>
            <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '10px', 'font-size': '0.88rem' }}>
              <li><a href="#o-conceito" style={{ color: '#D4DDD9' }}>O Conceito Cidade Alpha</a></li>
              <li><a href="#empreendimentos" style={{ color: '#D4DDD9' }}>Lotes Alphaville (450m²)</a></li>
              <li><a href="#empreendimentos" style={{ color: '#D4DDD9' }}>Lotes Terras Alphaville (275m² e 330m²)</a></li>
              <li><a href="#comparativo" style={{ color: '#D4DDD9' }}>Tabela Comparativa</a></li>
              <li><a href="#localizacao" style={{ color: '#D4DDD9' }}>Localização & Trajetos</a></li>
              <li><a href="#comercial" style={{ color: '#D4DDD9' }}>Lotes Comerciais & Empresariais</a></li>
              <li><a href="#calculadora" style={{ color: '#D4DDD9' }}>Calculadora de Condomínio</a></li>
              <li><a href="#faq" style={{ color: '#D4DDD9' }}>Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          {/* Column 3: Residenciais */}
          <div>
            <h4 style={{ 'font-size': '1.05rem', color: '#E9D29F', 'margin-bottom': '18px', 'font-family': 'var(--font-serif)' }}>
              Residenciais no Complexo
            </h4>
            <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr', gap: '8px', 'font-size': '0.84rem' }}>
              <span style={{ color: '#CBD6D1' }}>Alphaville Ceará 1</span>
              <span style={{ color: '#CBD6D1' }}>Terras Alphaville 1</span>
              <span style={{ color: '#CBD6D1' }}>Alphaville Ceará 2</span>
              <span style={{ color: '#CBD6D1' }}>Terras Alphaville 2</span>
              <span style={{ color: '#CBD6D1' }}>Alphaville Ceará 3</span>
              <span style={{ color: '#CBD6D1' }}>Terras Alphaville 3</span>
              <span style={{ color: '#CBD6D1' }}>Alphaville Ceará 4</span>
              <span style={{ color: '#CBD6D1' }}>Terras Alphaville 4</span>
              <span style={{ color: '#CBD6D1' }}>Alphaville Ceará 5</span>
              <span style={{ color: '#CBD6D1' }}>Terras Alphaville 5</span>
            </div>
            <div style={{ 'margin-top': '16px', 'font-size': '0.8rem', color: '#A1B7AF' }}>
              ✦ Residenciais 100% fechados com controle de acesso rigoroso e clubes privativos.
            </div>
          </div>

          {/* Column 4: Contact & Specialist */}
          <div>
            <h4 style={{ 'font-size': '1.05rem', color: '#E9D29F', 'margin-bottom': '18px', 'font-family': 'var(--font-serif)' }}>
              Plantão de Atendimento
            </h4>
            <div style={{ display: 'flex', 'flex-direction': 'column', gap: '12px', 'font-size': '0.88rem' }}>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', color: '#D4DDD9' }}>
                <span style={{ color: '#E9D29F' }}><IconPhone size={16} /></span>
                <span>WhatsApp: <strong>{WHATSAPP_PHONE_DISPLAY}</strong></span>
              </div>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', color: '#D4DDD9' }}>
                <span style={{ color: '#E9D29F' }}><IconMapPin size={16} /></span>
                <span>Anel Viário, Eusébio - CE, 61760-000</span>
              </div>
              <div style={{ display: 'flex', 'align-items': 'center', gap: '10px', color: '#D4DDD9' }}>
                <span style={{ color: '#E9D29F' }}><IconInstagram size={16} /></span>
                <span>@cidadealphaceara.especialista</span>
              </div>
            </div>

            <div style={{ 'margin-top': '20px' }}>
              <a
                href={getHeroWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                class="btn-whatsapp"
                style={{
                  width: '100%',
                  'justify-content': 'center',
                  padding: '12px 18px',
                  'font-size': '0.88rem'
                }}
              >
                <IconWhatsApp size={16} />
                <span>Conversar com Morador</span>
              </a>
            </div>
          </div>

        </div>

        {/* Required Mandatory Legal Disclaimer */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '14px',
          padding: '20px 24px',
          'margin-bottom': '28px',
          'font-size': '0.78rem',
          color: '#A1B7AF',
          'line-height': 1.6
        }}>
          <strong style={{ color: '#E9D29F', display: 'block', 'margin-bottom': '6px', 'text-transform': 'uppercase', 'letter-spacing': '0.06em' }}>
            Aviso Legal e Institucional:
          </strong>
          Este portal tem finalidade estritamente consultiva, de divulgação imobiliária e intermediação de negócios. 
          <strong> Não somos a Alphaville Urbanismo S.A. nem a Dibra (M. Dias Branco);</strong> somos corretores e consultores 
          imobiliários credenciados pelo CRECI-CE, especializados na intermediação de lançamentos, assessoria técnica e revendas 
          exclusivas de lotes na Cidade Alpha Ceará. Todas as marcas, projetos e logomarcas pertencem aos seus respectivos proprietários. 
          Preços, disponibilidades e condições comerciais estão sujeitos a confirmação e alterações sem aviso prévio.
        </div>

        {/* Bottom Copyright */}
        <div style={{
          display: 'flex',
          'flex-wrap': 'wrap',
          'justify-content': 'space-between',
          'align-items': 'center',
          gap: '12px',
          'font-size': '0.78rem',
          color: '#6E7D77',
          'border-top': '1px solid rgba(255, 255, 255, 0.08)',
          'padding-top': '20px'
        }}>
          <div>
            © {new Date().getFullYear()} Cidade Alpha Ceará - Todos os direitos reservados. CRECI 18.420-F / CE.
          </div>
          <div>
            Desenvolvido com foco em alta conversão imobiliária • Padrão Alphaville Ceará.
          </div>
        </div>

      </div>
    </footer>
  );
};
