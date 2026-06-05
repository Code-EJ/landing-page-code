import { type CSSProperties } from "react";

export const carouselStyles: Record<string, CSSProperties> = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        outline: "none", // Remove outline do tabIndex
    },
    track: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        perspective: "1000px", // Prepara para efeitos de profundidade se desejar
    },
    // O Container que dita o tamanho
    imageWrapper: {
        position: "relative",
        overflow: "hidden", // Garante que nada saia do box
        borderRadius: "16px",
        backgroundColor: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    // Estilo da Tag IMG dentro do Wrapper
    responsiveImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // O "segredo" para não esticar
        objectPosition: "center",
        display: "block",
    },
    // Dimensões fixas para manter simetria
    mainImage: {
        width: "45%",
        maxWidth: "600px",
        aspectRatio: "16 / 9", // Proporção áurea aproximada ou 16:9
        boxShadow: "0 12px 40px rgba(110, 5, 170, 0.3)",
        zIndex: 2,
    },
    sideImage: {
        width: "20%",
        maxWidth: "280px",
        aspectRatio: "16 / 10", // DEVE ser a mesma proporção da principal
        zIndex: 1,
    },
    controls: {
        display: "flex",
        gap: "16px",
    },
    button: {
        padding: "12px 32px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "rgb(110, 5, 170)",
        color: "white",
        fontWeight: "bold",
        transition: "transform 0.2s ease",
    }
};