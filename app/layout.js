import Header from "./Header";
import "../styles/app.scss";
import { UserProvider } from "../components/Clients";

export const metadata = {
  title: "ToDo App",
  description: "Todo App Generated using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <>
            <Header />
            {children}
          </>
        </UserProvider>
      </body>
    </html>
  );
}
