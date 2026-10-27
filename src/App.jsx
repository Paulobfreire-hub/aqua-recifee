import React, { useState } from 'react';
import { Activity, Layers, MapPin, Droplet, Wrench, FileText } from 'lucide-react';

const SENSORS_INIT = [
  { id: 'SN-101', name: 'Sensor Fluvial 01 - Zona Sul', region: 'Boa Viagem', flow: 142.5, pressure: 28.4, status: 'NORMAL' },
  { id: 'SN-102', name: 'Macromedidor Várzea Norte', region: 'Várzea', flow: 188.0, pressure: 14.2, status: 'CRITICAL' },
  { id: 'SN-103', name: 'Pressostato Santo Amaro C', region: 'Santo Amaro', flow: 98.2, pressure: 22.1, status: 'WARNING' },
  { id: 'SN-104', name: 'Medidor Espinheiro Leste', region: 'Espinheiro', flow: 115.4, pressure: 26.8, status: 'NORMAL' },
  { id: 'SN-105', name: 'Sensor Vazão Casa Amarela', region: 'Casa Amarela', flow: 210.1, pressure: 18.9, status: 'CRITICAL' }
];

const REPAIRS_INIT = [
  { id: 'REP-8901', sensorId: 'SN-102', region: 'Várzea', type: 'Ruptura Tubulação Base PEAD', priority: 'Alta', status: 'Em Execução' },
  { id: 'REP-8902', sensorId: 'SN-105', region: 'Casa Amarela', type: 'Vazamento Subterrâneo Junta', priority: 'Crítica', status: 'Pendente' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sensors, setSensors] = useState(SENSORS_INIT);
  const [repairs, setRepairs] = useState(REPAIRS_INIT);
  const [newRepair, setNewRepair] = useState({ sensorId: 'SN-101', region: 'Boa Viagem', type: '', priority: 'Média' });

  const criticalCount = sensors.filter(s => s.status === 'CRITICAL').length;
  const warningCount = sensors.filter(s => s.status === 'WARNING').length;

  const toggleAnomaly = (id) => {
    setSensors(prev => prev.map(s => {
      if (s.id === id) {
        const nextStatus = s.status === 'NORMAL' ? 'WARNING' : s.status === 'WARNING' ? 'CRITICAL' : 'NORMAL';
        return { ...s, status: nextStatus };
      }
      return s;
    }));
  };

  const handleCreateRepair = (e) => {
    e.preventDefault();
    if (!newRepair.type) return;
    const item = {
      ...newRepair,
      id: `REP-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Pendente'
    };
    setRepairs([item, ...repairs]);
    setNewRepair({ sensorId: 'SN-101', region: 'Boa Viagem', type: '', priority: 'Média' });
  };

  const updateRepairStatus = (id, newStatus) => {
    setRepairs(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#e2e8f0', fontFamily: 'monospace, sans-serif' }}>
      <header style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#2563eb', padding: '8px', borderRadius: '4px', color: '#fff' }}>
            <Droplet size={20} />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>AQUA RECIFE — MONITORAMENTO DE REDE</h1>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Sistema de Telemetria e Perdas de Água | AV1</p>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: '#ef4444' }}>
          ALERTAS CRÍTICOS: <strong>{criticalCount}</strong>
        </div>
      </header>

      <div style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#0b1329', padding: '0 24px', display: 'flex', gap: '8px' }}>
        {[
          { id: 'dashboard', label: 'DASHBOARD', icon: Layers },
          { id: 'sensors', label: 'SENSORES', icon: Activity },
          { id: 'repairs', label: 'MANUTENÇÃO (O.S.)', icon: Wrench },
          { id: 'hotspots', label: 'SETORES', icon: MapPin },
          { id: 'reports', label: 'RELATÓRIO', icon: FileText }
        ].map(tab => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px',
                backgroundColor: 'transparent', border: 'none',
                borderBottom: active ? '2px solid #3b82f6' : '2px solid transparent',
                color: active ? '#60a5fa' : '#94a3b8', cursor: 'pointer', fontSize: '13px'
              }}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <main style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
        {activeTab === 'dashboard' && (
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>PERDA ESTIMADA (L/s)</span>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', marginTop: '4px' }}>428.5 L/s</div>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>PRESSÃO MÉDIA</span>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8', marginTop: '4px' }}>22.1 mca</div>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>ANOMALIAS ATIVAS</span>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', marginTop: '4px' }}>{criticalCount + warningCount}</div>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '4px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>META AV1</span>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e', marginTop: '4px' }}>-30.0%</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sensors' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {sensors.map(s => (
              <div key={s.id} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{s.name}</h4>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#94a3b8' }}>Região: {s.region}</p>
                <p style={{ margin: '4px 0', fontSize: '12px' }}>Status: <strong>{s.status}</strong></p>
                <button 
                  onClick={() => toggleAnomaly(s.id)}
                  style={{ width: '100%', marginTop: '12px', padding: '6px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', cursor: 'pointer' }}
                >
                  Alternar Status (Simulação)
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'repairs' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
            <form onSubmit={handleCreateRepair} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '4px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '14px' }}>Abrir Ordem de Serviço</h3>
              <input 
                type="text" 
                placeholder="Descrição do problema" 
                value={newRepair.type}
                onChange={e => setNewRepair({...newRepair, type: e.target.value})}
                style={{ width: '100%', backgroundColor: '#090d16', border: '1px solid #334155', color: '#fff', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }}
                required
              />
              <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', border: 'none', color: '#fff', padding: '10px', cursor: 'pointer' }}>
                Salvar O.S.
              </button>
            </form>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '4px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '14px' }}>Histórico de O.S.</h3>
              {repairs.map(r => (
                <div key={r.id} style={{ borderBottom: '1px solid #1e293b', padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{r.id} - {r.type} ({r.status})</span>
                  {r.status !== 'Concluído' && (
                    <button onClick={() => updateRepairStatus(r.id, 'Concluído')} style={{ backgroundColor: '#166534', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>
                      Concluir
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'hotspots' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '4px' }}>
            <h3>Bairros Piloto Monitorados</h3>
            <p>Boa Viagem, Várzea, Santo Amaro, Espinheiro, Casa Amarela.</p>
          </div>
        )}

        {activeTab === 'reports' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '4px' }}>
            <h3>Relatório Executivo AV1</h3>
            <p>Sistema desenvolvido para atender aos requisitos de React, componentização e controle de vazamentos na rede de distribuição de água.</p>
          </div>
        )}
      </main>
    </div>
  );
}
