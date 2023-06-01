import React, { useState } from 'react';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div>
          <p className='w-full h-11 justify-center p-4 text-white'>{message}</p>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;