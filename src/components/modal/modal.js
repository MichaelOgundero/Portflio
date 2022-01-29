import React, { useEffect, useState } from "react";
import "./modal.css";
import closeIcon from "../../assets/icons/close_icon_24px.svg";

const Modal = ({ status, dataSet, handleModalStatus }) => {
  const handleOpenInWindow = (image) => {
    window.open(image, "_blank");
  };

  if (dataSet.additionalImages) {
    return (
      <>
        <div
          style={{ display: status ? "block" : "none" }}
          className="modal-container"
        >
          <div className="modal-content">
            <div className="modal-header">
              <div
                onClick={() => {
                  handleOpenInWindow(dataSet.imageDesktop);
                }}
                className="modal-header-button"
              >
                Image too small?
              </div>
              <img
                className="modal-close-icon"
                onClick={() => {
                  handleModalStatus();
                }}
                alt="close-icon"
                src={closeIcon}
                width="100%"
              />
            </div>
            <div className="modal-content-main-body">
              <div className="modal-content-img-container">
                <picture>
                  <source
                    media="(min-width: 992px)"
                    srcSet={dataSet.imageDesktop}
                  />
                  <img width="100%" alt="dataset img" src={dataSet.image} />
                </picture>{" "}
                <div className="modal-content-img-additional">
                  {dataSet.additionalImages?.map((image, index) => {
                    return <img key={image} width="30%" alt="sd" src={image} />;
                  })}
                </div>
              </div>
              <div className="modal-content-description">
                {dataSet.attributes?.map((data, index) => {
                  return (
                    <div className="modal-content-container" key={data + index}>
                      <p key={data}>{data.attribute}</p>
                      <h2 key={index}> {data.attributeVal}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{ display: status ? "block" : "none" }}
        className="modal-container"
      >
        <div className="modal-content">
          <div className="modal-header">
            <div
              onClick={() => {
                handleOpenInWindow(dataSet.imageDesktop);
              }}
              className="modal-header-button"
            >
              Image too small?
            </div>
            <img
              className="modal-close-icon"
              onClick={() => {
                handleModalStatus();
              }}
              alt="close-icon"
              src={closeIcon}
              width="100%"
            />
          </div>
          <div className="modal-content-main-body">
            <div className="modal-content-img-container">
              <picture>
                <source
                  media="(min-width: 992px)"
                  srcSet={dataSet.imageDesktop}
                />
                <img width="50%" alt="dataset img" src={dataSet.image} />
              </picture>
            </div>
            <div className="modal-content-description">
              {dataSet.attributes?.map((data, index) => {
                return (
                  <div className="modal-content-container" key={data + index}>
                    <p key={data}>{data.attribute}</p>
                    <h2 key={index}> {data.attributeVal}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
