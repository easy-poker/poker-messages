export interface ServerInboundCreateTableMessage {
    type: "create-table";
    tableName: string;
}
export interface ServerInboundJoinTableMessage {
    type: "join-table";
    tableName: string;
    seatToken: string;
}
export interface ServerInboundLeaveTableMessage {
    type: "leave-table";
    tableName: string;
    seatToken: string;
}
export interface ServerInboundRequestTableStateMessage {
    type: "request-table-state";
    tableName: string;
    seatToken: string;
}
export interface ServerInboundStartGameMessage {
    type: "start-game";
    tableName: string;
    seatToken: string;
}
export declare type InboundMessage = ServerInboundCreateTableMessage | ServerInboundJoinTableMessage | ServerInboundLeaveTableMessage | ServerInboundRequestTableStateMessage | ServerInboundStartGameMessage;
export declare const isServerInboundMessage: (x: any) => x is InboundMessage;
