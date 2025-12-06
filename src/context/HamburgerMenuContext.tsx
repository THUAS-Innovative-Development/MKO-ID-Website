import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";

type HamburgerMenuContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const HamburgerMenuContext = createContext<HamburgerMenuContextValue | undefined>(undefined);

export function HamburgerMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)"); 

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) close(); 
    };

    handleChange(mq);

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [close]);

  return (
    <HamburgerMenuContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
}

export function useHamburgerMenu() {
  const ctx = useContext(HamburgerMenuContext);
  if (!ctx) throw new Error("useHamburgerMenu must be used inside <HamburgerMenuProvider>");
  return ctx;
}
