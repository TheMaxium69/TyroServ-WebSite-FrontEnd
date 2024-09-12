import {TexturesInterface} from "../textures.interface";

export interface CapeInterface {
  idCapes:number|undefined;
  name:string|undefined;
  dateAdded:string|undefined;
  isSelected:boolean;
  isShop:boolean|undefined;
  capeTexture:TexturesInterface
}
