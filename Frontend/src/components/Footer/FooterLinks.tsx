import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface FooterLinksProps {
  section: FooterSection;
}

export function FooterLinks({ section }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white/90 relative inline-block">
        {section.title}
        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500"></span>
      </h3>
      <ul className="space-y-2">
        {section.links.map(({ label, href }) => (
          <li key={label}>
            <Link
              to={href}
              className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex min-h-10 items-center py-1"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}