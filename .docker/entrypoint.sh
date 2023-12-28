#!/bin/bash

# Verifica se o arquivo package.json existe
if [ -f "package.json" ]; then
  # Se o arquivo package.json existe, execute os comandos npm
  npm install
  npm run build
  npm run dev
else
  # Se o arquivo package.json não existe, exiba uma mensagem de erro
  echo "Arquivo package.json não encontrado. Certifique-se de que o arquivo está presente no diretório atual."
fi

tail -f /dev/null
