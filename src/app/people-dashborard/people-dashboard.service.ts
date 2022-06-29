
import { People } from "./models/people.interface";

export class PeopleDashboardService {
    constructor(){

    }

    getPerson():People[]{
        return [
            {name:'Boris',age:23,isWorking:true,skills:null},
            {name:'Lilly',age:13,isWorking:false, skills:['HTML','CSS']},
            {name:'Stephan',age:40,isWorking:true,skills:null},
            {name:'Yosif',age:32,isWorking:false,skills:['wordpress','marketing']},
            {name:'Pesho',age:30,isWorking:true,skills:null},
            {name:'Pesho',age:30,isWorking:true,skills:null},
          ];
    }


}
