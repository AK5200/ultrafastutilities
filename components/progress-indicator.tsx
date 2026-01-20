"use client";

import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

export function ProgressIndicator({ currentStep, totalSteps, onStepClick }: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isComplete = step < currentStep;
          const isCurrent = step === currentStep;
          
          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <button
                  onClick={() => onStepClick?.(step)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isComplete
                      ? "bg-green-500 border-green-500 text-white"
                      : isCurrent
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-gray-200 border-gray-300 text-gray-600"
                  }`}
                >
                  {isComplete ? <Check className="w-5 h-5" /> : step}
                </button>
                <span className="text-xs mt-2 text-gray-600">Step {step}</span>
              </div>
              {step < totalSteps && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    isComplete ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center mt-4 text-sm text-gray-600">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}
