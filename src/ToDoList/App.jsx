import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import "../index.css";
import { PregnantWoman } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const App = () => {
  let defaultData = ["Buy apples"];
  const [items, UpdateItems] = useState(defaultData);

  const addItem = (e) => {
    //debugger;
    // let newItemText = document.getElementById("newItem").value;

    let newItemText = e.target.value;

    UpdateItems((prevState) => {
      return {
        ...prevState,
        newItemText
      };
    });

    console.log(items);
  };

  const listItems = () => {
    return items.forEach((element) => {
      return (
        <div className="itemSingle">
          {/* <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton> */}
          <button>x</button>
          <span id="itemText">{element}</span>
        </div>
      );
    });
  };

  const classes = useStyles();

  return (
    <>
      <div id="container">
        <div id="todo">
          <h1 id="heading">TODO List</h1>
          <div id="inner">
            <div id="addItem">
              <input
                type="text"
                name="newItem"
                id="newItem"
                placeholder="Add an item"
                onChange={addItem}
              />
              <Button
                id="addNewItem"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={addItem}
              ></Button>
            </div>
            <div id="itemsList">{items}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
