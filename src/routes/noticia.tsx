import { createFileRoute } from "@tanstack/react-router";
import { Share2, Facebook, Twitter, MessageCircle, Mail, Clock, Eye, Heart, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-[#c4170c] via-[#ff4d3d] to-[#ffb800] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top bar */}
      <div className="bg-[#c4170c] text-white text-xs">
        <div className="max-w-[980px] mx-auto px-4 py-2 flex items-center justify-between">
          <span className="animate-fade-in">g1 › Saúde › Bem Estar</span>
          <span className="hidden sm:inline animate-fade-in">domingo, 18/05/2026</span>
        </div>
      </div>

      {/* Header G1 */}
      <header className="border-b-2 border-[#c4170c] bg-white sticky top-1 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="max-w-[980px] mx-auto px-4 py-3 flex items-center gap-6">
          <div className="flex items-baseline gap-0 hover-scale cursor-pointer">
            <span className="text-[#c4170c] font-black text-4xl leading-none tracking-tight">g</span>
            <span className="text-[#c4170c] font-black text-4xl leading-none tracking-tight">1</span>
          </div>
          <nav className="hidden md:flex gap-5 text-sm font-semibold text-[#333]">
            {["últimas", "política", "economia", "saúde", "educação", "mundo"].map((item) => (
              <a key={item} className="story-link hover:text-[#c4170c] transition-colors" href="#">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-4 py-8">
        {/* Chapéu */}
        <p className="text-[#c4170c] text-sm font-bold uppercase tracking-wide mb-3 animate-fade-in">
          ● Saúde · Dependência Química
        </p>

        {/* Título */}
        <h1
          className="text-[#1a1a1a] font-bold leading-tight mb-4 animate-fade-in"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          'A recuperação é diária': entrevista revela bastidores da luta contra a dependência química
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in"
          style={{ fontFamily: "Georgia, serif", animationDelay: "160ms", animationFillMode: "backwards" }}
        >
          Em conversa exclusiva, especialistas e ex-dependentes contam como o apoio
          familiar, o tratamento médico e os grupos de ajuda mútua transformam
          histórias marcadas pelo vício.
        </p>

        {/* Autor/data */}
        <div className="flex items-center justify-between flex-wrap gap-3 py-3 border-y border-gray-200 text-xs text-[#666] mb-6 animate-fade-in" style={{ animationDelay: "240ms", animationFillMode: "backwards" }}>
          <div>
            <p>
              Por <span className="text-[#c4170c] font-semibold story-link cursor-pointer">Redação g1</span>
            </p>
            <p className="flex items-center gap-1 mt-1">
              <Clock className="h-3 w-3" /> 18/05/2026 09h32 · Atualizado há 2 horas
              <span className="ml-2 flex items-center gap-1"><Eye className="h-3 w-3" /> 12.4k</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {[
              { Icon: Facebook, bg: "#3b5998" },
              { Icon: Twitter, bg: "#1da1f2" },
              { Icon: MessageCircle, bg: "#25d366" },
              { Icon: Mail, bg: "#666" },
            ].map(({ Icon, bg }, i) => (
              <button
                key={i}
                className="h-8 w-8 rounded-full text-white flex items-center justify-center hover-scale transition-transform"
                style={{ backgroundColor: bg }}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Imagem destacada */}
        <figure className="mb-6 animate-fade-in" style={{ animationDelay: "320ms", animationFillMode: "backwards" }}>
          <div className="w-full aspect-video bg-gradient-to-br from-[#1a1a1a] via-[#4a3a3a] to-[#c4170c] flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_50%)]" />
            <span className="text-white/90 text-sm font-medium relative z-10 group-hover:scale-110 transition-transform duration-500">[ Imagem da entrevista ]</span>
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2 py-1 text-[10px] text-white rounded">▶ VÍDEO 04:32</div>
          </div>
          <figcaption className="text-xs text-[#666] mt-2 border-l-2 border-[#c4170c] pl-2">
            Especialista durante entrevista sobre tratamento de dependentes químicos. — Foto: Divulgação
          </figcaption>
        </figure>

        {/* Action bar (curtir / salvar) */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <button
            onClick={() => setLiked((v) => !v)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover-scale ${
              liked ? "bg-[#c4170c] text-white border-[#c4170c]" : "bg-white text-[#333] border-gray-300 hover:border-[#c4170c]"
            }`}
          >
            <Heart className={`h-4 w-4 transition-transform ${liked ? "fill-current scale-110" : ""}`} />
            <span className="text-sm font-semibold">{liked ? "Curtido" : "Curtir"}</span>
          </button>
          <button
            onClick={() => setSaved((v) => !v)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover-scale ${
              saved ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#333] border-gray-300 hover:border-[#1a1a1a]"
            }`}
          >
            <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
            <span className="text-sm font-semibold">{saved ? "Salvo" : "Salvar"}</span>
          </button>
        </div>

        {/* Corpo */}
        <article className="space-y-5 text-[17px] leading-[1.75] text-[#1a1a1a]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          <Reveal>
            <p>
              <span className="float-left text-6xl font-bold text-[#c4170c] leading-none mr-2 mt-1" style={{ fontFamily: "Georgia, serif" }}>
                A
              </span>
              dependência química é hoje um dos maiores desafios de saúde pública no
              Brasil. Segundo dados recentes, milhões de famílias convivem direta ou
              indiretamente com o problema, que vai muito além do uso de substâncias —
              envolve aspectos sociais, emocionais e biológicos.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Em entrevista ao <strong>g1</strong>, profissionais que atuam na linha de
              frente do tratamento explicaram como funciona o processo de recuperação
              e o porquê de a abstinência, sozinha, não ser suficiente.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-2">
              'O vício é uma doença, não uma escolha'
            </h2>
          </Reveal>

          <Reveal>
            <p>
              "Precisamos quebrar o estigma. O dependente químico não é alguém sem
              força de vontade — é uma pessoa doente que precisa de cuidado médico,
              psicológico e do amparo da família", afirma a entrevistada.
            </p>
          </Reveal>

          <Reveal>
            <blockquote className="relative border-l-4 border-[#c4170c] pl-6 py-4 my-8 italic text-[#333] text-xl bg-gradient-to-r from-[#fff5f4] to-transparent rounded-r-lg" style={{ fontFamily: "Georgia, serif" }}>
              <span className="absolute -top-2 -left-2 text-6xl text-[#c4170c]/30 leading-none">"</span>
              Cada dia limpo é uma vitória. A recuperação não tem linha de chegada,
              ela é construída todos os dias.
            </blockquote>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-2">
              O papel da família
            </h2>
          </Reveal>

          <Reveal>
            <p>
              Um dos pontos centrais destacados na entrevista foi a importância do
              ambiente familiar. Famílias que recebem orientação técnica e participam
              de grupos de apoio aumentam significativamente as chances de recuperação
              do dependente.
            </p>
          </Reveal>

          <Reveal>
            <p>
              "Muitas vezes a família também precisa de tratamento. O sofrimento é
              compartilhado, e a cura também deve ser", complementou o especialista.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-2">
              Onde buscar ajuda
            </h2>
          </Reveal>

          <Reveal>
            <ul className="space-y-2">
              {[
                ["CAPS AD", "Centros de Atenção Psicossocial Álcool e Drogas (SUS)"],
                ["CVV", "Centro de Valorização da Vida — ligue 188"],
                ["NA / AA", "Narcóticos Anônimos e Alcoólicos Anônimos"],
                ["UBS", "Unidades Básicas de Saúde do seu município"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#fff5f4] hover:border-[#c4170c]/30 border border-transparent transition-all duration-200 hover-scale">
                  <span className="font-bold text-[#c4170c] min-w-[80px]">{t}</span>
                  <span className="text-[#333] text-base" style={{ fontFamily: "Arial, sans-serif" }}>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className="text-sm text-[#666] mt-8 pt-4 border-t border-gray-200">
              <em>Esta reportagem tem caráter informativo. Em caso de crise, procure
              imediatamente um serviço de saúde ou ligue para o 188.</em>
            </p>
          </Reveal>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Dependência Química", "Saúde", "Família", "Tratamento", "CAPS"].map((t, i) => (
            <span
              key={t}
              className="text-xs bg-gray-100 text-[#333] px-3 py-1.5 rounded-sm border border-gray-200 hover:bg-[#c4170c] hover:text-white hover:border-[#c4170c] cursor-pointer transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
            >
              #{t}
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
          <h3 className="text-lg font-bold border-l-4 border-[#c4170c] pl-3 mb-4">Veja também</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Conheça os sinais de alerta da dependência química na adolescência", "from-blue-400 to-blue-700"],
              ["Especialistas explicam como abordar um familiar dependente", "from-emerald-400 to-emerald-700"],
              ["Tratamentos pelo SUS: como funciona o atendimento gratuito", "from-amber-400 to-amber-700"],
              ["Histórias de superação: 'reencontrei minha família depois de 10 anos'", "from-rose-400 to-rose-700"],
            ].map(([t, grad], i) => (
              <a key={t} href="#" className="flex gap-3 group hover-scale">
                <div className={`w-24 h-20 bg-gradient-to-br ${grad} flex-shrink-0 rounded-sm overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <p className="text-sm text-[#1a1a1a] group-hover:text-[#c4170c] leading-snug transition-colors" style={{ fontFamily: "Georgia, serif" }}>
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

function Reveal({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  );
}
