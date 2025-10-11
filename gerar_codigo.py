import os
import datetime

# 🔧 Configurações do projeto
NOME_PROJETO = "Linka"
AUTOR = "Natanael Santos"
ARQUIVO_SAIDA = "codigo.md"

# Extensões de código a incluir
EXTENSOES = {
    ".js": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".yml": "yaml",
}

# Pastas a ignorar
IGNORAR_PASTAS = [
    "node_modules",
    ".git",
    ".vscode",
    ".expo",
]

def gerar_estrutura_pastas(base_path="."):
    """
    Gera a estrutura de diretórios do projeto em formato de árvore (texto).
    """
    estrutura = []

    def listar_pasta(path, prefix=""):
        itens = sorted(os.listdir(path))
        for index, item in enumerate(itens):
            full_path = os.path.join(path, item)
            if any(skip in full_path for skip in IGNORAR_PASTAS):
                continue
            connector = "┗" if index == len(itens) - 1 else "┣"
            if os.path.isdir(full_path):
                estrutura.append(f"{prefix}{connector} 📂 {item}/")
                listar_pasta(full_path, prefix + ("   " if connector == "┗" else "┃  "))
            else:
                estrutura.append(f"{prefix}{connector} 📜 {item}")

    estrutura.append("📦 Estrutura do Projeto\n")
    listar_pasta(base_path)
    return "\n".join(estrutura)

def gerar_documentacao():
    data_atual = datetime.date.today().strftime("%d/%m/%Y")

    with open(ARQUIVO_SAIDA, "w", encoding="utf-8") as doc:
        # 🧾 Capa
        doc.write(f"# 📘 {NOME_PROJETO}\n\n")
        doc.write(f"**Autor:** {AUTOR}  \n")
        doc.write(f"**Data:** {data_atual}\n\n")
        doc.write("---\n\n")
        doc.write("> Este documento contém a estrutura de pastas e todos os códigos do projeto, gerado automaticamente.\n\n")

        # 🌳 Estrutura de diretórios
        doc.write("## 📂 Estrutura de Pastas\n\n")
        doc.write("```\n")
        doc.write(gerar_estrutura_pastas("."))
        doc.write("\n```\n\n")

        # 💻 Códigos
        doc.write("## 💻 Códigos do Projeto\n\n")

        for raiz, dirs, arquivos in os.walk("."):
            dirs[:] = [d for d in dirs if d not in IGNORAR_PASTAS]
            for nome_arquivo in arquivos:
                _, extensao = os.path.splitext(nome_arquivo)
                if extensao in EXTENSOES:
                    caminho = os.path.join(raiz, nome_arquivo)
                    linguagem = EXTENSOES[extensao]

                    doc.write(f"### 🗂️ {caminho}\n\n")
                    doc.write(f"```{linguagem}\n")

                    try:
                        with open(caminho, "r", encoding="utf-8") as f:
                            conteudo = f.read()
                            doc.write(conteudo)
                    except Exception as e:
                        doc.write(f"Erro ao ler o arquivo: {e}")

                    doc.write("\n```\n\n")

    print(f"✅ Arquivo '{ARQUIVO_SAIDA}' gerado com sucesso!")
    print("👉 Agora abra o arquivo no VSCode e exporte com 'Markdown PDF → Export (pdf)'.")

if __name__ == "__main__":
    gerar_documentacao()
