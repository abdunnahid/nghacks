import { INavigation } from './navigation.interface';

export const Navigation: INavigation[] = [
  {
    id: 'home',
    title: 'Home',
    route: '/',
    icon: 'home',
    exactMatch: true
  },
  {
    id: 'mat-table-query-reflector',
    title: 'Mat Table Query Reflector',
    route: '/mat-table-query-reflector',
    icon: ''
  },
  {
    id: 'dynamic-browser-title',
    title: 'Dynamic Browser title',
    route: '/dynamic-browser-title',
    icon: ''
  },
  {
    id: 'uploader',
    title: 'Uploader',
    route: '/uploader',
    icon: ''
  },
  {
    id: 'info-dialog',
    title: 'Info Dialog',
    route: '/info-dialog',
    icon: ''
  },
  {
    id: 'image-viewer',
    title: 'Image Viewer',
    route: '/image-viewer',
    icon: ''
  }
];
