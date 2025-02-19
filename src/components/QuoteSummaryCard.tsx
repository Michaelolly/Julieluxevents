import React from 'react';

interface QuoteItem {
  name: string;
  quantity: number;
  price: number;
}

interface QuoteSummaryCardProps {
  items?: QuoteItem[];
  eventDate?: string;
  eventType?: string;
  location?: string;
}

const QuoteSummaryCard: React.FC<QuoteSummaryCardProps> = ({
  items = [],
  eventDate = '',
  eventType = '',
  location = ''
}) => {
  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Quote Summary</h2>
      
      {/* Event Details */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Event Details</h3>
        <div className="space-y-2 text-gray-600">
          {eventType && <p><span className="font-medium">Event Type:</span> {eventType}</p>}
          {eventDate && <p><span className="font-medium">Date:</span> {eventDate}</p>}
          {location && <p><span className="font-medium">Location:</span> {location}</p>}
        </div>
      </div>

      {/* Equipment List */}
      {items.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Equipment</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between text-gray-600">
                <span>{item.name} x{item.quantity}</span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Total */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">₦{calculateTotal().toLocaleString()}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6">
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => {/* Handle submission */}}
        >
          Submit Quote Request
        </button>
      </div>
    </div>
  );
};

export default QuoteSummaryCard;
