import Film from "./Film";

const FilmList = ({films}) => {

    const FilmNodes = films.map( film => {
        return (
            <li>
                <Film name={film.name} key={film.id}>{film.url}</Film>
            </li>
        )
    })

    return (
        <>
            <ul>
                {FilmNodes}
            </ul>
        </>
    )
}

export default FilmList;