import logo from "./logo.svg";
import "./App.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import "inter-ui/inter.css";
import { Button, Page, Text } from "@geist-ui/core";

const Home = () => (
  <Page>
    <Text h1>Cagdas Muldur</Text>
  </Page>
);

export default () => (
  <GeistProvider>
    <CssBaseline />
    <Home />
  </GeistProvider>
);
