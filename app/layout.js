import Header from "./Header";
import "../styles/app.scss";

export const metadata = {
  title: "ToDo App",
  description: "Todo App Generated using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
