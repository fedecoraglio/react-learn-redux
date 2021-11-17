export const increment = (nro) => {
    return {
        type: 'INCREMENT',
        payload: nro
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}