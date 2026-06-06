export type CommandBandItem = {
  label: string;
  value: string;
  text: string;
};

type CommandBandProps = {
  items: CommandBandItem[];
  variant?: string;
};

export function CommandBand({
  items,
  variant,
}: CommandBandProps) {
  return (
    <div className={`page-command-band${variant ? ` page-command-band--${variant}` : ""}`}>
      {items.map((item) => (
        <article className="page-command-band__item" key={item.label}>
          <span className="page-command-band__label">{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
