export interface Table {
    readonly name: string;
    readonly seats: Seat[];
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
export interface TableStateMessage {
    type: 'table-state';
    table?: Table;
}
export interface UserStateMessage {
    type: 'user-state';
    displayName: string;
    tableName: string;
    seatToken: string;
}
export declare type ServerOutboundMessage = TableStateMessage | UserStateMessage;
