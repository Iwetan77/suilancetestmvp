// src/data.ts
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string[];
  author: string;
  content: string;
  summary: string;
  image: string;
  tags: string[];
  views: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Collaborative Freelance Teams",
    date: "January 5th 2025",
    category: ["Freelance"],
    author: "Ahmad Sultani",
    content: `Learn how to use Suilance to connect with skilled freelancers and form effective teams for blockchain projects. 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
    summary:
      "Learn how to use Suilance to connect with skilled freelancers and form effective teams for blockchain projects.",
    image:
      "https://images.unsplash.com/photo-1664575197229-3bbebc281874?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZWxhbmNlfGVufDB8fDB8fHww",
    tags: ["Freelance", "Blockchain"],
    views: 5,
  },
  {
    id: 2,
    title: "The Future of Freelance Marketplaces",
    date: "January 12th 2025",
    category: ["Marketplaces"],
    author: "Jane Doe",
    content: `Discover how Suilance leverages the Sui blockchain to create a transparent and efficient freelance marketplace.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
    summary:
      "Discover how Suilance leverages the Sui blockchain to create a transparent and efficient freelance marketplace.",
    image:
      "https://images.unsplash.com/photo-1641802471091-ce8736305358?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Blockchain", "Freelance"],
    views: 5,
  },
  {
    id: 3,
    title: "Success Stories from Suilance Users",
    date: "January 20th 2025",
    category: ["Success"],
    author: "John Smith",
    content: `Hear inspiring success stories from freelancers and clients who have transformed their projects with Suilance.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
    summary:
      "Hear inspiring success stories from freelancers and clients who have transformed their projects with Suilance.",
    image:
      "https://images.unsplash.com/photo-1573496774379-b930dba17d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWVsYW5jZSUyMHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D",
    tags: ["Inspiration", "Freelance"],
    views: 5,
  },
];
