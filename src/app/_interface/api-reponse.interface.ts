import {PlayerInterface} from "./player.interface";
import {StatsInterface} from "./stats.interface";
import {UserInterface} from "./user.interface";
import {RankPlayerS1Interface} from "./rank-interface/rank-player-s1.interface";

export interface ApiReponseInterface {
  status: boolean;
  why: string;
  data: PlayerInterface|StatsInterface|RankPlayerS1Interface[]|string|undefined;
  result: UserInterface|undefined;
}
