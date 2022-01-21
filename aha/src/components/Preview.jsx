import { useParams } from "react-router-dom"
export const PreviewPage = () => {
    const {movie_name} = useParams();
    console.log("movie_name",movie_name)
    return (
        <div>
          <h1>  Preview Page of {movie_name}</h1>
        </div>
    )
}