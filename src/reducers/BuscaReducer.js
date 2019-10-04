export const SET_VALOR_BUSCA = 'SET_VALOR_BUSCA';

const initialState = {
    valorBusca: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_VALOR_BUSCA:
        return {
            ...state,
            valorBusca: action.valorBusca
        }        
        default:
            return state;
    }
}
