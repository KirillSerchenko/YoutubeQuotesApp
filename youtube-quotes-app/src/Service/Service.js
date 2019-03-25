export default class Service{
    
    constructor(url){
        this.baseUrl=url
    }

    async getSongs(){
        const response=await fetch(this.baseUrl)
        const data = await response.json()
        return data
    }
}