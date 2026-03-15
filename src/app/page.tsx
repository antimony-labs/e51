export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', margin: '6rem 0 8rem 0' }}>
        <h1 className="title" style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.04em' }}>
          Human Intent.<br/>Algorithmic Precision.
        </h1>
        <p className="subtitle" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Element 51 is a curated showcase of autonomous AI experiments, physics simulations, and generative algorithms born from the antimony-labs ecosystem.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="glass-panel" style={{ padding: '0.75rem 2rem', color: '#fff', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
            Explore Projects
          </button>
        </div>
      </section>

      {/* Featured Algorithms Gallery */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600 }}>S3M2P Algorithms</h2>
          <a href="#" style={{ color: 'var(--accent-base)', textDecoration: 'none', fontSize: '0.9rem' }}>View Source &rarr;</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* Project Card 1 */}
          <article className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div style={{ height: '200px', background: 'linear-gradient(180deg, rgba(90, 139, 176, 0.2) 0%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-glass)' }}>
              {/* Abstract Representation of Chladni Pattern */}
              <div style={{ width: '120px', height: '120px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '50%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '60%', border: '1px dashed rgba(255,255,255,0.6)', borderRadius: '50%' }}></div>
              </div>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--accent-base)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SIMULATION | RUST + WebGL</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Chladni Plate Resonance</h3>
              <p className="text-small" style={{ marginBottom: '1.5rem', lineHeight: 1.5, flex: 1 }}>
                A highly optimized simulation calculating nodal lines formed by sand on a vibrating square plate. The core math is executed in WASM while Next.js handles the canvas rendering.
              </p>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Run Simulation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Project Card 2 */}
          <article className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div style={{ height: '200px', background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.15) 0%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-glass)' }}>
               {/* Abstract Orbital Pattern */}
               <svg width="120" height="120" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="5" fill="#34d399" />
                  <circle cx="80" cy="50" r="3" fill="#fff" />
               </svg>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--success)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>DATA VIZ | NEXT.js</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Heliocentric Orbits</h3>
              <p className="text-small" style={{ marginBottom: '1.5rem', lineHeight: 1.5, flex: 1 }}>
                Interactive visualizer modeling planetary orbits using simplified Newtonian mechanics. Features dynamic time-scaling and predictive trajectory mapping.
              </p>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
