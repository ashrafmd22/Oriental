import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
}