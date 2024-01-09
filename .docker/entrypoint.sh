#!/bin/bash

if [ -f "package.json" ]; then
  npm install
  npm run build
  npm run dev
else
  echo "Arquivo package.json não encontrado. Certifique-se de que o arquivo está presente no diretório atual."
fi

tail -f /dev/null
