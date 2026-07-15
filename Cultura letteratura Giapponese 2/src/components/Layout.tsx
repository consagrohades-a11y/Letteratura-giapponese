import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { BookIcon, DecorativeFlower, DecorativeSparkle } from './Decorations'
import { useStudy } from '../state/StudyContext'

const nav: [string, string, string][] = [
  ['/', 'Oggi', '⌂'],
  ['/percorso', 'Percorso', '◎'],
  ['/atlante', 'Atlante', '✦'],
  ['/palestra', 'Palestra', '⚡'],
  ['/ripasso', 'Ripasso', '↻'],
  ['/glossario', 'Glossario', '◇'],
  ['/orale', 'Orale', '◉'],
  ['/piano-48h', 'Piano 48h', '◷'],
]

export function Layout() {
  const { settings, setTheme, setSidebarCollapsed, courseCompletion } = useStudy()
  const location = useLocation()
  return (
    <div
      className={`app-shell ${settings.focusMode ? 'is-focus' : ''} ${settings.sidebarCollapsed ? 'sidebar-compact' : ''}`}
    >
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      {!settings.focusMode && (
        <aside className="sidebar">
          <div className="brand">
            <span className="brand-mark">
              <BookIcon />
            </span>
            <span>
              <strong>Kokoro</strong>
              <small>study studio</small>
            </span>
          </div>
          <nav aria-label="Navigazione principale">
            {nav.map(([to, label, icon]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                title={settings.sidebarCollapsed ? label : undefined}
              >
                <span aria-hidden="true">{icon}</span>
                <b>{label}</b>
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-progress">
            <div
              className="mini-ring"
              role="progressbar"
              aria-label="Completamento del corso"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={courseCompletion}
              style={{ '--progress': `${courseCompletion * 3.6}deg` } as React.CSSProperties}
            >
              <span>{courseCompletion}%</span>
            </div>
            <p>
              <strong>Copertura corso</strong>
              <small>12 blocchi disponibili</small>
            </p>
          </div>
          <DecorativeFlower className="sidebar-flower" />
        </aside>
      )}
      <div className="main-column">
        <header className="topbar">
          <div>
            <small>文化・日本文学 II</small>
            <strong>
              {location.pathname.startsWith('/lezione')
                ? 'Sessione di studio'
                : 'Il tuo atelier di studio'}
            </strong>
          </div>
          <div className="top-actions">
            {!settings.focusMode && (
              <button
                className="icon-button sidebar-control"
                onClick={() => setSidebarCollapsed(!settings.sidebarCollapsed)}
                aria-label={
                  settings.sidebarCollapsed ? 'Espandi barra laterale' : 'Comprimi barra laterale'
                }
                aria-expanded={!settings.sidebarCollapsed}
              >
                {settings.sidebarCollapsed ? '☰' : '◧'}
              </button>
            )}
            <button
              className="icon-button"
              onClick={() => setTheme(settings.theme === 'light' ? 'dark' : 'light')}
              aria-label="Cambia tema"
            >
              {settings.theme === 'light' ? '☾' : '☀'}
            </button>
            <NavLink className="avatar" to="/impostazioni" aria-label="Impostazioni">
              P
            </NavLink>
          </div>
        </header>
        <main id="main">
          <Outlet />
        </main>
      </div>
      {!settings.focusMode && (
        <nav className="mobile-nav" aria-label="Navigazione mobile">
          {nav.slice(0, 5).map(([to, label, icon]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              <span aria-hidden="true">{icon}</span>
              <small>{label}</small>
            </NavLink>
          ))}
        </nav>
      )}
      <DecorativeSparkle className="shell-sparkle" />
    </div>
  )
}
