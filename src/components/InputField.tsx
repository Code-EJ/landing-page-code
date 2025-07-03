import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps {
    label: string;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    required?: boolean;
    multiline?: boolean;
    showError?: boolean;
    error?: string;
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    value = '',
    onChangeText,
    required = false,
    multiline = false,
    showError = false,
    error,
    secureTextEntry = false,
}) => {
    const [hidePassword, setHidePassword] = useState(true);

    const isError = (required && showError && value.trim() === '') || !!error;

    return (
        <div className="flex flex-col mt-4 w-full">
            <label className="font-semibold mb-1 text-sm text-gray-800">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative w-full">
            {multiline ? (
                <textarea
                    className={`
            min-h-[120px]
            w-full text-sm px-4 py-2 border rounded-md bg-white text-gray-900 placeholder:text-gray-400
            ${isError ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-primary-500
          `}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChangeText?.(e.target.value)}
                    rows={5}
                    onFocus={(e) => e.target.scrollIntoView({ behavior: 'smooth' })}
                />
            ) : (
                <input
                    className={`
            h-11
            w-full text-sm px-4 py-2 border rounded-md bg-white text-gray-900 placeholder:text-gray-400
            ${secureTextEntry ? 'pr-10' : ''}
            ${isError ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-primary-500
          `}
                    type={secureTextEntry && hidePassword ? 'password' : 'text'}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChangeText?.(e.target.value)}
                    onFocus={(e) => e.target.scrollIntoView({ behavior: 'smooth' })}
                />
            )}

                {secureTextEntry && !multiline && (
                    <button
                        type="button"
                        onClick={() => setHidePassword(!hidePassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {hidePassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>

            {isError && (
                <p className="text-sm text-red-500 mt-1">
                    {error || 'Este campo é obrigatório.'}
                </p>
            )}
        </div>
    );
};

export default InputField;
