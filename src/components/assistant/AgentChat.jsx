import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import AgentBubble from './AgentBubble';

const AGENT = 'prof_physchim';

const SUGGESTIONS = [
  'Fais-moi un quiz sur le circuit RC',
  'Explique-moi la 3ème loi de Kepler',
  'Quelles sont les formules du titrage ?',
  "Redémontre uC(t) = E(1 − e^(−t/τ))",
];

export default function AgentChat() {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);

  const startNew = async () => {
    const conv = await base44.agents.createConversation({
      agent_name: AGENT,
      metadata: { name: 'Révision Bac', description: 'Session avec PROF·X' },
    });
    localStorage.setItem('px_agent_conv', conv.id);
    setConversation(conv);
    setMessages([]);
  };

  useEffect(() => {
    const init = async () => {
      const savedId = localStorage.getItem('px_agent_conv');
      if (savedId) {
        try {
          const conv = await base44.agents.getConversation(savedId);
          setConversation(conv);
          setMessages(conv.messages || []);
          return;
        } catch {
          localStorage.removeItem('px_agent_conv');
        }
      }
      await startNew();
    };
    init();
  }, []);

  useEffect(() => {
    if (!conversation?.id) return;
    const unsubscribe = base44.agents.subscribeToConversation(conversation.id, (data) => {
      setMessages(data.messages || []);
    });
    return unsubscribe;
  }, [conversation?.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || !conversation || sending) return;
    setSending(true);
    setInput('');
    await base44.agents.addMessage(conversation, { role: 'user', content });
    setSending(false);
  };

  const lastMsg = messages[messages.length - 1];
  const isThinking = sending || (lastMsg && lastMsg.role === 'user');

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Header */}
      <div className="glass rounded-2xl p-4 mb-4 flex items-center justify-between gap-3 flex-wrap" style={{ border: '1px solid rgba(79,209,197,0.2)' }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center text-xl animate-float"
            style={{ background: 'linear-gradient(135deg, rgba(79,209,197,0.2), rgba(238,127,157,0.15))', border: '1px solid rgba(79,209,197,0.35)' }}>
            ⚛
          </div>
          <div>
            <div className="text-base font-bold gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>PROF·X</div>
            <div className="text-xs" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>Ton prof particulier IA · Physique-Chimie</div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <a href={base44.agents.getWhatsAppConnectURL(AGENT)} target="_blank" rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
            style={{ background: 'rgba(37,211,102,0.1)', color: '#25d366', border: '1px solid rgba(37,211,102,0.3)' }}>
            💬 WhatsApp
          </a>
          <a href={base44.agents.getTelegramConnectURL(AGENT)} target="_blank" rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
            style={{ background: 'rgba(0,136,204,0.12)', color: '#3aa9e0', border: '1px solid rgba(0,136,204,0.35)' }}>
            ✈️ Telegram
          </a>
          <button onClick={startNew}
            className="text-xs px-3 py-1.5 rounded-lg transition-all"
            style={{ color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
            ⟳ Nouvelle conversation
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 pb-4">
        {messages.length === 0 && (
          <div className="text-center pt-10">
            <div className="text-4xl mb-3">⚛</div>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
              Pose-moi une question sur n'importe quel chapitre, demande un quiz ou une démonstration !
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="text-xs px-3 py-2 rounded-xl transition-all glass glass-hover"
                  style={{ color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.25)' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => <AgentBubble key={i} message={m} />)}
        {isThinking && (
          <div className="flex items-center gap-2 text-xs px-2" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ background: '#4fd1c5' }} />
            PROF·X réfléchit...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="glass rounded-2xl p-2 flex gap-2" style={{ border: '1px solid rgba(79,209,197,0.2)' }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Pose ta question de physique-chimie..."
          rows={1}
          className="flex-1 bg-transparent resize-none px-3 py-2 text-sm outline-none"
          style={{ color: '#e2e8f0' }}
        />
        <button onClick={() => send()} disabled={!input.trim() || sending}
          className="px-4 py-2 rounded-xl font-semibold text-sm transition-all shrink-0"
          style={{
            background: input.trim() && !sending ? 'linear-gradient(135deg, #4fd1c5, #ee7f9d)' : 'rgba(255,255,255,0.05)',
            color: input.trim() && !sending ? '#0a0c22' : '#475569',
          }}>
          Envoyer ↑
        </button>
      </div>
    </div>
  );
}