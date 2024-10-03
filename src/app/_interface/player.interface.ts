import {FactionInterface} from "./player-interface/faction.interface";
import {RoleInterface} from "./player-interface/role.interface";
import {PlayerInfoInterface} from "./player-interface/player-info.interface";
import {TexturesInterface} from "./textures.interface";
import {StatsPlayerInterface} from "./player-interface/stats-player.interface";
import {CapeGlobalInterface} from "./player-interface/cape-global.interface";


export interface PlayerInterface {
  player:PlayerInfoInterface,
  faction:FactionInterface,
  role:RoleInterface,
  money:string,
  skin:TexturesInterface,
  skinPrenium:TexturesInterface,
  capes:CapeGlobalInterface,
  stats:StatsPlayerInterface|undefined,

}
