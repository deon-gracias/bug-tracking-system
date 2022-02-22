import { useState } from "react";

// Mantine
import { useForm } from "@mantine/hooks";
import { Container, Paper, Center, SimpleGrid } from "@mantine/core";

// Components
import { AuthenticationForm as AuthForm } from "../components/authForm";
import Layout from "../components/layout";

const Login = () => {
  return (
    <Layout>
      <Center>
        <Paper
          sx={{ width: "100%", maxWidth: "500px", margin: "4em 0" }}
          padding="xl"
          shadow="md"
          radius="md"
          withBorder
        >
          <Container>
            <SimpleGrid spacing="lg">
              <AuthForm formType="login" />
            </SimpleGrid>
          </Container>
        </Paper>
      </Center>
    </Layout>
  );
};

export default Login;
