import { useSelector } from "react-redux";

const Favorites = () => {
    const arrayOfFavorites = useSelector((curr) => curr.favorite.companies);
    console.log(arrayOfFavorites);
    return (
        <div>
            <h1 className="text-danger">Favorites</h1>
            {arrayOfFavorites.map((company, i) => {
                return <h3 key={i}>{company}</h3>;
            })}
        </div>
    );
};
export default Favorites;
