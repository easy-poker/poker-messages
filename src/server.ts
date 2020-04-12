enum Suit {
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Heart",
  Spades = "Spades"
}

enum Face {
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
  Six = "Six",
  Seven = "Seven",
  Eight = "Eight",
  Nine = "Nine",
  Ten = "Ten",
  Jack = "Jack",
  Queen = "Queen",
  King = "King",
  Ace = "Ace"
}

type Card = readonly [Face, Suit];

/** Convenience type expressing a readonly array of readonly cards */
export declare type Cards = readonly Card[];
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
  readonly currentUser: {
    displayName: string;
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
  readonly isPocketRevealed: boolean;
  readonly chipCount: number;
  readonly chipsBetCount: number;
  readonly player?: Player;
  readonly pocketCards?: Cards;
}

export interface Player {
  readonly displayName: string;
}

/**
 * Messages
 */

export interface ServerTableStateMessage {
  type: "table-state";
  table?: LimitedTable;
}

export const isServerMessage = (x: any): x is ServerMessage => {
  return typeof x.type === "string";
};

export type ServerMessage = ServerTableStateMessage;
