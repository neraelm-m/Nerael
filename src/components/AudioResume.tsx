'use client';

import { useEffect } from 'react';
import { Howler } from 'howler';

export default function AudioResume() {
  useEffect(() => {
    const resume = () => {
      try {
        if ((Howler as any).ctx && (Howler as any).ctx.state === 'suspended') {
          (Howler as any).ctx.resume();
        }
      } catch (e) {
        // ignore
      }
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('touchstart', resume);
    };

    window.addEventListener('pointerdown', resume);
    window.addEventListener('touchstart', resume);

    return () => {
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('touchstart', resume);
    };
  }, []);

  return null;
}
