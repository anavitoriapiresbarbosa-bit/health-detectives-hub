import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { galleryPhotos } from "@/lib/mock-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Galeria — Detetives da Saúde" }] }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold">Galeria de fotos</h1>
        <p className="text-sm text-muted-foreground mt-1">Cenários e momentos pixel art do jogo.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryPhotos.map((p) => (
          <Card key={p.id} className="rounded-2xl overflow-hidden border-border/60 shadow-card hover:shadow-soft transition group">
            <div className="aspect-video relative overflow-hidden">
              <PixelArt seed={p.title} />
            </div>
            <CardContent className="p-4">
              <h3 className="font-display font-semibold">{p.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PixelArt({ seed }: { seed: string }) {
  const s = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const colors = [
    "bg-primary/80",
    "bg-primary-glow/80",
    "bg-success/70",
    "bg-warning/70",
    "bg-accent/80",
    "bg-secondary",
  ];
  const cells = Array.from({ length: 16 * 9 }, (_, i) => colors[(i * s + i) % colors.length]);
  return (
    <div className="grid grid-cols-16 grid-rows-9 w-full h-full" style={{ gridTemplateColumns: "repeat(16, 1fr)", gridTemplateRows: "repeat(9, 1fr)" }}>
      {cells.map((c, i) => (
        <div key={i} className={c} />
      ))}
    </div>
  );
}
