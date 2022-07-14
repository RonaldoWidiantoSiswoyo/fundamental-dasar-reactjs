import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.children}</h1>
        <h3>{this.props.name}</h3>
        <p>{this.props.test}</p>
        <p>{this.props.myBook}</p> */}
        {/* <h2>List Component</h2>
        <ListItem /> */}
        <h1>{this.props.books}</h1>
        <h1>{this.props.author}</h1>
      </div>
    );
  }
}

export default List;
