// node consultar.mjs 33.000.167/0001-01 01001-000
const [cnpj = "33000167000101", cep = "01001000"] = process.argv.slice(2);

async function get(url, key) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${key}` } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${res.status}: ${(await res.json()).error}`);
  return res.json();
}

const empresa = await get(
  `https://cnpj.apizen.com.br/v1/cnpj/${cnpj.replace(/[./-]/g, "")}`,
  process.env.CNPJ_API_KEY,
);
console.log(empresa ? `${empresa.razao_social} (${empresa.situacao.descricao})` : "CNPJ não encontrado");

const endereco = await get(
  `https://ceps.apizen.com.br/v1/cep/${cep.replace(/\D/g, "")}`,
  process.env.CEPS_API_KEY,
);
console.log(
  endereco
    ? `${endereco.logradouro}, ${endereco.municipio.nome}/${endereco.uf} (IBGE ${endereco.municipio.codigo_ibge})`
    : "CEP não encontrado",
);
