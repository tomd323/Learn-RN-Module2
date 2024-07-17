import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavoriteHandler(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavoriteHandler(id) {
        setFavoriteMealIds((currentFavIds) => {
            return currentFavIds.filter((currentId) => currentId !== id);
        });
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;