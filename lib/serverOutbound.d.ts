export interface Table {
    readonly name: string;
    readonly seats: Seat[];
    readonly currentUser: {
        displayName: string;
        seatToken: string;
    };
}
export interface Seat {
    readonly token: string;
    readonly player?: Player;
}
export interface Player {
    readonly displayName: string;
}
/**
 * Messages
 */
export interface ServerOutboundTableStateMessage {
    type: 'table-state';
    table?: Table;
}
export declare type ServerOutboundMessage = ServerOutboundTableStateMessage;
