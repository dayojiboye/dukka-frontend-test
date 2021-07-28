import React from "react";

const employeeCard = ({
  image,
  name,
  position,
  phone,
  email,
  editHandler,
  deleteHandler,
}) => {
  return (
    <li>
      <div className="left">
        <img src={image} alt={name} />
      </div>
      <div className="right">
        <h2>{name}</h2>

        <p>{position}</p>

        <p>{`(+234) (${phone.split("")[0]}) ${phone
          .slice(1)
          .substring(0, 3)} ${phone.slice(1).substring(3, 7)} ${phone
          .slice(1)
          .substring(7)}`}</p>

        <p>{email}</p>
      </div>

      <div className="action-btns">
        <button aria-label="edit" onClick={editHandler}>
          <i className="far fa-edit"></i>
        </button>

        <button aria-label="delete" onClick={deleteHandler}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default employeeCard;
