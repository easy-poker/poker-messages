import type { Cards } from "@pairjacks/poker-cards";

export interface ClientSplitPot {
  players: string[];
  chipCount: number;
}

export interface LimitedTable {
  readonly isStarted: boolean;
  readonly name: string;
  readonly bettingRound: BettingRound;
  readonly potChipCount: number;
  readonly splitPots: ClientSplitPot[];
  readonly seats: Seat[];
  readonly communityCards: Cards;
  readonly maxBetChipCount: number;
  readonly currentUser: {
    seatToken: string;
  };
}

export type BettingRound = "pre-deal" | "pre-flop" | "flop" | "turn" | "river";

export interface Seat {
  readonly token: string;
  readonly isDealer: boolean;
  readonly isTurnToBet: boolean;
  readonly isFolded: boolean;
  readonly isBust: boolean;
  readonly chipCount: number;
  readonly chipsBetCount: number;
  readonly displayName: string;
  readonly pocketCards?: Cards;
}

/**
 * Messages
 */

export interface ServerTableStateMessage {
  type: "server/table-state";
  table?: LimitedTable;
}

export type ServerMessage = ServerTableStateMessage;

export const isServerMessage = (x: unknown): x is ServerMessage => {
  const { type } = x as ServerMessage;

  return typeof type === "string" && type.startsWith("server/");
};
