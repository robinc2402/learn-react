import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const SingleListItem = (props) => {
  return (
    <>
      <div className="itemSingle">
        <IconButton
          aria-label="delete"
          id={props.id}
          onClick={() => {
            props.delete(props.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <span id="itemText">{props.text}</span>
      </div>
    </>
  );
};

export default SingleListItem;
