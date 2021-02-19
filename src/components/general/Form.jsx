import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { anims, colors } from "../../utils/theme"
import Swal from "sweetalert2"
import arrowSelect from "../../images/icons/arrow-select.svg"

import { get_countries_service } from "../../services/country_service"
import { sendmail_service } from "../../services/send_mail"

const Form = styled.form`
  min-height: 100vh;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 2em 2em 4em 2em;
  position: relative;
  display: block;
  @media (max-width: $screen-sm) {
    height: auto;
  }
  &::after {
    content: "";
    position: absolute;
    background-image: url("./assets/images/form-image.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    bottom: 100%;
    left: 50%;
    width: 80px;
    height: 80px;
    transform: translateX(-50%);
  }
  & h2 {
    font-size: 1.5em;
    text-align: center;
    margin-top: 1rem;
    font-weight: 800;
    @media (max-width: $screen-sm) {
      font-size: 1.2em;
    }
    & strong {
      font-weight: 700;
      color: ${colors.textColor};
    }
    & span.envivo {
      position: relative;
      font-style: italic;
      color: ${colors.textColor};
      z-index: 1;
      margin-left: 0.4em;
      &::after {
        content: "";
        position: absolute;
        background: $s-color;
        width: 120%;
        height: 110%;
        left: -5px;
        top: 0;
        z-index: -1;
        transform: skew(-15deg);
      }
    }
  }
  & p {
    color: gray;
    font-size: 0.8em;
    text-align: center;
  }
  & .input-control {
    position: relative;
    margin-bottom: 1.5rem;
    & input[type="text"],
    input[type="number"],
    input[type="email"] {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent;
      border: 2px solid #dddddd;
      width: 100%;
      border-radius: 8px;
      ${anims.transition};
      padding: 0.6em 0.9em 0.6em 2em;
      &.error {
        border: 2px solid red;
      }
      &.success {
        border: 2px solid greenyellow;
      }
      &::placeholder {
        font-weight: 300;
        font-style: italic;
        color: #aeaeae;
        font-size: 0.8em;
      }
      &:focus {
        border: 2px solid ${colors.pColor};
        outline: 0;
        box-shadow: none;
        &.error {
          border: 2px solid red;
        }
        + label {
          ${anims.transition};
          color: ${colors.textColor};
          font-size: 1.1;
        }
      }
    }
    & input[type="number"] {
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;
    }
    & textarea {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent;
      border: 2px solid #dddddd;
      width: 100%;
      border-radius: 8px;
      ${anims.transition};
      padding: 1em 0.9em 0.6em 2em;
      &::placeholder {
        font-weight: 300;
        font-style: italic;
        color: #aeaeae;
        font-size: 0.8em;
      }
      &.error {
        border: 2px solid red;
        &:focus {
          border: 2px solid red;
        }
      }
      &:focus {
        border: 2px solid ${colors.pColor};
        outline: 0;
        box-shadow: none;
        + label {
          ${anims.transition};
          color: ${colors.textColor};
          font-size: 1.1;
        }
      }
    }
    & select {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent;
      border: 2px solid #dddddd;
      width: 100%;
      border-radius: 8px;
      ${anims.transition};
      padding: 1em 2em 1em 2em;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-image: url(${arrowSelect});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position-x: 95%;
      background-position-y: 45%;
      font-size: 0.83em;
      & option.placeholder-select {
        font-weight: 500;
        color: gray;
        font-size: 0.95em;
        &:disabled {
          color: #aeaeae;
        }
      }
      & option {
        &:disabled {
          color: #aeaeae;
        }
      }
      &.error {
        border: 2px solid red;
      }
      &.success {
        border: 2px solid greenyellow;
      }
      &::placeholder {
        font-weight: 300;
        font-style: italic;
        color: #aeaeae;
        font-size: 0.8em;
      }
      &:focus {
        border: 2px solid ${colors.pColor};
        outline: 0;
        box-shadow: none;
        + label {
          ${anims.transition};
          color: ${colors.textColor};
          font-size: 1.1;
        }
      }
    }
    & label {
      position: absolute;
      font-weight: 600 !important;
      font-size: 0.9em;
      color: #595959;
      background: #f3f3f3;
      top: -0.7em;
      left: 20px;
      padding: 0.1em 1em;
      ${anims.transition};
    }
    & span.error-info {
      display: none;
      font-size: 0.8em;
      color: rgb(255, 164, 164);
      padding: 0.2em 0;
      padding-left: 2.5em;
      &.is-error {
        display: block;
      }
    }
  }
  & .two-inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    & .input-control-cel {
      width: 55%;
      max-height: 50px;
      margin-bottom: 40px;
      & span.error-info {
        display: none;
        font-size: 0.8em;
        color: rgb(255, 164, 164);
        padding: 0.2em 0;
        padding-left: 2.5em;
        &.is-error {
          display: block;
        }
      }
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    & .input-control-ind {
      width: 40%;
      max-height: 50px;
      margin-bottom: 40px;
      @media (max-width: 1024px) {
        width: 100%;
      }
      & .question {
        background: #8d8d8d;
        color: white;
        padding: 1px 7px;
        border-radius: 100%;
        font-size: 0.8em;
        position: relative;
        cursor: pointer;
        font-weight: 600;
        &::after {
          content: "En este campo debes ingresar el indicativo de tu país";
          position: absolute;
          width: 140px;
          background: #1a1a1a;
          display: block;
          padding: 6px 10px;
          left: 100%;
          bottom: 100%;
          z-index: 10;
          pointer-events: none;
          opacity: 0;
          ${anims.transition};
          border-radius: 6px;
        }
        &:hover {
          background: ${colors.textColor};
          &::after {
            opacity: 1;
          }
        }
      }
      & span.error-info {
        display: none;
        font-size: 0.8em;
        color: rgb(255, 164, 164);
        padding: 0em 0;
        padding-left: 0em;
        &.is-error {
          display: block;
        }
      }
    }
  }
  .input-control-check {
    display: flex;
    align-items: center;
    & span.checkbox-input {
      padding-left: 0.5rem;
      font-size: 0.7em;
      display: inline-block;
    }
  }
  & a {
    color: ${colors.pColor};
  }
`

