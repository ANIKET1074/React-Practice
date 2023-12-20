import "./App.css";
import InfoBox from "./InfoBox";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
import SearchBox from "./SearchBox";

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <SearchBox />
      <InfoBox />
    </>
  );
}

export default App;
