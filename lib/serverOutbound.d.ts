export interface LimitedTable {
    readonly isStarted: boolean;
    readonly name: string;
    readonly bettingRound: BettingRound;
    readonly potChipCount: number;
    readonly seats: Seat[];
    readonly currentUser: {
        displayName: string;
        seatToken: string;
    };
}
export declare type BettingRound = "pre-deal" | "pre-flop" | "flop" | "turn" | "river";
export interface Seat {
    readonly token: string;
    readonly isTurn: boolean;
    readonly chipCount: number;
    readonly handRoll: HandRoll;
    readonly player?: Player;
}
export declare type HandRoll = "dealer" | "small-blind" | "big-blind" | "none";
export interface Player {
    readonly displayName: string;
}
/**
 * Messages
 */
export interface ServerOutboundTableStateMessage {
    type: 'table-state';
    table?: LimitedTable;
}
export declare const isServerOutboundMessage: (x: any) => x is ServerOutboundTableStateMessage;
export declare type ServerOutboundMessage = ServerOutboundTableStateMessage;
