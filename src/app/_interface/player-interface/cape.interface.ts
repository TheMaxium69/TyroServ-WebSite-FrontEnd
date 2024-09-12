import {TexturesInterface} from "../textures.interface";

export interface CapeInterface {
  idCapes:number;
  name:string;
  dateAdded:string;
  isSelected:boolean;
  isShop:boolean;
  capeTexture:TexturesInterface
}
