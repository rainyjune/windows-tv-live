import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector("#root"));
root.render(<h2>Hello from React!</h2>);