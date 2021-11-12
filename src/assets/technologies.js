const importAllImages = r => {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

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
        title: "fortran90",
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
    }
]
