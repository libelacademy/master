//Components
import Slider from "./components/header/slider/Slider";
import InfoGeneral from "./components/info/InfoGeneral";
import GalleryVideo from "./components/gallery-video/GalleryVideo";

//Images
import BackgroundImage from "./images/slider-back-1.png";
import BackgroundImage2 from "./images/slider-back-2.png";
import BackgroundImage3 from "./images/slider-back-2.png";
import Character from "./images/character.png";
import DescImage from "./images/description-image.png";

//Icons descripcion
import OnlineClass from "./images/icons-methodology/class-online.svg";
import Check from "./images/icons-methodology/check.svg";
import Access from "./images/icons-methodology/access.svg";
import Discord from "./images/icons-methodology/discord.svg";
import Rec from "./images/icons-methodology/rec.svg";
import Help from "./images/icons-methodology/help.svg";
import PlusContent from "./images/icons-methodology/plus-content.svg";
import Feedback from "./images/icons-methodology/feedback.svg";

//Proyectos Master
import Zorro from "./images/projects/zorro.png";
import Mundo from "./images/projects/mundo.jpg";
import Escenario from "./images/projects/escenario.jpg";
import Catapulta from "./images/projects/catapulta.jpg";
import Asset from "./images/projects/asset.jpg";
import Gun from "./images/projects/gun.jpg";
import Martillo from "./images/projects/martillo.jpg";
import Tanque from "./images/projects/tanque.jpg";
import SectionForm from "./components/section-form/SectionForm";

//Logos
import Zbrush from '../src/images/logos/zbrush.jpeg';
import Unreal from '../src/images/logos/unreal.webp';
import Substance from '../src/images/logos/substance.webp';
import Blender from '../src/images/logos/blender.webp';
import Marmoset from '../src/images/logos/marmoset.webp';

const Master = () => {
  const slides = [
    {
      id: 0,
      background: BackgroundImage,
      character: Character,
      link: "",
    },
    {
      id: 1,
      background: BackgroundImage2,
      character: Character,
      link: "",
    },
    {
      id: 2,
      background: BackgroundImage3,
      character: Character,
      link: "",
    },
  ];

  const infoSlider = {
    typeCourse: "Master en:",
    title: "Blender para/videojuegos AAA",
    desc: `Estudia online con <strong> FEEDBACK EN VIVO </strong> y
    conviértete en un profesional de alto nivel.`,
    dateSystem: "Apr 21, 2021 0:0:0",
    date: "21 Abril de 2021",
  };

  const infoMaster = {
    teacher: {
      name: 'Ricardo Diaz',
      url: '',
      photo: ''
    },
    description: {
      title: "Blender para videojuegos AAA",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat dolor officia molestias iste ratione, voluptatum aperiam autem dolorem obcaecati repellat similique animi necessitatibus praesentium tempore ipsum, ipsa, ullam quibusdam.",
      dateSystem: "Apr 21, 2021 0:0:0",
      date: "21 Abril de 2021",
    },
    trailer: {
      url: "",
      img: DescImage,
    },
    studyMethod: [
      {
        id: 0,
        title: "Clases en vídeo:",
        desc:
          "Tendrás clases en vídeo programadas para ver cada semana durante 3 meses",
        icon: OnlineClass,
      },
      {
        id: 1,
        title: "Feedback en vivo:",
        desc:
          "Tendrás clases en vídeo programadas para ver cada semana durante 3 meses",
        icon: Feedback,
      },
      {
        id: 2,
        title: "Práctica y Correcciones:",
        desc:
          "El maestro indicará los ejercicios prácticos a desarrollar y corregirá cada uno de tus avances",
        icon: Check,
      },
      {
        id: 4,
        title: "Grupo en Discord:",
        desc:
          "Tendrás acceso a un grupo en Discord para interactuar con tus compañeros, hacer preguntas y subir tus avances",
        icon: Discord,
      },
      {
        id: 5,
        title: "Grabación de sesiones en vivo:",
        desc:
          "Todas las sesiones en vivo quedarán grabadas y estarán disponibles en tu perfil 24 horas después",
        icon: Rec,
      },
      {
        id: 6,
        title: "Acceso al contenido: ",
        desc:
          "Tendrás acceso a todo el contenido durante un año contado a partir de la fecha de inscripción.",
        icon: Access,
      },
      {
        id: 7,
        title: "Material de ayuda: ",
        desc: "Tendrás referencias y material de ayuda descargable",
        icon: Help,
      },
      {
        id: 8,
        title: "Contenido adicional: ",
        desc:
          "Tendrás cursos en vídeo adicionales (sin feedback en vivo) para que puedas reforzar tu aprendizaje",
        icon: PlusContent,
      },
    ],
    logos: [
      {
        id: 0,
        img: Zbrush,
      },
      {
        id: 1,
        img: Marmoset,
      },
      {
        id: 2,
        img: Blender,
      },
      {
        id: 3,
        img: Substance,
      },
      {
        id: 4,
        img: Unreal,
      }
    ]
  };

  const projects = [
    {
      id: 0,
      img: Zorro,
      video: "https://www.youtube.com/embed/du9Cwj0yQxo",
      text: {
        name: "Zorro Volador",
        level: "Avanzado",
      },
    },
    {
      id: 1,
      img: Mundo,
      video: "https://www.youtube.com/embed/ze6HkRg6CAs",
      text: {
        name: "Escenario",
        level: "Avanzado",
      },
    },
    {
      id: 2,
      img: Escenario,
      video: "https://www.youtube.com/embed/1J1-jasCmDA",
      text: {
        name: "Escenario",
        level: "Avanzado",
      },
    },
    {
      id: 3,
      img: Gun,
      video: "https://www.youtube.com/embed/yeRhw25PhY4",
      text: {
        name: "Arma",
        level: "Avanzado",
      },
    },
    {
      id: 4,
      img: Asset,
      video: "https://www.youtube.com/embed/yKxG8py12To",
      text: {
        name: "Asset",
        level: "Avanzado",
      },
    },
    {
      id: 5,
      img: Tanque,
      video: "https://www.youtube.com/embed/z2Nq0f_X6aA",
      text: {
        name: "Tanque",
        level: "Avanzado",
      },
    },
    {
      id: 6,
      img: Catapulta,
      video: "https://www.youtube.com/embed/d05KvpHPF-M",
      text: {
        name: "Catapulta",
        level: "Avanzado",
      },
    },
  ];

  return (
    <main>
      <Slider infoSlider={infoSlider} slides={slides} />
      <InfoGeneral infoMaster={infoMaster} />
      <GalleryVideo
        projects={projects}
        trailer="https://www.youtube.com/embed/yKxG8py12To"
      />
      <SectionForm
        infoMaster={infoMaster}
        trailer="https://www.youtube.com/embed/yKxG8py12To"
      />
    </main>
  );
};

export default Master;
