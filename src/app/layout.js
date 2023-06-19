// app/layout.tsx
'use client'
import Header from "@/components/Header";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}