'use client';
import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-[10px] text-zinc-500 flex gap-6">
      <div className="flex gap-2">
        <span className="text-red-600">●</span> 
        STATUS: <span className="text-emerald-500">ACTIVE</span>
      </div>
      <div>LOC: MARACAIBO_VNZL</div>
      <div>TME: {time}</div>
      <div className="hidden md:block">LATENCY: 24ms</div>
    </div>
  );
}