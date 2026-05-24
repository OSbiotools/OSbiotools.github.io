# BioPetals

- Repository: https://github.com/OSbiotools/BioPetals
- Description: Run BIOxAI models at home, BitTorrent-style. Fine-tuning and inference up to 10x faster than offloading
- Homepage: https://petals.dev
- License: MIT
- Language: Python
- Fork of: bigscience-workshop/petals (original project: https://github.com/bigscience-workshop/petals)

Summary

BioPetals is a fork that makes it easy to run distributed LLM inference and fine-tuning via Petals. It provides examples and a biology-focused quickstart (OpenBioLLM) that loads a biology-oriented checkpoint and demonstrates inference on biology prompts.

Highlights

- Connects to distributed networks hosting model layers (BitTorrent-style)
- Supports Llama 3.1, Mixtral, Falcon, BLOOM, and more
- Biology quickstart using `aaditya/Llama3-OpenBioLLM-8B`
- Homepage and docs: https://petals.dev

Install / Try

- PyPI / repo: https://pypi.org/project/petals/
- Quick install (README recommends in Colab):

```bash
%pip -q install --upgrade --force-reinstall --no-cache-dir "git+https://github.com/Pranesh950/BioPetals.git"
```

Useful links

- Repo: https://github.com/OSbiotools/BioPetals
- Upstream project: https://github.com/bigscience-workshop/petals
- Colab example: https://colab.research.google.com/github/Pranesh950/BioPetals/blob/main/examples/run_biology_inference_colab.ipynb
- Docs / monitor: https://health.petals.dev

Notes

- Repo is a fork (default branch: `main`).
- License: MIT.  
- Language: Python.
