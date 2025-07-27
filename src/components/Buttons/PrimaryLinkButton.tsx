import React from 'react';

interface Props {
    label: string;
    onPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryLinkButton: React.FC<Props> = ({ label, onPress }) => {
    return (
        <button
            onClick={onPress}
            className="bg-[#2A8C82] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#202c2b] transition-colors"
        >
            {label}
        </button>
    );
};

export default PrimaryLinkButton;
