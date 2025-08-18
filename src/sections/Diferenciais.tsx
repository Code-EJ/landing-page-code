import React from "react";
import { Briefcase } from "lucide-react";

const Diferenciais = () => {
    const items = [
        {
            title: "Muitos Componentes Úteis",
            description:
                "O Startup Framework contém componentes e blocos complexos que podem ser facilmente integrados em quase qualquer design.",
        },
        {
            title: "Muitos Componentes Úteis",
            description:
                "O Startup Framework contém componentes e blocos complexos que podem ser facilmente integrados em quase qualquer design.",
        },
        {
            title: "Muitos Componentes Úteis",
            description:
                "O Startup Framework contém componentes e blocos complexos que podem ser facilmente integrados em quase qualquer design.",
        },
        {
            title: "Muitos Componentes Úteis",
            description:
                "O Startup Framework contém componentes e blocos complexos que podem ser facilmente integrados em quase qualquer design.",
        },
        {
            title: "Muitos Componentes Úteis",
            description:
                "O Startup Framework contém componentes e blocos complexos que podem ser facilmente integrados em quase qualquer design.",
        },
    ];

    return (
        <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-purple-900 mb-12">
                Diferenciais da CODE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <Briefcase className="w-14 h-14 text-pink-500 mb-4" />
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-neutral-500 max-w-xs">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Diferenciais;
