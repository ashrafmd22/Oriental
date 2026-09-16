import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

interface ProductDetailsProps {
  name: string;
  description: string;
  features: string[];
  code: string;
}

export function ProductDetails({ name, description, features, code }: ProductDetailsProps) {
  const handleWhatsAppClick = () => {
    // Properly encode the text for WhatsApp URL
    const encodedText = encodeURIComponent(
      `Hello! I'm interested in the following product:\n\nName: ${name}\nCode: ${code}\n\nIf you have more details, please share.`
    );
    trackEvent('product_whatsapp_click', {
      product_name: name,
      product_code: code,
    });
    window.open(`https://wa.me/+919899987779?text=${encodedText}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-6 flex-grow">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{name}</h1>
          <p className="mt-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
            Product Code: {code}
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-slate-600 text-justify leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Features</h2>
          <ul className="space-y-2 pl-4">
            {features.map((feature, index) => (
              <li key={index} className="text-slate-600 relative pl-4">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                <span className="block text-justify leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
          <p className="text-sm sm:text-base text-amber-900">
            Need bulk quantity or logo customization? Share your budget and timeline, and our team will suggest the best options.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 space-y-4 bg-slate-50 p-4 rounded-xl">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Need Pricing Or Samples?</h2>
        <p className="text-slate-600 text-justify">
          Connect with our team for MOQ details, branding options, and delivery timelines.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg font-semibold"
          >
            <FaWhatsapp className="w-6 h-6" />
            WhatsApp Now
          </button>
          <Link
            to="/contact"
            onClick={() => trackEvent('product_callback_click', { product_name: name, product_code: code })}
            className="w-full sm:w-auto bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center hover:bg-slate-100 font-semibold"
          >
            Request Callback
          </Link>
        </div>
      </div>
    </div>
  );
}