import { Mail, FileText } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../../utils/analytics';

export function SocialLinks() {
  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/+919899987779', label: 'WhatsApp' },
    { icon: FileText, href: 'https://drive.google.com/file/d/1om2PXA6SUJCAnlGQ6vZg5TC-spYEGFkI/view?usp=sharing', label: 'Catalogue' },
    { icon: Mail, href: 'mailto:orientalgifting@gmail.com', label: 'Email' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          onClick={() => trackEvent('footer_link_click', { label })}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-200"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}