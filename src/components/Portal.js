import ReactDOM from 'react-dom';
import React,  { useEffect, useState } from 'react';

export const Portal = ({ children }) => {

    const portalEl = document.createElement("div");
  
    useEffect(() => {
      document.body.appendChild(portalEl);
  
      return function cleanup() {
        document.body.removeChild(portalEl);
      };
    });
  
    return ReactDOM.createPortal(children, portalEl);
  }