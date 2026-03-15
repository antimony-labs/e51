import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Element 51 | S3M2P Portfolio",
  description: "AI-Generated Algorithmic Experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Public Navigation Header */}
          <nav className="glass-panel" style={{ 
            margin: '1.5rem 2rem', 
            padding: '1rem 2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'relative',
            zIndex: 100
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'linear-gradient(135deg, #5a8bb0, #2c4a63)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
                Sb
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em' }}>element 51</span>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#" className="nav-item">Projects</a>
              <a href="#" className="nav-item">Algorithms</a>
              <a href="#" className="nav-item">About</a>
              <a href="https://github.com/Shivam-Bhardwaj" target="_blank" className="nav-item" style={{ borderLeft: '1px solid var(--border-glass)', paddingLeft: '2rem' }}>GitHub</a>
            </div>
          </nav>

          {/* Main Page Content */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          
          {/* Subtle Footer */}
          <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Element 51 (Antimony Labs). Built with Hybrid AI architecture.
          </footer>
        </div>
      </body>
    </html>
  );
}
