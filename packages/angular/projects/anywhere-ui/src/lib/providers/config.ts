import { Injectable, InjectionToken } from '@angular/core';
import { Config as CoreConfig, AnywhereUIConfig } from '@anywhere-ui/core';

// import { IonicWindow } from '../types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Config {
  get(key: keyof AnywhereUIConfig, fallback?: any): any {
    const c = getConfig();
    if (c) {
      return c.get(key, fallback);
    }
    return null;
  }

  getBoolean(key: keyof AnywhereUIConfig, fallback?: boolean): boolean {
    const c = getConfig();
    if (c) {
      return c.getBoolean(key, fallback);
    }
    return false;
  }

  getNumber(key: keyof AnywhereUIConfig, fallback?: number): number {
    const c = getConfig();
    if (c) {
      return c.getNumber(key, fallback);
    }
    return 0;
  }
}

export const ConfigToken = new InjectionToken<any>('USERCONFIG');

const getConfig = (): CoreConfig | null => {
  if (typeof (window as any) !== 'undefined') {
    const AnywhereUI = (window as any).AnywhereUI;
    if (AnywhereUI?.config) {
      return AnywhereUI.config;
    }
  }
  return null;
};
