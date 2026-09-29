import type { Metadata } from "next";
import "./globals.css";

// The request-specific CSP nonce cannot be embedded in statically built HTML.
// Keep all workbenches interactive under the production security policy.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "GOATnote Disposition",
  description: "Independent synthetic-message classroom demonstration with a saved-output comparison viewer.",
  robots: { index: false, follow: false },
  icons: { icon: "/goatnote-symbol.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
