export default function(state = null, action) {
    
    switch (action.type) {        
        
        case 'FAVORITE_BAND':
            return action.payload

        default:
            return state
    }
}