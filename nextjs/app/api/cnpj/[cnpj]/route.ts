// app/api/cnpj/[cnpj]/route.ts: o navegador chama esta rota; a chave fica no servidor.
export async function GET(_: Request, { params }: { params: Promise<{ cnpj: string }> }) {
  const { cnpj } = await params;
  const res = await fetch(`https://cnpj.apizen.com.br/v1/cnpj/${encodeURIComponent(cnpj)}`, {
    headers: { Authorization: `Bearer ${process.env.CNPJ_API_KEY}` },
    // Os dados mudam uma vez por mês: um dia de cache no servidor.
    next: { revalidate: 86400 },
  });
  if (res.status === 404) return Response.json({ error: "CNPJ não encontrado" }, { status: 404 });
  if (!res.ok) return Response.json({ error: "Falha na consulta" }, { status: 502 });
  const e = await res.json();
  // Só o que o formulário precisa.
  return Response.json({
    razao_social: e.razao_social,
    ativa: e.ativa,
    endereco: e.endereco,
  });
}
