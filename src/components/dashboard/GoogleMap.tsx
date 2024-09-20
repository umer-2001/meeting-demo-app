import React from "react";
import { Box } from "../ui/box";

const GoogleMap = () => {
  return (
    <Box className="bg-bg-100 text-white rounded-xl p-6 w-full shadow-md">
      <div style={{ display: "table", width: "100%" }}>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            background: "#fff",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: "100%",
              height: "368px",
              position: "relative",
              zIndex: 2,
            }}
          />
          <a
            href="https://www.taxuni.com/form-720-instructions/"
            style={{
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              textDecoration: "none",
            }}
          >
            Form 720 Instructions
          </a>
        </div>
      </div>
    </Box>
  );
};

export default GoogleMap;
