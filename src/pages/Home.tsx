//import Auditorio from '../sections/Auditorio';
import ComoFunciona from '../sections/ComoFunciona';
import CTA from '../sections/CTA';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import QuemSomos from '../sections/QuemSomos';
import Parceiros from '../sections/Parceiros';
import SecaoNossosServicos from '../sections/SecaoNossosServicos';
import Diferenciais from '../sections/Diferenciais';


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <QuemSomos />
            <Parceiros />
            {/*<Auditorio />*/}
            <SecaoNossosServicos />
            <ComoFunciona />
            <Diferenciais />
            <CTA />
            <Footer />
        </>
    );
}
