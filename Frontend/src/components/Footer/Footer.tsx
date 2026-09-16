import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  const footerSections = [
    {
      title: 'Explore More',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'All Products', href: '/products' },
        { label: 'Branded Collection', href: '/branded-collection' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Bags', href: '/products/bags' },
        { label: 'Caps', href: '/products/caps' },
        { label: 'Drinkware', href: '/products/drinkware' },
        { label: 'Diaries', href: '/products/diaries' },
        { label: 'Jackets', href: '/products/jackets' },
        { label: 'T-shirts', href: '/products/tshirts' },
        { label: 'Accessories', href: '/products/accessories' },
      ],
    },
    {
      title: 'Important Links',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Refund & Cancellation', href: '/refund' },
        { label: 'Warranty Policy', href: '/warranty' },
      ],
    },
    {
      title: 'Popular Searches',
      links: [
        { label: 'Corporate Gifts Delhi', href: '/corporate-gifts-delhi' },
        { label: 'Employee Welcome Kits', href: '/employee-welcome-kits' },
        { label: 'Festive Corporate Gifting', href: '/festive-corporate-gifting' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90 relative inline-block">
              About the Store
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500"></span>
            </h3>
            <p className="text-slate-400">
              Oriental Enterprises - Your trusted partner for premium corporate gifting solutions since 1990.
            </p>
            <a href="tel:+919899987779" className="block text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
              +91 98999 87779
            </a>
            <a href="mailto:orientalgifting@gmail.com" className="block text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
              orientalgifting@gmail.com
            </a>
            <address className="text-slate-400 not-italic">
              8769/14-B, Shidipura Karol Bagh <br />
              New Delhi, India 110005
            </address>
          </div>

          {/* Other Sections */}
          {footerSections.map((section) => (
            <FooterLinks key={section.title} section={section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Oriental Enterprises. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
}