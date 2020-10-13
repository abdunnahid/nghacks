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
    id: 'dynamic-browser-title',
    title: 'Dynamic Browser title',
    route: '/dynamic-browser-title',
    icon: ''
  },
  {
    id: 'mat-table-query-reflector',
    title: 'Mat Table Query Reflector',
    route: '/mat-table-query-reflector',
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
  },
  {
    id: 'quantity-input',
    title: 'Quantity Input',
    route: '/quantity-input',
    icon: ''
  },
  {
    id: 'rating-input',
    title: 'Rating Input',
    route: '/rating-input',
    icon: ''
  },
  {
    id: 'banner-carousel',
    title: 'Banner Carousel',
    route: '/banner-carousel',
    icon: ''
  },
  {
    id: 'overflow-carousel',
    title: 'Overflow Carousel',
    route: '/overflow-carousel',
    icon: ''
  }
];
