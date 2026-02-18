const initialState = {
    favorite: {
        companies: [],
    },
};

const mainReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...currentState,
                favorite: {
                    ...currentState.favorite,
                    companies: [
                        ...currentState.favorite.companies,
                        action.payload,
                    ],
                },
            };

        case "REMOVE_FROM_FAVORITES":
            return {
                ...currentState,
                favorite: {
                    ...currentState.favorite,
                    companies: currentState.favorite.companies.filter(
                        (company) => {
                            return company !== action.payload;
                        },
                    ),
                },
            };

        default:
            return currentState;
    }
};

export default mainReducer;
