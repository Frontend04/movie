import React from "react";
import { MovieItemProps } from "../types";

class MovieItemComponent extends React.Component<MovieItemProps> {
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, onEdit } = this.props;
    onEdit(id, event.target.value);
  };

  handleDeleteClick = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
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
        <button onClick={this.handleDeleteClick}>Удалить</button>
      </div>
    );
  }
}

export default MovieItemComponent;