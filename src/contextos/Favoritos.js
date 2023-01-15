import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName="Favoritos";

export default function FavoritosProvider({children}) {
 
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{favorito, setFavorito}}>
                {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        console.log(novoFavorito);
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        if (!favoritoRepetido) {
            return setFavorito(favoritoAnterior => [...favoritoAnterior, novoFavorito]);
        }

       return setFavorito(favoritoAnterior => favoritoAnterior.filter(item => item.id !== novoFavorito.id));


    }

    return {
        favorito,
        adicionarFavorito
    }
}