import React from "react";

// knows to use class since you need to handle user input using state
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
