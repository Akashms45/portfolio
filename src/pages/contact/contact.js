import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";
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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => setStatus("Message Sent ✔"))
      .catch(() => setStatus("Failed ❌"));
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-primaryDark">
        Contact Me
      </h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT SIDE */}

        <div className="space-y-8 text-gray-800 dark:text-gray-200">
          <div className="space-y-6 pt-6 mt-24 ml-16 font-bold ">
            <a
              href={`tel:${phone}`}
              className="flex p-1 text-lg items-center gap-3 hover:text-primary  transition"
            >
              <FiPhone
                size={22}
                className="text-primary dark:text-primaryDark"
              />{" "}
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="flex p-1 text-lg items-center gap-3 hover:text-primary transition"
            >
              <FiMail
                size={22}
                className="text-primary dark:text-primaryDark"
              />{" "}
              {email}
            </a>

            {/* <a
              href={info.linkedin}
              target="_blank"
              className="flex p-1 text-lg items-center gap-3 hover:text-primary transition"
              rel="noopener noreferrer"
            >
              <FiLinkedin
                size={22}
                className="text-primary dark:text-primaryDark"
              />{" "}
              {info.linkedin}
            </a> */}

            <p className="flex p-1 text-lg items-center gap-3 opacity-80">
              <FiMapPin
                size={22}
                className="text-primary dark:text-primaryDark"
              />{" "}
              {address}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={sendEmail}
          className="
             p-8
            space-y-6
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 font-bold bg-violet-200 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 font-bold bg-violet-200 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark  outline-none"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full font-bold p-3 bg-violet-200 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows="4"
            className="w-full font-bold p-3 bg-violet-200 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark outline-none"
          />

          <button
            type="submit"
            className="
              w-full py-3
              bg-primary dark:bg-primaryDark text-white rounded-lg
              hover:bg-primary/90 transition font-medium flex justify-center items-center gap-2
            "
          >
            Send Message
          </button>

          {status && <p className="text-center text-sm pt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};
