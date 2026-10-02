import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import { developmentsData } from '../data/developmentsData';
import { IconWhatsApp, IconSearch } from './Icons';
import { formatNumberBR } from '../services/calculatorService';
import { getDevelopmentWhatsAppUrl } from '../services/whatsappService';

type SortField = 'name' | 'lotSize' | 'lotsCount' | 'clubArea' | 'greenArea' | 'totalArea';
type SortDirection = 'asc' | 'desc';

export const ComparisonTable: Component = () => {
  const [filterSize, setFilterSize] = createSignal<string>('all');
  const [searchQuery, setSearchQuery] = createSignal<string>('');
  const [sortField, setSortField] = createSignal<SortField>('lotSize');
  const [sortDir, setSortDir] = createSignal<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField() === field) {
      setSortDir(sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const processedData = () => {
    let list = [...developmentsData];

    // Filter by size
    const size = filterSize();
    if (size !== 'all') {
      const num = parseInt(size, 10);
      list = list.filter((item) => item.lotSize === num);
    }

    // Filter by query
    const q = searchQuery().toLowerCase().trim();
    if (q) {
      list = list.filter((item) => item.name.toLowerCase().includes(q));
    }

    // Sort
    const field = sortField();
    const dir = sortDir();
    list.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];

      if (typeof valA === 'string') {
        return dir === 'asc'
          ? (valA as string).localeCompare(valB as string)
          : (valB as string).localeCompare(valA as string);
      }
      return dir === 'asc'
        ? (valA as number) - (valB as number)
        : (valB as number) - (valA as number);
    });

    return list;
  };

  return (
    <section id="comparativo" class="section-padding" style={{ background: '#FAF8F5' }}>
      <div class="container">
        
        {/* Section Header */}
        <div class="section-header">
          <span class="section-eyebrow">Análise Técnica e Comparativa</span>
          <h2 class="section-title">Tabela Comparativa de Lotes e Estruturas</h2>
          <p class="section-subtitle">
            Compare lado a lado as características métricas, áreas de preservação ambiental, 
            estruturas de lazer e dimensões de cada residencial da Cidade Alpha Ceará.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{
          display: 'flex',
          'flex-wrap': 'wrap',
          'align-items': 'center',
          'justify-content': 'space-between',
          gap: '16px',
          'margin-bottom': '24px',
          background: '#FFFFFF',
          padding: '16px 20px',
          'border-radius': '16px',
          border: '1px solid var(--border-light)',
          'box-shadow': 'var(--shadow-sm)'
        }}>
          {/* Size Filter Pills */}
          <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '8px' }}>
            {[
              { id: 'all', label: 'Todos os Tamanhos' },
              { id: '450', label: '450 m²' },
              { id: '330', label: '330 m²' },
              { id: '275', label: '275 m²' }
            ].map((btn) => (
              <button
                onClick={() => setFilterSize(btn.id)}
                style={{
                  padding: '8px 16px',
                  'border-radius': '8px',
                  'font-size': '0.84rem',
                  'font-weight': '600',
                  background: filterSize() === btn.id ? '#12382C' : '#F4F0E8',
                  color: filterSize() === btn.id ? '#E9D29F' : '#33413B',
                  border: filterSize() === btn.id ? '1px solid #CBA258' : '1px solid transparent',
                  cursor: 'pointer'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{
            display: 'flex',
            'align-items': 'center',
            gap: '8px',
            background: '#F8F6F1',
            padding: '8px 14px',
            'border-radius': '10px',
            border: '1px solid rgba(18, 56, 44, 0.1)',
            'min-width': '240px'
          }}>
            <span style={{ color: '#889891' }}><IconSearch size={16} /></span>
            <input
              type="text"
              placeholder="Buscar residencial (ex: Alpha 5)..."
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                'font-size': '0.86rem',
                color: '#0B241C',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Responsive Table Container */}
        <div style={{
          background: '#FFFFFF',
          'border-radius': '18px',
          border: '1px solid rgba(18, 56, 44, 0.12)',
          'box-shadow': 'var(--shadow-md)',
          overflow: 'hidden'
        }}>
          <div style={{ 'overflow-x': 'auto' }}>
            <table style={{
              width: '100%',
              'border-collapse': 'collapse',
              'text-align': 'left',
              'font-size': '0.9rem'
            }}>
              <thead>
                <tr style={{
                  background: '#0B241C',
                  color: '#FAF8F5',
                  'border-bottom': '2px solid #CBA258'
                }}>
                  <th
                    onClick={() => handleSort('name')}
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Empreendimento {sortField() === 'name' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th
                    onClick={() => handleSort('lotSize')}
                    style={{
                      padding: '16px 18px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Lote Padrão {sortField() === 'lotSize' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th
                    onClick={() => handleSort('lotsCount')}
                    style={{
                      padding: '16px 18px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Nº de Lotes {sortField() === 'lotsCount' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th
                    onClick={() => handleSort('clubArea')}
                    style={{
                      padding: '16px 18px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Área do Clube {sortField() === 'clubArea' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th
                    onClick={() => handleSort('greenArea')}
                    style={{
                      padding: '16px 18px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Área Verde {sortField() === 'greenArea' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th
                    onClick={() => handleSort('totalArea')}
                    style={{
                      padding: '16px 18px',
                      cursor: 'pointer',
                      'font-family': 'var(--font-luxury)',
                      'letter-spacing': '0.04em'
                    }}
                  >
                    Área Total {sortField() === 'totalArea' ? (sortDir() === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={{ padding: '16px 20px', 'text-align': 'center' }}>
                    Ação
                  </th>
                </tr>
              </thead>

              <tbody>
                <For each={processedData()}>
                  {(item, index) => (
                    <tr style={{
                      'border-bottom': '1px solid rgba(18, 56, 44, 0.08)',
                      background: index() % 2 === 0 ? '#FFFFFF' : '#FAF8F5',
                      transition: 'background 0.15s ease'
                    }}>
                      {/* Name & Badge */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ 'font-weight': '700', color: '#0B241C', 'font-size': '0.96rem' }}>
                          {item.name}
                        </div>
                        <div style={{ 'margin-top': '4px' }}>
                          <span class={`status-pill ${item.statusColor}`} style={{ 'font-size': '0.68rem', padding: '3px 8px' }}>
                            {item.statusBadge}
                          </span>
                        </div>
                      </td>

                      {/* Lot Size */}
                      <td style={{ padding: '16px 18px' }}>
                        <strong style={{ color: '#1B4D3E', 'font-size': '1rem' }}>
                          {item.lotSize} m²
                        </strong>
                      </td>

                      {/* Number of Lots */}
                      <td style={{ padding: '16px 18px', color: '#33413B', 'font-weight': '600' }}>
                        {item.lotsCount} lotes
                      </td>

                      {/* Club Area */}
                      <td style={{ padding: '16px 18px', color: '#33413B', 'font-weight': '600' }}>
                        {formatNumberBR(item.clubArea)} m²
                      </td>

                      {/* Green Area */}
                      <td style={{ padding: '16px 18px', color: '#1E5A49', 'font-weight': '700' }}>
                        {formatNumberBR(item.greenArea)} m²
                      </td>

                      {/* Total Area */}
                      <td style={{ padding: '16px 18px', color: '#4A5853' }}>
                        {formatNumberBR(item.totalArea)} m²
                      </td>

                      {/* Action WhatsApp */}
                      <td style={{ padding: '16px 20px', 'text-align': 'center' }}>
                        <a
                          href={getDevelopmentWhatsAppUrl(item.name, item.lotSize)}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="btn-whatsapp"
                          style={{
                            padding: '8px 14px',
                            'font-size': '0.8rem',
                            'border-radius': '6px',
                            'white-space': 'nowrap'
                          }}
                        >
                          <IconWhatsApp size={14} />
                          <span>Consultar</span>
                        </a>
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <div style={{
          'margin-top': '16px',
          display: 'flex',
          'justify-content': 'space-between',
          'flex-wrap': 'wrap',
          gap: '12px',
          'font-size': '0.8rem',
          color: '#6E7D77'
        }}>
          <div>* Dados técnicos oficiais consolidados com base nos memoriais descritivos dos empreendimentos.</div>
          <div>** Disponibilidade sujeita a alteração sem aviso prévio. Consulte o corretor morador.</div>
        </div>

      </div>
    </section>
  );
};
