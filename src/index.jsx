import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
	<StrictMode>
		<h1>Test</h1>
	</StrictMode>
);
