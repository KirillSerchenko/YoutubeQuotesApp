 
 const initialState={
    songs:[],
    offset:0,
    songTitle:"",
    songYoutubeId:"",
    songQuotes:[],
    contentVisibility:false
 }


export default function reducer(state=initialState,action){
   switch (action.type){

     case "setSongs":{
         return {
            ...state,
            songs:[...action.songs]   
         }
        
     }

     case "setSong":{
         const quotes=action.song.quotes
         return{
             ...state,
             songTitle:action.song.title,
             songYoutubeId:action.song.youtubeId,
             songQuotes:[...quotes]
         }
     }

     case "setOffset":{
        return {
            ...state,
            offset:action.offset
        }
    }

    case "setContentVisibillity":{
        return {
            ...state,
            contentVisibility:action.contentVisibility
        }
    }
    default:{
        return state
    }

        
}}