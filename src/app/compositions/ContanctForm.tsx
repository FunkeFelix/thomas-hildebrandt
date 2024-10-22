import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import { useEffect } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meoqokoj");

  useEffect(() => {
    if (state.submitting) {
      // Show loading toast when the form is being submitted
      toast.info("Ihre Nachricht wird gesendet. Bitte warten Sie...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: { backgroundColor: "#00246e", color: "#dbf3fd" },
      });
    }

    if (state.succeeded) {
      // Set local storage item to prevent form resubmission
      localStorage.setItem("formSubmitted", "true");
      // Show success toast when the form is successfully submitted
      toast.success(
        "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          style: { backgroundColor: "#0081b2", color: "#ffffff" },
        }
      );
    }

    if (state.errors) {
      // Show error toast if submission failed
      toast.error(
        "Es gab einen Fehler bei der Übermittlung. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          style: { backgroundColor: "#970000", color: "#ffffff" },
        }
      );
    }
  }, [state]);

  const preventMultipleSubmissions = () => {
    // Check if the form has already been submitted
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted) {
      toast.warn("Sie haben dieses Formular bereits gesendet.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: { backgroundColor: "#f3a50f", color: "#000000" },
      });
      return true; // Prevent submission
    }
    return false; // Allow submission
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!preventMultipleSubmissions()) {
      handleSubmit(event); // Proceed with form submission
    }
  };

  const getSubmitButtonText = () => {
    if (state.submitting) {
      return (
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
      );
    } else if (state.succeeded) {
      return "Nachricht gesendet!";
    } else if (!!localStorage.getItem("formSubmitted")) {
      return "Sie haben bereits eine Nachricht gesendet!";
    } else {
      return "Senden";
    }
  };

  const isButtonDisabled = () => {
    return (
      state.submitting ||
      state.succeeded ||
      !!localStorage.getItem("formSubmitted")
    );
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
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
          placeholder="Beschreiben Sie Ihr Anliegen"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={isButtonDisabled()}
          className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0081b2] ${
            state.submitting ||
            state.succeeded ||
            localStorage.getItem("formSubmitted")
              ? "bg-gray-400 cursor-not-allowed" // Styles when disabled
              : "bg-[#00246e] hover:bg-[#0081b2] cursor-pointer" // Styles when enabled
          }`}
        >
          {getSubmitButtonText()}
        </button>
      </form>
    </>
  );
}
