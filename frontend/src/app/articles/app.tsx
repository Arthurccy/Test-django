export type Article = {
  id: number; title: string; content: string; author: string; created_at: string;
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/`, { cache: "no-store" });
  if (!res.ok) throw new Error("API error");
  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Articles</h1>
      <ul className="space-y-3">
        {articles.map(a => (
          <li key={a.id} className="border rounded p-4">
            <div className="flex justify-between">
              <h2 className="font-medium">{a.title}</h2>
              <span className="text-sm text-neutral-500">{new Date(a.created_at).toLocaleString()}</span>
            </div>
            <p className="mt-2 text-neutral-300">{a.content}</p>
            <p className="mt-1 text-sm text-neutral-400">Auteur: {a.author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
