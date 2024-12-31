import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-start hover:bg-blue-50/80 p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
      <div className="text-blue-600 mt-1">{icon}</div>
      <div className="ml-3 sm:ml-4">
        <h3 className="font-semibold text-sm sm:text-base text-blue-600">{title}</h3>
        <div className="text-xs sm:text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg transform hover:scale-100 lg:hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600">Contact Information</h2>
      <div className="space-y-4 sm:space-y-5">
        <ContactItem icon={<MapPin className="w-5 h-5" />} title="Visit Us">
          <p>
            8769/14-B, Shidipura Karol Bagh <br />
            New Delhi, India 110005
          </p>
        </ContactItem>

        <ContactItem icon={<Phone className="w-5 h-5" />} title="Call Us">
          <a href="tel:+919899987779" className="hover:text-blue-600 transition-colors">
            +91 98999 87779
          </a>
        </ContactItem>

        <ContactItem icon={<Mail className="w-5 h-5" />} title="Email Us">
          <a href="mailto:orientalgifting@gmail.com" className="hover:text-blue-600 transition-colors">
            orientalgifting@gmail.com
          </a>
        </ContactItem>

        <ContactItem icon={<Clock className="w-5 h-5" />} title="Business Hours">
          <p>
            Monday - Friday: 9:00 AM - 7:00 PM<br />
            Saturday: 10:00 AM - 6:00 PM
          </p>
        </ContactItem>
      </div>
    </div>
  );
}