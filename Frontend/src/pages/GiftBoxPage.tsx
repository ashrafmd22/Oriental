import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { clearGiftBox, getGiftBoxIds, removeFromGiftBox } from "../utils/giftBox";

interface InquiryForm {
  contactPerson: string;
  phone: string;
  email: string;
  companyName: string;
  notes: string;
}

export function GiftBoxPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [formData, setFormData] = useState<InquiryForm>({
    contactPerson: "",
    phone: "",
    email: "",
    companyName: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sync = () => setSelectedIds(getGiftBoxIds());
    sync();
    window.addEventListener("giftbox-updated", sync);
    return () => window.removeEventListener("giftbox-updated", sync);
  }, []);

  const selectedProducts = useMemo(() => {
    const byId = new Map(products.map((product) => [product.id, product]));
    return selectedIds.map((id) => byId.get(id)).filter(Boolean);
  }, [selectedIds]);

  const handleRemove = (id: string) => {
    removeFromGiftBox(id);
  };

  const handleClear = () => {
    clearGiftBox();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.contactPerson.trim()) {
      setError("Contact person is required.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (selectedProducts.length === 0) {
      setError("Please add products to your Gift Box first.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: `${import.meta.env.VITE_WEB3FORMS_KEY}`,
          from_name: "Gift Box Inquiry",
          subject: `New Build Your Gift Box inquiry from ${formData.contactPerson}`,
          contact_person: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          company_name: formData.companyName,
          notes: formData.notes,
          selected_items: selectedProducts.map((item) => `${item?.name} (${item?.code})`).join(", "),
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error("Submission failed");
      }

      setSuccess("Great! Your gift box inquiry has been shared with our team.");
      clearGiftBox();
      setSelectedIds([]);
      setFormData({
        contactPerson: "",
        phone: "",
        email: "",
        companyName: "",
        notes: "",
      });
    } catch {
      setError("Unable to submit right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-24 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Build Your Gift Box</h1>
            <p className="mt-2 text-slate-600">
              Shortlist products and send one consolidated inquiry in a single step.
            </p>
          </div>
          {selectedProducts.length > 0 && (
            <button
              onClick={handleClear}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Clear Selection
            </button>
          )}
        </div>

        {selectedProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-slate-600">No products added yet. Start adding from the products page.</p>
            <Link
              to="/products"
              className="mt-4 inline-flex rounded-full bg-indigo-600 px-5 py-2.5 text-white font-semibold"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedProducts.map((item) => (
              <article key={item?.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="aspect-square rounded-lg bg-slate-50 overflow-hidden">
                  <img loading="lazy" decoding="async" src={item?.images[0]} alt={item?.name} className="h-full w-full object-contain p-2" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800 line-clamp-2">{item?.name}</p>
                <p className="mt-1 text-xs text-slate-500">{item?.code}</p>
                <button
                  onClick={() => item?.id && handleRemove(item.id)}
                  className="mt-3 w-full rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Send Inquiry For Selected Gift Box</h2>
          <form className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Contact Person (Required)"
              value={formData.contactPerson}
              onChange={(e) => setFormData((prev) => ({ ...prev, contactPerson: e.target.value }))}
              className="rounded-lg border border-slate-300 p-3 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number (Required)"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className="rounded-lg border border-slate-300 p-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="rounded-lg border border-slate-300 p-3 text-sm"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              value={formData.companyName}
              onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
              className="rounded-lg border border-slate-300 p-3 text-sm"
            />
            <textarea
              placeholder="Any notes for branding, quantity split, or delivery timeline (Optional)"
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              rows={4}
              className="sm:col-span-2 rounded-lg border border-slate-300 p-3 text-sm resize-none"
            />
            {error && <p className="sm:col-span-2 text-sm text-rose-600">{error}</p>}
            {success && <p className="sm:col-span-2 text-sm text-emerald-600">{success}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="sm:col-span-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white font-semibold disabled:opacity-60"
            >
              {isLoading ? "Submitting..." : "Submit Gift Box Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
