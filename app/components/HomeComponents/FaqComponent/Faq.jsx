import React from "react";
import FaqComp from "./FaqComp";
import Link from "next/link";
function Faq() {
  const faqs = [
    {
      title: "What is the delivery fee?",
      content: "Delivery fee is $5",
    },
    {
      title: "What is the delivery fee?",
      content: "Delivery fee is $5",
    },
    {
      title: "What is the delivery fee?",
      content: "Delivery fee is $5",
    },
    {
      title: "What is the delivery fee?",
      content: "Delivery fee is $5",
    },
  ];
  return (
    <div className="relative mx-auto w-full px-5 py-16  text-gray-800 sm:px-10 md:max-w-screen-lg ">
      <h2 className="mb-5 text-center text-3xl font-bold sm:text-4xl">
        Frequently asked Questions
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        We have written down answers to some of the frequently asked questions.
        But, if you still have any queries, feel free to ping us on chat.
      </p>
      <ul className="space-y-4">
        {faqs.map((faq, i) => (
          <FaqComp
            title={faq.title}
            content={faq.content}
            first={i === 0}
            key={`faq_${i}`}
          />
        ))}
      </ul>
      <div className="mt-20 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex cursor-pointer rounded-lg bg-primary px-5 py-3 text-lg text-white"
        >
          Still have questions?
        </Link>
      </div>
    </div>
  );
}

export default Faq;
