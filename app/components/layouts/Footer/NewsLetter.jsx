import React from "react";

const NewsLetter = () => {
  return (
    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
      <h1 className="text-sm font-semibold tracking-widest  uppercase">
        Subscribe to newsletter
      </h1>

      <form action="#" method="POST" className="mt-6">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-primary rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
