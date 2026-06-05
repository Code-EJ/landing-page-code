// quando a issue #99 tiver pronta, descomentar a linha abaixo
// import Container from 'lp-code/components/container'; 

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 border-b border-gray-200">
        
        {/* substituir esta div pelo <container> quando for mergeado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* inverte os lados no desktop */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                
                {/* lado do texto */}
                <article className="w-full md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-gray-800">[titulo about]</h2>
                    <p className="text-gray-600 leading-relaxed">
                        [primeiro paragrafo]
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        [segundo paragrafo]
                    </p>
                </article>

                {/* lado da imagem, fica em cima no mobile  */}
                <div className="w-full md:w-1/2 h-72 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-500 font-medium">[imagem referente]</span>
                </div>

            </div>

        </div>
    </section>
  );
}