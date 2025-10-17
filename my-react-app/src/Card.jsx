import React from 'react';

/**
 * A flexible, reusable Card component.
 * It uses props.children to display any content passed into it.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 */
const Card = ({ children, className = '' }) => {
  // Define base classes for a clean, consistent card look.
  const baseClasses =
    'bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl';

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;