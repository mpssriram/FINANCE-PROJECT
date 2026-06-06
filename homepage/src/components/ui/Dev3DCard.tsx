import "./dev-3d-card.css";

export type Dev3DCardVariant = "cyan" | "red" | "blue";

export type Dev3DCardProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  badgeTop?: string;
  badgeMain?: string;
  variant?: Dev3DCardVariant;
};

export function Dev3DCard({
  title,
  description,
  ctaLabel,
  badgeTop,
  badgeMain,
  variant = "cyan",
}: Dev3DCardProps) {
  return (
    <div className="dev-3d-card-parent">
      <div className="dev-3d-card-link" role="group" tabIndex={0}>
        <article className={`dev-3d-card dev-3d-card--${variant}`}>
          <div className="dev-3d-card-content">
            <h3 className="dev-3d-card-title">{title}</h3>
            <p className="dev-3d-card-description">{description}</p>
            {ctaLabel ? <span className="dev-3d-card-cta">{ctaLabel}</span> : null}
          </div>
          {(badgeTop || badgeMain) && (
            <div
              aria-label={`${badgeTop ?? ""} ${badgeMain ?? ""}`}
              className="dev-3d-card-badge"
            >
              <span className="dev-3d-card-badge-top">{badgeTop}</span>
              <span className="dev-3d-card-badge-main">{badgeMain}</span>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
