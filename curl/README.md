# cURL

```bash
# O cadastro de um CNPJ
curl https://cnpj.apizen.com.br/v1/cnpj/33000167000101 \
  -H "Authorization: Bearer $CNPJ_API_KEY"

# Só o nome
curl https://cnpj.apizen.com.br/v1/cnpj/33000167000101/nome \
  -H "Authorization: Bearer $CNPJ_API_KEY"

# Um CEP
curl https://ceps.apizen.com.br/v1/cep/01001000 \
  -H "Authorization: Bearer $CEPS_API_KEY"
```
