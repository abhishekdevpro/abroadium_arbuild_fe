import { Calendar, User } from "lucide-react";
import Button from "../../UI/Button";

export default function ArticleBlogSection() {
  const handleBlogs = () => {
    window.location.href = "https://blog.abroadium.com/";
  };
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
    <div className="max-w-8xl  px-4 py-16 bg-[#F4F8FF]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-[50px] font-bold text-gray-900 mb-4">
          Article & <span className="text-primary">Blog</span>
        </h1>
        <p className="text-[#2F2A2A] max-w-3xl mx-auto tex-base md:text-[17px] leading-relaxed">
          Explore expert-written content on resume writing, job search
          strategies, interview tips, and career development. Stay informed and
          boost your chances with practical advice that works.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden  duration-300 rounded-[15px]"
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
            <div className="p-6 flex flex-col gap-4">
              <h3 className="md:text-[20px] font-medium text-wrap-balanced ">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>

              {/* Meta Information */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-[13px] h-[13px] text-[#888080]" />
                    <span className="text-[13px] text-[#888080]">
                      {article.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-[13px] h-[13px] text-[#888080]" />
                    <span className="text-[13px] text-[#888080]">
                      By <span className="text-black">{article.author}</span>
                    </span>
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
          onClick={handleBlogs}
          variant="secondary"
          size="lg"
          className="md:w-[311px]"
          // className="bg-white text-primary font-medium px-8 py-3 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}
