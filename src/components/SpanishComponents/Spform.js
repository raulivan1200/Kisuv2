"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../../styles/Form.module.css"
import Textwave from "../Textwave";
export default function Spform() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting,errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoxmsrv4pmr4g9p.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Gracias, espera una respuesta en menos de 30 minutos.`
        );
        setErrorMessage(""); // Clear any previous error message
      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formcon}>
      <div className={styles.formh}>
      <h1>CONECTEMOS</h1>
      <p>
      Utiliza el formulario a continuación para ponerte en contacto con nosotros. Esperamos conocer más sobre ti, tu organización y cómo podemos ayudarte a conectar con más clientes.</p>
      </div>
      <div className={styles.ef}>  
      <Textwave text="E m a i l :"/>
      <input className={styles.c} {...register("email",{
      required: "Es necesario un email ",
      validate: {
        maxLength: (v) =>
          v.length <= 50 || "El correo electrónico debe tener como máximo 50 caracteres.",
        matchPattern: (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "La dirección de correo electrónico debe ser una dirección válida.",
      }})} placeholder="me@gmail.com"></input>
        {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>

      <div>  
      <h2>Detalles del proyecto:</h2>
      <textarea className={styles.inputbody} {...register("body")} placeholder="Detalles del proyecto"></textarea>
      </div>

          <div className={styles.butonform}>
          <div className="buttons">
   <button id="cursor-scale" className="btn" role="submit"><span></span><p data-start="Comencemos" data-text=" ¡Llámanos!" data-title="Comencemos"></p></button>
</div>
          </div>



      {successMessage && <h3>{successMessage}</h3>}
    </form>
  );
}
