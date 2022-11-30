type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export type UserType = {
    _id: number
    name: string
    age: number
}

export const homeWorkReducer = (state: UserType[] , action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state.sort(action.payload === 'down'
                ?(a: UserType, b: UserType) => a.name < b.name ? 1 : -1
                :(a: UserType, b: UserType) => a.name < b.name ? -1 : 1)]// need to fix
        }
        case 'check': {
            return state.filter(e => e.age >= action.payload)
                 // need to fix
        }
        default:
            return state
    }
}
