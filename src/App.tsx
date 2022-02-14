import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import {
  generateId,
  generateRandomString,
} from "./utils/react/generateRandomIndex";
import { Dropdown } from "./shared/Dropdown";

const LIST = [{ text: "some" }, { text: "other some" }, { text: "some" }].map(
  generateId
);

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <Dropdown
          isOpen={false}
          onOpen={() => console.log("Open")}
          onClose={() => console.log("Close")}
          button={<button>Test</button>}
        >
          <ul>
            <CardsList />
            <CardsList />
          </ul>
        </Dropdown>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
