import SkillHistoryTable from "./TestHistory";
import "../Home.css";

const SkillHistoryPage = () => {
  return (
    <div className=" min-h-screen w-screen md:w-11/12 bg-primary/20  py-12 text-white">
      <header className=" bg-primary shadow">
        <div className="container mx-auto py-4 px-6 ">
          <h1 className="text-2xl font-semibold text-white">Skill History</h1>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto">
          <div className="rounded-lg shadow-md p-6">
            <SkillHistoryTable />
          </div>
        </div>
      </section>

      {/* <footer className="bg-gray-200 mt-auto py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default SkillHistoryPage;
