import React from "react";

// knows to use class since you need to handle user input using state
class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
