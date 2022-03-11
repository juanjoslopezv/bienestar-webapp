import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./pages/Main";
import ContextProvider from "./ContextApi/ContextProvider";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ContextProvider>
  </ChakraProvider>
)
