export type Student = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  score: number;
  level: number;
  completedPhases: number;
  totalPhases: number;
  lastActive: string;
  status: "ativo" | "inativo";
  progress: { phase: string; score: number }[];
  weeklyActivity: { day: string; minutes: number }[];
};

const avatars = [
  "🦊", "🐻", "🐼", "🦁", "🐸", "🐵", "🐷", "🐯", "🦉", "🐰", "🦄", "🐨",
];

const phases = ["Higiene", "Nutrição", "Sono", "Exercício", "Vacina", "Mente"];
const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const namesPool = [
  ["Ana Beatriz", "ana.bia"],
  ["Pedro Henrique", "pedrinho"],
  ["Maria Clara", "mariac"],
  ["João Lucas", "joaol"],
  ["Sofia Lima", "sofia.l"],
  ["Miguel Costa", "miguelc"],
  ["Helena Rocha", "helena.r"],
  ["Arthur Souza", "arthurs"],
  ["Laura Mendes", "laura.m"],
  ["Davi Almeida", "davi.a"],
  ["Alice Ferreira", "alice.f"],
  ["Bernardo Dias", "bernardo"],
];

export const mockStudents: Student[] = namesPool.map(([name, handle], i) => ({
  id: `s${i + 1}`,
  name,
  email: `${handle}@gmail.com`,
  avatar: avatars[i % avatars.length],
  score: 800 + Math.floor(Math.random() * 4200),
  level: 1 + Math.floor(Math.random() * 12),
  completedPhases: Math.floor(Math.random() * 6) + 1,
  totalPhases: 6,
  lastActive: ["Hoje", "Ontem", "2 dias atrás", "1 semana atrás"][i % 4],
  status: i % 5 === 0 ? "inativo" : "ativo",
  progress: phases.map((p) => ({ phase: p, score: Math.floor(Math.random() * 100) })),
  weeklyActivity: days.map((d) => ({ day: d, minutes: Math.floor(Math.random() * 60) })),
}));

export const galleryPhotos = [
  { id: "1", title: "Vila dos Detetives", desc: "Cenário inicial pixel art" },
  { id: "2", title: "Laboratório do Dr. Saúde", desc: "Onde resolvem mistérios" },
  { id: "3", title: "Floresta Saudável", desc: "Fase de nutrição" },
  { id: "4", title: "Castelo do Sono", desc: "Fase noturna" },
  { id: "5", title: "Arena de Exercícios", desc: "Mini-games físicos" },
  { id: "6", title: "Templo da Higiene", desc: "Quebra-cabeças" },
  { id: "7", title: "Estação Vacina", desc: "Aprenda a se proteger" },
  { id: "8", title: "Jardim da Mente", desc: "Saúde mental e emoções" },
];
