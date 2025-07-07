import { Calendar, User } from "lucide-react";
import Button from "../../UI/Button";

export default function ArticleBlogSection() {
  const articles = [
    {
      img: "https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads-2.jpg",
      title: "Evolution of AI Resume Builders",
      link: "https://blog.abroadium.com/evolution-of-ai-resume-builders/",
      category: "Blog",
      date: "16-9-2024",
      author: "Admin",
    },
    {
      img: "https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads-1.jpg",
      title: "AI Resume Builders for International Job Seekers",
      link: "https://blog.abroadium.com/ai-resume-builders-for-international-job-seekers/",
      category: "Blog",
      date: "16-9-2024",
      author: "Admin",
    },
    {
      img: "https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads.jpg",
      title: "The Algorithms Behind the Buzz of AI Resume",
      link: "https://blog.abroadium.com/the-algorithms-behind-the-buzz-of-ai-resume/",
      category: "Blog",
      date: "16-9-2024",
      author: "Admin",
    },
    {
      img: "https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-4.jpg",
      title: "The Future of AI in Talent Acquisition",
      link: "https://blog.abroadium.com/the-future-of-ai-in-talent-acquisition/",
      category: "Blog",
      date: "16-9-2024",
      author: "Admin",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 py-16 bg-[#F4F8FF]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Article & <span className="text-primary">Blog</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight hover:text-primary transition-colors">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <Button 
        variant="secondary"
        size="lg"
        // className="bg-white text-primary font-medium px-8 py-3 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}
