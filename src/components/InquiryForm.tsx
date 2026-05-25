"use client";

import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

interface InquiryFormProps {
  prefilledMurti?: string;
}

export default function InquiryForm({ prefilledMurti = "" }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    murtiType: prefilledMurti || "Eco-Friendly Clay Ganesha",
    size: "2 Feet",
    customRequirements: "",
    deliveryOption: "Home Delivery"
  });

  const [submitted, setSubmitted] = useState(false);

  // Update prefilled value if it changes from parent
  React.useEffect(() => {
    if (prefilledMurti) {
      setFormData(prev => ({ ...prev, murtiType: prefilledMurti }));
    }
  }, [prefilledMurti]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      showSuccess("Inquiry submitted successfully! Our artisan will contact you shortly.");
    }, 800);
  };

  return (
    <section id="inquiry" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Info & Promise */}
          <div className="md:col-span-5 bg-gradient-to-br from-stone-900 to-stone-950 p-8 sm:p-12 text-white flex flex-col justify-between relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:12px_12px]" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">Book Your Divine Blessing</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Fill out the form to reserve your Ganesha idol or request a custom design. Our master artisans will get in touch with you to discuss details, colors, and delivery.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-stone-800 space-y-4 text-xs text-stone-400">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>100% Refundable booking deposit</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Video updates during sculpting process</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Eco-friendly immersion guide included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 p-8 sm:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900">Thank You, Devotee!</h4>
                <p className="text-stone-600 max-w-sm">
                  Your booking inquiry has been received. Our master artisan will call you within 24 hours to finalize your Ganesha Murti details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl transition-colors text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-stone-900">Inquiry & Customization Form</h4>
                  <p className="text-stone-500 text-xs">Please provide your details and preferences below.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Murti Style / Type</label>
                    <select
                      value={formData.murtiType}
                      onChange={(e) => setFormData({ ...formData, murtiType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm bg-white"
                    >
                      <option value="Eco-Friendly Clay Ganesha">Eco-Friendly Clay Ganesha</option>
                      <option value="Traditional Ornate Ganesha">Traditional Ornate Ganesha</option>
                      <option value="Premium Marble Finish Ganesha">Premium Marble Finish Ganesha</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Preferred Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm bg-white"
                    >
                      <option value="1 Foot to 1.5 Feet">1 Foot to 1.5 Feet</option>
                      <option value="2 Feet">2 Feet (Standard Home)</option>
                      <option value="2.5 Feet">2.5 Feet</option>
                      <option value="3 Feet">3 Feet</option>
                      <option value="4 Feet+">4 Feet+ (Pandal / Community)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Custom Requirements / Notes</label>
                  <textarea
                    rows={3}
                    value={formData.customRequirements}
                    onChange={(e) => setFormData({ ...formData, customRequirements: e.target.value })}
                    placeholder="Describe any specific colors, poses, ornaments, or custom requests..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-950/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  Submit Booking Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}