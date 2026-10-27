import resumeAsset from "@/assets/resume.pdf.asset.json";

const FILENAME = "Vishal_Singla_Resume.pdf";

/**
 * Downloads the resume reliably in every context (preview iframe, iOS Safari,
 * published site) by fetching same-origin to a Blob first, then triggering the
 * download synchronously so browser user-activation is preserved. Falls back
 * to plain navigation if the fetch fails.
 */
export async function downloadResume(event: { preventDefault: () => void }) {
  event.preventDefault();
  try {
    const res = await fetch(resumeAsset.url);
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const blob = await res.blob();

    if (window.matchMedia("(pointer: coarse)").matches) {
      const file = new File([blob], FILENAME, { type: "application/pdf" });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "Vishal Singla — Resume" });
          return;
        } catch (err) {
          if ((err as DOMException)?.name === "AbortError") return;
        }
      }
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  } catch {
    window.location.href = resumeAsset.url;
  }
}
