import { SubModule } from './subModule';

export interface Module {
    moduleId : number;
    moduleName : string;
    frontType : string;
    selected : boolean;
    subModules? : SubModule[];
}