export interface CreateTableMessage {
    type: "create-table";
    displayName: string;
    tableName: string;
}
export interface JoinTableMessage {
    type: "join-table";
    displayName: string;
    tableName: string;
    seatToken: string;
}
export interface LeaveTableMessage {
    type: "leave-table";
    displayName: string;
    tableName: string;
    seatToken: string;
}
export interface RequestTableStateMessage {
    type: "request-table-state";
    displayName: string;
    tableName: string;
}
export declare type InboundMessage = CreateTableMessage | JoinTableMessage | LeaveTableMessage | RequestTableStateMessage;
export declare const isServerInboundMessage: (x: any) => x is InboundMessage;
