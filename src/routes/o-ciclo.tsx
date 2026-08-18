import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Leaf,
  Brain,
  Heart,
  Sprout,
  Lock,
  RefreshCw,
  Dumbbell,
  Users,
  Calendar,
  Clapperboard,
  Globe,
  QrCode,
  Megaphone,
  Award,
  ArrowRight,
  Quote,
} from "lucide-react";

import capa from "@/assets/capa_o_ciclo.png.asset.json";
import entrevista from "@/assets/entrevista_dr_alessandro.jpg.asset.json";
import siteCelular from "@/assets/site_celular.jpg.asset.json";
import qrCode from "@/assets/qr_code.png.asset.json";
import materialDivulgacao from "@/assets/material_divulgacao.jpg.asset.json";
import equipe from "@/assets/equipe_projeto.jpg.asset.json";

import acao1 from "@/assets/IMG-20260817-WA0009_1.jpg.asset.json";
import acao2 from "@/assets/IMG-20260817-WA0008.jpg.asset.json";
import acao3 from "@/assets/IMG-20260817-WA0005.jpg.asset.json";
import acao4 from "@/assets/IMG-20260817-WA0004.jpg.asset.json";

const THEME = {
  purple: "#5b2c83",
  purpleLight: "#8b5cf6",
  cyan: "#06b6d4",
  dark: "#1a1a1a",
  soft: "#f5f0fa",
};

const valores = [
  { icon: Brain, label: "Escolhas" },
  { icon: Dumbbell, label: "Força" },
  { icon: Heart, label: "Vida" },
  { icon: Sprout, label: "Esperança" },
  { icon: Lock, label: "Liberdade" },
  { icon: RefreshCw, label: "Recomeço" },
];

const diario = [
  { data: "18/08/2025", etapa: "Início", registro: "Conversas sobre o tema, escolha de 'O Ciclo' e início das pesquisas." },
  { data: "22/08/2025", etapa: "Formato", registro: "Definição do documentário, locais de gravação, possíveis entrevistas e forma de transmitir a mensagem." },
  { data: "29/08/2025", etapa: "Organização", registro: "Início do roteiro e divisão das funções de pesquisa, roteiro, filmagem e edição." },
  { data: "30/10/2025", etapa: "Ajustes", registro: "Continuidade das pesquisas e ajustes no roteiro. Surgiu também a ideia de criar um pequeno artigo." },
  { data: "31/10/2025", etapa: "Divulgação", registro: "Ideia de criar material visual no Canva ou Figma para divulgar o projeto e a palestra no Senac." },
];

const resultados = [
  "Pesquisa sobre o tema",
  "Criação do roteiro",
  "Gravação",
  "Edição",
  "Criação do QR Code",
  "Organização da apresentação",
  "Adaptação diante das mudanças da equipe",
  "Escolha e desenvolvimento da proposta",
  "Organização do documentário",
  "Participação do Dr. Alessandro",
  "Criação do site",
  "Criação do material de divulgação",
  "Trabalho em equipe",
];

const acaoFotos = [
  { src: acao1.url, alt: "Equipe apresentando o QR Code no mural de informações do Senac" },
  { src: acao2.url, alt: "Fixação do QR Code no mural do Senac" },
  { src: acao3.url, alt: "Colagem do QR Code em poste pelas ruas da cidade" },
  { src: acao4.url, alt: "Recorte dos adesivos com QR Code no laboratório" },
];

