import { ThemeProvider } from "@/app/components/theme-provider"
import { Metadata } from "next"
import "./globals.css";


export const metadata: Metadata = {
  title: "Saksham Kumar Portfolio",
  description: "Saksham Kumar's personal portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
