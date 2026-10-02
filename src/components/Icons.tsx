import type { Component } from 'solid-js';

interface IconProps {
  size?: number;
  class?: string;
  color?: string;
}

export const IconWhatsApp: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill={props.color || "currentColor"} fill-opacity="0.1" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" stroke-width="2.5" />
  </svg>
);

export const IconShield: Component<IconProps> = (props) => (
  <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconTree: Component<IconProps> = (props) => (
  <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M12 22v-7" />
    <path d="M12 2a5 5 0 0 0-5 5c0 1.5.7 2.8 1.7 3.7A5 5 0 0 0 6 15h12a5 5 0 0 0-2.7-4.3A5 5 0 0 0 17 7a5 5 0 0 0-5-5z" />
  </svg>
);

export const IconCity: Component<IconProps> = (props) => (
  <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-4" />
    <path d="M9 9v.01" />
    <path d="M9 12v.01" />
    <path d="M9 15v.01" />
    <path d="M9 18v.01" />
  </svg>
);

export const IconMapPin: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconCheck: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconChevronDown: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconArrowRight: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconStar: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="#CBA258" stroke="#CBA258" stroke-width="1" class={props.class}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconBadgeCheck: Component<IconProps> = (props) => (
  <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M12 2l2.4 2.9 3.7-.4 1.2 3.5 3.4 1.6-1 3.6 1.8 3.3-3 2.2-.4 3.7-3.6.8-1.5 3.4-3.6-1-3.6 1-1.5-3.4-3.6-.8-.4-3.7-3-2.2 1.8-3.3-1-3.6 3.4-1.6 1.2-3.5 3.7.4L12 2z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconBuilding: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

export const IconCalculator: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);

export const IconSearch: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const IconClose: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconInstagram: Component<IconProps> = (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const IconPhone: Component<IconProps> = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={props.class}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
