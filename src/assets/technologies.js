import { importAllImages } from "./helpers";

const technologyImages = importAllImages(require.context('./technology-images', false, /\.(png|webp)$/));

export const technologies = [
    {
        title: "HTML/CSS/JS",
        image: technologyImages["html-css-js.webp"],
    },
    {
        title: "Python",
        image: technologyImages["python.webp"],
    },
    {
        title: "Fortran90",
        image: technologyImages["fortran.webp"],
    },
    {
        title: "Mathematica",
        image: technologyImages["mathematica.webp"],
    },
    {
        title: "LaTeX",
        image: technologyImages["LaTeX.webp"],
    },
    {
        title: "PostGreSQL",
        image: technologyImages["postgresql.webp"],
    },
    {
        title: "MongoDB",
        image: technologyImages["mongodb.webp"],
    },
    {
        title: "React",
        image: technologyImages["react.webp"],
    },
    {
        title: "Jest",
        image: technologyImages["jest.webp"],
    },
    {
        title: "Docker",
        image: technologyImages["docker.webp"],
    },
    {
        title: "GitHub",
        image: technologyImages["github.webp"],
    },
    {
        title: "Netlify",
        image: technologyImages["netlify.webp"],
    },
    {
        title: "Heroku",
        image: technologyImages["heroku.webp"],
    },
    {
        title: "Django",
        image: technologyImages["django.webp"],
    },
    {
        title: "Flask",
        image: technologyImages["flask.webp"],
    }
]
