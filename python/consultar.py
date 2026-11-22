"""python consultar.py 33.000.167/0001-01 01001-000"""

import json
import os
import re
import sys
import urllib.error
import urllib.request


def get(url, key):
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {key}"})
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            return json.load(res)
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        raise


cnpj = re.sub(r"[./-]", "", sys.argv[1] if len(sys.argv) > 1 else "33000167000101")
cep = re.sub(r"\D", "", sys.argv[2] if len(sys.argv) > 2 else "01001000")

empresa = get(f"https://cnpj.apizen.com.br/v1/cnpj/{cnpj}", os.environ["CNPJ_API_KEY"])
print(f"{empresa['razao_social']} ({empresa['situacao']['descricao']})" if empresa else "CNPJ não encontrado")

endereco = get(f"https://ceps.apizen.com.br/v1/cep/{cep}", os.environ["CEPS_API_KEY"])
if endereco:
    m = endereco["municipio"]
    print(f"{endereco['logradouro']}, {m['nome']}/{endereco['uf']} (IBGE {m['codigo_ibge']})")
else:
    print("CEP não encontrado")
