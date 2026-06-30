'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  ArrowUpRight, ShieldCheck, Zap, Layers, Users, Database, 
  MapPin, Lock, Unlock, CreditCard, ShoppingBag, Leaf, 
  Moon, Sun, CheckCircle2, ChevronRight, ArrowRight, 
  Activity, Plus, LayoutDashboard, Wallet, Key, CircleDot, 
  Terminal, Box, ShieldAlert, Cpu, Info, Check, Filter, ShoppingCart,
  Code2, Globe, Server, X, GitMerge, Fingerprint, Network, HardDrive, Share2, Search
} from 'lucide-react'

// ============================================================================
// 1. HIGH-FIDELITY MICRO-INTERFACES
// ============================================================================

// --- MasterClass Real Estate ---
const MasterClassInterface = () => {
  const [credits, setCredits] = useState(150);
  const [unlocked, setUnlocked] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState<'ledger' | 'network' | 'wallet'>('ledger');
  
  const properties = [
    { id: 1, ref: "APT-882", price: "$2,500", area: "East Legon", yield: "8.4%", status: "Active" },
    { id: 2, ref: "VIL-091", price: "$4,100", area: "Cantonments", yield: "6.2%", status: "Hot" },
    { id: 3, ref: "STU-441", price: "$1,200", area: "Osu", yield: "9.1%", status: "Active" },
  ];

  const handleUnlock = (id: number) => {
    if (!unlocked[id] && credits >= 10) {
      setUnlocked(prev => ({ ...prev, [id]: true }));
      setCredits(prev => prev - 10);
    }
  };

  return (
    <div className="w-full h-full bg-[#030712] rounded-t-2xl border-x border-t border-blue-500/20 flex font-sans overflow-hidden select-none shadow-2xl relative">
      <div className="w-12 md:w-16 border-r border-white/5 bg-[#0a0f1c] flex flex-col items-center py-4 gap-6 z-10">
        <button onClick={() => setActiveTab('ledger')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeTab === 'ledger' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-gray-600 hover:bg-white/5 hover:text-gray-300'}`}><LayoutDashboard size={14}/></button>
        <button onClick={() => setActiveTab('network')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeTab === 'network' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-gray-600 hover:bg-white/5 hover:text-gray-300'}`}><Users size={14}/></button>
        <button onClick={() => setActiveTab('wallet')} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeTab === 'wallet' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-gray-600 hover:bg-white/5 hover:text-gray-300'}`}><Wallet size={14}/></button>
      </div>
      
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <div className="h-12 border-b border-white/5 flex justify-between items-center px-4 bg-white/[0.01]">
          <span className="font-semibold text-gray-300 text-xs tracking-wide capitalize">{activeTab} Interface</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded text-blue-400 text-[10px] font-mono font-bold shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              <CreditCard size={12} /> {credits} CR
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-4 bg-gradient-to-b from-[#030712] to-[#0a0f1c] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'ledger' && (
              <motion.div key="ledger" initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} className="flex flex-col gap-2">
                <div className="grid grid-cols-5 text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 px-2">
                  <div className="col-span-2">Asset / Area</div><div>Yield</div><div>Status</div><div className="text-right">Action</div>
                </div>
                {properties.map((prop) => (
                  <div key={prop.id} className="grid grid-cols-5 items-center bg-white/[0.02] border border-white/5 p-2 rounded-lg hover:bg-white/[0.06] hover:border-white/10 transition-all">
                    <div className="col-span-2 flex flex-col">
                      <span className="text-gray-200 text-xs font-bold">{prop.ref}</span>
                      <span className="text-gray-500 text-[10px] flex items-center gap-1"><MapPin size={8}/> {prop.area}</span>
                    </div>
                    <div className="text-gray-300 font-mono text-[10px]">{prop.yield}</div>
                    <div><span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${prop.status === 'Hot' ? 'bg-orange-500/10 text-orange-400' : 'bg-gray-500/10 text-gray-400'}`}>{prop.status}</span></div>
                    <div className="flex justify-end">
                      <button onClick={() => handleUnlock(prop.id)} className={`px-2 py-1.5 rounded-md flex items-center gap-1.5 transition-all text-[9px] font-bold ${unlocked[prop.id] ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-blue-600 text-white hover:bg-blue-500"}`}>
                        {unlocked[prop.id] ? <><Unlock size={10}/> OPEN</> : <><Key size={10}/> SUB</>}
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            {activeTab === 'network' && (
              <motion.div key="network" initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} className="flex flex-col gap-3">
                {[ {name: "Kwame Osei", rep: "98%"}, {name: "Sarah Mensah", rep: "95%"} ].map((agent, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold text-xs">{agent.name.charAt(0)}</div>
                      <div>
                        <div className="text-gray-200 text-xs font-bold flex items-center gap-1">{agent.name} <ShieldCheck size={10} className="text-emerald-400"/></div>
                        <div className="text-gray-500 text-[10px]">Verified Agent</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase">Trust Score</div>
                      <div className="text-blue-400 font-mono font-bold text-xs">{agent.rep}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            {activeTab === 'wallet' && (
              <motion.div key="wallet" initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} className="flex flex-col h-full">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 mb-4 shadow-inner">
                  <div className="text-[10px] text-blue-300 uppercase tracking-widest mb-1">Available Balance</div>
                  <div className="text-3xl font-bold text-white font-mono">{credits} <span className="text-sm text-blue-400">CR</span></div>
                </div>
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">Recent Activity</div>
                <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs text-gray-300">
                  <span className="flex items-center gap-2"><Unlock size={12} className="text-gray-500"/> Unlocked APT-882</span>
                  <span className="text-red-400 font-mono">-10 CR</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-gray-300">
                  <span className="flex items-center gap-2"><Plus size={12} className="text-emerald-500"/> Account Top-up</span>
                  <span className="text-emerald-400 font-mono">+100 CR</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// --- Crystal Hospital Ecosystem ---
const CrystalInterface = () => {
  const [activeRegimen, setActiveRegimen] = useState<'morning'|'night'>('morning');
  const [cardView, setCardView] = useState<'overview'|'details'>('overview');

  return (
    <div className="w-full h-full bg-[#020617] rounded-t-2xl border-x border-t border-emerald-500/20 flex flex-col font-sans overflow-hidden select-none relative shadow-2xl">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-600/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 z-10 bg-black/20">
        <span className="font-bold text-white text-xs tracking-widest uppercase flex items-center gap-2"><Activity size={12} className="text-emerald-400"/> HMS Diagnostic Engine</span>
        <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
          <button onClick={() => {setActiveRegimen('morning'); setCardView('overview');}} className={`px-3 py-1 text-[10px] font-bold rounded transition-colors flex items-center gap-1 ${activeRegimen === 'morning' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-500 hover:text-gray-300 border border-transparent'}`}><Sun size={10}/> AM</button>
          <button onClick={() => {setActiveRegimen('night'); setCardView('overview');}} className={`px-3 py-1 text-[10px] font-bold rounded transition-colors flex items-center gap-1 ${activeRegimen === 'night' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-gray-500 hover:text-gray-300 border border-transparent'}`}><Moon size={10}/> PM</button>
        </div>
      </div>

      <div className="flex-1 flex p-4 gap-6 z-10">
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative bg-black/20">
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-white/5"></div>
            </div>
            <motion.div 
              animate={{ 
                clipPath: activeRegimen === 'morning' ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" : "polygon(50% 15%, 85% 40%, 75% 90%, 25% 90%, 15% 40%)",
                backgroundColor: activeRegimen === 'morning' ? "rgba(16, 185, 129, 0.2)" : "rgba(99, 102, 241, 0.2)",
                borderColor: activeRegimen === 'morning' ? "rgba(16, 185, 129, 0.8)" : "rgba(99, 102, 241, 0.8)"
              }}
              className="absolute inset-4 border backdrop-blur-md transition-all duration-700"
            />
            <span className="absolute -top-4 text-[9px] font-bold text-gray-500">Energy</span>
            <span className="absolute -bottom-4 text-[9px] font-bold text-gray-500">Rest</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeRegimen}
              initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              className="bg-white/[0.02] border border-white/10 backdrop-blur-md p-4 rounded-xl relative overflow-hidden flex flex-col h-full justify-between shadow-lg"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 blur-3xl rounded-full ${activeRegimen === 'morning' ? 'bg-emerald-500/40' : 'bg-indigo-500/40'}`}></div>
              
              <div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <div className="text-sm font-bold text-white">{activeRegimen === 'morning' ? 'Awake Formula' : 'Deep Rest Tea'}</div>
                  <div className="text-[10px] font-mono text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">{activeRegimen === 'morning' ? '$34' : '$28'}</div>
                </div>
                <div className="flex gap-3 border-b border-white/10 mb-3 relative z-10">
                  <button onClick={() => setCardView('overview')} className={`pb-1 text-[9px] font-bold uppercase tracking-wider transition-colors ${cardView === 'overview' ? 'text-white border-b border-white' : 'text-gray-600'}`}>Overview</button>
                  <button onClick={() => setCardView('details')} className={`pb-1 text-[9px] font-bold uppercase tracking-wider transition-colors ${cardView === 'details' ? 'text-white border-b border-white' : 'text-gray-600'}`}>Ingredients</button>
                </div>
                <div className="h-12 relative z-10">
                  {cardView === 'overview' ? (
                    <p className="text-[10px] text-gray-400 leading-relaxed">
                      {activeRegimen === 'morning' ? 'A precision blend designed to eliminate brain fog and sustain focus without the afternoon crash.' : 'Clinically dosed adaptogens to lower cortisol and induce restorative REM sleep cycles.'}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {activeRegimen === 'morning' ? (
                        <><span className="text-[9px] text-gray-300 flex items-center gap-1"><Check size={10} className="text-emerald-500"/> L-Theanine (200mg)</span><span className="text-[9px] text-gray-300 flex items-center gap-1"><Check size={10} className="text-emerald-500"/> Organic Matcha</span></>
                      ) : (
                        <><span className="text-[9px] text-gray-300 flex items-center gap-1"><Check size={10} className="text-indigo-500"/> Ashwagandha (300mg)</span><span className="text-[9px] text-gray-300 flex items-center gap-1"><Check size={10} className="text-indigo-500"/> Mag. Glycinate</span></>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button className={`w-full py-2 rounded text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors relative z-10 mt-3 ${activeRegimen === 'morning' ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-indigo-500 text-white hover:bg-indigo-400'}`}>
                <Activity size={12}/> SYNC WITH HMS
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// --- Apex Motors Auto Dealership ---
const AutoInterface = () => {
  const [model, setModel] = useState<'gt'|'track'|'stealth'>('gt');
  const [reserved, setReserved] = useState(false);

  const trims = {
    gt: { name: 'GT Aero', price: '$142,000', power: '620 HP', speed: '2.9s', color: '#f4f4f5', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80' },
    track: { name: 'Performante', price: '$189,500', power: '740 HP', speed: '2.5s', color: '#ea580c', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80' },
    stealth: { name: 'Nightshade', price: '$165,000', power: '680 HP', speed: '2.7s', color: '#18181b', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80' }
  };

  return (
    <div className="w-full h-full bg-[#09090b] rounded-t-2xl border-x border-t border-orange-500/20 flex flex-col font-sans overflow-hidden select-none relative shadow-2xl">
      <div className="h-12 px-6 flex justify-between items-center z-10 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <span className="font-bold text-white text-xs tracking-wider">APEX <span className="text-orange-500">MOTORS</span></span>
        <div className="flex gap-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
          <span className="text-white cursor-pointer border-b border-white pb-1">Build</span>
          <span className="hover:text-white transition-colors cursor-pointer pb-1">Specs</span>
        </div>
      </div>

      <div className="flex-1 flex z-10 relative bg-[#09090b]">
        <div className="w-3/5 relative flex flex-col items-center justify-center border-r border-white/5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img 
              key={model} src={trims[model].img}
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80" alt="Car Preview"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10"></div>
          <div className="absolute top-4 left-4 z-20 text-[9px] text-white/70 font-mono bg-black/40 px-2 py-1 rounded backdrop-blur">VIN: 9A8B7C6...</div>
        </div>

        <div className="w-2/5 bg-[#0a0a0a]/90 backdrop-blur-xl p-5 flex flex-col justify-between z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
          <div>
            <div className="text-[9px] text-orange-500 font-bold tracking-widest mb-1 uppercase">Select Trim</div>
            <div className="text-xl font-bold text-white leading-tight mb-1">{trims[model].name}</div>
            <div className="text-xs text-gray-400 font-mono mb-6">{trims[model].price}</div>
            
            <div className="flex gap-3 mb-6">
              {(Object.keys(trims) as Array<keyof typeof trims>).map((t) => (
                <div 
                  key={t} onClick={() => {setModel(t as any); setReserved(false);}}
                  className={`w-6 h-6 rounded-full cursor-pointer transition-all flex items-center justify-center shadow-lg ${model === t ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-[#0a0a0a]' : 'opacity-60 hover:opacity-100'}`}
                  style={{ backgroundColor: trims[t as keyof typeof trims].color, border: t === 'stealth' ? '1px solid #333' : 'none' }}
                >
                  {model === t && <Check size={12} className={t === 'gt' ? 'text-black' : 'text-white'}/>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
              <div className="border-l-2 border-orange-500 pl-2">
                <div className="text-[8px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Power</div>
                <div className="text-[11px] text-white font-mono font-bold">{trims[model].power}</div>
              </div>
              <div className="border-l-2 border-orange-500 pl-2">
                <div className="text-[8px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">0-60 MPH</div>
                <div className="text-[11px] text-white font-mono font-bold">{trims[model].speed}</div>
              </div>
            </div>
          </div>

          <button onClick={() => setReserved(true)} disabled={reserved} className={`w-full py-2.5 rounded font-bold text-[10px] transition-all flex items-center justify-center gap-2 ${reserved ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]'}`}>
            {reserved ? <><CheckCircle2 size={12}/> HOLD PLACED</> : 'SECURE ALLOCATION'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Mini Mart ERP ---
const ERPInterface = () => {
  const [activeCategory, setActiveCategory] = useState<'All'|'Fresh'|'Pantry'>('All');
  const [cart, setCart] = useState<{name: string, price: number}[]>([]);
  
  const allInventory = [
    { name: "Artisan Bread", price: 4.50, sku: "BK-01", cat: "Fresh" },
    { name: "Organic Milk", price: 3.20, sku: "DY-02", cat: "Fresh" },
    { name: "Coffee Beans", price: 12.00, sku: "CF-99", cat: "Pantry" },
    { name: "Olive Oil", price: 8.50, sku: "PT-14", cat: "Pantry" },
  ];

  const inventory = activeCategory === 'All' ? allInventory : allInventory.filter(i => i.cat === activeCategory);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full h-full bg-[#1e1b4b] rounded-t-2xl border-x border-t border-purple-500/20 flex font-mono text-[10px] overflow-hidden select-none shadow-2xl">
      <div className="w-[55%] border-r border-purple-500/20 bg-[#110e2d] p-3 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-3 relative z-10">
          <div className="flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase">
            <Database size={12} /> Live Stock
          </div>
          <div className="flex gap-1 bg-black/30 p-1 rounded border border-white/5">
            {['All', 'Fresh', 'Pantry'].map(c => (
              <button key={c} onClick={() => setActiveCategory(c as any)} className={`px-2 py-0.5 text-[8px] rounded transition-colors ${activeCategory === c ? 'bg-purple-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}>{c}</button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 overflow-hidden relative z-10">
          <AnimatePresence mode="popLayout">
            {inventory.map((item) => (
              <motion.div key={item.sku} initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.95}} className="flex justify-between items-center bg-white/5 border border-white/5 p-2 rounded hover:bg-purple-500/20 transition-colors group">
                <div>
                  <div className="text-gray-200 font-bold">{item.name}</div>
                  <div className="text-[8px] text-gray-500">{item.sku} • ${item.price.toFixed(2)}</div>
                </div>
                <button onClick={() => setCart([...cart, item])} className="w-6 h-6 bg-purple-600/50 text-white rounded flex items-center justify-center hover:bg-purple-500 border border-purple-500/50 active:scale-90 transition-all">
                  <Plus size={12} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-[45%] bg-[#0a081a] p-3 flex flex-col relative z-10">
        <div className="text-gray-400 font-bold mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5"><Terminal size={10}/> POS_1</span>
          <span className="text-[8px] text-emerald-400 flex items-center gap-1"><CircleDot size={6} className="animate-pulse"/> ONLINE</span>
        </div>
        
        <div className="flex-1 bg-[#110e2d] rounded border border-white/10 p-2 overflow-y-auto flex flex-col gap-1 mb-2 shadow-inner">
          {cart.length === 0 ? (
            <div className="text-gray-600 text-[9px] text-center mt-4 flex flex-col items-center gap-2">
              <ShoppingCart size={16} className="opacity-50"/> Awaiting scan...
            </div>
          ) : (
            cart.map((c, i) => (
              <motion.div initial={{opacity: 0, x:-5}} animate={{opacity: 1, x:0}} key={i} className="flex justify-between text-gray-300 border-b border-white/5 pb-1">
                <span className="truncate w-2/3">{c.name}</span>
                <span>${c.price.toFixed(2)}</span>
              </motion.div>
            ))
          )}
        </div>

        <div className="bg-purple-900/20 border border-purple-500/30 p-2 rounded mb-2">
          <div className="flex justify-between text-white font-bold text-xs"><span>TOTAL</span><span className="text-purple-400">${total.toFixed(2)}</span></div>
        </div>

        <button onClick={() => setCart([])} disabled={cart.length === 0} className="w-full bg-emerald-500 disabled:bg-gray-800 disabled:text-gray-600 text-black py-2 rounded font-bold transition-all active:scale-95 flex justify-center items-center gap-1">
          {cart.length === 0 ? 'READY' : `CHARGE $${total.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
};


// ============================================================================
// 2. HIGH-DETAIL ARCHITECTURE LOGIC & DATA MAPS
// ============================================================================

type ArchitectureNode = { id: string; label: string; icon: React.ReactNode; x: number; y: number; color?: string }
type ArchitecturePath = { d: string; color?: string; speed?: number; animated?: boolean }

type PortfolioProject = {
  id: string; title: string; type: string; description: string; tech: string[];
  metrics: { label: string; value: string; icon: React.ReactNode }[];
  ui: React.ReactNode; glow: string; borderHover: string; buttonColor: string;
  problem: string; solution: string;
  link?: string;
  nodes: ArchitectureNode[]; paths: ArchitecturePath[];
}

// Canvas size is 800x500
const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "masterclass", title: "MasterClass", type: "Platform Architecture",
    description: "Prioritizing complete market transparency, we stripped away renter friction with a zero-login browsing experience, while deploying a secure, subscription-based ledger portal for verified agents.",
    link: "https://www.masterclass.com/",
    tech: ["Next.js", "Edge Caching", "JWT Auth", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Verified Agents", value: "100%", icon: <ShieldCheck size={14} className="text-blue-400" /> },
      { label: "Renter Friction", value: "Zero", icon: <Users size={14} className="text-blue-400" /> }
    ],
    ui: <MasterClassInterface />, glow: "from-blue-500/20 to-indigo-500/20", borderHover: "hover:border-blue-500/30", buttonColor: "bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white",
    problem: "Standard real estate platforms force renters into mandatory logins and bloated map searches, causing massive drop-offs before a viewing is ever booked.",
    solution: "We engineered a headless architecture emphasizing transparency. Renters browse instantly via edge-cached nodes, while agents operate on a deeply secure, subscription-based ledger backend that updates property states in real-time.",
    nodes: [
      { id: 'ui', label: 'Client UI', icon: <Globe size={16}/>, x: 100, y: 250, color: '#3b82f6' },
      { id: 'cdn', label: 'Edge Router', icon: <Network size={16}/>, x: 250, y: 250, color: '#6366f1' },
      { id: 'gateway', label: 'API Gateway', icon: <Share2 size={16}/>, x: 400, y: 250, color: '#8b5cf6' },
      { id: 'auth', label: 'Auth Provider', icon: <Fingerprint size={16}/>, x: 550, y: 120, color: '#eab308' },
      { id: 'search', label: 'Search Engine', icon: <Search size={16}/>, x: 550, y: 380, color: '#3b82f6' },
      { id: 'db', label: 'PostgreSQL DB', icon: <Database size={16}/>, x: 700, y: 120, color: '#10b981' },
      { id: 'cache', label: 'Redis Cache', icon: <HardDrive size={16}/>, x: 700, y: 380, color: '#ef4444' },
    ],
    paths: [
      { d: "M 124 250 L 226 250", color: "#6366f1", animated: true }, 
      { d: "M 274 250 L 376 250", color: "#8b5cf6", animated: true }, 
      { d: "M 420 230 Q 480 120 526 120", color: "#eab308", animated: true }, 
      { d: "M 420 270 Q 480 380 526 380", color: "#3b82f6", animated: true }, 
      { d: "M 574 120 L 676 120", color: "#10b981", animated: true },
      { d: "M 574 380 L 676 380", color: "#ef4444", animated: true },
      { d: "M 700 144 L 700 356", color: "#3b82f6", animated: true, speed: 2 },
    ]
  },
  {
    id: "crystal", title: "Crystal Hospital", type: "Health & E-Commerce",
    description: "A robust wellness ecosystem fully integrated with core Health Management System (HMS) software. State-driven diagnostic funnels guide patients from symptom to personalized regimen instantly.",
    tech: ["React", "State Logic", "Stripe API", "Webhooks", "HMS Logic"],
    metrics: [
      { label: "Journey Flow", value: "Seamless", icon: <Zap size={14} className="text-emerald-400" /> },
      { label: "Data Routing", value: "Instant", icon: <Layers size={14} className="text-emerald-400" /> }
    ],
    ui: <CrystalInterface />, glow: "from-emerald-500/20 to-teal-500/20", borderHover: "hover:border-emerald-500/30", buttonColor: "bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600 hover:text-white",
    problem: "Multi-vertical wellness brands suffer from fragmented user journeys. Users get lost trying to find the right regimen, leading to high cart abandonment.",
    solution: "Instead of a standalone site, we deployed a custom frontend fully integrated with HMS software. A state-driven diagnostic funnel dynamically updates based on user input, routing data instantly through the checkout pipeline.",
    nodes: [
      { id: 'funnel', label: 'Diagnostic UI', icon: <Globe size={16}/>, x: 100, y: 250, color: '#10b981' },
      { id: 'engine', label: 'State Engine', icon: <Activity size={16}/>, x: 300, y: 250, color: '#14b8a6' },
      { id: 'pay', label: 'Payment API', icon: <CreditCard size={16}/>, x: 500, y: 150, color: '#0ea5e9' },
      { id: 'db', label: 'Regimen DB', icon: <Database size={16}/>, x: 500, y: 350, color: '#8b5cf6' },
      { id: 'webhook', label: 'HMS Fulfillment', icon: <Network size={16}/>, x: 700, y: 150, color: '#f59e0b' },
    ],
    paths: [
      { d: "M 124 250 L 276 250", color: "#14b8a6", animated: true },
      { d: "M 320 235 Q 410 150 476 150", color: "#0ea5e9", animated: true },
      { d: "M 320 265 Q 410 350 476 350", color: "#8b5cf6", animated: true },
      { d: "M 524 150 L 676 150", color: "#f59e0b", animated: true },
    ]
  },
  {
    id: "minimart", title: "Mini Mart ERP", type: "Business Automation",
    description: "The operational brain of physical retail. A unified dashboard that marries a live POS terminal with real-time inventory deduction and automated accounting logic.",
    link: "https://www.vinkomtech.com/",
    tech: ["Live Event Bus", "Webhooks", "Custom POS API", "Financial Ledger"],
    metrics: [
      { label: "Data Sync", value: "Real-time", icon: <Database size={14} className="text-purple-400" /> },
      { label: "System", value: "Automated", icon: <Layers size={14} className="text-purple-400" /> }
    ],
    ui: <ERPInterface />, glow: "from-purple-500/20 to-fuchsia-500/20", borderHover: "hover:border-purple-500/30", buttonColor: "bg-purple-600/10 text-purple-400 hover:bg-purple-600 hover:text-white",
    problem: "Physical retail stores struggle with disjointed systems—the cash register doesn't talk to the inventory shelf, causing stockouts and accounting nightmares.",
    solution: "We engineered an event-driven pipeline. Every sale made on the POS fires webhooks through a central message broker, instantly deducting inventory and updating the financial ledger asynchronously.",
    nodes: [
      { id: 'pos', label: 'Retail POS', icon: <CreditCard size={16}/>, x: 100, y: 150, color: '#a855f7' },
      { id: 'web', label: 'Admin Web', icon: <Globe size={16}/>, x: 100, y: 350, color: '#a855f7' },
      { id: 'broker', label: 'Message Broker', icon: <Network size={16}/>, x: 300, y: 250, color: '#ec4899' },
      { id: 'inv', label: 'Inventory Svc', icon: <Box size={16}/>, x: 500, y: 150, color: '#8b5cf6' },
      { id: 'ledger', label: 'Accounting Svc', icon: <GitMerge size={16}/>, x: 500, y: 350, color: '#eab308' },
      { id: 'db1', label: 'Stock DB', icon: <Database size={16}/>, x: 700, y: 150, color: '#10b981' },
      { id: 'db2', label: 'Ledger DB', icon: <HardDrive size={16}/>, x: 700, y: 350, color: '#3b82f6' },
    ],
    paths: [
      { d: "M 124 150 Q 200 150 280 235", color: "#a855f7", animated: true },
      { d: "M 124 350 Q 200 350 280 265", color: "#a855f7", animated: true },
      { d: "M 320 235 Q 400 150 476 150", color: "#ec4899", animated: true, speed: 0.8 },
      { d: "M 320 265 Q 400 350 476 350", color: "#ec4899", animated: true, speed: 0.8 },
      { d: "M 524 150 L 676 150", color: "#10b981", animated: true },
      { d: "M 524 350 L 676 350", color: "#3b82f6", animated: true },
    ]
  },
  {
    id: "apex", title: "Apex Auto Dealership", type: "Web Application",
    description: "A digital showroom engineered for visual dominance. We utilized edge routing and aggressive caching to deliver high-resolution media instantly, driving immediate lead capture.",
    tech: ["Next.js", "Edge Cache", "Global CDN", "CRM Sync"],
    metrics: [
      { label: "Performance", value: "98/100", icon: <Zap size={14} className="text-orange-400" /> },
      { label: "Lead Capture", value: "< 1s", icon: <Users size={14} className="text-orange-400" /> }
    ],
    ui: <AutoInterface />, glow: "from-orange-500/20 to-amber-500/20", borderHover: "hover:border-orange-500/30", buttonColor: "bg-orange-600/10 text-orange-400 hover:bg-orange-600 hover:text-white",
    problem: "Showcasing high-fidelity vehicle renders traditionally causes severe website bloat. Slow load times kill impulse purchases and lead capture.",
    solution: "We utilized a global CDN and edge routing to preload 4K assets. The configurator runs entirely client-side, ensuring sub-second response times when swapping trims and colors.",
    nodes: [
      { id: 'cdn', label: 'Global CDN', icon: <Server size={16}/>, x: 100, y: 150, color: '#f97316' },
      { id: 'ui', label: 'Configurator', icon: <Globe size={16}/>, x: 100, y: 350, color: '#f97316' },
      { id: 'router', label: 'Edge Router', icon: <Activity size={16}/>, x: 350, y: 250, color: '#eab308' },
      { id: 'crm', label: 'Dealer CRM', icon: <Users size={16}/>, x: 600, y: 250, color: '#3b82f6' },
    ],
    paths: [
      { d: "M 124 150 Q 240 150 328 235", color: "#eab308", animated: true },
      { d: "M 124 350 Q 240 350 328 265", color: "#f97316", animated: false },
      { d: "M 374 250 L 576 250", color: "#3b82f6", animated: true },
    ]
  }
]


// ============================================================================
// 3. THE ADVANCED ARCHITECTURE EXPLORER MODAL
// ============================================================================

function ArchitectureModal({ project, onClose }: { project: PortfolioProject, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-[#020408]/90 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        initial={{ y: 50, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#060913] border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        {/* LEFT PANEL: Strategy & Execution */}
        <div className="w-full lg:w-[35%] p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-[#050812] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <Cpu size={14} className={project.buttonColor.split(' ')[1]} />
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Architecture Brief</div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
            
            {project.link && project.link !== "#" && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-max px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${project.buttonColor}`}
              >
                Launch Live <ArrowUpRight size={14} />
              </a>
            )}
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500/50 rounded-full"></div>
            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">The Bottleneck</h4>
            <p className="text-sm text-gray-300 leading-relaxed pl-4">{project.problem}</p>
          </div>

          <div className="mb-8 relative">
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full ${project.buttonColor.split(' ')[0].replace('bg-', 'bg-').replace('/10', '')}`}></div>
            <h4 className={`text-[11px] font-bold uppercase tracking-wider mb-2 pl-4 ${project.buttonColor.split(' ')[1]}`}>The CodeCraft Solution</h4>
            <p className="text-sm text-gray-300 leading-relaxed pl-4">{project.solution}</p>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-4">Core Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-mono font-medium text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: The Deep Tech Interactive Graph */}
        <div className="w-full lg:w-[65%] relative bg-[#020408] overflow-hidden min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-4">
          
          {/* Architecture Zones (Background Vertical Columns) */}
          <div className="absolute inset-0 flex pointer-events-none">
            <div className="w-1/3 border-r border-white/5 bg-gradient-to-r from-transparent to-white/[0.01] relative">
              <div className="absolute bottom-4 left-6 text-[9px] font-mono font-bold tracking-widest text-white/20 uppercase">Client / Edge Layer</div>
            </div>
            <div className="w-1/3 border-r border-white/5 bg-gradient-to-r from-transparent to-white/[0.01] relative">
              <div className="absolute bottom-4 left-6 text-[9px] font-mono font-bold tracking-widest text-white/20 uppercase">Processing Engine</div>
            </div>
            <div className="w-1/3 relative">
              <div className="absolute bottom-4 left-6 text-[9px] font-mono font-bold tracking-widest text-white/20 uppercase">Secure Data Layer</div>
            </div>
          </div>

          {/* Radar Scanning Line */}
          <motion.div 
            animate={{ left: ['-20%', '120%'] }} 
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent pointer-events-none z-0"
            style={{ boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
          />

          {/* Grid & Vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(2,4,8,1)] pointer-events-none z-10"></div>

          {/* MASTER COORDINATE SYSTEM: Locks SVG and HTML Nodes in perfect sync */}
          <div className="relative w-full max-w-[800px] aspect-[8/5] z-20">
            
            {/* SVG Data Flow Engine */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 800 500">
              {/* Static Base Tracks */}
              {project.paths.map((path, i) => (
                <path key={`static-${i}`} d={path.d} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeLinecap="round" />
              ))}
              
              {/* Animated Data Packets */}
              {project.paths.map((path, i) => path.animated && (
                <motion.path 
                  key={`animated-${i}`} 
                  d={path.d} 
                  fill="none" 
                  stroke={path.color || "#3b82f6"} 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="6 24" 
                  animate={{ strokeDashoffset: [30, 0] }}
                  transition={{ duration: path.speed || 1.2, repeat: Infinity, ease: "linear" }}
                  style={{ filter: `drop-shadow(0 0 8px ${path.color || "#3b82f6"})` }}
                />
              ))}
            </svg>

            {/* Interactive HTML Nodes */}
            {project.nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                style={{ left: `${(node.x / 800) * 100}%`, top: `${(node.y / 500) * 100}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 pointer-events-auto group"
              >
                {/* Node Icon Box */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-[#060913] border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-white/30 transition-all duration-300 z-10" style={{ color: node.color || '#3b82f6' }}>
                  {/* Node Background Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 blur-md transition-opacity group-hover:opacity-40" style={{ backgroundColor: node.color || '#3b82f6' }}></div>
                  {node.icon}
                </div>
                
                {/* Label */}
                <span className="text-[9px] md:text-[10px] font-mono text-gray-300 font-bold whitespace-nowrap bg-black/80 px-2.5 py-1 rounded-md border border-white/10 group-hover:text-white transition-colors">
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 z-40">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> 
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Active Data Stream</span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// 4. MAIN PORTFOLIO COMPONENT
// ============================================================================

export default function Portfolio() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)

  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-[#030509] overflow-hidden" ref={containerRef}>
      
      {/* Deep Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Code2 size={14} /> Digital Infrastructure
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              We engineer operational brains for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ambitious brands.</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Interact with the live micro-architectures below, then explore the underlying data systems that make them run flawlessly.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`group relative rounded-3xl bg-[#050812] border border-white/5 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl flex flex-col ${project.borderHover}`}
            >
              <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${project.glow} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full`} />
              
              <div className="h-[320px] w-full bg-black relative border-b border-white/5 overflow-hidden flex flex-col pt-3 px-3">
                <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-b from-white/[0.03] to-transparent -rotate-12 transform origin-top-left pointer-events-none z-20"></div>
                <div className="flex items-center gap-1.5 mb-3 px-2 relative z-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-red-500 transition-colors duration-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-yellow-500 transition-colors duration-500 delay-75"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-500 delay-150"></div>
                  <span className="ml-2 text-[10px] text-gray-600 font-mono">live_environment.tsx</span>
                </div>
                <div className="flex-1 w-full relative z-10 shadow-2xl">
                  {project.ui}
                </div>
              </div>
              
              <div className="p-8 md:p-10 relative z-10 flex flex-col flex-grow bg-gradient-to-b from-[#080c17] to-[#030509]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2 block">{project.type}</span>
                    <h4 className="text-3xl font-bold text-white group-hover:text-gray-200 transition-colors tracking-tight">{project.title}</h4>
                  </div>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow group-hover:text-gray-300 transition-colors">{project.description}</p>
                
                <div className="mt-auto flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between items-start xl:items-end">
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/[0.02] backdrop-blur-md px-3 py-2 rounded-lg border border-white/5">
                        {metric.icon}
                        <span className="text-[11px] font-medium text-gray-400">{metric.label}: <span className="text-white font-bold">{metric.value}</span></span>
                      </div>
                    ))}
                  </div>
                  
                  {/* EXPLORE ARCHITECTURE TRIGGER */}
                  <button 
                    onClick={() => setActiveProject(project)}
                    className={`mt-4 xl:mt-0 px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${project.buttonColor}`}
                  >
                    Explore Architecture <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ArchitectureModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  )
}