import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { info } from "../../data/info";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const { email, phone, address } = info.contact;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_bc5hicp",
        "template_9t3ozjc",
        e.target,
        "CXj81xby3Etx-Zu4V"
      )
      .then(() => {
        setStatus("Message Sent ✔");
        e.target.reset();
      })
      .catch(() => setStatus("Failed ❌"));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-10 overflow-x-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary dark:text-primaryDark">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-full">
        {/* LEFT SIDE */}
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
          <div className="space-y-6 pt-6 mt-0 md:mt-16 lg:mt-24 ml-0 md:ml-10 lg:ml-16 font-bold max-w-full">
            {/* PHONE */}
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-sm sm:text-base md:text-lg hover:text-primary transition max-w-full"
            >
              <FiPhone
                size={20}
                className="text-primary dark:text-primaryDark flex-shrink-0"
              />
              <span className="break-all max-w-full">{phone}</span>
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="flex items-start gap-3 text-sm sm:text-base md:text-lg hover:text-primary transition max-w-full"
            >
              <FiMail
                size={20}
                className="text-primary dark:text-primaryDark flex-shrink-0 mt-1"
              />
              <span className="break-all max-w-full">{email}</span>
            </a>

            {/* ADDRESS */}
            <p className="flex items-start gap-3 text-sm sm:text-base md:text-lg opacity-80 max-w-full">
              <FiMapPin
                size={20}
                className="text-primary dark:text-primaryDark flex-shrink-0 mt-1"
              />
              <span className="break-words max-w-full">{address}</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={sendEmail} className="p-6 sm:p-8 space-y-6 max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              required
              className="p-3 text-sm sm:text-base font-bold bg-violet-200 dark:bg-gray-700 rounded-lg outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="p-3 text-sm sm:text-base font-bold bg-violet-200 dark:bg-gray-700 rounded-lg outline-none"
            />
          </div>

          <input
            name="phone"
            placeholder="Phone"
            className="w-full p-3 text-sm sm:text-base font-bold bg-violet-200 dark:bg-gray-700 rounded-lg outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows="4"
            className="w-full p-3 text-sm sm:text-base font-bold bg-violet-200 dark:bg-gray-700 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 text-sm sm:text-base bg-primary dark:bg-primaryDark text-white rounded-lg"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-xs sm:text-sm pt-2">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};
