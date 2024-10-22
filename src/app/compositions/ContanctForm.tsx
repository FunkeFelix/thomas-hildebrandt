import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import { useEffect } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meoqokoj");

  useEffect(() => {
    if (state.submitting) {
      // Show loading toast when the form is being submitted
      toast.info("Submitting your message...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }

    if (state.succeeded) {
      // Show success toast when the form is successfully submitted
      toast.success("Thank you! Your message has been sent.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }

    if (state.errors) {
      // Show error toast if submission failed
      toast.error("Oops! Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  }, [state]);

  return (
    <>
      <button
        onClick={() =>
          toast.info(
            "Thank you for your interest! Please contact me via email at",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
            }
          )
        }
        className="bg-[#f7d794] hover:bg-[#00246e] text-[#00246e] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
      >
        Donate
      </button>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-semibold text-[#00246e] mb-6">
          Teilen Sie mir Ihr Anliegen mit
        </h2>

        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081b2] mb-4 text-black"
          placeholder="Geben Sie Ihren Namen ein"
        />

        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email Addresse
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081b2] mb-4 text-black"
          placeholder="Geben Sie Ihre E-Mail-Adresse ein"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          htmlFor="issue"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Was ist Ihr Anliegen?
        </label>
        <textarea
          id="issue"
          name="message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081b2] mb-4 text-black"
          placeholder="Describe your issue"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting || state.succeeded}
          className="w-full bg-[#00246e] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#0081b2] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0081b2]"
        >
          {state.submitting ? (
            <div className="flex">
              <Circles
                height="20"
                width="20"
                color="#00246e"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
              <span className="ml-2">wird gesendet...</span>
            </div>
          ) : state.succeeded ? (
            "Nachricht gesendet!"
          ) : (
            "Senden"
          )}
        </button>
      </form>
    </>
  );
}
