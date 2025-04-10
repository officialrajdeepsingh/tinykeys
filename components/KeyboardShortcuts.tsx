"use client";

import { useEffect } from "react";
import { tinykeys } from "tinykeys";
import confetti from "canvas-confetti";

export function KeyboardShortcuts() {
  useEffect(() => {
    function unsubscribe(_window: Window & typeof globalThis) {
      tinykeys(_window, {
        "Shift+c": () => {
          confetti({
            particleCount: 100,
            spread: 170,
            origin: { y: 0.6 },
          });
        },
      });
    }

    return () => {
      const _window = window;
      const _document = document;

      if (_document && _window) {
        unsubscribe(_window);
      }
    };
  }, []);
  return null;
}
