import Head from "next/head";
import Link from "next/link";

// Mantine
import {
  Container,
  Paper,
  SimpleGrid,
  Title,
  Button,
  Text,
} from "@mantine/core";

// Components
import Layout from "../../components/layout";

// Data
import projectsJson from "../../data/projects.json";

const ProjectCard = ({
  id,
  title,
  subtitle,
  createdBy,
}: {
  id: number;
  title: string;
  subtitle: string;
  createdBy: string;
}) => (
  <Paper padding="xl" key={id} withBorder>
    <Text color="gray" size="xs">
      Project ID: {id}
    </Text>
    <Title order={4}>{title}</Title>
    <Text size="sm">
      {subtitle.length > 50 && subtitle.slice(0, 50) + " ..."}
    </Text>
    <Text mt={10} color="gray" size="xs">
      {createdBy}
    </Text>
    <Link href={`/projects/${id}`}>
      <Button mt={10}>View</Button>
    </Link>
  </Paper>
);

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <Container>
        <Title m="1em 0">Projects</Title>

        <SimpleGrid
          breakpoints={[
            { minWidth: "xs", cols: 1, spacing: "sm" },
            { minWidth: "sm", cols: 3, spacing: "md" },
            { minWidth: "lg", cols: 4, spacing: "xl" },
          ]}
        >
          {projectsJson.map(({ id, title, subtitle, createdBy }) => (
            <ProjectCard
              id={id}
              title={title}
              subtitle={subtitle}
              createdBy={createdBy}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
