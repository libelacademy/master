import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import IconModule from "../../images/icons/module.svg";
import IconModuleWhite from "../../images/icons/module-white.svg";
import iconClass from "../../images/icons/class.svg";
import { anims, colors } from "../../utils/theme";
import { device } from "../../utils/breakpoints";

const TemarioAccordeon = styled(Accordion)`
  margin-top: 1rem;
  .card {
    background: transparent;
    border: none;
    padding: 6px;
    transition: 1s ease-in-out;
    overflow: inherit;
    & .card-header {
      border-radius: 10px;
      background: white;
      color: #1a1a1a;
      font-weight: 800;
      border-bottom: none;
      box-shadow: 0 0 10px rgba(112, 0, 227, 0.1);
      padding: 1.5rem 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      transition: 0.3s ease-in-out;
      font-size: 0.9em;
      cursor: pointer;
      @media ${device.md} {
      }
      &.active {
        color: white;
        background: ${colors.pColor};
        font-size: 1em;
        box-shadow: 0 3px 16px rgba(112, 0, 227, 0.2);
        & .title-header {
          & .nameUnity {
            color: #e6e6e6;
            padding-left: 1rem;
            @media ${device.md} {
              padding-left: 1rem;
            }
          }
        }
        &:after {
          position: absolute;
          content: "-";
          color: white;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &:after {
        content: "+";
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
        font-weight: 600;
        color: ${colors.pColor};
      }
      & img {
        width: 50px;
        margin-right: 1rem;
      }
      & .title-header {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding-right: 2rem;
        text-align: left;
        @media ${device.md} {
          flex-direction: row;
        }
        & .unity {
          font-size: 0.9em;
          margin: 0;
          font-weight: 800;
          line-height: inherit;
        }
        & .nameUnity {
          color: gray;
          font-size: 0.9em;
          padding-left: 1rem;
          @media ${device.md} {
            padding-left: 1rem;
          }
        }
      }
    }
    & .card-body {
      padding-bottom: 0;
      & .info-class {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        & .icon-class {
          padding: 0 1rem;
          & img {
            height: auto;
            width: 35px;
            margin-bottom: 0.5rem;
          }
        }
        @media ${device.md} {
          display: flex;
          align-items: flex-start;
          flex-direction: row;
          & .icon-class {
            & img {
              width: 45px;
            }
          }
        }

        & .description {
          padding: 0 1rem;
          & h4 {
            font-weight: 700;
            font-size: 1em;
            color: #313131;
          }
          & p {
            margin-bottom: 0;
            padding-bottom: 1rem;
            font-size: 0.8em;
          }
          @media ${device.md} {
            & h4 {
              font-weight: 700;
              font-size: 1em;
              color: #313131;
            }
            & p {
              padding-bottom: 1rem;
            }
          }
        }
      }
    }
  }
`;

const FaqsAccordeon = () => {
  const [temario, setTemario] = useState([
    {
      id: 1,
      question: "¿Quién puede tomar este MÁSTER?",
      active: true,
      answer:
        "Cualquier persona que tenga conocimientos básicos en algún software 3D.",
    },
    {
      id: 2,
      question: "¿Por qué elegir a LIBEL STUDIOS?",
      active: false,
      answer: `Tenemos un método de estudio controlado donde el alumno recibe todo el contenido en los tiempos estipulados, adicionalmente, entregamos material Premium para que tu proceso de aprendizaje no se detenga.

Nuestros docentes son especialistas en cada una de sus áreas (no son generalistas).

Los resultados de nuestros alumnos son realmente sorprendentes, los podrás ver en la página www.libelstudios.com en el menú “Alumnos”.`,
    },
    {
      id: 3,
      question: "¿Qué medios de pago tienen?",
      active: false,
      answer:
        "Tenemos medios de pago dependiendo el país, PAYPAL, VISA, TRANSFERENCIA, WENSTER UNION entre otros, más información en Whatsapp: +573142332824.",
    },
    {
      id: 4,
      question: "¿Qué conocimientos tendré al finalizar el MÁSTER?",
      active: false,
      answer:
        "Podrás crear modelos inorgánicos de gran nivel para videojuegos y exportarlo a UNREAL ENGINE, estarás en la capacidad de hacer cualquier modelo 3D en Blender.",
    },
    {
      id: 5,
      question: "¿Si pierdo una clase como la puedo reponer?",
      active: false,
      answer: `Verás las clases en la plataforma y tendrás clases en vivo en las fechas que les indique el maestro, sábados o domingos, según acuerden con el grupo, a las 8 pm hora Colombia (puede variar el horario dependiendo de la organización con tus compañeros).
        Si no puedes asistir todo se graba y lo tendrá en la plataforma 24 horas después de dado los talleres o clases en vivo.`,
    },
    {
      id: 6,
      question: "¿Cuánto tiempo tendré el contenido de MÁSTER?",
      active: false,
      answer:
        "Todo nuestro contenido lo tendrá por un año completo partiendo del momento que inicien las clases, por ello debes aprovechar los tiempos y cumplir las metas indicadas en el inicio del MÁSTER.",
    },
    {
      id: 7,
      question: "¿Tendremos asesoría en la semana?",
      active: false,
      answer: `En la semana tendrás acceso al Discord (Discord es una plataforma social destinada a crear chat de grupo para diferentes juegos y finalidades).

        Puedes pensar en ella como algo similar a Skype o TeamSpeak, aunque incluyendo las funciones de otras herramientas más profesionales).
        
        En el Discord estarás con todos tus compañeros de clase, donde compartirán y subirán sus procesos para que el maestro los vaya guiando y resuelvan dudas en las clases en vivo.`,
    },
  ]);
  const handleAccordeon = (unity) => {
    const findIndex = temario.findIndex((element) => element.id === unity.id);
    const newTemario = temario.map((ele) => {
      if (ele.id === unity.id) {
        ele.active = true;
        return ele;
      } else {
        ele.active = false;
        return ele;
      }
    });
    setTemario(newTemario);
  };
  return (
    <>
      <h3 style={{ fontWeight: 700, fontSize: "1.4em", color: "#333333" }}>
        Preguntas Frecuentes
      </h3>
      <TemarioAccordeon defaultActiveKey={1}>
        {temario.map((question) => (
          <Card key={question.id}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={question.id}
              className={question.active ? "active" : ""}
              onClick={() => handleAccordeon(question)}
            >
              {question.active ? (
                <span>{question.id}.</span>
              ) : (
                <span>{question.id}.</span>
              )}
              <div className="title-header">
                {/* <h3 className="unity">
                <span>{unity.name}: </span>{" "}
              </h3> */}
                <span className="nameUnity">{question.question}</span>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={question.id}>
              <Card.Body>
                <div className="info-class">
                  <div className="description">
                    <p>{question.answer}</p>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </TemarioAccordeon>
    </>
  );
};

export default FaqsAccordeon;
