import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/data";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

async function loadLogoDataUrl(): Promise<string | null> {
  const logoPath = join(process.cwd(), "public", siteConfig.logo.replace(/^\//, ""));
  try {
    const buffer = await readFile(logoPath);
    const extension = logoPath.split(".").pop()?.toLowerCase();
    const mime =
      extension === "svg"
        ? "image/svg+xml"
        : extension === "jpg" || extension === "jpeg"
          ? "image/jpeg"
          : "image/png";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
}

function brandFallback() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#092420",
          color: "#b8925a",
          fontSize: 96,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}

export default async function AppleIcon() {
  const logo = await loadLogoDataUrl();
  if (!logo) return brandFallback();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#092420",
        }}
      >
        <img src={logo} width={140} height={140} style={{ objectFit: "contain" }} alt="" />
      </div>
    ),
    { ...size }
  );
}
