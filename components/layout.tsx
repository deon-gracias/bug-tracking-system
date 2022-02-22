import { NextPage } from "next";

// Mantine
import { AppShell, Container } from "@mantine/core";
// Components
import Header from "./header";

interface ILayout {
  login?: boolean;
  children: React.ReactNode;
}

const Layout = ({ login, children }: ILayout) => {
  return (
    <AppShell header={login ? <Header login /> : <Header />}>
      {children}
    </AppShell>
  );
};

export default Layout;
