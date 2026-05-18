import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ArrowNavContext = createContext(null);

function focusEntry(entry, { scroll = true } = {}) {
  entry.ref.current?.focus({ preventScroll: true });
  if (scroll) {
    entry.ref.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

export function ArrowNavProvider({ children }) {
  const registryRef = useRef(new Map());
  const orderRef = useRef(0);
  const initialFocusDone = useRef(false);
  const [focusedId, setFocusedId] = useState(null);
  const [registryVersion, bump] = useState(0);

  const register = useCallback((id, ref, onActivate) => {
    const order = orderRef.current;
    orderRef.current += 1;
    registryRef.current.set(id, { ref, onActivate, order });
    bump((n) => n + 1);
    setFocusedId((current) => {
      if (current !== null) return current;
      const sorted = [...registryRef.current.entries()].sort(
        (a, b) => a[1].order - b[1].order,
      );
      return sorted[0]?.[0] ?? null;
    });
    return () => {
      registryRef.current.delete(id);
      setFocusedId((current) => (current === id ? null : current));
      bump((n) => n + 1);
    };
  }, []);

  const getSortedEntries = useCallback(() => {
    return [...registryRef.current.entries()]
      .sort((a, b) => a[1].order - b[1].order)
      .map(([id, entry]) => ({ id, ...entry }));
  }, []);

  const focusById = useCallback((id) => {
    const entry = registryRef.current.get(id);
    if (!entry) return;
    setFocusedId(id);
    focusEntry(entry);
  }, []);

  useEffect(() => {
    if (initialFocusDone.current || !focusedId) return;

    const entry = registryRef.current.get(focusedId);
    if (!entry?.ref.current) return;

    initialFocusDone.current = true;
    requestAnimationFrame(() => focusEntry(entry, { scroll: false }));
  }, [focusedId, registryVersion]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      const entries = getSortedEntries();
      if (entries.length === 0) return;

      let activeIndex = entries.findIndex(
        (entry) => entry.ref.current === document.activeElement,
      );
      if (activeIndex === -1 && focusedId) {
        activeIndex = entries.findIndex((entry) => entry.id === focusedId);
      }

      if (activeIndex === -1) return;

      e.preventDefault();

      const delta = e.key === "ArrowDown" ? 1 : -1;
      const nextIndex = activeIndex + delta;
      if (nextIndex < 0 || nextIndex >= entries.length) return;

      focusById(entries[nextIndex].id);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusById, focusedId, getSortedEntries]);

  const value = {
    register,
    focusedId,
    setFocusedId,
    getSortedEntries,
  };

  return (
    <ArrowNavContext.Provider value={value}>{children}</ArrowNavContext.Provider>
  );
}

export function useArrowCard(id, { onActivate, enabled = true }) {
  const context = useContext(ArrowNavContext);
  const ref = useRef(null);
  const onActivateRef = useRef(onActivate);
  onActivateRef.current = onActivate;

  if (!context) {
    throw new Error("useArrowCard must be used within ArrowNavProvider");
  }

  const { register, focusedId, setFocusedId, getSortedEntries } = context;

  useEffect(() => {
    if (!enabled) return undefined;
    return register(id, ref, () => onActivateRef.current?.());
  }, [enabled, id, register]);

  const entries = getSortedEntries();
  const firstId = entries[0]?.id ?? null;
  const isFocused = focusedId === id;
  const isTabStop = enabled && (isFocused || (focusedId === null && id === firstId));

  const onFocus = useCallback(() => {
    if (enabled) setFocusedId(id);
  }, [enabled, id, setFocusedId]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onActivateRef.current?.();
      }
    },
    [],
  );

  return {
    ref,
    tabIndex: isTabStop ? 0 : -1,
    isFocused,
    onFocus,
    onKeyDown,
    className: "arrow-nav-card",
  };
}
