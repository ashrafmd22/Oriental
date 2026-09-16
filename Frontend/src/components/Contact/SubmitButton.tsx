import { LoadingSpinner } from './LoadingSpinner';
import { submitButtonClass } from '../formStyles';

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={submitButtonClass}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span className="ml-2">Sending...</span>
        </>
      ) : (
        'Send Message'
      )}
    </button>
  );
}
