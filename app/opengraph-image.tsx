import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#070b14",
                    backgroundImage:
                        "radial-gradient(circle at 22% 25%, rgba(63,208,230,0.35), transparent 45%), radial-gradient(circle at 82% 75%, rgba(255,106,77,0.22), transparent 45%)",
                    fontFamily: "sans-serif"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 96,
                        height: 96,
                        borderRadius: 28,
                        background: "linear-gradient(135deg, #3fd0e6, #1390ab)",
                        marginBottom: 36,
                        fontSize: 52
                    }}
                >
                    💧
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 84,
                        fontWeight: 800,
                        color: "#eaf2fa",
                        letterSpacing: -2
                    }}
                >
                    AquaBuddy
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 32,
                        color: "#a9bdd6",
                        marginTop: 18
                    }}
                >
                    {site.tagline}
                </div>
            </div>
        ),
        { ...size }
    );
}
