import React from "react";
import Card from "../CardComponents/Card";

const BlogCard = () => {
  const details = [
    {
      id: 1,
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <section className="py-10">
          <h1 className="mb-12 text-center font-sans text-5xl font-bold">
            Our Blog
          </h1>
          <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
            {details.map((detail) => (
              <Card key={`details___${detail.id}`} {...detail} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogCard;
