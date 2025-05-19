// app/form-data/page.tsx
import React, { Suspense } from "react";
import FormDataClient from "./FormDataClient";

const FormDataPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormDataClient />
    </Suspense>
  );
};

export default FormDataPage;
