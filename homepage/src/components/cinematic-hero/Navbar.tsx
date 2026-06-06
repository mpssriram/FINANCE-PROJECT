export function Navbar() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";
  const isInternalPage = normalizedPath !== "/";
  const links = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/projects", label: "Projects" },
    { href: "/challenges", label: "Challenges" },
  ];

  return (
    <header className="hero-header">
      <nav className="hero-nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Dev Cell Club home">
          <span className="brand-dot" />
          <span>Dev Cell</span>
        </a>

        <div className="nav-links">
          {links.map((link) => {
            const isActive = normalizedPath === link.href;

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "is-active" : undefined}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            );
          })}
          <a
            className="nav-join"
            href={isInternalPage ? "/community#community-join" : "#join"}
          >
            Join
          </a>
        </div>
      </nav>
    </header>
  );
}
