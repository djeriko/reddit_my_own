import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Text } from "./shared/helpers/Text";
import { Break } from "./shared/helpers/Break";
import { EColor } from "./constants";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br />
        <Text size={20} mobileSize={28} color={EColor.green}>
          Label1
        </Text>
        <Break size={8} mobileSize={16} inline />
        <Text size={20} bold={true}>
          Label2
        </Text>
        <Break size={8} inline />
        <Text size={20} mobileSize={16}>
          Label3
        </Text>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
