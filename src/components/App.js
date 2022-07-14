import React from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";
import "../styles/App.css";

/*
Belajar State React JS

class App extends React.Component {
  state = {
    book: {
      name: "Train to Busan",
      author: "Ronaldo WS",
    },
    person: ["Chris Evans", "Toperu San"],
  };
  render() {
    return (
      <div>
        <Header />
        <List />
        <h1> HELLO WORLD</h1>
        <h3> Judul Buku : {this.state.book.name}</h3>
        <p> Author Buku tersebut : {this.state.book.author}</p>
        {this.state.person.map((item) => (
          <div>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    );
  }
}
*/

// const App = () => {
//   return (
//     <div>
//       <h1>Hello Maszeehhh</h1>
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     books: "train to busan",
//     author: "Bill Gates",
//   };
//   render() {
//     return (
//       <div>
//         {/* <List name="kodingworks" test="test" myBook={this.state.books}>
//           <h4>This is Title</h4>
//           <p>This is Paragraph</p>
//         </List> */}
//         <Button warna="biru" />
//         <List books={this.state.books} author={this.state.author} />
//       </div>
//     );
//   }
// }

/*
class App extends React.Component {
  state = {
    name: "Ronaldo Ganteng",
    text: "",
  };
  click = () => {
    this.setState({
      name: this.state.text,
    });
    this.setState({
      text: "",
    });
    // console.log("Halo maszeehh");
  };
  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" value={this.state.text} onChange={this.change} />
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
}

export default App;
*/
// STYLING COMPONENT PADA CSS

const App = () => {
  return (
    <div style={{ width: "400px", backgroundColor: "red" }}>
      <h1 className="nama">Ronaldo Gans</h1>
      <h1 style={mystyle}>Hello World</h1>
    </div>
  );
};

const mystyle = {
  color: "blue",
  fontSize: "70px",
};
export default App;
