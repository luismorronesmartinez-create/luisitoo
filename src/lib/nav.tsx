import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { PageId } from '@/data/site';

export interface NavContextValue {
  page: PageId;
  navigate: (page: PageId) => void;
}

export const NavContext = createContext<NavContextValue>({
  page: 'home',
  navigate: () => {},
});

export function useNav(): NavContextValue {
  return useContext(NavContext);
}

export function NavProvider({ value, children }: { value: NavContextValue; children: ReactNode }) {
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
