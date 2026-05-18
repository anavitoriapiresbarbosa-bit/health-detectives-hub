import { createFileRoute } from "@tanstack/react-router";
import { Share2, Facebook, Twitter, MessageCircle, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/noticia")({
  head: () => ({
    meta: [
      { title: "Dependência química: entrevista revela os desafios do tratamento — G1" },
      { name: "description", content: "Entrevista exclusiva sobre dependentes químicos, recuperação e o papel da família no processo." },
    ],
  }),
  component: NoticiaPage,
});

function NoticiaPage() {
  return (
    <div className="min-h-screen bg-white text-[#333]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Top bar */}
      <div className="bg-[#c4170c] text-white text-xs">
        <div className="max-w-[980px] mx-auto px-4 py-2 flex items-center justify-between">
          <span>g1 › Saúde › Bem Estar</span>
          <span className="hidden sm:inline">domingo, 18/05/2026</span>
        </div>
      </div>

      {/* Header G1 */}
      <header className="border-b-2 border-[#c4170c] bg-white">
        <div className="max-w-[980px] mx-auto px-4 py-4 flex items-center gap-6">
          <div className="flex items-baseline gap-1">
            <span className="text-[#c4170c] font-black text-4xl leading-none tracking-tight">g</span>
            <span className="text-[#c4170c] font-black text-4xl leading-none tracking-tight">1</span>
          </div>
          <nav className="hidden md:flex gap-4 text-sm font-semibold text-[#333]">
            <a className="hover:text-[#c4170c]" href="#">últimas</a>
            <a className="hover:text-[#c4170c]" href="#">política</a>
            <a className="hover:text-[#c4170c]" href="#">economia</a>
            <a className="hover:text-[#c4170c]" href="#">saúde</a>
            <a className="hover:text-[#c4170c]" href="#">educação</a>
            <a className="hover:text-[#c4170c]" href="#">mundo</a>
          </nav>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-4 py-8">
        {/* Chapéu */}
        <p className="text-[#c4170c] text-sm font-bold uppercase tracking-wide mb-2">
          Saúde · Dependência Química
        </p>

        {/* Título */}
        <h1
          className="text-[#333] font-bold leading-tight mb-4"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "2.25rem" }}
        >
          'A recuperação é diária': entrevista revela bastidores da luta contra a dependência química
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-[#555] leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif" }}>
          Em conversa exclusiva, especialistas e ex-dependentes contam como o apoio
          familiar, o tratamento médico e os grupos de ajuda mútua transformam
          histórias marcadas pelo vício.
        </p>

        {/* Autor/data */}
        <div className="flex items-center justify-between flex-wrap gap-3 py-3 border-y border-gray-200 text-xs text-[#666] mb-6">
          <div>
            <p>
              Por <span className="text-[#c4170c] font-semibold">Redação g1</span>
            </p>
            <p className="flex items-center gap-1 mt-1">
              <Clock className="h-3 w-3" /> 18/05/2026 09h32 · Atualizado há 2 horas
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#666] mr-1">Compartilhe:</span>
            <button className="h-8 w-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center"><Facebook className="h-4 w-4" /></button>
            <button className="h-8 w-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center"><Twitter className="h-4 w-4" /></button>
            <button className="h-8 w-8 rounded-full bg-[#25d366] text-white flex items-center justify-center"><MessageCircle className="h-4 w-4" /></button>
            <button className="h-8 w-8 rounded-full bg-[#666] text-white flex items-center justify-center"><Mail className="h-4 w-4" /></button>
          </div>
        </div>

        {/* Imagem destacada */}
        <figure className="mb-6">
          <div className="w-full aspect-video bg-gradient-to-br from-gray-700 via-gray-500 to-gray-400 flex items-center justify-center">
            <span className="text-white/80 text-sm">[ Imagem da entrevista ]</span>
          </div>
          <figcaption className="text-xs text-[#666] mt-2 border-l-2 border-[#c4170c] pl-2">
            Especialista durante entrevista sobre tratamento de dependentes químicos. — Foto: Divulgação
          </figcaption>
        </figure>

        {/* Corpo */}
        <article className="space-y-5 text-[17px] leading-[1.7] text-[#333]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          <p>
            A dependência química é hoje um dos maiores desafios de saúde pública no
            Brasil. Segundo dados recentes, milhões de famílias convivem direta ou
            indiretamente com o problema, que vai muito além do uso de substâncias —
            envolve aspectos sociais, emocionais e biológicos.
          </p>

          <p>
            Em entrevista ao <strong>g1</strong>, profissionais que atuam na linha de
            frente do tratamento explicaram como funciona o processo de recuperação
            e o porquê de a abstinência, sozinha, não ser suficiente.
          </p>

          <h2 className="text-2xl font-bold text-[#333] mt-8 mb-2">
            'O vício é uma doença, não uma escolha'
          </h2>

          <p>
            "Precisamos quebrar o estigma. O dependente químico não é alguém sem
            força de vontade — é uma pessoa doente que precisa de cuidado médico,
            psicológico e do amparo da família", afirma a entrevistada.
          </p>

          <blockquote className="border-l-4 border-[#c4170c] pl-4 my-6 italic text-[#444] text-xl" style={{ fontFamily: "Georgia, serif" }}>
            "Cada dia limpo é uma vitória. A recuperação não tem linha de chegada,
            ela é construída todos os dias."
          </blockquote>

          <h2 className="text-2xl font-bold text-[#333] mt-8 mb-2">
            O papel da família
          </h2>

          <p>
            Um dos pontos centrais destacados na entrevista foi a importância do
            ambiente familiar. Famílias que recebem orientação técnica e participam
            de grupos de apoio aumentam significativamente as chances de recuperação
            do dependente.
          </p>

          <p>
            "Muitas vezes a família também precisa de tratamento. O sofrimento é
            compartilhado, e a cura também deve ser", complementou o especialista.
          </p>

          <h2 className="text-2xl font-bold text-[#333] mt-8 mb-2">
            Onde buscar ajuda
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li><strong>CAPS AD</strong> — Centros de Atenção Psicossocial Álcool e Drogas (SUS)</li>
            <li><strong>CVV</strong> — Centro de Valorização da Vida: ligue <strong>188</strong></li>
            <li><strong>Narcóticos Anônimos</strong> e <strong>Alcoólicos Anônimos</strong></li>
            <li>Unidades Básicas de Saúde (UBS) do seu município</li>
          </ul>

          <p className="text-sm text-[#666] mt-8 pt-4 border-t border-gray-200">
            <em>Esta reportagem tem caráter informativo. Em caso de crise, procure
            imediatamente um serviço de saúde ou ligue para o 188.</em>
          </p>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Dependência Química", "Saúde", "Família", "Tratamento", "CAPS"].map((t) => (
            <span key={t} className="text-xs bg-gray-100 text-[#333] px-3 py-1 rounded-sm border border-gray-200 hover:bg-gray-200 cursor-pointer">
              {t}
            </span>
          ))}
        </div>

        {/* Compartilhar rodapé */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-3">
          <Share2 className="h-5 w-5 text-[#666]" />
          <span className="text-sm text-[#666]">Compartilhe esta reportagem</span>
        </div>

        {/* Veja também */}
        <section className="mt-10">
          <h3 className="text-lg font-bold border-l-4 border-[#c4170c] pl-2 mb-4">Veja também</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Conheça os sinais de alerta da dependência química na adolescência",
              "Especialistas explicam como abordar um familiar dependente",
              "Tratamentos pelo SUS: como funciona o atendimento gratuito",
              "Histórias de superação: 'reencontrei minha família depois de 10 anos'",
            ].map((t) => (
              <a key={t} href="#" className="flex gap-3 group">
                <div className="w-24 h-20 bg-gray-300 flex-shrink-0" />
                <p className="text-sm text-[#333] group-hover:text-[#c4170c] leading-snug" style={{ fontFamily: "Georgia, serif" }}>
                  {t}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-gray-400 text-xs mt-12 py-6">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          © Mockup ilustrativo no estilo g1 — uso educacional/demonstrativo
        </div>
      </footer>
    </div>
  );
}
