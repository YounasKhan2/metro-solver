"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem, AnimationConfig } from "lottie-web";

export type LottieProps = {
  src: string; // public URL to JSON
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  tint?: string; // optional hex/css color to force-fill strokes/fills/gradient stops
};

export default function Lottie({ src, className, loop = true, autoplay = true, tint }: LottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;
    let mounted = true;
    (async () => {
      const lottie = (await import("lottie-web")).default;
      if (!mounted || !containerRef.current) return;
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path: src,
      } as unknown as AnimationConfig);

      const applyTint = () => {
        if (!tint || !containerRef.current) return;
        const svg = containerRef.current.querySelector("svg");
        if (!svg) return;
        // Update strokes and fills
        svg.querySelectorAll("[stroke]").forEach((el) => {
          const node = el as SVGElement;
          node.setAttribute("stroke", tint);
        });
        svg.querySelectorAll("[fill]").forEach((el) => {
          const node = el as SVGElement;
          const fill = node.getAttribute("fill");
          if (fill && fill !== "none") node.setAttribute("fill", tint);
        });
        // Gradient stops
        svg.querySelectorAll("stop").forEach((stop) => {
          (stop as SVGStopElement).setAttribute("stop-color", tint);
        });
      };

      // Try immediately and on DOM loaded
      anim.addEventListener("DOMLoaded", applyTint as any);
      // Also attempt after a tick in case of async renderers
      setTimeout(applyTint, 50);
    })();
    return () => {
      mounted = false;
      try {
        anim?.destroy();
      } catch {}
    };
  }, [src, loop, autoplay, tint]);

  return <div ref={containerRef} className={className} aria-hidden />;
}
