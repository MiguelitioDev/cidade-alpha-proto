import type { CommuteDestination } from '../types';

export const locationData = {
  city: 'Eusébio, Ceará',
  accessInfo: 'Acesso principal via Anel Viário, interligando diretamente a BR-116 e a CE-040 com pistas duplicadas e iluminação em LED.',
  timeToFortaleza: '15 minutos',
  totalAreaTotal: '19 milhões de m²',
  capacityPopulation: 'Até 100.000 moradores',
  googleMapsLink: 'https://www.google.com/maps/dir//Cidade+Alpha+Cear%C3%A1+-+Eus%C3%A9bio,+CE/@-3.8986,-38.4552,14z',
  destinations: [
    {
      id: 'via-sul',
      name: 'Via Sul Shopping',
      timeMin: 18,
      distance: '16 km',
      category: 'Compras & Lazer',
      icon: 'mall'
    },
    {
      id: 'beach-park',
      name: 'Beach Park & Porto das Dunas',
      timeMin: 21,
      distance: '19 km',
      category: 'Praia & Lazer',
      icon: 'beach'
    },
    {
      id: 'centro-eventos',
      name: 'Centro de Eventos do Ceará',
      timeMin: 22,
      distance: '18 km',
      category: 'Convenções & Negócios',
      icon: 'events'
    },
    {
      id: 'castelao',
      name: 'Arena Castelão',
      timeMin: 23,
      distance: '17 km',
      category: 'Esportes & Shows',
      icon: 'stadium'
    },
    {
      id: 'iguatemi',
      name: 'Shopping Iguatemi Bosque',
      timeMin: 25,
      distance: '21 km',
      category: 'Alta Gastronomia & Luxo',
      icon: 'mall-luxury'
    },
    {
      id: 'ufc',
      name: 'Universidade Federal do Ceará (UFC)',
      timeMin: 40,
      distance: '28 km',
      category: 'Educação Superior',
      icon: 'university'
    }
  ] as CommuteDestination[]
};