export const Route = createFileRoute("/o-ciclo")({
  head: () => ({
    meta: [
      { title: "O Ciclo — Projeto Integrador | Detetives da Saúde" },
      { name: "description", content: "Portfólio do Projeto Integrador O Ciclo: prevenção às drogas, apoio aos dependentes químicos e histórias que recomeçam." },
      { property: "og:title", content: "O Ciclo — Projeto Integrador" },
      { property: "og:description", content: "Informação que liberta. Histórias que recomeçam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OCicloPage,
});

function OCicloPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden" style={{ fontFamily: "Nunito, system-ui, sans-serif" }}>
      <ReadingProgress />

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#5b2c83]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#5b2c83] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              O
            </div>
            <span className="font-display font-bold text-[#5b2c83] text-lg hidden sm:inline">Ciclo</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4 text-xs sm:text-sm font-semibold text-[#555]">
            {["Apresentação", "Integrantes", "Diário", "Documentário", "Site", "Divulgação", "Resultados"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-2 py-1 rounded-md hover:bg-[#f5f0fa] hover:text-[#5b2c83] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={capa.url}
            alt="Capa do Projeto Integrador O Ciclo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#5b2c83]/30 to-[#1a1a1a]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Reveal>
            <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-4 text-[#06b6d4]">
              Projeto Integrador
            </p>
          </Reveal>
          <Reveal>
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl mb-6 leading-none">
              O Ciclo
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl sm:text-2xl font-light mb-8 text-white/90" style={{ fontFamily: "Georgia, serif" }}>
              Informação que liberta. Histórias que recomeçam.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {valores.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4 text-[#06b6d4]" />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <a
              href="#apresentação"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#5b2c83] to-[#06b6d4] text-white font-bold hover:shadow-lg hover:scale-105 transition-all"
            >
              Conheça o projeto <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* Apresentação */}
        <section id="apresentação">
          <SectionLabel>Seção 01</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Apresentação do Projeto
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="space-y-4 text-lg leading-relaxed text-[#333]">
                <p>
                  <strong className="text-[#5b2c83]">O Ciclo</strong> é um Projeto Integrador que trata da prevenção às drogas, da dependência química e do apoio a quem busca recomeçar.
                </p>
                <p>
                  O tema foi escolhido pela equipe por sua relevância social e pela necessidade de levar informação clara a estudantes, famílias e comunidade.
                </p>
                <p>
                  A proposta central foi transformar pesquisa em conteúdo acessível. Em vez de um trabalho apenas escrito, a equipe optou por produzir material audiovisual e digital, capaz de circular com facilidade e alcançar mais pessoas.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-gradient-to-br from-[#f5f0fa] to-white p-8 rounded-3xl border border-[#5b2c83]/10 shadow-xl">
                <h3 className="font-display font-bold text-[#5b2c83] text-xl mb-4">Etapas desenvolvidas</h3>
                <ul className="space-y-3">
                  {[
                    "Pesquisas sobre o tema",
                    "Elaboração do roteiro do documentário",
                    "Gravação do conteúdo audiovisual",
                    "Realização de entrevista",
                    "Edição do material gravado",
                    "Criação do material de divulgação",
                    "Desenvolvimento da página/site",
                    "Geração de QR Code para acesso",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#333]">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#06b6d4] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <blockquote className="mt-10 relative pl-6 py-6 border-l-4 border-[#5b2c83] bg-[#f5f0fa] rounded-r-2xl text-xl italic text-[#5b2c83]" style={{ fontFamily: "Georgia, serif" }}>
              <Quote className="absolute top-4 left-4 h-8 w-8 text-[#5b2c83]/20" />
              O nome "O Ciclo" representa a repetição que aprisiona — e, ao mesmo tempo, a possibilidade de rompê-la. Informação que liberta. Histórias que recomeçam.
            </blockquote>
          </Reveal>
        </section>

        {/* Integrantes */}
        <section id="integrantes">
          <SectionLabel>Seção 02</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Integrantes
          </h2>
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#5b2c83]/10">
                <img
                  src={equipe.url}
                  alt="Equipe do projeto O Ciclo com o Dr. Alessandro"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center text-sm text-[#666]">
                  Equipe do projeto durante a produção do documentário
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#5b2c83] mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" /> Composição inicial
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Amanda", "Hyara", "Ana Vitória", "Thaís", "Samira", "Emily"].map((nome) => (
                      <div key={nome} className="px-4 py-3 rounded-xl bg-[#f5f0fa] text-center font-semibold text-[#5b2c83]">
                        {nome}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#5b2c83]/5 to-[#06b6d4]/5 border border-[#5b2c83]/10">
                  <p className="text-[#333] leading-relaxed">
                    Durante o desenvolvimento do projeto, ocorreram mudanças na composição da equipe. Após a saída das demais integrantes, a continuidade do trabalho ficou concentrada em <strong className="text-[#5b2c83]">Ana Vitória</strong> e <strong className="text-[#5b2c83]">Samira</strong>, que deram sequência à organização dos materiais, produção audiovisual, divulgação e preparação da apresentação.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Diário de bordo */}
        <section id="diário">
          <SectionLabel>Seção 03</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Evolução do projeto — Diário de Bordo
          </h2>
          <Reveal>
            <p className="text-lg text-[#555] mb-8 max-w-3xl">
              O diário de bordo demonstra a evolução do projeto desde a escolha do tema até a preparação dos materiais. Cada registro marca uma decisão da equipe.
            </p>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#5b2c83] to-[#06b6d4] rounded-full" />
            <div className="space-y-8">
              {diario.map((item) => (
                <Reveal key={item.data}>
                  <div className="relative flex items-start gap-6 pl-2">
                    <div className="relative z-10 h-10 w-10 rounded-full bg-white border-4 border-[#5b2c83] flex-shrink-0 shadow-sm" />
                    <div className="flex-1 -mt-1">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5b2c83] text-white text-xs font-bold mb-2">
                        <Calendar className="h-3 w-3" /> {item.data}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#5b2c83]">{item.etapa}</h3>
                      <p className="text-[#555] mt-1 leading-relaxed">{item.registro}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Documentário */}
        <section id="documentário">
          <SectionLabel>Seção 04</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Produção e gravação do documentário
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#5b2c83]/10 group">
                <img
                  src={entrevista.url}
                  alt="Samira e Dr. Alessandro durante a gravação do documentário"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 bg-white text-sm text-[#666] flex items-center gap-2">
                  <Clapperboard className="h-4 w-4 text-[#5b2c83]" />
                  Samira e Dr. Alessandro durante a produção do vídeo do projeto.
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="space-y-5 text-lg text-[#333] leading-relaxed">
                <p>
                  Uma das etapas mais importantes do projeto foi a produção audiovisual. Após a definição do roteiro, a equipe organizou a gravação do documentário, cuidando do local, do roteiro de perguntas e do registro das imagens.
                </p>
                <p>
                  A participação do <strong className="text-[#5b2c83]">Dr. Alessandro</strong> fez parte da produção do conteúdo audiovisual. Sua presença contribuiu para a construção do material, trazendo a fala de um convidado externo para o documentário e enriquecendo o resultado apresentado.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Site e material digital */}
        <section id="site">
          <SectionLabel>Seção 05</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Site e material digital
          </h2>
          <Reveal>
            <div className="bg-gradient-to-br from-[#f5f0fa] to-white rounded-3xl p-8 border border-[#5b2c83]/10 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#5b2c83] font-bold">
                    <Globe className="h-5 w-5" /> Página online complementar
                  </div>
                  <p className="text-[#333] leading-relaxed">
                    Além do vídeo, o projeto conta com uma página online que reúne informações sobre substâncias, sinais de alerta, prevenção e depoimentos, permitindo que o público acesse o material a qualquer momento.
                  </p>
                  <p className="text-[#333] leading-relaxed">
                    A página foi pensada para leitura em celular, com navegação simples entre as seções. O conteúdo segue a mesma linguagem do documentário: informação direta, acolhimento e incentivo à busca por ajuda.
                  </p>
                  <a
                    href="https://recomece-sua-jornada.lovable.app/depoimentos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5b2c83] text-white font-semibold hover:bg-[#4a2270] transition-colors"
                  >
                    Acessar depoimentos <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#5b2c83]/10">
                  <img
                    src={siteCelular.url}
                    alt="Captura de tela do site Viva+ no celular"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* QR Code */}
        <section>
          <SectionLabel>Seção 06</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            QR Code para acesso
          </h2>
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#5b2c83]/10 flex items-center justify-center">
                <img
                  src={qrCode.url}
                  alt="QR Code para acesso ao conteúdo do projeto"
                  className="max-w-[280px] w-full h-auto"
                />
              </div>
              <div className="space-y-5">
                <p className="text-lg text-[#333] leading-relaxed">
                  O QR Code foi incluído no material de divulgação para facilitar o acesso ao conteúdo do projeto durante a apresentação.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#5b2c83] to-[#06b6d4] text-white">
                  <p className="font-semibold flex items-center gap-2">
                    <QrCode className="h-5 w-5" /> Como usar
                  </p>
                  <p className="mt-2 text-white/90">
                    Aponte a câmera do celular para acessar o conteúdo completo do projeto.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Material de divulgação */}
        <section id="divulgação">
          <SectionLabel>Seção 07</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Material de divulgação
          </h2>
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#5b2c83]/10 group">
                <img
                  src={materialDivulgacao.url}
                  alt="Material de divulgação do projeto Quebrando Ciclos"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-[#333] leading-relaxed">
                  O material visual foi produzido para divulgar o projeto e conduzir o público ao conteúdo digital. A arte utiliza a imagem de correntes se rompendo e de um caminho iluminado, representando a saída do ciclo e o recomeço.
                </p>
                <div>
                  <h3 className="font-display font-bold text-[#5b2c83] mb-3 flex items-center gap-2">
                    <Megaphone className="h-5 w-5" /> Elementos destacados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Escolhas", "Força", "Vida", "Esperança", "Liberdade", "Quebra de ciclos", "Recomeço"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full bg-[#f5f0fa] text-[#5b2c83] text-sm font-semibold border border-[#5b2c83]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#5b2c83] font-bold italic" style={{ fontFamily: "Georgia, serif" }}>
                    "Peça ajuda. Você merece uma nova história."
                  </p>
                  <p className="text-[#06b6d4] font-bold italic" style={{ fontFamily: "Georgia, serif" }}>
                    "Você não está sozinho. Recomeçar é possível."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Continuidade */}
        <section>
          <SectionLabel>Seção 08</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Continuidade do projeto
          </h2>
          <Reveal>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#5b2c83] to-[#06b6d4] text-white shadow-xl">
              <p className="text-lg leading-relaxed">
                Após a saída das demais integrantes, a continuidade do Projeto Integrador ficou com <strong>Ana Vitória</strong> e <strong>Samira</strong>. A dupla deu sequência à organização dos materiais, produção audiovisual, divulgação e preparação da apresentação.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Galeria de ação */}
        <section>
          <SectionLabel>Seção 09</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Nossa ação na comunidade
          </h2>
          <Reveal>
            <p className="text-lg text-[#555] mb-8">
              Espalhamos QR Codes pela cidade e pelo Senac, com recorte, montagem e fixação dos materiais feitos pela equipe.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {acaoFotos.map((f, i) => (
              <Reveal key={f.src}>
                <figure className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                    <img
                      src={f.src}
                      alt={f.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="text-xs text-[#666] mt-2 border-l-2 border-[#5b2c83] pl-2 leading-snug">
                    {f.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Resultados e aprendizados */}
        <section id="resultados">
          <SectionLabel>Seção 10</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Resultados e aprendizados
          </h2>
          <Reveal>
            <p className="text-lg text-[#555] mb-8">
              Ao longo do Projeto Integrador, a equipe percorreu diferentes etapas de produção, da pesquisa inicial à apresentação final.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultados.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#f5f0fa] border border-[#5b2c83]/10 hover:shadow-md transition-shadow">
                  <Award className="h-5 w-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333] font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-lg text-[#333] leading-relaxed p-6 rounded-2xl bg-white border border-[#5b2c83]/10 shadow-sm">
              O projeto permitiu trabalhar, na prática, diferentes etapas de produção de um projeto integrador: pesquisar, planejar, produzir, editar, divulgar e apresentar. Também exigiu adaptação, já que a equipe precisou reorganizar as funções diante das mudanças em sua composição.
            </p>
          </Reveal>
        </section>

        {/* Encerramento */}
        <section className="text-center">
          <SectionLabel>Seção 11</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5b2c83] mb-6">
            Encerramento
          </h2>
          <Reveal>
            <p className="text-lg text-[#333] leading-relaxed max-w-3xl mx-auto mb-8">
              Este portfólio registra a trajetória do Projeto Integrador <strong className="text-[#5b2c83]">"O Ciclo"</strong>. Mais do que apresentar o resultado final, o documento mostra o processo: as pesquisas, o planejamento, a gravação do documentário, a produção dos materiais digitais e a divulgação.
            </p>
          </Reveal>
          <Reveal>
            <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#5b2c83] to-[#06b6d4] text-white shadow-2xl">
              <p className="text-xl font-light mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Cada etapa contribuiu para o objetivo central do projeto — levar informação sobre prevenção às drogas e mostrar que existe caminho depois da dependência química.
              </p>
              <p className="text-2xl font-display font-bold">
                O ciclo pode ser rompido, e a informação é o primeiro passo.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-10 space-y-2">
              <p className="text-xl font-bold text-[#5b2c83] italic" style={{ fontFamily: "Georgia, serif" }}>
                "Você não está sozinho. Recomeçar é possível."
              </p>
              <a
                href="https://recomece-sua-jornada.lovable.app/depoimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full border-2 border-[#5b2c83] text-[#5b2c83] font-bold hover:bg-[#5b2c83] hover:text-white transition-colors"
              >
                Acesse o projeto <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/70 py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#5b2c83] to-[#06b6d4] flex items-center justify-center text-white font-bold">
              O
            </div>
            <span className="font-display font-bold text-white text-lg">Ciclo</span>
          </div>
          <p className="text-sm">Projeto Integrador — Informação que liberta. Histórias que recomeçam.</p>
          <p className="text-xs mt-4 text-white/40">© 2026 O Ciclo. Uso educacional.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#06b6d4] mb-2">
        {children}
      </span>
    </Reveal>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

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
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
      <div
        className="h-full bg-gradient-to-r from-[#5b2c83] via-[#8b5cf6] to-[#06b6d4] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
