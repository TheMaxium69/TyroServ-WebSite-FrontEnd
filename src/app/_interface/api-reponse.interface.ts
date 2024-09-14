import {PlayerInterface} from "./player.interface";
import {StatsInterface} from "./stats.interface";
import {UserInterface} from "./user.interface";

export interface ApiReponseInterface {
  status: boolean;
  why: string;
  data: PlayerInterface|StatsInterface|undefined;
  result: UserInterface|undefined;
}
