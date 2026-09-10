import { useEffect, useState } from "react";

/**
 * True only on devices with a fine pointer (mouse/trackpad) and enough
 * viewport width — used to gate the custom cursor to desktop.
 */
const QUERY = "(pointer: fine) and (min-width: 861px)";

export function useIsFinePointer(): boolean {
  const [isFine, setIsFine] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(QUERY);
    const handler = (e: MediaQueryListEvent) => setIsFine(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return isFine;
}
