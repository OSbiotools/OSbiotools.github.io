import { useEffect, useMemo, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'

const tools = [
  {
    name: 'OS bioinformatics',
    description: 'Open catalog for sharing open-source bioinformatics tools.',
    href: 'https://osbiotools.github.io/OSbioinformatics/',
    details:
      'A simple place to find and share open-source bioinformatics tools. Use it to browse, publish, and follow work in one spot.',
    links: [
      { label: 'Open site', href: 'https://osbiotools.github.io/OSbioinformatics/' },
      { label: 'Source', href: 'https://github.com/Pranesh950' },
    ],
    tags: 'catalog tools open source bioinformatics',
  },
  {
    name: 'BioPetals',
    description: 'Run BIOxAI models at home, BitTorrent-style.',
    href: 'https://github.com/OSbiotools/BioPetals',
    badge: 'beta',
    details:
      'A fork of Petals focused on biology-oriented workflows, with examples for distributed inference, fine-tuning, and OpenBioLLM.',
    links: [
      { label: 'Open repo', href: 'https://github.com/OSbiotools/BioPetals' },
      { label: 'Petals site', href: 'https://petals.dev' },
    ],
    tags: 'biology llm distributed inference fine-tuning petals',
  },
]

function Header() {
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        Open Source Biotools
      </NavLink>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/tools">Tools</NavLink>
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <main className="home-scroll">
      <section className="panel hero reveal">
        <p className="kicker">Nonprofit biotech tools</p>
        <h1>Open tools for real science.</h1>
        <p className="small">Built in public. Free to use.</p>
        <NavLink className="btn" to="/tools">
          See tools
        </NavLink>
      </section>

      <section className="panel reveal">
        <h2>What we do</h2>
        <p>We build practical open-source tools for biotech teams.</p>
      </section>

      <section className="panel reveal">
        <h2>How we work</h2>
        <p>Public code. Clear docs. Community first.</p>
      </section>

      <section className="panel reveal">
        <h2>Use and contribute</h2>
        <p>Use what helps. Share what you build.</p>
        <div className="actions">
          <NavLink className="btn" to="/tools">
            Open registry
          </NavLink>
        </div>
      </section>
    </main>
  )
}

function ToolsPage() {
  const [query, setQuery] = useState('')

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tools
    return tools.filter((tool) => {
      const haystack = `${tool.name} ${tool.description} ${tool.tags}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  return (
    <main className="tools-main">
      <section className="tools-head reveal">
        <h1>Tools</h1>
        <p>Search what we have shipped.</p>
      </section>

      <section className="search-wrap reveal">
        <label htmlFor="toolSearch" className="sr-only">
          Search tools
        </label>
        <input
          id="toolSearch"
          type="search"
          placeholder="Search tools"
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <section className="tool-grid reveal">
        {filteredTools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div className="tool-card-toggle">
              <span className="tool-card-toggle-label">
                <span>{tool.name}</span>
                {tool.badge && <span className="tool-badge">{tool.badge}</span>}
              </span>
            </div>

            <p>{tool.description}</p>

            <div className="tool-details">
              <p>{tool.details}</p>
              <div className="tool-links">
                {tool.links.map((link) => (
                  <a key={link.label} className="tool-link" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredTools.length === 0 && <p className="empty">No tools found.</p>}
    </main>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('.reveal'))
    if (revealItems.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </div>
  )
}

export default App
