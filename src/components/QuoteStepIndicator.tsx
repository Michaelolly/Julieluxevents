import React from 'react';

interface QuoteStepIndicatorProps {
  currentStep?: number;
}

const steps = [
  'Event Details',
  'Equipment Selection',
  'Review & Submit'
];

const QuoteStepIndicator: React.FC<QuoteStepIndicatorProps> = ({ currentStep = 1 }) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${index + 1 <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'}`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">{step}</span>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-4 
                  ${index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuoteStepIndicator;
