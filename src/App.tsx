import { format } from "date-fns";
import {Container, Stack} from '@mui/material';

import { APITester } from "./APITester";
import { MyForm } from "./MyForm"
import { FormikForm } from "./MyForm_useFormik"
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  const str = format(new Date(), "'Today is a' eeee");

  return (
    <>
        <Stack
          direction="row"
        >
          <Container>
            <div className="app">
              <div className="logo-container">
                <img src={logo} alt="Bun Logo" className="logo bun-logo" />
                <img src={reactLogo} alt="React Logo" className="logo react-logo" />
              </div>

              <h1>Bun + React</h1>
              <h1>{str}</h1>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
              <APITester />
            </div>
          </Container>

        {/* <MyForm /> */}
        <FormikForm />
        </Stack>
      <Container />
    </>
  );
}

export default App;
