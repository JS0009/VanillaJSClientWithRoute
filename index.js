import "./index.css"
import { navigation, viewUpdate } from "./src/components/router/router";
import "./src/styles/nav.css"

navigation()

window.onload = () => {
    viewUpdate()
}

