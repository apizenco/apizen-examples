# MCP

A Apizen tem um servidor MCP em `https://www.apizen.com.br/mcp`, com as ferramentas `consultar_cnpj`, `nome_cnpj` e `consultar_cep`. As consultas usam a sua chave e contam na sua cota.

## Claude Code

```bash
claude mcp add --transport http apizen https://www.apizen.com.br/mcp \
  --header "Authorization: Bearer $CNPJ_API_KEY"
```

## Cursor, Claude Desktop e outros

```json
{
  "mcpServers": {
    "apizen": {
      "url": "https://www.apizen.com.br/mcp",
      "headers": {
        "Authorization": "Bearer sk_cnpj_…",
        "X-Apizen-Cep-Key": "sk_ceps_…"
      }
    }
  }
}
```

Mais em https://www.apizen.com.br/docs/mcp.
