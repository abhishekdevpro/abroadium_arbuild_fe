import JobAlertsTable from "./components/JobAlertsTable";

const index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          {/* <MenuToggler /> */}
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobAlertsTable />
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
