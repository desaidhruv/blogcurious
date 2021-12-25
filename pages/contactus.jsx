import React from "react";
import { useState } from "react";

export default function contactus() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      await fetch(
        "https://v1.nocodeapi.com/vctets/google_sheets/sZkArUcwYhLJhoGD?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, message]]),
        }
      );
      setData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <>
      <section className="pb-40 ">
        <div className="">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Contact us</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      type="name"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="name"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <input
                    value={message}
                      id="message"
                      name="message"
                      onChange={handleChange}
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={handleSubmit}
                      className="bg-black text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-xl mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
