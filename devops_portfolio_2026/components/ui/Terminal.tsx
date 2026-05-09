'use client';
import { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    'Initializing DevOps Core...',
    'Loading CI/CD Pipelines...',
    'Ready. Type "help" to begin.'
  ]);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let res = '';
    
    if (cmd === 'help') res = 'Commands: about, skills, status, clear';
    else if (cmd === 'about') res = 'Senior Platform Engineer with 8+ years in Cloud Native Tech.';
    else if (cmd === 'status') res = 'Clusters: 12 Healthy | Deployments: 45 Active | Error Rate: 0.001%';
    else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
    else res = `Command not recognized: ${cmd}`;

    setHistory([...history, `> ${input}`, res]);
    setInput('');
  };

  return (
    <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-4 font-mono text-[13px] h-full flex flex-col backdrop-blur-xl shadow-2xl">
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar pr-2">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-cyan-400' : 'text-gray-400'}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="mt-4 flex gap-2 text-cyan-500 border-t border-white/5 pt-4">
        <span>root@devops:~#</span>
        <input 
          className="bg-transparent outline-none flex-1 text-white" 
          value={input} 
          onChange={e => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}