import React from 'react';

import { Link } from "react-router"

interface Props {
    label: string
    to: string
    onPress: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PrimaryLinkButton: React.FC<Props> = ({ label, onPress, to }) => {
    return (
        <Link
            onClick={onPress}
            to={ to }
            className="bg-[#2A8C82] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#202c2b] transition-colors"
        >
            {label}
        </Link>
    );
};

export default PrimaryLinkButton;
