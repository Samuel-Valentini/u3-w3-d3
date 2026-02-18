import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
    const arrayOfFavorites = useSelector((curr) => curr.favorite.companies);
    console.log(arrayOfFavorites);
    return (
        <div>
            <h1 className="text-danger">Favorites</h1>
            {[...new Set(arrayOfFavorites)].map((company, i) => {
                return (
                    <h3 key={company}>
                        <Link to={`/${company}`}>{company}</Link>
                    </h3>
                );
            })}
        </div>
    );
};
export default Favorites;
