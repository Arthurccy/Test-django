"use client";
import { useState } from "react";

export default function NewArticlePage() {
  const [title, setTitle] = useState(""); const [content, setContent] = useState("");
  const [author, setAuthor] = useState("user1");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });
    if (!res.ok) { alert("Erreur API"); return; }
    window.location.href = "/articles";
  }

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Créer un article</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Titre" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea className="w-full border rounded px-3 py-2" rows={8} placeholder="Contenu" value={content} onChange={e=>setContent(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Auteur" value={author} onChange={e=>setAuthor(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
      </form>
    </main>
  );
}
