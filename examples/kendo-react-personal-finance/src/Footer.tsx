import React from "react";

function Footer() {
  return (
    <div
     style={{color: "var(--kendo-color-subtle)", marginLeft: "80px"}}
     className="footer">
        <div className="footer__source">
      <a
        className="k-link k-avatar k-primary"
        href="https://github.com/telerik/kendo-react/tree/master/examples/kendo-react-personal-finance"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "white",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}/images/github-logo.svg`}
          style={{ width: "25px", height: "25px", color: "var(--kendo-color-subtle, #9B9B9B)" }}
        />
        <span style={{fontSize: '14px', fontWeight: 400, letterSpacing: 'wider', color: "var(--kendo-color-subtle, #9B9B9B)"}}>Get the Source Code</span>
      </a>
      </div>
      <div className="footer__copyright">
        <div style={{fontSize: '14px', fontWeight: 400, letterSpacing: 0}} >Copyright © 2025 Progress Software. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
