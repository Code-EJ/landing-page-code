import { Shield, Mail, Phone, Building2, FileText, ScrollText } from "lucide-react";

const NOME_DA_EMPRESA = "Code Soluções em Tecnologia Júnior";
const EMAIL_CONTATO = "contato@juniorcode.com.br";
const TELEFONE_CONTATO = "+55 (82) 9918-6355";
const ENDERECO_EMPRESA = "R. Álvares Maciel, 628 - Santa Efigênia, Belo Horizonte - MG, 30150-250";
const DATA_ATUALIZACAO = "18 de agosto de 2025"; // atualize quando necessário

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
            {/* Skip to content */}
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow-lg dark:focus:bg-slate-800"
            >
                Ir para o conteúdo principal
            </a>

            {/* Header */}
            <header className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_80%_-10%,theme(colors.indigo.200/30),transparent)] dark:bg-[radial-gradient(60rem_40rem_at_80%_-10%,theme(colors.indigo.500/20),transparent)]" />
                <div className="mx-auto max-w-4xl px-4 pb-4 pt-12 sm:pb-8">
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
                        <div className="rounded-2xl bg-indigo-600/10 p-3 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-500/10">
                            <Shield className="h-7 w-7 text-indigo-600 dark:text-indigo-400" aria-hidden />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Política de Privacidade — Formulário de Contato</h1>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Última atualização: {DATA_ATUALIZACAO}</p>
                        </div>
                    </div>
                </div>
            </header>

            <section id="conteudo" className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-12 lg:gap-8">
                {/* SUMÁRIO (Sticky) */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-6 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <h2 className="mb-4 text-base font-medium text-slate-800 dark:text-slate-200">Sumário</h2>
                        <nav className="flex flex-wrap gap-2 text-sm">
                            {[
                                ["1. Escopo", "escopo"],
                                ["2. Dados Coletados", "dados"],
                                ["3. Finalidades de Uso", "finalidades"],
                                ["4. Base Legal (LGPD)", "base-legal"],
                                ["5. Compartilhamento", "compartilhamento"],
                                ["6. Segurança e Armazenamento", "seguranca"],
                                ["7. Retenção e Exclusão", "retencao"],
                                ["8. Direitos do Titular", "direitos"],
                                ["9. Cookies e Tecnologias", "cookies"],
                                ["10. Crianças e Adolescentes", "criancas"],
                                ["11. Alterações desta Política", "alteracoes"],
                                ["12. Como Falar Conosco", "contato"],
                            ].map(([label, id]) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="rounded-full border border-slate-200/70 px-3 py-1 underline-offset-4 transition hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500/60 dark:border-slate-700"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* CONTEÚDO */}
                <article className="prose prose-slate max-w-none leading-relaxed dark:prose-invert lg:col-span-8">
                    <h2 id="escopo" className="scroll-mt-28">1. Escopo</h2>
                    <p>
                        Esta Política de Privacidade descreve como a {NOME_DA_EMPRESA} coleta, utiliza, compartilha e protege os dados pessoais enviados por você por meio do nosso formulário de <strong>“Fale Conosco/Entre em Contato”</strong> disponível em nosso site e demais canais digitais relacionados.
                    </p>

                    <h2 id="dados" className="scroll-mt-28">2. Dados Coletados</h2>
                    <p>Podemos coletar os seguintes dados quando você envia o formulário:</p>
                    <ul className="not-prose grid list-outside grid-cols-1 gap-2 pl-5 sm:grid-cols-2">
                        <li>Nome completo</li>
                        <li>E-mail corporativo ou pessoal</li>
                        <li>Telefone</li>
                        <li>Empresa e cargo (se aplicável)</li>
                        <li>Conteúdo da mensagem/descrição do serviço desejado</li>
                        <li>Dados técnicos (ex.: endereço IP, data/hora do envio, user agent) para segurança e prevenção a fraudes</li>
                    </ul>

                    <h2 id="finalidades" className="scroll-mt-28">3. Finalidades de Uso</h2>
                    <ul className="not-prose list-outside grid grid-cols-1 gap-2 pl-5 sm:grid-cols-2">
                        <li>Responder ao seu contato e prestar atendimento</li>
                        <li>Elaborar propostas comerciais e esclarecer dúvidas</li>
                        <li>Melhorar nossos processos de suporte e relacionamento</li>
                        <li>Prevenir abusos, fraudes e incidentes de segurança</li>
                        <li>Cumprir obrigações legais e regulatórias</li>
                    </ul>

                    <h2 id="base-legal" className="scroll-mt-28">4. Base Legal (LGPD)</h2>
                    <p>Tratamos seus dados conforme a Lei nº 13.709/2018 (LGPD), com base em:</p>
                    <ul>
                        <li><strong>Consentimento</strong> (art. 7º, I) — quando você envia o formulário e concorda com esta Política;</li>
                        <li><strong>Legítimo interesse</strong> (art. 7º, IX) — para viabilizar o contato e o atendimento solicitado;</li>
                        <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II) — quando aplicável (ex.: retenção mínima de registros).</li>
                    </ul>

                    <h2 id="compartilhamento" className="scroll-mt-28">5. Compartilhamento</h2>
                    <p>Não vendemos ou alugamos seus dados. Podemos compartilhar com:</p>
                    <ul>
                        <li>Provedores de infraestrutura, e-mail, CRM e suporte, sempre sob contrato de confidencialidade e proteção de dados;</li>
                        <li>Autoridades públicas, quando exigido por lei, ordem judicial ou requisição administrativa;</li>
                        <li>Parceiros de negócio envolvidos na execução do serviço solicitado, observando os princípios da LGPD.</li>
                    </ul>

                    <h2 id="seguranca" className="scroll-mt-28">6. Segurança e Armazenamento</h2>
                    <ul>
                        <li>Criptografia em trânsito (HTTPS/TLS) e controles de acesso por perfil;</li>
                        <li>Monitoramento, registro de eventos e políticas de backup;</li>
                        <li>Treinamento periódico de equipe e revisões de segurança;</li>
                        <li>Armazenamento em provedores com padrões reconhecidos de segurança da informação.</li>
                    </ul>

                    <h2 id="retencao" className="scroll-mt-28">7. Retenção e Exclusão</h2>
                    <p>
                        Mantemos seus dados somente pelo tempo necessário para atender às finalidades declaradas e cumprir exigências legais. Você pode solicitar a exclusão, ressalvadas hipóteses de conservação por obrigação legal/regulatória, auditoria ou exercício de direitos.
                    </p>

                    <h2 id="direitos" className="scroll-mt-28">8. Direitos do Titular</h2>
                    <p>
                        De acordo com a LGPD, você pode solicitar: confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informações sobre compartilhamentos e revisão de decisões automatizadas. Para exercer seus direitos, entre em contato pelos canais abaixo.
                    </p>

                    <h2 id="cookies" className="scroll-mt-28">9. Cookies e Tecnologias</h2>
                    <p>
                        Nosso site pode utilizar cookies e tecnologias similares para melhorar a experiência, medir audiência e personalizar conteúdo. Você pode gerenciar preferências no seu navegador.
                    </p>

                    <h2 id="criancas" className="scroll-mt-28">10. Crianças e Adolescentes</h2>
                    <p>
                        Não coletamos intencionalmente dados de menores de 18 anos para fins comerciais por meio do formulário de contato. Se você é responsável por um menor e acredita que houve envio indevido de dados, solicite a exclusão pelos canais abaixo.
                    </p>

                    <h2 id="alteracoes" className="scroll-mt-28">11. Alterações desta Política</h2>
                    <p>
                        Esta Política pode ser atualizada a qualquer tempo para refletir mudanças legais, técnicas ou operacionais. A versão vigente será sempre a última publicada neste endereço, com indicação da data de atualização.
                    </p>

                    <h2 id="contato" className="scroll-mt-28">12. Como Falar Conosco</h2>
                    <div className="not-prose mt-4 grid gap-3">
                        <div className="flex items-center gap-2 text-sm">
                            <Building2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden />
                            <span>
                                {NOME_DA_EMPRESA} — {ENDERECO_EMPRESA}
                            </span>
                        </div>
                        <a
                            className="flex w-fit items-center gap-2 text-sm underline underline-offset-4 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                            href={`mailto:${EMAIL_CONTATO}`}
                        >
                            <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden /> {EMAIL_CONTATO}
                        </a>
                        <a
                            className="flex w-fit items-center gap-2 text-sm underline underline-offset-4 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                            href={`tel:${TELEFONE_CONTATO}`}
                        >
                            <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden /> {TELEFONE_CONTATO}
                        </a>
                    </div>

                    {/* FAQ */}
                    <div className="not-prose mt-8 divide-y rounded-2xl border border-slate-200/60 bg-white dark:border-slate-700 dark:bg-slate-900">
                        <details className="group p-4">
                            <summary className="flex cursor-pointer list-none items-center gap-2 font-medium transition hover:opacity-90">
                                <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden />
                                Preciso aceitar algo para enviar o formulário?
                            </summary>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                Ao enviar o formulário, você declara ter lido e concordado com esta Política de Privacidade.
                            </p>
                        </details>
                        <details className="group p-4">
                            <summary className="flex cursor-pointer list-none items-center gap-2 font-medium transition hover:opacity-90">
                                <ScrollText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden />
                                Posso solicitar a exclusão dos meus dados?
                            </summary>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                Sim. Basta nos contatar pelos canais acima. Observadas obrigações legais, eliminaremos ou anonimizaremos seus dados conforme aplicável.
                            </p>
                        </details>
                    </div>

                    <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
                        Esta página tem caráter informativo e não constitui assessoria jurídica. Para adequação completa à LGPD e demais normas aplicáveis ao seu negócio, consulte um(a) profissional especializado(a).
                    </p>
                </article>
            </section>

            {/* Rodapé sutil */}
            <footer className="border-t border-slate-200/70 bg-white/60 py-6 text-center text-xs text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                © {new Date().getFullYear()} {NOME_DA_EMPRESA}. Todos os direitos reservados.
            </footer>

            {/* Voltar ao topo */}
            <a
                href="#conteudo"
                className="fixed bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/60 dark:border-slate-700 dark:bg-slate-900"
                aria-label="Voltar ao topo"
            >
                ↑
            </a>
        </main>
    );
}
