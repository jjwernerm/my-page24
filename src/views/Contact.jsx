import { useState, useContext } from "react";

import ErrorContact from '../components/ErrorContact';
import SentContact from '../components/SentContact';

import { ContactContext } from '../context/ContactContext';

export default function Contact() {

  const { name, setName } = useContext(ContactContext);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [warning, setWarning] = useState([]);

  const [messageOk, setMessageOk] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let warnings = [];

    if (name === "") {
      warnings.push("Bug in name");
      warnings.name = "Olvidaste ingresar tu Nombre";
    }
    if (email === "") {
      warnings.push("Bug in email");
      warnings.email = "Olvidaste ingresar tu Correo Electrónico";
    }
    if (comment === "") {
      warnings.push("Bug in comment");
      warnings.comment = "Olvidaste ingresar tu Comentario";
    }
    setWarning(warnings);

    if (warnings.length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/mgedqndg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            comment,
          }),
        });

        if (response.ok) {
          setMessageOk("envía a SentContact.jsx");
          setName("");
          setEmail("");
          setComment("");
        } else {
          setMessageError("envía a ErrorContact.jsx");
        }
      } catch (error) {
        setMessageError("envía a ErrorContact.jsx");
      }
    }
  };

  return (
    <>

      <div className="h-main flex justify-center items-end md:items-center text-sm md:text-base">
        <div className="bg-gray-800 shadow-gray-700 rounded-lg shadow-md m-2 p-2">
          <p className="text-white text-center my-4">
            Escríbeme y pronto me pondré en contacto contigo para conocernos.
          </p>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mgedqndg"
            method="POST"
          >
            <div className="md:grid md:grid-cols-2 md:gap-2">

              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className=
                  {`
                    text-white border-cyan-600 border bg-inherit w-full rounded-full p-2 mt-2
                    focus:outline focus:outline-offset-2 focus:outline-cyan-500
                    ${warning.name ? "border-red-500" : "border-e"}
                  `}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {warning.name && (<p className="text-red-500 text-xs mb-2">{warning.name}</p>)}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className=
                  {`
                    text-white border-cyan-600 border bg-inherit w-full rounded-full p-2 mt-2
                    focus:outline focus:outline-offset-2 focus:outline-cyan-500
                    ${warning.email ? "border-red-500" : "border-e"}
                  `}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {warning.email && (<p className="text-red-500 text-xs">{warning.email}</p>)}
              </div>

            </div>

            <textarea
              type="email"
              placeholder="Comentario"
              className=
              {`
                    text-white border-cyan-600 border bg-inherit w-full rounded-lg p-2 mt-6
                    focus:outline focus:outline-offset-2 focus:outline-cyan-500
                    ${warning.comment ? "border-red-500" : "border-e"}
                  `}
              value={comment}
              onChange={(event) => setComment(event.target.value)}

            ></textarea>
            {warning.comment && (<p className="text-red-500 text-xs">{warning.comment}</p>)}

            <div className="flex justify-center my-6">
              <input
                type="submit"
                value="Enviar"
                className="bg-cyan-600 text-white p-3 w-1/2 rounded-full cursor-pointer
                  hover:bg-cyan-500 hover:outline hover:outline-offset-2 hover:outline-cyan-500"
              />
            </div>

            <div>
              {messageOk && <SentContact />}
              {messageError && <ErrorContact />}
            </div>

          </form>
        </div>
      </div>


    </>
  )
}