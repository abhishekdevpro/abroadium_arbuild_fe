import "../Home.css";
import NotificationsHistory from "./NotificationsHistory";

const NotificationsHistoryPage = () => {
  return (
    <div className="min-h-screen w-screen bg-primary">
      <header className="bg-transparent shadow">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-semibold text-white">Notifications</h1>
        </div>
      </header>

      <section className="py-8">
        <div className="">
          <div className="rounded-lg shadow-md p-6">
            <NotificationsHistory />
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

export default NotificationsHistoryPage;
