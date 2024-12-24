import React from "react";

import ApplyForm from "./ApplyForm";
import CompanyJobHeader from "./CompanyHeader";
import { useParams } from "react-router-dom";
const CoursePage = () => {
  const { id } = useParams();

  return (
    <>
      <section className="ls-section bg-stone">
        <div className="auto-container">
          <div className="row">
            <CompanyJobHeader companyId={id} />
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
