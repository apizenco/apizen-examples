# Next.js

`app/api/cnpj/[cnpj]/route.ts` é uma rota do seu app que consulta o CNPJ no servidor: o navegador chama `/api/cnpj/33000167000101` e nunca vê a chave. Ponha `CNPJ_API_KEY` no `.env.local` (e nas variáveis do deploy).

Num formulário, preencha o endereço quando o CNPJ estiver completo:

```ts
const res = await fetch(`/api/cnpj/${cnpj.replace(/\D/g, "")}`);
if (res.ok) {
  const { razao_social, endereco } = await res.json();
  // preencha os campos
}
```
