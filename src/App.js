import { render } from "react-dom";
import "./styles.css";

export default function App() {
  return render(
    <p>"I am learning React. My life is getting better. "</p>,
    document.getElementById("root")
  );
}
