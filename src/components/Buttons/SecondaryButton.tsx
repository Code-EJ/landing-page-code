import React from 'react';

interface Props {
    label: string;
    icon?: React.ReactElement<{ size?: number }>;
    onPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondaryButton: React.FC<Props> = ({ label, icon, onPress }) => {
    const [iconSize, setIconSize] = React.useState<number>(20);

    React.useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setIconSize(Math.round(width * 0.05));
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <button
            onClick={onPress}
            className="flex items-center justify-center border-2 border-[#2A8C82] text-[#2A8C82] bg-white font-semibold py-2.5 px-6 rounded-lg hover:bg-fuchsia-50 transition"
        >
            {icon && React.cloneElement(icon, { size: iconSize })}
            <span className="ml-2 text-base">{label}</span>
        </button>
    );
};

export default SecondaryButton;
