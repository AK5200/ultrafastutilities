"use client";

import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  onStepClick,
}: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      {/* Progress bar */}
      <div className="flex items-center gap-1 sm:gap-0">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isComplete = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <button
                onClick={() => onStepClick?.(step)}
                className={`relative flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                  isComplete
                    ? "bg-blue-600 text-white shadow-sm"
                    : isCurrent
                    ? "bg-blue-600 text-white ring-4 ring-blue-100 shadow-sm"
                    : "bg-slate-100 text-slate-400 border border-slate-200"
                }`}
              >
                {isComplete ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : step}
              </button>
              {step < totalSteps && (
                <div
                  className={`h-[2px] flex-1 mx-0.5 sm:mx-1 rounded-full transition-colors ${
                    isComplete ? "bg-blue-600" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step label */}
      <p className="text-center mt-4 text-xs sm:text-sm text-slate-500">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
