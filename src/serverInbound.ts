export interface ServerInboundCreateTableMessage {
  type: "create-table";
  displayName: string;
  tableName: string;
}

export interface ServerInboundJoinTableMessage {
  type: "join-table";
  displayName: string;
  tableName: string;
  seatToken: string;
}

export interface ServerInboundLeaveTableMessage {
  type: "leave-table";
  displayName: string;
  tableName: string;
  seatToken: string;
}

export interface ServerInboundRequestTableStateMessage {
  type: "request-table-state";
  displayName: string;
  tableName: string;
  seatToken: string;
}

export type InboundMessage =
  | ServerInboundCreateTableMessage
  | ServerInboundJoinTableMessage
  | ServerInboundLeaveTableMessage
  | ServerInboundRequestTableStateMessage;

export const isServerInboundMessage = (x: any): x is InboundMessage => {
  return typeof x.type === "string";
};
