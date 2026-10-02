import type { Component } from 'solid-js';
import { IconTree, IconShield, IconCity, IconCheck, IconBadgeCheck } from './Icons';

export const WhatIsIt: Component = () => {
  return (
    <section id="o-conceito" class="section-padding" style={{ background: '#FAF8F5' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Conceito Urbanístico Internacional</span>
          <h2 class="section-title">O que é a Cidade Alpha Ceará?</h2>
          <p class="section-subtitle">
            Um projeto grandioso e inovador que redefine a experiência de viver e investir no Ceará, 
            unindo a solidez da <strong>Alphaville Urbanismo</strong> à tradição e força do <strong>Grupo Dibra (M. Dias Branco)</strong>.
          </p>
        </div>

        {/* 3 Pillars / 3-Column Layout */}
        <div style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          'margin-bottom': '56px'
        }}>
          
          {/* Card 1: Qualidade de Vida */}
          <div style={{
            background: '#FFFFFF',
            padding: '40px 32px',
            'border-radius': '20px',
            border: '1px solid rgba(18, 56, 44, 0.08)',
            'box-shadow': 'var(--shadow-sm)',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <div style={{
                width: '64px',
                height: '64px',
                'border-radius': '16px',
                background: 'rgba(27, 77, 62, 0.08)',
                color: '#1B4D3E',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'margin-bottom': '24px'
              }}>
                <IconTree size={32} />
              </div>

              <h3 style={{
                'font-size': '1.45rem',
                'font-weight': '700',
                color: '#0B241C',
                'margin-bottom': '14px'
              }}>
                Qualidade de Vida Sem Igual
              </h3>

              <p style={{ color: '#4A5853', 'font-size': '0.98rem', 'line-height': 1.65, 'margin-bottom': '20px' }}>
                Mais de <strong>400.000 m² de áreas verdes preservadas</strong>, lagoas naturais e contemplativas, 
                praças temáticas arborizadas e clubes privativos no estilo resort em cada residencial com piscinas 
                semiolímpicas, quadras de tênis e academias completas.
              </p>
            </div>

            <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '10px' }}>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Clube privativo entregue equipado e decorado</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Pistas de cooper e ciclovias arborizadas</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Ar puro e clima mais ameno em Eusébio</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Segurança Armada 24 Horas */}
          <div style={{
            background: '#FFFFFF',
            padding: '40px 32px',
            'border-radius': '20px',
            border: '1px solid rgba(203, 162, 88, 0.35)',
            'box-shadow': 'var(--shadow-md)',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '18px',
              right: '20px'
            }}>
              <span class="badge-luxury" style={{ 'font-size': '0.72rem' }}>Padrão Ouro</span>
            </div>

            <div>
              <div style={{
                width: '64px',
                height: '64px',
                'border-radius': '16px',
                background: 'rgba(203, 162, 88, 0.14)',
                color: '#B89244',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'margin-bottom': '24px'
              }}>
                <IconShield size={32} />
              </div>

              <h3 style={{
                'font-size': '1.45rem',
                'font-weight': '700',
                color: '#0B241C',
                'margin-bottom': '14px'
              }}>
                Segurança Armada & Monitoramento 24h
              </h3>

              <p style={{ color: '#4A5853', 'font-size': '0.98rem', 'line-height': 1.65, 'margin-bottom': '20px' }}>
                Um protocolo de segurança residencial militarizado e de padrão internacional: 
                <strong>portarias blindadas com eclusas para pedestres e veículos</strong>, controle de acesso 
                biométrico de última geração, câmeras térmicas, sensores perimetrais e ronda armada 24h por dia.
              </p>
            </div>

            <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '10px' }}>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Acesso exclusivo para moradores e visitantes cadastrados</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Ronda motorizada interna e no entorno do complexo</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Crianças brincando livres na rua com total tranquilidade</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Bairro Completo */}
          <div style={{
            background: '#FFFFFF',
            padding: '40px 32px',
            'border-radius': '20px',
            border: '1px solid rgba(18, 56, 44, 0.08)',
            'box-shadow': 'var(--shadow-sm)',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between'
          }}>
            <div>
              <div style={{
                width: '64px',
                height: '64px',
                'border-radius': '16px',
                background: 'rgba(27, 77, 62, 0.08)',
                color: '#1B4D3E',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'margin-bottom': '24px'
              }}>
                <IconCity size={32} />
              </div>

              <h3 style={{
                'font-size': '1.45rem',
                'font-weight': '700',
                color: '#0B241C',
                'margin-bottom': '14px'
              }}>
                Um Bairro Planejado Completo
              </h3>

              <p style={{ color: '#4A5853', 'font-size': '0.98rem', 'line-height': 1.65, 'margin-bottom': '20px' }}>
                A harmonia perfeita entre convivência residencial e conveniência do dia a dia. 
                Com <strong>74.405 m² de área comercial privativa</strong>, a Cidade Alpha foi concebida 
                para abrigar colégios de referência, clínicas médicas, shoppings, academias, supermercados 
                e serviços essenciais sem sair do complexo.
              </p>
            </div>

            <ul style={{ 'list-style': 'none', display: 'flex', 'flex-direction': 'column', gap: '10px' }}>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Projetado para receber até 100.000 moradores</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Avenidas principais largas com canteiros centrais floridos</span>
              </li>
              <li style={{ display: 'flex', 'align-items': 'center', gap: '10px', 'font-size': '0.88rem', color: '#12382C' }}>
                <span style={{ color: '#CBA258' }}><IconCheck size={16} /></span>
                <span>Infraestrutura subterrânea que valoriza a paisagem</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Partnership Callout: Alphaville Urbanismo + Dibra (M. Dias Branco) */}
        <div style={{
          background: 'linear-gradient(135deg, #0B241C 0%, #164234 100%)',
          'border-radius': '22px',
          padding: '36px 42px',
          color: '#FAF8F5',
          border: '1px solid rgba(203, 162, 88, 0.35)',
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          'align-items': 'center',
          'box-shadow': 'var(--shadow-lg)'
        }}>
          <div>
            <div style={{ display: 'inline-flex', 'align-items': 'center', gap: '8px', color: '#E9D29F', 'font-size': '0.82rem', 'font-weight': '700', 'text-transform': 'uppercase', 'letter-spacing': '0.12em', 'margin-bottom': '10px' }}>
              <IconBadgeCheck size={18} />
              <span>Parceria Líder no Mercado Imobiliário Nacional</span>
            </div>
            <h3 style={{ 'font-size': '1.85rem', color: '#FFFFFF', 'margin-bottom': '12px' }}>
              Alphaville Urbanismo & Dibra (M. Dias Branco)
            </h3>
            <p style={{ color: '#D2DDD8', 'font-size': '0.98rem', 'line-height': 1.65 }}>
              A Cidade Alpha Ceará é fruto da união estratégica entre a <strong>Alphaville Urbanismo</strong> — maior 
              desenvolvedora de bairros planejados do Brasil com mais de 50 anos de história — e a <strong>Dibra</strong>, 
              braço de investimentos imobiliários do <strong>Grupo M. Dias Branco</strong>, um dos maiores conglomerados 
              empresariais da América Latina.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '28px',
            'border-radius': '16px',
            border: '1px solid rgba(203, 162, 88, 0.25)',
            display: 'flex',
            'flex-direction': 'column',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', 'align-items': 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                'border-radius': '10px',
                background: '#CBA258',
                color: '#061510',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'font-weight': '800',
                'font-size': '1.1rem'
              }}>
                A
              </div>
              <div>
                <div style={{ 'font-weight': '700', color: '#FFFFFF', 'font-size': '1rem' }}>Alphaville Urbanismo</div>
                <div style={{ 'font-size': '0.82rem', color: '#C5D4CE' }}>Liderança e padrão de engenharia urbana nacional</div>
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />

            <div style={{ display: 'flex', 'align-items': 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                'border-radius': '10px',
                background: '#E9D29F',
                color: '#061510',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'font-weight': '800',
                'font-size': '1.1rem'
              }}>
                D
              </div>
              <div>
                <div style={{ 'font-weight': '700', color: '#FFFFFF', 'font-size': '1rem' }}>Dibra (M. Dias Branco)</div>
                <div style={{ 'font-size': '0.82rem', color: '#C5D4CE' }}>Solidez financeira e compromisso perene com o Ceará</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
