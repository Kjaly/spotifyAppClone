export const initialState =  {
    user:null,
    playlists:[],
    playing:false,
    item:null,
     // token:null,
    /* DELETE AFTER DEVELOPING */
    // token:'BQBkJdHaEhuOSXKvpRo-WfxzoPg0d3lUPNjhf7L2RMcXQS2TACybgjmQimKgSPQOK-b9MU7CexdJwnMeaXlCTkWWLKcWvgDuHj63z6zidEf0RinoiOldvSZ48SuzfCgbGQ1mMMKGolfPZR5Ve99ArrxpedRKzl-eNtPNeFAxK2F7O1rB',
}

const reducer = (state,action) =>{

    switch (action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;

    }
}

export default reducer;