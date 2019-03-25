export const songs=(songs)=>{ 
    return ({type:'setSongs',songs:[...songs]}) 
}

export const setSong=(song)=>{
    return ({type:'setSong',song}) 
}


export const setOffset=(offset)=>{
    return ({type:'setOffset',offset}) 
}

export const setContentVisibility=(contentVisibility)=>{
    return ({type:'setContentVisibillity',contentVisibility}) 
}