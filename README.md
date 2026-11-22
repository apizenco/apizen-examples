# Exemplos da Apizen

Exemplos prontos para as APIs da [Apizen](https://www.apizen.com.br): CNPJ (Receita Federal) e CEP (com código IBGE e coordenadas).

| Pasta | O quê |
|---|---|
| [`curl/`](curl) | as chamadas no terminal |
| [`node/`](node) | Node 18+ com `fetch`, sem dependências |
| [`python/`](python) | Python 3.9+ só com a biblioteca padrão |
| [`nextjs/`](nextjs) | uma rota do Next.js que consulta o CNPJ no servidor, sem expor a chave |
| [`mcp/`](mcp) | a Apizen num assistente de IA (Claude Code, Cursor, Claude Desktop) |

Todos leem as chaves de variáveis de ambiente:

```bash
export CNPJ_API_KEY=sk_cnpj_…   # crie grátis em https://www.apizen.com.br/entrar
export CEPS_API_KEY=sk_ceps_…
```

As chaves são secretas: chame as APIs do servidor, nunca do navegador.

Documentação: https://www.apizen.com.br/docs/inicio · SDKs: [sdk-js](https://github.com/apizenco/sdk-js) e [sdk-python](https://github.com/apizenco/sdk-python).
