import {
  ArrowRight,
  BrainCircuit,
  Github,
  Headset,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import { Card } from './components/Card';

const projects = [
  {
    title: 'Open Network Architecture',
    description:
      'A demo case for multi-region network design, resilient routing, and observability built from public documentation and reference GitHub repositories.',
    Icon: Network,
  },
  {
    title: 'Virtualization Patterns',
    description:
      'A placeholder showcase for cluster migration, VDI experience tuning, and infrastructure baselines using non-sensitive sample delivery data.',
    Icon: Layers,
  },
  {
    title: 'Zero-Trust Foundations',
    description:
      'An example profile entry for identity-aware access, device trust, and lifecycle automation described with sanitized implementation narratives.',
    Icon: ShieldCheck,
  },
  {
    title: 'Monitoring & AIOps',
    description:
      'A demo summary for alert pipelines, observability dashboards, and AI-assisted incident triage referencing public GitHub tooling ecosystems.',
    Icon: BrainCircuit,
  },
  {
    title: 'Infrastructure Automation',
    description:
      'A sample story for environment provisioning, declarative delivery, and repeatable platform workflows with public-safe example outputs.',
    Icon: Server,
  },
  {
    title: 'Service Operations',
    description:
      'A redacted service-support profile card covering ticket reduction, runbook quality, and platform support using presentation-safe metrics.',
    Icon: Headset,
  },
];

const navLinks = [
  { label: 'GitHub Projects', href: 'https://github.com/github' },
  { label: 'CLI Proxy', href: 'https://github.com/github/docs' },
  { label: 'Nightingale', href: 'https://github.com/ccfos/nightingale' },
  { label: 'rust-plus', href: 'https://github.com/rust-lang/rust' },
];

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setIsReady(true);
      setShowIntro(false);
      return;
    }
    const introFrame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1550);

    return () => {
      window.cancelAnimationFrame(introFrame);
      window.clearTimeout(introTimer);
    };
  }, []);

  return (
    <div
      className={`site-shell relative min-h-screen overflow-hidden bg-[#050505] font-sans text-white selection:bg-[#a7f069]/30 selection:text-[#a7f069] ${
        isReady ? 'is-ready' : ''
      }`}
    >
      {showIntro ? (
        <div className="intro-screen" aria-hidden="true">
          <div className="intro-screen__wash" />
          <div className="intro-screen__line intro-screen__line--top" />
          <div className="intro-screen__line intro-screen__line--bottom" />
          <p className="intro-screen__label">demo / network &amp; future</p>
        </div>
      ) : null}

      <div className="neon-fx-container" aria-hidden="true">
        <div className="neon-fx-particles-1" />
        <div className="neon-fx-particles-2" />
        <div className="neon-fx-smoke-1" />
        <div className="neon-fx-smoke-2" />
        <div className="neon-fx-smoke-3" />
        <div className="neon-fx-flow" />
        <div className="neon-fx-halo" />
        <div className="neon-fx-diffusion" style={{ animationDelay: '0s' } as CSSProperties} />
        <div className="neon-fx-diffusion" style={{ animationDelay: '1.3s' } as CSSProperties} />
        <div className="neon-fx-diffusion" style={{ animationDelay: '2.6s' } as CSSProperties} />
      </div>

      <nav className="intro-rise intro-delay-1 relative z-20 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 font-bold tracking-tighter">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#a7f069]/30 bg-[#a7f069]/10 text-[#a7f069] backdrop-blur-sm">
            <Wind className="h-4 w-4" />
          </div>
          <span className="text-[0.68rem] uppercase tracking-[0.28em] text-white/76 sm:text-[0.72rem] sm:tracking-[0.34em]">
            DEMO | NETWORK &amp; FUTURE
          </span>
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-white/60 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/octocat"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium transition-colors hover:bg-white/5"
        >
          Contact
        </a>
      </nav>

      <main className="relative z-10 w-full px-5 pb-24 pt-0 sm:px-8 lg:px-12 lg:pb-28">
        <header className="hero-shell mb-14 mt-0 flex min-h-[calc(100vh-148px)] flex-col items-center justify-center pt-[clamp(0.25rem,1vh,1rem)] text-center sm:mb-18 sm:pt-[clamp(0.5rem,2vh,1.25rem)] lg:mb-22 lg:pt-[clamp(0.75rem,2vh,1.5rem)]">
          <div className="hero-copy flex max-w-[980px] flex-col items-center justify-center">
            <h1 className="intro-rise intro-delay-2 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Network Architect <br />
              <span className="text-white/40">&amp; AI Systems</span>
            </h1>

            <p className="intro-rise intro-delay-3 mt-5 max-w-3xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg md:text-xl">
              Hi, I&apos;m Alex. This public demo showcases a full-screen portfolio built with sanitized content,
              GitHub-based placeholder links, and non-sensitive example narratives for infrastructure and AI projects.
            </p>

            <a
              href="https://github.com/github"
              target="_blank"
              rel="noreferrer"
              className="intro-rise intro-delay-4 group mt-8 flex items-center gap-2 rounded-full bg-[#a7f069] px-6 py-3 font-semibold text-[#050505] transition-all hover:scale-105 hover:bg-[#92d659] hover:shadow-[0_0_20px_rgba(167,240,105,0.4)]"
            >
              <Github className="h-5 w-5" />
              View GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </header>

        <section className="pb-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                {...project}
                className="intro-rise"
                style={{ '--intro-delay': `${460 + index * 90}ms` } as CSSProperties}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer intro-rise intro-delay-7 relative z-10 mt-10 border-t border-white/10 py-8 text-center text-sm text-white/40">
        <p>© 2026 DEMO. Public showcase data only.</p>
      </footer>
    </div>
  );
}

