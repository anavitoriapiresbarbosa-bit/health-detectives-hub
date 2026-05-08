import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Flag, Activity, ArrowUpRight } from "lucide-react";
import { mockStudents } from "@/lib/mock-data";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Dashboard — Detetives da Saúde" }] }),
  component: Dashboard,
});

function Dashboard() {
  const totalStudents = mockStudents.length;
  const activeStudents = mockStudents.filter((s) => s.status === "ativo").length;
  const totalScore = mockStudents.reduce((a, s) => a + s.score, 0);
  const completedPhases = mockStudents.reduce((a, s) => a + s.completedPhases, 0);

  const phaseData = ["Higiene", "Nutrição", "Sono", "Exercício", "Vacina", "Mente"].map((p, i) => ({
    fase: p,
    media: 55 + Math.round(Math.random() * 35),
  }));

  const weeklyData = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => ({
    dia: d,
    sessoes: 20 + Math.round(Math.random() * 60),
  }));

  const stats = [
    { label: "Alunos cadastrados", value: totalStudents, icon: Users, tone: "bg-primary/10 text-primary" },
    { label: "Alunos ativos", value: activeStudents, icon: Activity, tone: "bg-success/15 text-success" },
    { label: "Pontuação total", value: totalScore.toLocaleString("pt-BR"), icon: Trophy, tone: "bg-warning/15 text-warning" },
    { label: "Fases concluídas", value: completedPhases, icon: Flag, tone: "bg-accent/40 text-accent-foreground" },
  ];

  const topStudents = [...mockStudents].sort((a, b) => b.score - a.score).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold">Olá, Investigador-Chefe! 🕵️</h1>
          <p className="text-sm text-muted-foreground mt-1">Visão geral da turma de Detetives da Saúde.</p>
        </div>
        <Button asChild>
          <Link to="/students">Gerenciar alunos <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="rounded-2xl border-border/60 shadow-card">
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.tone}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</p>
                <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl border-border/60 shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display">Sessões na semana</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="dia" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="sessoes" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 4, fill: "var(--color-primary)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-card">
          <CardHeader>
            <CardTitle className="font-display">Top 5 detetives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topStudents.map((s, i) => (
              <Link to="/students/$id" params={{ id: s.id }} key={s.id} className="flex items-center gap-3 rounded-xl p-2 hover:bg-secondary transition">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-lg">{s.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{s.name}</p>
                  <p className="text-xs text-muted-foreground">Nível {s.level}</p>
                </div>
                <Badge variant="secondary" className="font-mono">#{i + 1}</Badge>
                <span className="text-sm font-bold text-primary">{s.score}</span>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-border/60 shadow-card">
        <CardHeader>
          <CardTitle className="font-display">Média por fase do jogo</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={phaseData}>
              <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
              <XAxis dataKey="fase" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
              <Bar dataKey="media" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
