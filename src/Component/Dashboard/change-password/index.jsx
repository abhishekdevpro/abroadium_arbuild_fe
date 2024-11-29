import Form from "./components/Form";
import "../Home.css"

const Index = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100" id='bghome-dash'>
     

      <section className="flex flex-col items-center py-8" >
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6" id='bghome-dash'>
          <h2 className="text-xl font-bold text-white mb-4">Change Password</h2>
          <div>
            <Form />
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 mt-auto py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
