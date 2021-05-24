import React, { Fragment, useState } from "react";

const EditAgenda = ({ agenda }) => {
  const [item, setItem] = useState(agenda.item);

  //edit item function

  const updateItem = async e => {
    e.preventDefault();
    try {
      const body = { item };
      const response = await fetch(
        `http://localhost:3000/agenda/${agenda.agenda_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${agenda.agenda_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${agenda.agenda_id}`}
        onClick={() => setItem(agenda.item)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Agenda Item</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setItem(Agenda.item)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setItem(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateItem(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setItem(agenda.item)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditAgenda;