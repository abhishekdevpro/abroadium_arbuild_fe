import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialShare = () => {
  const socialContent = [
    {
      id: 1,
      name: "Facebook",
      icon: Facebook,
      bgColor: "bg-[#3b5998] hover:bg-[#2d4373]",
      link: "https://www.facebook.com/"
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
      bgColor: "bg-[#1da1f2] hover:bg-[#0c85d0]",
      link: "https://www.twitter.com/"
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: Linkedin,
      bgColor: "bg-[#0077b5] hover:bg-[#005582]",
      link: "https://www.linkedin.com/"
    }
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-700 font-medium">Share this job</span>
      <div className="flex gap-3">
        {socialContent.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-white transition-colors duration-200 ${item.bgColor}`}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;