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

export type InboundMessage =
  | CreateTableMessage
  | JoinTableMessage
  | LeaveTableMessage
  | RequestTableStateMessage;

export const isServerInboundMessage = (x: any): x is InboundMessage => {
  return typeof x.type === "string";
};
