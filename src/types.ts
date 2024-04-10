export type MavrykWalletDAppMessage = MavrykWalletDAppRequest | MavrykWalletDAppResponse;

export type MavrykWalletDAppRequest =
  | MavrykWalletDAppGetCurrentPermissionRequest
  | MavrykWalletDAppPermissionRequest
  | MavrykWalletDAppOperationRequest
  | MavrykWalletDAppSignRequest
  | MavrykWalletDAppBroadcastRequest;

export type MavrykWalletDAppResponse =
  | MavrykWalletDAppGetCurrentPermissionResponse
  | MavrykWalletDAppPermissionResponse
  | MavrykWalletDAppOperationResponse
  | MavrykWalletDAppSignResponse
  | MavrykWalletDAppBroadcastResponse;

export interface MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType;
}

export enum MavrykWalletDAppMessageType {
  GetCurrentPermissionRequest = "GET_CURRENT_PERMISSION_REQUEST",
  GetCurrentPermissionResponse = "GET_CURRENT_PERMISSION_RESPONSE",
  PermissionRequest = "PERMISSION_REQUEST",
  PermissionResponse = "PERMISSION_RESPONSE",
  OperationRequest = "OPERATION_REQUEST",
  OperationResponse = "OPERATION_RESPONSE",
  SignRequest = "SIGN_REQUEST",
  SignResponse = "SIGN_RESPONSE",
  BroadcastRequest = "BROADCAST_REQUEST",
  BroadcastResponse = "BROADCAST_RESPONSE",
}

/**
 * Messages
 */

export interface MavrykWalletDAppGetCurrentPermissionRequest
  extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.GetCurrentPermissionRequest;
}

export interface MavrykWalletDAppGetCurrentPermissionResponse
  extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.GetCurrentPermissionResponse;
  permission: MavrykWalletDAppPermission;
}

export interface MavrykWalletDAppPermissionRequest extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.PermissionRequest;
  network: MavrykWalletDAppNetwork;
  appMeta: MavrykWalletDAppMetadata;
  force?: boolean;
}

export interface MavrykWalletDAppPermissionResponse extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.PermissionResponse;
  pkh: string;
  publicKey: string;
  rpc: string;
}

export interface MavrykWalletDAppOperationRequest extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.OperationRequest;
  sourcePkh: string;
  opParams: any[];
}

export interface MavrykWalletDAppOperationResponse extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.OperationResponse;
  opHash: string;
}

export interface MavrykWalletDAppSignRequest extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.SignRequest;
  sourcePkh: string;
  payload: string;
}

export interface MavrykWalletDAppSignResponse extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.SignResponse;
  signature: string;
}

export interface MavrykWalletDAppBroadcastRequest extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.BroadcastRequest;
  signedOpBytes: string;
}

export interface MavrykWalletDAppBroadcastResponse extends MavrykWalletDAppMessageBase {
  type: MavrykWalletDAppMessageType.BroadcastResponse;
  opHash: string;
}

/**
 * Errors
 */
export enum MavrykWalletDAppErrorType {
  NotGranted = "NOT_GRANTED",
  NotFound = "NOT_FOUND",
  InvalidParams = "INVALID_PARAMS",
  TezosOperation = "TEZOS_OPERATION",
}

/**
 * Misc
 */

export type MavrykWalletDAppPermission = {
  rpc: string;
  pkh: string;
  publicKey: string;
} | null;

export type MavrykWalletDAppNetwork =
  | "mainnet"
  | "atlasnet"
  | "basenet"
  | "sandbox"
  | { name: string; rpc: string };

export interface MavrykWalletDAppMetadata {
  name: string;
}

export interface MavrykWalletPageMessage {
  type: MavrykWalletPageMessageType;
  payload: any;
  reqId?: string | number;
}

export enum MavrykWalletPageMessageType {
  Request = "MAVRYK_WALLET_PAGE_REQUEST",
  Response = "MAVRYK_WALLET_PAGE_RESPONSE",
  ErrorResponse = "MAVRYK_WALLET_PAGE_ERROR_RESPONSE",
}
