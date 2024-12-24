interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

// Update the error interface to match the state structure
interface FormErrors {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function validateForm(formData: FormData): FormErrors {
  // Initialize all error fields as empty strings
  const errors: FormErrors = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  // Required field validation
  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}