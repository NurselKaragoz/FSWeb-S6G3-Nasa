import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const contaier = document.getElementById("root");
const root = createRoot(contaier);
root.render(<App tab=" home " />);
