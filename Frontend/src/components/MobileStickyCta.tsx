import { Link } from "react-router-dom";
import { MessageCircle, PhoneCall, FileText } from "lucide-react";
import { trackEvent } from "../utils/analytics";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-3 py-2">
        <a
          href="tel:+919899987779"
          onClick={() => trackEvent("mobile_cta_call_click", { source: "sticky_bar" })}
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </a>
        <a
          href="https://wa.me/+919899987779?text=Hi!%20I%20want%20a%20quick%20quote."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("mobile_cta_whatsapp_click", { source: "sticky_bar" })}
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg bg-green-500 text-xs font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          onClick={() => trackEvent("mobile_cta_quote_click", { source: "sticky_bar" })}
          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-xs font-semibold text-white"
        >
          <FileText className="h-4 w-4" />
          Quote
        </Link>
      </div>
    </div>
  );
}
