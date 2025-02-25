import "./globals.css";
import MainBody from "./MainBody";

export const metadata = {
  title: "Kian S. - Full Stack Developer",
  description: "Kian Shahangyan Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainBody>{children}</MainBody>
    </html>
  );
}
