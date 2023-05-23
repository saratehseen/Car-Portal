import React, { useState } from "react";
import ShowModal from "../components/showModal";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch("/api/contactForm", {
      method: "post",
      body: JSON.stringify(data),
    })
    .then((res) => {
      console.log(res);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      if (res["status"] == 200) {
        setShowModal(true);
      } else {
        return null;
      }
    });
  };

  return (
    <div className="pb-9 px-20 lg:col-span-2 xl:py-12">  
      <form
        action="#"
        method="POST"
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm text-black focus:border-gray-400 border-gray-400 rounded-md"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              autoComplete="email"
              className="py-3 px-4 block w-full text-black shadow-sm text-black focus:border-gray-400 border-gray-400 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between"></div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Your Message"
              rows={4}
              className="py-3 px-4 block w-full text-black shadow-sm text-black focus:border-gray-400 border-gray-400 rounded-md"
              aria-describedby="message-max"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:justify-start text-right">
          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-900	hover:bg-bg-blue-900	 rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
      <ShowModal showModal={showModal} />
    </div>
      
      
    
  );
}