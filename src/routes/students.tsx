import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2, Search, Eye } from "lucide-react";
import { mockStudents, type Student } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [{ title: "Alunos — Detetives da Saúde" }] }),
  component: StudentsPage,
});

function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Student | null>(null);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = students.filter(
    (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.email.toLowerCase().includes(query.toLowerCase())
  );

  const startNew = () => {
    setEditing({
      id: `s${Date.now()}`,
      name: "",
      email: "",
      avatar: "🦊",
      score: 0,
      level: 1,
      completedPhases: 0,
      totalPhases: 6,
      lastActive: "Hoje",
      status: "ativo",
      progress: [],
      weeklyActivity: [],
    });
    setOpen(true);
  };

  const save = () => {
    if (!editing) return;
    if (!editing.name.trim() || !editing.email.trim()) {
      toast.error("Preencha nome e email.");
      return;
    }
    setStudents((prev) => {
      const exists = prev.find((s) => s.id === editing.id);
      if (exists) {
        toast.success("Aluno atualizado!");
        return prev.map((s) => (s.id === editing.id ? editing : s));
      }
      toast.success("Aluno cadastrado!");
      return [editing, ...prev];
    });
    setOpen(false);
    setEditing(null);
  };

  const confirmDelete = () => {
    if (!deleteId) return;
    setStudents((prev) => prev.filter((s) => s.id !== deleteId));
    toast.success("Aluno removido.");
    setDeleteId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold">Alunos</h1>
          <p className="text-sm text-muted-foreground mt-1">Gerencie os detetives cadastrados no jogo.</p>
        </div>
        <Button onClick={startNew} className="gap-2">
          <Plus className="h-4 w-4" /> Novo aluno
        </Button>
      </div>

      <Card className="rounded-2xl border-border/60 shadow-card">
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <CardTitle className="font-display">Lista de detetives</CardTitle>
          <div className="relative w-64 max-w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar nome ou email" className="pl-9 rounded-xl" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-xl border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Aluno</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead>Nível</TableHead>
                  <TableHead>Pontuação</TableHead>
                  <TableHead className="hidden lg:table-cell">Fases</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((s) => (
                  <TableRow key={s.id} className="hover:bg-secondary/30">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-lg">{s.avatar}</div>
                        <span className="font-semibold">{s.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{s.email}</TableCell>
                    <TableCell><Badge variant="secondary">Lv {s.level}</Badge></TableCell>
                    <TableCell className="font-mono font-semibold text-primary">{s.score}</TableCell>
                    <TableCell className="hidden lg:table-cell">{s.completedPhases}/{s.totalPhases}</TableCell>
                    <TableCell>
                      <Badge className={s.status === "ativo" ? "bg-success/20 text-success hover:bg-success/30" : "bg-muted text-muted-foreground"}>
                        {s.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button asChild size="icon" variant="ghost"><Link to="/students/$id" params={{ id: s.id }}><Eye className="h-4 w-4" /></Link></Button>
                        <Button size="icon" variant="ghost" onClick={() => { setEditing(s); setOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                        <Button size="icon" variant="ghost" onClick={() => setDeleteId(s.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">Nenhum aluno encontrado.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display">{editing && students.find((s) => s.id === editing.id) ? "Editar aluno" : "Novo aluno"}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Nome</Label>
                <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} maxLength={80} />
              </div>
              <div className="grid gap-2">
                <Label>Gmail</Label>
                <Input type="email" value={editing.email} onChange={(e) => setEditing({ ...editing, email: e.target.value })} maxLength={120} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="grid gap-2">
                  <Label>Nível</Label>
                  <Input type="number" min={1} value={editing.level} onChange={(e) => setEditing({ ...editing, level: +e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label>Pontos</Label>
                  <Input type="number" min={0} value={editing.score} onChange={(e) => setEditing({ ...editing, score: +e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label>Fases</Label>
                  <Input type="number" min={0} max={editing.totalPhases} value={editing.completedPhases} onChange={(e) => setEditing({ ...editing, completedPhases: +e.target.value })} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Avatar (emoji)</Label>
                <Input value={editing.avatar} onChange={(e) => setEditing({ ...editing, avatar: e.target.value })} maxLength={2} />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button onClick={save}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remover aluno?</AlertDialogTitle>
            <AlertDialogDescription>Esta ação não pode ser desfeita.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Remover</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
