import React, { useState, useEffect } from 'react';
import { ContactHero } from './ContactHero';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Notification } from './Notification';
import { validateForm } from './FormValidation';

type NotificationType = 'success' | 'error';

interface NotificationState {
  show: boolean;
  type: NotificationType;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: 'success',
    message: '',
  });

  const [phoneBorderColor, setPhoneBorderColor] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));

    if (name === 'phone') {
      setPhoneBorderColor(/^\d{10}$/.test(value) ? 'border-green-500' : 'border-red-500');
    }

    if (name === 'email') {
      setEmailBorderColor(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? 'border-green-500'
          : 'border-red-500'
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    // Check if there are any non-empty error messages
    const hasErrors = Object.values(validationErrors).some(error => error !== '');

    if (hasErrors) {
      setErrors(validationErrors);
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fix the errors in the form',
      });

      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/submit-contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setPhoneBorderColor('');
        setEmailBorderColor('');
        setNotification({
          show: true,
          type: 'success',
          message: 'Message sent successfully!',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }

    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <ContactForm
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              emailBorderColor={emailBorderColor}
              phoneBorderColor={phoneBorderColor}
            />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2347834219097!2d77.2273!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1635835824092!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(prev => ({ ...prev, show: false }))}
        />
      )}
    </div>
  );
}