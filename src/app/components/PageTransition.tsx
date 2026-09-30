"use client";

import { ViewTransition, type ReactNode } from "react";
import { useEffect } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".site");
    const supportsRouteTransitions = "startViewTransition" in document && CSS.supports("view-transition-class: page-swap");
    if (!root || supportsRouteTransitions || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("route-fallback-enter");
    return () => root.classList.remove("route-fallback-enter");
  }, []);

  return <ViewTransition default="page-swap">{children}</ViewTransition>;
}
