import { PageHero, scrollToId } from '../PageHero';

export function ContactHero() {
  return (
    <PageHero
      title="Get in Touch with Us"
      description="We value our customers and are here to help. Reach out to us and let us assist you with your needs."
      primary={{ label: 'Contact Us Now', onClick: scrollToId('contact-form') }}
      secondary={{
        label: 'WhatsApp Us',
        href: 'https://wa.me/+919899987779?text=Hi%2C%20I%20need%20help%20with%20corporate%20gifting.',
        external: true,
      }}
      note="Business-hour response support for corporate enquiries."
    />
  );
}
