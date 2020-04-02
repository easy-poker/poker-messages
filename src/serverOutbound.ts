export interface LimitedTable {
  readonly name: string;
  readonly seats: Seat[];
  readonly currentUser: { displayName: string; seatToken: string;  }
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
  table?: LimitedTable;
}

export const isServerOutboundMessage = (x: any): x is ServerOutboundMessage => {
  return typeof x.type === "string";
};

export type ServerOutboundMessage = ServerOutboundTableStateMessage;