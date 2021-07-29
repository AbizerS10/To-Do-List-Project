import React, { useState } from "react";

function Todo() {
  const [item, setItem] = useState();
  const [itemlist, setitemlist] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [elem, setElem] = useState({
    id: new Date().getTime().toString(),
    name: ""
  });
  
  const Add = () => {
      if(item){
        const allitems = {id: new Date().getTime().toString(), name: item}
        setitemlist([...itemlist, allitems]);
        setItem("");
      }
      else {
        alert("Nashe bhai");
      }
  };

  const deleteItem = (id) => {
    const uarr = itemlist.filter((val) => {
        return val.id != id;
    });
    setitemlist(uarr);
  };

  const deleteall = () => {
    setitemlist([]);
  }

  const edit = (val) => {
    setToggle(false);
    setItem(val.name);
    setElem(val);
  };

  const togglefun = () => {
    setToggle(true);
    setItem("");
    if(item) {
      itemlist.forEach((val) => {
        if(val.id === elem.id){
          val.name = item;
        }
      });
    }
    else {
      alert("Nashe bhai");
    }
  };

  return (
    <>
      <div className="main">
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1024px-GNOME_Todo_icon_2019.svg.png"
            alt="todo"
          />
          <figcaption>Add Your List Item Here ✌</figcaption>
        </figure>
        <div className="additem">
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          {toggle ? <i className="fas fa-plus" onClick={Add}></i> : <i className="fas fa-edit" onClick={() => togglefun()}></i>}
        </div>

        <div className="showitem">
          {itemlist.map((elem) => {
            return (
              <>
                <div className="eachitem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="icons">
                  <i class="fas fa-edit" title="Edit Item" onClick={() => edit(elem)}></i>
                  <i className="far fa-trash-alt" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="showitem">
          <button className="btn" onClick={deleteall}>
            <span>Check List</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
