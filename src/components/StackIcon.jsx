export default function StackIcon({ icon }) {
  if (icon.type === 'img') {
    return <img src={icon.src} alt="" loading="lazy" />;
  }
  return (
    <svg
      className="icon-generic"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      dangerouslySetInnerHTML={{ __html: (icon.extra || '') + `<path d="${icon.path}"/>` }}
    />
  );
}
