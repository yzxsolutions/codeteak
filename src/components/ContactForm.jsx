import React, { useState, useEffect } from 'react';

const TerminalForm = () => {
  const [step, setStep] = useState('email'); // Start with email input
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(null); // null, true, or false

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Live validation for email
  useEffect(() => {
    if (step === 'email' && currentInput.trim()) {
      const isValid = validateEmail(currentInput);
      setEmailValid(isValid);
    } else if (step === 'email' && !currentInput.trim()) {
      setEmailValid(null);
    }
  }, [currentInput, step]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (step === 'email' && currentInput.trim() && validateEmail(currentInput)) {
        setEmail(currentInput);
        setCurrentInput('');
        setEmailValid(null);
        setStep('name');
      } else if (step === 'name' && currentInput.trim()) {
        setName(currentInput);
        setCurrentInput('');
        setStep('message');
      } else if (step === 'message') {
        setMessage(currentInput);
        setCurrentInput('');
        setStep('submit');
      } else if (step === 'submit') {
        setSubmitted(true);
        setStep('success');
      }
    }
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const getValidationMessage = () => {
    if (emailValid === true) {
      return (
        <div className="flex items-center mb-2">
          <span className="text-green-400 mr-2">✓</span>
          <span className="text-green-400 text-xs">Valid email address</span>
        </div>
      );
    } else if (emailValid === false) {
      return (
        <div className="flex items-center mb-2">
          <span className="text-red-400 mr-2">✗</span>
          <span className="text-red-400 text-xs">Invalid email format</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center  p-2 sm:p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 border-b border-gray-700">
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-xs sm:text-sm font-medium">contact : Info@codeteak.com</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-gray-900 p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm min-h-[400px] sm:min-h-[500px]">
            {/* Welcome Message */}
            <div className="mb-3 sm:mb-4">
              <span className="text-green-400">~ </span>
              <span className="text-white break-words">
                Hey there! We're excited to link 🔗
              </span>
            </div>

            {/* Divider */}
            <div className="text-gray-600 mb-3 sm:mb-4 overflow-hidden">
              <div className="hidden sm:block">
                ═══════════════════════════════════════════════════════════════════════════════
              </div>
              <div className="sm:hidden">
                ═══════════════════════════════════
              </div>
            </div>

            <div className="mb-2">
              <span className="text-white break-words">To start, could you give us your email?</span>
            </div>

            {/* Email Input */}
            {step === 'email' && (
              <>
                <div className="flex items-center mb-2">
                  <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                  <input
                    type="email"
                    value={currentInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter email:"
                    className="bg-transparent text-white outline-none flex-1 placeholder-gray-500 min-w-0"
                    autoFocus
                  />
                  {showCursor && <span className="text-white animate-pulse ml-1">|</span>}
                </div>
                {getValidationMessage()}
                {emailValid === false && currentInput.trim() && (
                  <div className="mb-2">
                    <span className="text-gray-500 text-xs break-words">Press Enter when email is valid to continue...</span>
                  </div>
                )}
              </>
            )}

            {/* Show entered email */}
            {(step === 'name' || step === 'message' || step === 'submit' || step === 'success') && (
              <>
                <div className="flex items-center mb-2">
                  <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                  <span className="text-white break-all">{email}</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">✓</span>
                  <span className="text-green-400 text-xs">Email validated</span>
                </div>
              </>
            )}

            {/* Name Question */}
            {(step === 'name' || step === 'message' || step === 'submit' || step === 'success') && (
              <div className="mb-2 mt-3 sm:mt-4">
                <span className="text-white break-words">Great! Now, what's your name?</span>
              </div>
            )}

            {/* Name Input */}
            {step === 'name' && (
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter name:"
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500 min-w-0"
                  autoFocus
                />
                {showCursor && <span className="text-white animate-pulse ml-1">|</span>}
              </div>
            )}

            {/* Show entered name */}
            {(step === 'message' || step === 'submit' || step === 'success') && (
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                <span className="text-white break-words">{name}</span>
              </div>
            )}

            {/* Message Question */}
            {(step === 'message' || step === 'submit' || step === 'success') && (
              <div className="mb-2 mt-3 sm:mt-4">
                <span className="text-white break-words">Any message you'd like to share? (optional)</span>
              </div>
            )}

            {/* Message Input */}
            {step === 'message' && (
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter message (or press Enter to skip):"
                  className="bg-transparent text-white outline-none flex-1 placeholder-gray-500 min-w-0"
                  autoFocus
                />
                {showCursor && <span className="text-white animate-pulse ml-1">|</span>}
              </div>
            )}

            {/* Show entered message */}
            {(step === 'submit' || step === 'success') && message && (
              <div className="flex items-start mb-3 sm:mb-4">
                <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                <span className="text-white break-words">{message}</span>
              </div>
            )}

            {/* Show skipped message */}
            {(step === 'submit' || step === 'success') && !message && (
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                <span className="text-gray-500 italic">[message skipped]</span>
              </div>
            )}

            {/* Submit prompt */}
            {step === 'submit' && !submitted && (
              <>
                <div className="mb-2 mt-3 sm:mt-4">
                  <span className="text-white break-words">Perfect! Press Enter to submit...</span>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                  <input
                    type="text"
                    value=""
                    onKeyPress={handleKeyPress}
                    className="bg-transparent text-white outline-none flex-1 min-w-0"
                    autoFocus
                  />
                  {showCursor && <span className="text-white animate-pulse ml-1">|</span>}
                </div>
              </>
            )}

            {/* Success Message */}
            {step === 'success' && submitted && (
              <div className="mt-4 sm:mt-6 space-y-2">
                <div className="text-green-400">
                  ✓ Form submitted successfully!
                </div>
                <div className="text-gray-300 break-words">
                  Thank you, {name}! We'll be in touch at {email}
                </div>
                {message && (
                  <div className="text-gray-400 break-words">
                    Message received: "{message}"
                  </div>
                )}
                <div className="text-gray-600 mt-3 sm:mt-4 overflow-hidden">
                  <div className="hidden sm:block">
                    ═══════════════════════════════════════════════════════════════════════════════
                  </div>
                  <div className="sm:hidden">
                    ═══════════════════════════════════
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-1 sm:mr-2 flex-shrink-0">&gt; ~ </span>
                  <span className="text-gray-500">Connection established...</span>
                  {showCursor && <span className="text-green-400 animate-pulse ml-1">|</span>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm px-2">
          <div className="hidden sm:block">
            Press Tab to navigate • Enter to submit • Valid email required to proceed
          </div>
          <div className="sm:hidden space-y-1">
            <div>Enter to submit</div>
            <div>Valid email required</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalForm;