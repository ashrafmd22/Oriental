import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:orientalgifting@gmail.com', label: 'Email' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}