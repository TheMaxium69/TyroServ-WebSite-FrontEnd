import {PlayerInterface} from "./player.interface";
import {StatsInterface} from "./stats.interface";

export interface ApiReponseInterface {
  status: boolean;
  why: string;
  data: PlayerInterface|StatsInterface;
}
