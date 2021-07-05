import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        classes: 'nav-item',
        url: '/dashboard/project'
      },
      {
        id: 'page-layouts',
        title: 'Promotion',
        type: 'item',
        classes: 'nav-item',
        icon: 'feather icon-layout',
        url: '/dashboard/statistic'
      },
      {
        id: 'widget',
        title: 'Biens',
        type: 'collapse',
        icon: 'feather icon-layers',
        children: [
          {
            id: 'statistic',
            title: 'Biens',
            type: 'item',
            classes: 'nav-item',
            url: '/hospital/hosp-doctor'
          },
          {
            id: 'data',
            title: 'Configuration',
            type: 'item',
            classes: 'nav-item',
            url: '/widget/data'
          }
        ]
      },
      {
        id: 'pc-project',
        title: 'Souscriptions',
        type: 'item',
        icon: 'feather icon-users',
        classes: 'nav-item',
        url: '/project-crm/pc-customers'

      }
    ]
  },
  {
    id: 'admin-panel',
    title: 'Paiements',
    type: 'collapse',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'hospital',
        title: 'Paiements',
        type: 'item',
        classes: 'nav-item',
        url: '/membership/mshp-country'

      },
      {
        id: 'ecommerce',
        title: 'Stripes',
        type: 'item',
        classes: 'nav-item',
        url: '/crypto/cp-wallet'

      }
    ]
  },
  {
    id: 'ui-element',
    title: 'Gestion des comptes',
    type: 'item',
    icon: 'feather icon-layers',
    classes: 'nav-item',
    url: '/hospital/hosp-pharmacist'
  },
  {
    id: 'forms',
    title: 'Configuration',
    type: 'item',
    icon: 'feather icon-layout',
    classes: 'nav-item',
    url: '/dashboard/statistic'
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
