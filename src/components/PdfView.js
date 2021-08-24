import React from "react";
import sampleFile from "../assets/sample.pdf";

export default function PdfView() {
  return (
    <div id="pdfView_container">
      <embed id="pdfView" src={sampleFile} type="application/pdf"></embed>
    </div>
  );
}
