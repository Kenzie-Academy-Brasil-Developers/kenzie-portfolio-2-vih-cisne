import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { GrDocker } from "react-icons/gr";
import { FaDocker} from "react-icons/fa";
import { SiTypescript, SiPython, SiRedux, SiPostgresql, SiMongodb } from "react-icons/si";


export const stackData = [
  {
    title: "JS",
    img: imgJS,
  },
  { title: "Typescript", img: SiTypescript },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Redux", img: SiRedux },
  {
    title: "HTML5",
    img: imgHTML,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "CSS3",
    img: imgCSS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "Python", img: SiPython },
  {
    title: "PostgreSQL",
    img: SiPostgresql,
  },
  {
    title: "Docker",
    img: GrDocker,
  },
  {
    title: "MongoDB",
    img: SiMongodb,
  }
];


