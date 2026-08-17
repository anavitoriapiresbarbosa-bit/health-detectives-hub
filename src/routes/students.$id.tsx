import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Mail, Trophy, Flag, Clock } from "lucide-react";
import { mockStudents, galleryPhotos } from "@/lib/mock-data";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/students/$id")({
  head: ({ params }) => ({ meta: [{ title: `Aluno ${params.id} — Detetives da Saúde` }] }),
  loader: ({ params }) => {
    const student = mockStudents.find((s) => s.id === params.id);
    if (!student) throw notFound();
    return { student };
  },
  component: StudentProfile,
  notFoundComponent: () => <div className="p-8">Aluno não encontrado. <Link to="/students" className="text-primary underline">Voltar</Link></div>,
});

function StudentProfile() {
  const data = Route.useLoaderData() as { student: (typeof mockStudents)[number] };
  const student = data.student;
  const pct = Math.round((student.completedPhases / student.totalPhases) * 100);


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="icon"><Link to="/students"><ArrowLeft className="h-4 w-4" /></Link></Button>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold">Perfil do detetive</h1>
          <p className="text-sm text-muted-foreground">Acompanhe a evolução completa do aluno.</p>
        </div>
      </div>

      <Card className="rounded-2xl border-border/60 shadow-card overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary to-primary-glow" />
        <CardContent className="-mt-12 flex flex-wrap items-end gap-6 pb-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-card text-5xl shadow-soft border-4 border-card">{student.avatar}</div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-2xl font-display font-bold">{student.name}</h2>
              <Badge className={student.status === "ativo" ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"}>{student.status}</Badge>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1"><Mail className="h-3.5 w-3.5" />{student.email}</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-xl bg-secondary px-4 py-2 text-center">
              <p className="text-xs text-muted-foreground">Nível</p>
              <p className="text-xl font-bold text-primary">{student.level}</p>
            </div>
            <div className="rounded-xl bg-secondary px-4 py-2 text-center">
              <p className="text-xs text-muted-foreground">Pontos</p>
              <p className="text-xl font-bold text-primary">{student.score}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl shadow-card">
          <CardContent className="p-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Trophy className="h-5 w-5" /></div>
            <div><p className="text-xs text-muted-foreground">Pontuação</p><p className="text-xl font-bold">{student.score}</p></div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-card">
          <CardContent className="p-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/15 text-success"><Flag className="h-5 w-5" /></div>
            <div><p className="text-xs text-muted-foreground">Fases concluídas</p><p className="text-xl font-bold">{student.completedPhases}/{student.totalPhases}</p></div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-card">
          <CardContent className="p-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-warning/15 text-warning"><Clock className="h-5 w-5" /></div>
            <div><p className="text-xs text-muted-foreground">Última atividade</p><p className="text-xl font-bold">{student.lastActive}</p></div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-card">
        <CardHeader><CardTitle className="font-display">Progresso geral</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">{student.completedPhases} de {student.totalPhases} fases</span><span className="font-bold text-primary">{pct}%</span></div>
          <Progress value={pct} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="rounded-2xl shadow-card">
          <CardHeader><CardTitle className="font-display">Desempenho por fase</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={student.progress}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="phase" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Bar dataKey="score" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-card">
          <CardHeader><CardTitle className="font-display">Atividade semanal (min)</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={student.weeklyActivity}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="minutes" stroke="var(--color-primary)" strokeWidth={3} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-card">
        <CardHeader><CardTitle className="font-display">Galeria de momentos</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryPhotos.slice(0, 4).map((p) => (
              <PixelTile key={p.id} title={p.title} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PixelTile({ title }: { title: string }) {
  // generate a simple deterministic pixel pattern
  const seed = title.length;
  const cells = Array.from({ length: 64 }, (_, i) => ((i * seed) % 7) < 3);
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-secondary/50 group">
      <div className="grid grid-cols-8 aspect-square bg-gradient-to-br from-primary/30 to-primary-glow/30">
        {cells.map((on, i) => (
          <div key={i} className={on ? "bg-primary/60" : "bg-transparent"} />
        ))}
      </div>
      <div className="p-2 text-xs font-medium truncate">{title}</div>
    </div>
  );
}
