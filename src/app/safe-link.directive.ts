import { Directive } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  constructor() {}

  onClick(event: MouseEvent) {
    const confirmLeave = (): boolean =>
      window.confirm('Do you want to leave this page?');
    const preventDefault = (): void => event.preventDefault();
    const isModifiedClick = (e: MouseEvent): boolean => e.ctrlKey || e.metaKey;
    const getHref = (e: MouseEvent): string =>
      (e.target as HTMLAnchorElement).href;
    const openInNewTab = (url: string) => window.open(url, '_blank');

    const proceed = confirmLeave();
    if (!proceed) {
      preventDefault();
      return;
    }

    if (isModifiedClick(event)) {
      return; // Permite o comportamento padrão
    }

    preventDefault();
    openInNewTab(getHref(event));
  }
}
