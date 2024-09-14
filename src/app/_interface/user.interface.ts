import {UserUseritiumInterface} from "./user-useritium.interface";

export interface UserInterface {
  pseudo: string;
  sanction: any;
  token: string;
  skin: string;
  useritium: UserUseritiumInterface;
}


/*

{
    "status": "true",
    "why": "successfully connected",
    "result": {
        "pseudo": "Luigi_Guyot",
        "sanction": "{}",
        "token": "",
        "tokenTwo": "",
        "skin": "15036bdc2e7c7cfb.png",
        "useritium": {
            "pp": "660af10e004e5_5743.png",
            "username": "Luigi_Guyot",
            "displayname": "Luigi Guyot"
        }
    }
}


*/
