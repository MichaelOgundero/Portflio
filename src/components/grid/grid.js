import React, { useState } from "react";
import "./grid.css";
import Modal from "../modal/modal";
import infoIcon from "../../assets/icons/info_icon_24px.svg";
import arrowRightAlt from "../../assets/icons/arrow-right_icon_24px_alt.svg";

const Grid = ({ gridNoImage, title, dataSet, focusWork }) => {
  const [activeItem, setActiveItem] = useState({ val: "" });
  const [modalStatus, setModalStatus] = useState(false);

  const clearActiveItem = () => {
    setActiveItem({
      val: "",
    });
  };

  const handleModalStatus = () => {
    setModalStatus(false);
    clearActiveItem();
  };

  if (gridNoImage) {
    return (
      <>
        <div ref={focusWork} className="grid-title">
          <h2>{title}</h2>
        </div>
        <div className="grid-container">
          {dataSet?.map((data, index) => {
            return (
              <div
                onClick={() => {
                  window.open(data.url, "_blank");
                }}
                key={index}
                className="grid-container-item"
              >
                <div className="grid-container-item-content" style={{}}>
                  <span>
                    <h2>{data.site}</h2>
                  </span>
                  <h3>Technologies</h3>
                  <p style={{ display: data.framework ? "flex" : "none" }}>
                    {data.framework}
                  </p>
                  <p>{data.html}</p>
                  <p>{data.css}</p>
                  <p>Responsive: {data.responsive}</p>
                </div>
                <div
                  style={{ backgroundColor: "#36454f", color: "white" }}
                  className="grid-container-more-info"
                >
                  <p>Go to Website</p>
                  <img alt="info" src={arrowRightAlt} />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid-title">
        <h2>{title}</h2>
      </div>
      <div className="grid-container">
        {dataSet?.map((data, index) => {
          return (
            <div
              onClick={() => {
                setModalStatus(!modalStatus);
                setActiveItem(data);
              }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              key={index}
              className="grid-container-item"
            >
              <img alt="modal img" src={data.image} />
              <div
                style={{ display: "flex" }}
                className="grid-container-more-info"
              >
                <img alt="info" width="" src={infoIcon} />
                <p>Click for more info</p>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        status={modalStatus}
        dataSet={activeItem}
        handleModalStatus={handleModalStatus}
      />
    </>
  );
};

export default Grid;
