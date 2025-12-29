from pathlib import Path
import matplotlib
matplotlib.use("Agg")   # ✅ non-GUI backend for servers/flask
import matplotlib.pyplot as plt


def build_graph(values, labels, out_path="static/owner_pie.png"):
    Path("static").mkdir(exist_ok=True)
    fig, ax = plt.subplots(figsize=(6, 6))
    fig.patch.set_alpha(0)      # figure transparent
    ax.set_facecolor("none")    # axes transparent

    ax.pie(values, labels=labels, autopct="%1.1f%%")
    ax.set_title("Top sectors")
    plt.tight_layout()
    plt.savefig(out_path, transparent=True, bbox_inches="tight", pad_inches=0.2)
    plt.close()

    return "owner_pie.png"

    
