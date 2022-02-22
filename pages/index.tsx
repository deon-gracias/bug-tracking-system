import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";

// Mantine
import { createStyles } from "@mantine/styles";

// Components
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { classes } = useStyles();

  const loggedIn = true;

  // Push to projects page if authenticates
  loggedIn && Router.push("/projects");

  return (
    <Layout login>
      <Head>
        <title>deBug</title>
      </Head>
      <div className={classes.heroContainer}>
        <img src="/images/hero-img-dark.svg" className={classes.heroImage} />
        <div className={classes.heroText}>
          <h1>Find.</h1>
          <h1>Report.</h1>
          <h1>Eliminate.</h1>
        </div>
      </div>
    </Layout>
  );
};

const useStyles = createStyles((theme) => ({
  heroContainer: {
    width: "100%",
    marginTop: "1.5rem",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-evenly",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      gap: "3rem",
      flexDirection: "column",
    },
  },
  heroImage: {
    height: 200,
  },
  heroText: {
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "1rem",
    "& h1:nth-of-type(even)": {
      color: theme.primaryColor,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "1.25rem",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
  },
}));

export default Home;
