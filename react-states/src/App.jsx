import "./App.css";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
// import Ticket from "./Ticket";
import Lottery from "./Lottery";
import Form from "./Form";
import CommentsForm from "./CommentsForm";
import Count from "./Count";
import Joker from "./Joker";

function App() {
  const winCondition = (ticket) => {
    return ticket.every(() => ticket[0] === 0);
  };
  return (
    <>
      {/* <h1>States in React</h1> */}
      {/* <Counter /> */}
      {/* <LikeButton /> */}
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      {/* <Lottery /> */}
      {/* <Ticket ticket={[5, 6, 7]} />
      <Ticket ticket={[8, 9, 7, 6]} /> */}

      {/* Here in this we pass the function as the props */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}

      {/* <Form /> */}
      {/* <CommentsForm /> */}
      {/* <Count /> */}
      <Joker />
    </>
  );
}

export default App;
