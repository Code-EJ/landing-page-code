import Header from '../components/Header';
import Hero from '../sections/Hero';
// import QuemSomos from '../sections/QuemSomos';
// import Parceiros from '../sections/Parceiros';
// import Auditorio from '../sections/Espaco';
// import Servicos from '../sections/Servicos';
// import ComoFunciona from '../sections/ComoFunciona';
// import Diferenciais from '../sections/Diferenciais';
// import CTA from '../sections/CTA';
// import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <QuemSomos />
            <Parceiros />
            {/* <main>
                <Hero />
                <Auditorio />
                <Servicos />
                <ComoFunciona />
                <Diferenciais />
                <CTA />
            </main>
            <Footer /> */}
        </>
    );
}