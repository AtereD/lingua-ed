import "./globals.css";
import { quicksand } from "@/lib/fonts";
import { AuthProvider } from "@/context/AuthContext";

const description =
  "LinguaEd is an online language school: learn English, Spanish, French, German, Italian, Portuguese, Korean and Mandarin with interactive lessons, quizzes and expert teachers.";

export const metadata = {
  title: { default: "LinguaEd — Learn languages online", template: "%s · LinguaEd" },
  description,
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "LinguaEd — Learn languages online",
    description,
    siteName: "LinguaEd",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#524fd5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