const Button = styled.button`
  border: none;
  background: rgb(73, 0, 125);
  background: -moz-linear-gradient(
    90deg,
    rgba(73, 0, 125, 1) 0%,
    rgba(132, 0, 232, 1) 35%,
    rgba(161, 45, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(73, 0, 125, 1) 0%,
    rgba(132, 0, 232, 1) 35%,
    rgba(161, 45, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(73, 0, 125, 1) 0%,
    rgba(132, 0, 232, 1) 35%,
    rgba(161, 45, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#49007d",endColorstr="#a12dff",GradientType=1);
  font-weight: 600;
  border-radius: 16px;
  color: white;
  padding: 1.5rem 2rem;
  min-width: 200px;
  ${anims.transition}
  font-size: 0.8em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-weight: 800;
    font-size: 1em;
  }
  & img {
    width: 40px;
  }

  &:hover {
    background: rgb(73, 0, 125);
    background: -moz-linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(73, 0, 125, 1) 0%,
      rgba(132, 0, 232, 1) 87%,
      rgba(161, 45, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#49007d",endColorstr="#a12dff",GradientType=1);
    color: white;
  }
`

const FormAsesory = () => {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [formSend, setFormSend] = useState(false)
  const [formSending, setFormSending] = useState(false)
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    country: "",
    city: "",
    ind: "",
    phone: "",
    age: "",
    media: "",
    comments: "",
    accept: true,
  })
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    country: false,
    city: false,
    ind: false,
    phone: false,
    age: false,
    media: false,
    comments: false,
    accept: false,
  })

  const [formError, setFormError] = useState(true)

  //Expresiones Regulares
  const nameRegEx = /^[a-zA-Z ]+$/
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  const numbersRegEx = /^[0-9]+$/

  //Validations
  const fullNameValidation = async value => {
    const valueClean = value.trim()
    const test = nameRegEx.test(valueClean)
    if (!test || valueClean.length < 8 || valueClean.length > 30) {
      setErrors({
        ...errors,
        fullname: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        fullname: false,
      })
      return true
    }
  }

  const emailValidation = value => {
    const valueClean = value.trim()
    const test = emailRegEx.test(valueClean)
    if (test === false) {
      setErrors({
        ...errors,
        email: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        email: false,
      })
      return true
    }
  }

  const countryValidation = value => {
    if (value === "") {
      setErrors({
        ...errors,
        country: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        country: false,
      })
      return true
    }
  }

  const cityValidation = value => {
    if (value === "") {
      setErrors({
        ...errors,
        city: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        city: false,
      })
      return true
    }
  }

  const indValidation = value => {
    const valueClean = value.trim()
    const test = numbersRegEx.test(valueClean)
    if (!test || valueClean.length < 2 || valueClean.length > 3) {
      setErrors({
        ...errors,
        ind: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        ind: false,
      })
      return true
    }
  }

  const phoneValidation = value => {
    const valueClean = value.trim()
    const test = numbersRegEx.test(valueClean)
    if (!test || valueClean.length < 7 || valueClean.length > 11) {
      setErrors({
        ...errors,
        phone: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        phone: false,
      })
      return true
    }
  }

  const ageValidation = value => {
    const valueClean = value.trim()
    const test = numbersRegEx.test(valueClean)
    console.log(valueClean)
    if (!test || valueClean <= 14 || valueClean > 99) {
      setErrors({
        ...errors,
        age: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        age: false,
      })
      return true
    }
  }

  const mediaValidation = value => {
    const valueClean = value.trim()
    if (valueClean === "") {
      setErrors({
        ...errors,
        media: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        media: false,
      })
      return true
    }
  }

  const commentsValidation = value => {
    const valueClean = value.trim()
    if (valueClean.length > 1000) {
      setErrors({
        ...errors,
        comments: true,
      })
      setFormError(true)
    } else {
      setErrors({
        ...errors,
        comments: false,
      })
      return true
    }
  }

  const handleFields = e => {
    const field = e.target.name
    const valueField = e.target.value

    //Validations
    switch (field) {
      case "fullname":
        fullNameValidation(valueField)
        break
      case "email":
        emailValidation(valueField)
        break
      case "ind":
        indValidation(valueField)
        break
      case "phone":
        phoneValidation(valueField)
        break
      case "age":
        ageValidation(valueField)
        break
      case "media":
        mediaValidation(valueField)
        break
      case "comments":
        commentsValidation(valueField)
        break
      default:
        break
    }
    setForm({
      ...form,
      [field]: valueField,
    })
  }

  const handleChecked = e => {
    const field = e.target.name
    const valueField = e.target.checked
    setForm({
      ...form,
      accept: e.target.checked,
    })
  }

  const handleCountry = e => {
    const valueField = e.target.value
    setForm({
      ...form,
      country: valueField,
    })
    countryValidation(valueField)
    const findCities = countries.findIndex((country, i) => {
      return country.country === valueField
    })
    if (findCities !== -1) {
      setCities(countries[findCities].cities)
    }
  }

  const handleCity = e => {
    const valueField = e.target.value
    cityValidation(valueField)
    setForm({
      ...form,
      city: valueField,
    })
  }

  const getCountries = async () => {
    try {
      const { data } = await get_countries_service()
      if (data.error === false) {
        setCountries(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    try {
      if (
        (await fullNameValidation(form.fullname)) &&
        (await emailValidation(form.email)) &&
        (await countryValidation(form.country)) &&
        (await cityValidation(form.city)) &&
        (await indValidation(form.ind)) &&
        (await phoneValidation(form.phone)) &&
        (await ageValidation(form.age)) &&
        (await mediaValidation(form.media)) &&
        (await commentsValidation(form.comments))
      ) {
        console.log("Está bien el form")
        if (!form.accept) {
          Swal.fire({
            icon: "error",
            type: "error",
            title: "Oops...",
            text: "Debes aceptar términos y condiciones!",
          })
          return false
        } else {
          await setFormSending(true)
          const res = await sendmail_service(form)
          if (res.data !== "Error al enviar los datos") {
            setFormSending(false)
            Swal.fire({
              icon: "success",
              icon: "success",
              title: `Se envió el mensaje`,
              text: `${res.data}`,
            })
            setFormSend(true);
            setForm({
              fullname: "",
              email: "",
              country: "",
              city: "",
              ind: "",
              phone: "",
              age: "",
              media: "",
              comments: "",
              accept: true,
            });
            setErrors({
              fullname: false,
              email: false,
              country: false,
              city: false,
              ind: false,
              phone: false,
              age: false,
              media: false,
              comments: false,
              accept: false,
            });
          } else {
            setFormSending(false)
            Swal.fire({
              icon: "error",
              type: "error",
              title: "Oops...",
              text: `${res.data}`,
            })
          }
        }
      } else {
        console.log("Esta mal el form")
        await setFormSending(false)
        Swal.fire({
          icon: "error",
          type: "error",
          title: "No se puede enviar",
          text: `Debes Llenar el formulario correctamente...`,
        })
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        type: "error",
        title: "No se puede enviar",
        text: `Error del servidor...`,
      })
      setFormSending(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <Form id="form-landing" onSubmit={onSubmit}>
      <div id="form-position"></div>
      <h2>
        Solicita información <br />
      </h2>
      <p id="form">
        Precio, temática, metodología, descuentos, financiación - Déjanos tus
        datos y te contactaremos
      </p>
      <br></br>
      <div className="input-control">
        <input
          type="text"
          name="fullname"
          value={form.fullname}
          id="fullname"
          placeholder="Tu nombre completo"
          onChange={e => handleFields(e)}
          className={errors.fullname ? "error" : ""}
        />
        <label htmlFor="fullname">
          <span>Nombre Completo</span>
        </label>
        {errors.fullname ? (
          <span className="error-info is-error">El nombre debe ser válido</span>
        ) : null}
      </div>
      <div className="input-control">
        <input
          type="email"
          name="email"
          value={form.email}
          id="email"
          placeholder="Ingresa tu email"
          onChange={e => handleFields(e)}
          className={errors.email ? "error" : ""}
        />
        <label htmlFor="email">
          <span>Email</span>
        </label>
        {errors.email ? (
          <span className="error-info is-error">
            Debes ingresar un email válido
          </span>
        ) : null}
      </div>
      <div className="input-control">
        <select
          name="country"
          value={form.country}
          id="country"
          className={errors.country ? "error" : ""}
          onChange={e => handleCountry(e)}
        >
          <option value="" disabled={true} className="placeholder-select">
            Debes deleccionar un país
          </option>
          {countries.length > 0 &&
            countries.map((country, i) => (
              <option
                value={country.country}
                key={i}
                className="placeholder-select"
              >
                {country.country}
              </option>
            ))}
        </select>
        <label htmlFor="country">
          <span>País</span>
        </label>
        {errors.country ? (
          <span className="error-info is-error">Debes seleccionar un país</span>
        ) : null}
      </div>
      <div className="input-control">
        <select
          name="city"
          value={form.city}
          onChange={e => handleCity(e)}
          className={errors.city ? "error" : ""}
        >
          <option value="" disabled={true} className="placeholder-select">
            {form.country === ""
              ? "Primero selecciona un país"
              : `Selecciona una ciudad de ${form.country}`}
          </option>
          {cities.length > 0 &&
            cities.map((city, i) => (
              <option value={city} key={i} className="placeholder-select">
                {city}
              </option>
            ))}
        </select>
        <label htmlFor="city">
          <span>Ciudad</span>
        </label>
        {errors.city ? (
          <span className="error-info is-error">
            Debes seleccionar una ciudad
          </span>
        ) : null}
      </div>
      <div className="two-inputs">
        <div className="input-control input-control-ind">
          <input
            type="number"
            name="ind"
            value={form.ind}
            id="ind"
            placeholder="Ej: +57"
            onChange={e => handleFields(e)}
            className={errors.ind ? "error" : ""}
          />
          <label htmlFor="ind">
            <span>
              Ind <span className="question">?</span>
            </span>
          </label>
          {errors.ind ? (
            <span className="error-info is-error">Indicativo inválido</span>
          ) : null}
        </div>
        <div className="input-control input-control-cel">
          <input
            type="number"
            name="phone"
            value={form.phone}
            id="phone"
            placeholder="Ej: 3100000000"
            onChange={e => handleFields(e)}
            className={errors.phone ? "error" : ""}
          />
          <label htmlFor="phone">
            <span>Celular</span>
          </label>
          {errors.phone ? (
            <span className="error-info is-error">Teléfono inválido</span>
          ) : null}
        </div>
      </div>

      <div className="input-control">
        <input
          type="number"
          name="age"
          value={form.age}
          id="age"
          placeholder="Debes ser mayor de 14 años"
          min="10"
          max="99"
          className={errors.age ? "error" : ""}
          onChange={e => handleFields(e)}
        />
        <label htmlFor="age">
          <span>Edad</span>
        </label>
        {errors.age ? (
          <span className="error-info is-error">
            Debes ser mayor de 14 años
          </span>
        ) : null}
      </div>
      <div className="input-control">
        <select
          type="text"
          name="media"
          value={form.media}
          id="media"
          placeholder="Selecciona una opción"
          onChange={e => handleFields(e)}
          className={errors.media ? "error" : ""}
        >
          <option value="" disabled={true} className="placeholder-select">
            Selecciona una opción
          </option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="youtube">Youtube</option>
          <option value="Google">Google</option>
          <option value="Universidad del Rosario">
            Universidad del Rosario
          </option>
          <option value="Colegios">Colegios</option>
        </select>
        <label htmlFor="medio">
          <span>¿Cómo se enteró del evento?</span>
        </label>
        {errors.media ? (
          <span className="error-info is-error">
            Debes seleccionar una opción
          </span>
        ) : null}
      </div>
      <div className="input-control">
        <textarea
          type="text"
          name="comments"
          value={form.comments}
          id="comments"
          placeholder="Déjanos tus comentarios"
          className={errors.comments ? "error" : ""}
          onChange={e => handleFields(e)}
        ></textarea>
        <label htmlFor="comments">
          <span>Comentarios</span>
        </label>
        {errors.comments ? (
          <span className="error-info is-error">
            Debe tener menos de 1000 caracteres
          </span>
        ) : null}
      </div>
      <div className="input-control input-control-check">
        <input
          type="checkbox"
          name="accept"
          onChange={e => handleChecked(e)}
          value={form.accept}
          defaultChecked={form.accept}
        />
        <span className="checkbox-input">
          Acepto <a href=""> Términos y condiciones </a> y{" "}
          <a href=""> Póliticas de privacidad </a>
        </span>
      </div>
      {formSend ? (
        <p
          style={{
            textAlign: "center",
            padding: "1rem 1rem",
            fontWeight: "800",
            fontSize: "1.2em",
            background: "#7000e3",
            borderRadius: '10px',
            color: 'white',
          }}
        >
          Felicitaciones <br/>
          El formulario fue enviado correctamente
        </p>
      ) : (
        <Button className="send-form" disabled={formSending}>
          <span id="sending">
            {formSending ? "Enviando..." : "Solicitar asesoría"}
          </span>
        </Button>
      )}
    </Form>
  )
}

export default FormAsesory
