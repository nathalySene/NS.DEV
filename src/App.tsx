import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Download, Github, Instagram, Linkedin, Mail, Menu, MessageCircle, Server, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { profile, projects, skillGroups } from './data/portfolio';

const nav = [ ['Sobre', '#sobre'], ['Skills', '#skills'], ['Projetos', '#projetos'], ['Contato', '#contato'] ];

function downloadContact() {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', 'FN:' + profile.name, 'ORG:NS.DEV', 'TITLE:' + profile.role, profile.email ? 'EMAIL:' + profile.email : '', 'URL:' + profile.github, profile.linkedin ? 'URL:' + profile.linkedin : '', profile.instagram ? 'URL:' + profile.instagram : '', profile.whatsapp ? 'TEL;TYPE=CELL:+' + profile.whatsapp : '', 'END:VCARD'];
  const blob = new Blob([lines.filter(Boolean).join('\r\n')], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'Nathaly-Sene.vcf'; a.click(); URL.revokeObjectURL(url);
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>{children}</motion.div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatsMessage, setWhatsMessage] = useState('Olá, Nathaly! Encontrei seu portfólio e gostaria de conversar sobre um projeto.');
  const [whatsOpen, setWhatsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(whatsMessage.trim())}`;
  return <div className="app-shell">
    <header className="header container">
      <a href="#inicio" className="logo" aria-label="Ir ao início">NS<span>.DEV</span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
        {nav.map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
      </nav>
      <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero container" id="inicio">
        <Reveal><div className="eyebrow"><span className="status-dot"/> PORTFÓLIO PROFISSIONAL <span className="eyebrow-line"/> 2026</div>
          <p className="hero-intro">OLÁ, EU SOU NATHALY SENE</p>
          <h1>Tecnologia com <em>propósito.</em><br/>Soluções com identidade<span className="accent">.</span></h1>
          <p className="hero-description">Desenvolvimento Full Stack, infraestrutura e suporte de TI. Conectando conhecimento técnico, criatividade e soluções digitais.</p>
          <div className="actions"><a className="button primary" href="#projetos">Explorar projetos <ArrowUpRight size={18}/></a><a className="button secondary" href="#contato">Entrar em contato <ArrowRight size={18}/></a></div>
          <div className="hero-bottom"><span>ETEC <span className="muted">/</span> FIAP</span><a href="#sobre">DESLIZE PARA EXPLORAR <ArrowDown size={15}/></a></div>
        </Reveal>
        <div className="hero-art" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="art-frame"><Code2 size={44} strokeWidth={1}/><span>BUILDING DIGITAL EXPERIENCES</span></div></div>
      </section>

      <section className="section container" id="sobre"><Reveal><p className="section-kicker">01 / SOBRE MIM</p><h2>Mais do que código.<br/><span>Visão de ponta a ponta.</span></h2><div className="about-grid"><p className="large-copy">Sou técnica em Desenvolvimento de Sistemas pela ETEC e atualmente curso Análise e Desenvolvimento de Sistemas na FIAP.</p><div><p>{profile.summary}</p><p>Minha trajetória combina atendimento e resolução de problemas de TI com desenvolvimento web. Essa experiência me ajuda a compreender necessidades reais e transformá-las em soluções práticas.</p></div></div></Reveal></section>

      <section className="section container" id="skills"><Reveal><p className="section-kicker">02 / CONHECIMENTOS</p><h2>Meu universo <span>tecnológico.</span></h2><div className="skills-grid">{skillGroups.map((group, i) => <article className="panel" key={group.title}><div className="panel-heading">{i === 0 ? <Code2/> : <Server/>}<h3>{group.title}</h3></div><div className="tags">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div></Reveal></section>

      <section className="section container" id="projetos"><Reveal><p className="section-kicker">03 / PORTFÓLIO</p><div className="section-heading"><h2>Projetos <span>selecionados.</span></h2><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight size={17}/></a></div><div className="projects-grid">{projects.map((project, i) => <article className="project" key={project.title}><div className="project-visual"><span className="project-index">0{i + 1}</span><Code2 size={56} strokeWidth={0.8}/></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Ver repositório <ArrowUpRight size={17}/></a>}</div></article>)}</div></Reveal></section>

      <section className="section container" id="contato"><Reveal><div className="contact-panel"><p className="section-kicker">04 / CONTATO</p><h2>Vamos nos <span>conectar.</span></h2><p>Para oportunidades profissionais, parcerias ou desenvolvimento de sites, escolha seu canal preferido.</p><div className="contact-links">
        {profile.whatsapp && <button type="button" className="contact-link" onClick={() => setWhatsOpen(true)}><MessageCircle size={22}/><span><strong>WhatsApp</strong><small>Escreva sua mensagem</small></span><ArrowUpRight size={18}/></button>}
        {profile.instagram && <a className="contact-link" href={profile.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={22}/><span><strong>Instagram</strong><small>Acompanhe meu perfil</small></span><ArrowUpRight size={18}/></a>}
        {profile.linkedin && <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={22}/><span><strong>LinkedIn</strong><small>Conexões e oportunidades</small></span><ArrowUpRight size={18}/></a>}
        <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={22}/><span><strong>GitHub</strong><small>Conheça meus repositórios</small></span><ArrowUpRight size={18}/></a>
      </div><div className="actions">{profile.email && <a className="button primary" href={`mailto:${profile.email}`}><Mail size={18}/> Enviar e-mail</a>}<button className="button secondary" onClick={downloadContact}><Download size={18}/> Salvar contato</button></div></div></Reveal></section>
    </main>
    {whatsOpen && <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setWhatsOpen(false); }}>
      <section className="whatsapp-dialog" role="dialog" aria-modal="true" aria-labelledby="whatsapp-title">
        <div className="dialog-heading"><div className="dialog-heading-label"><MessageCircle size={22}/><h2 id="whatsapp-title">Enviar mensagem</h2></div><button type="button" className="dialog-close" aria-label="Fechar mensagem" onClick={() => setWhatsOpen(false)}><X size={20}/></button></div>
        <p>Conte um pouco sobre sua ideia ou oportunidade. Sua mensagem será aberta no WhatsApp para você confirmar o envio.</p>
        <label htmlFor="whats-message">Sua mensagem</label>
        <textarea id="whats-message" rows={5} maxLength={1500} value={whatsMessage} onChange={(event) => setWhatsMessage(event.target.value)} placeholder="Olá, Nathaly! Gostaria de conversar sobre..." autoFocus />
        <div className="dialog-actions"><button type="button" className="button secondary" onClick={() => setWhatsOpen(false)}>Cancelar</button><a className={`button primary ${!whatsMessage.trim() ? 'disabled-link' : ''}`} href={whatsMessage.trim() ? whatsappUrl : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!whatsMessage.trim()} onClick={(event) => { if (!whatsMessage.trim()) event.preventDefault(); }}>Continuar no WhatsApp <ArrowUpRight size={17}/></a></div>
      </section>
    </div>}
    <footer className="footer container"><span className="logo">NS<span>.DEV</span></span><p>© {new Date().getFullYear()} Nathaly Sene. Desenvolvido com intenção.</p><a href="#inicio">Voltar ao topo ↑</a></footer>
  </div>;
}
