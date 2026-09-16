import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Gift, Menu, X, PhoneCall, Package } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { getGiftBoxIds } from '../utils/giftBox';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [giftBoxCount, setGiftBoxCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncGiftBoxCount = () => setGiftBoxCount(getGiftBoxIds().length);
    syncGiftBoxCount();
    window.addEventListener('giftbox-updated', syncGiftBoxCount);
    return () => window.removeEventListener('giftbox-updated', syncGiftBoxCount);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Brands', path: '/branded-collection' },
    { label: 'Contact', path: '/contact' },
  ];
  const mobileNavLinks = [...navLinks, { label: 'Gift Box', path: '/gift-box' }];

  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative group whitespace-nowrap text-[15px] 2xl:text-[17px] font-semibold transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`;

  return (
    <nav className={`fixed w-full z-50 border-b border-indigo-100/80 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 2xl:gap-10 h-16 sm:h-[72px] xl:h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex shrink-0 items-center select-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="relative flex items-center justify-center">
              <Gift
                strokeWidth={2}
                className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="ml-2 sm:ml-3">
              <h1 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Oriental Enterprises
                </span>
              </h1>
              <p className="block text-[9px] sm:text-[10px] lg:text-[11px] 2xl:text-[12px] font-semibold text-slate-600 tracking-[0.01em] leading-tight mt-0.5 max-w-[170px] sm:max-w-none xl:whitespace-nowrap">
                Thoughtful Gifts, Exceptional Quality
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-7 2xl:gap-10">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className={getLinkClasses}
                end={path === '/'}
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex shrink-0 items-center gap-3">
              <NavLink
                to="/gift-box"
                className="relative inline-flex items-center justify-center rounded-full border border-indigo-200 p-2.5 text-indigo-700 hover:bg-indigo-50 transition"
                aria-label="View Gift Box"
              >
                <Package className="h-4 w-4" />
                {giftBoxCount > 0 && (
                  <span className="absolute -top-1 -right-1 rounded-full bg-indigo-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {giftBoxCount}
                  </span>
                )}
              </NavLink>
              <a
                href="tel:+919899987779"
                onClick={() => trackEvent('nav_call_click', { location: 'desktop' })}
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 whitespace-nowrap px-4 py-2 text-[15px] font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://drive.google.com/file/d/1om2PXA6SUJCAnlGQ6vZg5TC-spYEGFkI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('nav_catalog_click', { location: 'desktop' })}
                className="whitespace-nowrap px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-[15px]"
              >
                View Catalogue
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`xl:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="py-4 space-y-4 px-2">
            {mobileNavLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                end={path === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'}`
                }
              >
                <span className="inline-flex items-center gap-2">
                  {label}
                  {path === '/gift-box' && giftBoxCount > 0 && (
                    <span className="rounded-full bg-indigo-100 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700">
                      {giftBoxCount}
                    </span>
                  )}
                </span>
              </NavLink>
            ))}
            <a
              href="tel:+919899987779"
              onClick={() => trackEvent('nav_call_click', { location: 'mobile_menu' })}
              className="block px-4 py-2 text-center rounded-lg border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition-all duration-300"
            >
              Call Now
            </a>
            <a
              href="https://drive.google.com/file/d/1om2PXA6SUJCAnlGQ6vZg5TC-spYEGFkI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('nav_catalog_click', { location: 'mobile_menu' })}
              className="block px-4 py-2 text-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md"
            >
              View Catalogue
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}