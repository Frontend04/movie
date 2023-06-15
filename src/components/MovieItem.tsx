import React from "react";
import { MovieItemProps } from "../types";

class MovieItemComponent extends React.Component<MovieItemProps> {
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, onEdit } = this.props;
    onEdit(id, event.target.value);
  };

  render() {
    const { text, isEditing } = this.props;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.handleInputChange}
          disabled={!isEditing}
        />
        
      </div>
    );
  }
}

export default MovieItemComponent;