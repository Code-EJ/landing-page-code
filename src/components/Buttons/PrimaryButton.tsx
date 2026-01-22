import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    label: string;
    to?: string; 
    onPress?: (event: React.MouseEvent<HTMLElement>) => void; 
}

const PrimaryButton: React.FC<Props> = ({ label, to, onPress }) => {
    const classes =
        "bg-[#2A8C82] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#202c2b] transition-colors inline-block text-center";

    if (to) {
        return (
            <Link to={to} onClick={onPress} className={classes}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={onPress} className={classes}>
            {label}
        </button>
    );
};

export default PrimaryButton;
