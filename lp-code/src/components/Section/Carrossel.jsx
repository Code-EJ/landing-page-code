import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import img1 from "../../assets/images/cadeira1.webp"
import img2 from "../../assets/images/cadeira2.webp"
import img3 from "../../assets/images/cadeira3.webp"

// Registra o hook do GSAP 
gsap.registerPlugin(useGSAP);

const imagensOriginais = [
  /**
   * Essa lista deve conter todas as imagens na ordem que quer mostra-las.
   *  Por enquanto eu deixei imagens aleatorias de cadeiras porque não sei 
   * quais imagens serão usadas.
   * Não se deve usar links nessa lista, slave as imagens em assets/images 
   * e as import aqui, os links podem conter proteção e gerrar loop de erro
   *  infinito.
    */
  img1, img2, img3
];

/* 
    * Essa função carrega todo o carrocel, tanto suas funcionalidade quanto 
    * como ele deve aparecer na tela.
**/
export default function Carrossel() {
    const [imagensValidas, setImagensValidas] = useState([]);
    const [index, setIndex] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const containerRef = useRef(null);

    

    // Faz uma nova lista apenas com as imagens que estão funcionando.
    useGSAP(() => {
        const testarImagem = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => resolve(null);
            });
        };

        const validarTodas = async () => {
            const resultados = await Promise.all(imagensOriginais.map(testarImagem));
            const apenasValidas = resultados.filter((url) => url !== null);
            setImagensValidas(apenasValidas);
            setCarregando(false);
        };

        validarTodas();
    }, []); // Array vazio: roda apenas quando o componente monta

    // Pequena animação na troca de imagens
    useGSAP(() => {
        if (imagensValidas.length > 0) {
            const imagens = containerRef.current.querySelectorAll(".slide-img");
            imagensValidas.forEach((img) => {
                const isAtual = img.alt === "atual";
                // Anima todos os elementos com a classe "slide-img" dentro do container
                gsap.fromTo(imagens.alt, { 
                        opacity: 0, 
                        scale: 0.9 
                    },
                    {
                        opacity: isAtual ? 1 : 0.5,
                        scale: 1,
                        duration: 0.4, 
                        ease: "power2.out",
                        stagger: 0.05,
                        clearProps: "transform"
                    }
                );
            });
            
        }
        
        // Roda a animação toda vez que o 'index' mudar!
    }, { dependencies: [index], scope: containerRef }); 

    // Passa para a próxima imagem infinitamente.
    function proximo() {
        if (gsap.isTweening(".slide-img")) return;
        setIndex((prevIndex) => (prevIndex + 1) % imagensValidas.length);
    }
    function anterior() {
        if (gsap.isTweening(".slide-img")) return;
        setIndex((prevIndex) => (prevIndex - 1 + imagensValidas.length) % imagensValidas.length);
    }

    // Definindo teclas para que posse voltar e passar para a proxima imagem por elas
    // Ao entrar na pagina.
    
    const lidarComTeclado = (e) => {
        e.preventDefault()
        if (e.repeat) return;
        if (e.key === "ArrowLeft") {
            anterior();
        } else if (e.key === "ArrowRight") {
            proximo();
        }
    };

    const getSrcAnterior = () => imagensValidas[index - 1 < 0 ? imagensValidas.length - 1 : index - 1];
    const getSrcAtual = () => imagensValidas[index];
    const getSrcProxima = () => imagensValidas[index + 1 >= imagensValidas.length ? 0 : index + 1];

    /* Sainda padrão para enquanto carrega as imagens e depois caso não ache
    * nenhuma imagem válida.
    **/
    if (carregando) return <div style={{ textAlign: "center", padding: "50px" }}>
        Testando imagens...</div>;
    if (imagensValidas.length === 0) return <div style={{ textAlign: "center", 
        padding: "50px" }}>Nenhuma imagem pôde ser carregada.</div>;

    /* O return mostra como o carrocel irá sair, 3 imagens sendo as duas da ponta
    *  menores.
    **/
   return (
        <div ref={containerRef} tabIndex={0} onKeyDown={lidarComTeclado}> {/* Mensagens de erro e carregando caso necessário */}
            <div style={{ display: "flex", textAlign: "center", alignItems: "center", 
                gap: "10px", justifyContent: "center" }}>
                
                {/* Imagem anterior */}
                <img 
                    
                    className="slide-img"
                    src={getSrcAnterior()} 
                    alt="anterior" 
                    style={{ borderRadius: "12px", width: "25%", height: "200px", 
                        objectFit: "cover", boxShadow: "0 4px 8px rgb(110, 5, 170)", 
                        opacity: "0.5" }}
                />

                {/* Imagem Atual */}
                <img 
                    
                    className="slide-img" 
                    src={getSrcAtual()}
                    alt="atual" 
                    style={{ borderRadius: "12px", width: "40%", height: "300px", 
                        objectFit: "cover", boxShadow: "0 4px 15px rgb(110, 5, 170)",
                         zIndex: 1, opacity: "1"}}
                />

                {/* Próxima Imagem */}
                <img 
                    
                    className="slide-img" 
                    src={getSrcProxima()}
                    alt="proxima" 
                    style={{ borderRadius: "12px", width: "25%", height: "200px", 
                        objectFit: "cover", boxShadow: "0 4px 8px rgb(110, 5, 170)",
                         opacity: "0.5" }}
                />
            </div>

            {imagensValidas.length > 1 && (
                <div style={{ marginTop: "20px", display: "flex", justifyContent: 
                    "center", gap: "15px" }}>
                    <button onClick={anterior} style={estiloBotao}>⬅</button>
                    <button onClick={proximo} style={estiloBotao}>➡</button>
                </div>
            )}
        </div>
    );
}

// Estiliza os botões
const estiloBotao = {
    fontSize: "18px", padding: "10px 25px", cursor: "pointer",
    borderRadius: "8px", border: "none", backgroundColor: "rgb(110, 5, 170)",
    color: "white", fontWeight: "bold"
};