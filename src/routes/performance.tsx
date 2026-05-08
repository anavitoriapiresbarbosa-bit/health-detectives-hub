import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockStudents } from "@/lib/mock-data";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

export const Route = createFileRoute("/performance")({
  head: () => ({ meta: [{ title: "Desempenho — Detetives da Saúde" }] }),
  component: PerformancePage,
});

function PerformancePage() {
  const ranking = [...mockStudents].sort((a, b) => b.score - a.score).slice(0, 8).map((s) => ({ nome: s.name.split(" ")[0], pontos: s.score }));
  const statusData = [
    { name: "Ativos", value: mockStudents.filter((s) => s.status === "ativo").length },
    { name: "Inativos", value: mockStudents.filter((s) => s.status === "inativo").length },
  ];
  const colors = ["var(--color-primary)", "var(--color-muted-foreground)"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold">Desempenho geral</h1>
        <p className="text-sm text-muted-foreground mt-1">Análise consolidada da turma.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-card lg:col-span-2">
          <CardHeader><CardTitle className="font-display">Ranking de pontuação</CardTitle></CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ranking}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="nome" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Bar dataKey="pontos" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-card">
          <CardHeader><CardTitle className="font-display">Status dos alunos</CardTitle></CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={4}>
                  {statusData.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
