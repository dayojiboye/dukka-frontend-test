import React from "react";

import { Link } from "react-router-dom";
import "./styles.scss";

const employeeCard = ({
  showActionBtns,
  nameLink,
  image,
  name,
  position,
  phone,
  email,
  index,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div className="card">
      <div className="left">
        <img src={image} alt={name} />
      </div>

      <div className="right">
        {nameLink && (
          <Link to={`/employee/${index + 1}`}>
            <h2>{name}</h2>
          </Link>
        )}

        {!nameLink && <h2>{name}</h2>}

        <p>{position}</p>

        <p>{`(+234) (${phone.split("")[0]}) ${phone
          .slice(1)
          .substring(0, 3)} ${phone.slice(1).substring(3, 7)} ${phone
          .slice(1)
          .substring(7)}`}</p>

        <p>{email}</p>
      </div>

      {showActionBtns && (
        <div className="action-btns">
          <button aria-label="edit" onClick={editHandler}>
            <i className="far fa-edit"></i>
          </button>

          <button aria-label="delete" onClick={deleteHandler}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default employeeCard;
