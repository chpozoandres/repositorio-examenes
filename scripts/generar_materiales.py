"""Genera el catálogo de PDF que utiliza la interfaz de materiales."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "dist" / "recursos"
SUBJECTS = ("bdd", "in", "ri", "tic")
KINDS = ("diapositivas", "apuntes", "esquemas")
TOPIC_PATTERN = re.compile(r"(?:Tema[ _]*|T|Unidad)(\d+)", re.IGNORECASE)


def catalog():
    result = {}
    for subject in SUBJECTS:
        result[subject] = {}
        for kind in KINDS:
            entries = []
            for pdf in (ROOT / subject / kind).glob("*.pdf"):
                match = TOPIC_PATTERN.search(pdf.name)
                entries.append({
                    "topic": int(match.group(1)) if match else None,
                    "name": pdf.stem,
                    "url": f"recursos/{subject}/{kind}/{pdf.name}",
                })
            result[subject][kind] = sorted(entries, key=lambda item: (
                item["topic"] is None,
                item["topic"] if item["topic"] is not None else 0,
                item["name"].casefold(),
            ))
    return result


if __name__ == "__main__":
    output = ROOT / "materiales.js"
    output.write_text(
        "const studyMaterials = " + json.dumps(catalog(), ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Catálogo actualizado: {output}")
