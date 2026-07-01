import './Button.css';

/**
 * Button
 * Generic call-to-action button used across sections.
 *
 * @param {'primary'|'secondary'|'ghost'|'light'} variant
 * @param {'sm'|'md'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'a',
  href,
  onClick,
  type = 'button',
  target,
  rel,
  icon = null,
  className = '',
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (as === 'a') {
    return (
      <a href={href} className={classes} onClick={onClick} target={target} rel={rel}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
