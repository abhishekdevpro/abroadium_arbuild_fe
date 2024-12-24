import JobListingsTable from "./components/JobListingsTable";

const index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
    </div>
    // End page-wrapper
  );
};

export default index;
