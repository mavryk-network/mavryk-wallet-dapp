import { nanoid } from "nanoid";
import { TezosOperationError } from "@mavrykdynamics/taquito";
import {
  MavrykWalletPageMessageType,
  MavrykWalletPageMessage,
  MavrykWalletDAppMessageType,
  MavrykWalletDAppRequest,
  MavrykWalletDAppResponse,
  MavrykWalletDAppErrorType,
  MavrykWalletDAppNetwork,
  MavrykWalletDAppMetadata,
  MavrykWalletDAppPermission,
} from "./types";

export function isAvailable() {
  return new Promise<boolean>((resolve) => {
    const handleMessage = (evt: MessageEvent) => {
      if (
        evt.source === window &&
        evt.data?.type === MavrykWalletPageMessageType.Response &&
        evt.data?.payload === "PONG"
      ) {
        done(true);
      }
    };

    const done = (result: boolean) => {
      resolve(result);
      window.removeEventListener("message", handleMessage);
      clearTimeout(t);
    };

    send({
      type: MavrykWalletPageMessageType.Request,
      payload: "PING",
    });
    window.addEventListener("message", handleMessage);
    const t = setTimeout(() => done(false), 500);
  });
}

export function onAvailabilityChange(callback: (available: boolean) => void) {
  let t: any;
  let currentStatus = false;
  const check = async (attempt = 0) => {
    const initial = attempt < 5;
    const available = await isAvailable();
    if (currentStatus !== available) {
      callback(available);
      currentStatus = available;
    }
    t = setTimeout(
      check,
      available ? 10_000 : !initial ? 5_000 : 0,
      initial ? attempt + 1 : attempt
    );
  };
  check();
  return () => clearTimeout(t);
}

export function onPermissionChange(
  callback: (permission: MavrykWalletDAppPermission) => void
) {
  let t: any;
  let currentPerm: MavrykWalletDAppPermission = null;
  const check = async () => {
    try {
      const perm = await getCurrentPermission();
      if (!permissionsAreEqual(perm, currentPerm)) {
        callback(perm);
        currentPerm = perm;
      }
    } catch {}

    t = setTimeout(check, 10_000);
  };
  check();
  return () => clearTimeout(t);
}

export async function getCurrentPermission() {
  const res = await request({
    type: MavrykWalletDAppMessageType.GetCurrentPermissionRequest,
  });
  assertResponse(
    res.type === MavrykWalletDAppMessageType.GetCurrentPermissionResponse
  );
  return res.permission;
}

export async function requestPermission(
  network: MavrykWalletDAppNetwork,
  appMeta: MavrykWalletDAppMetadata,
  force: boolean
) {
  const res = await request({
    type: MavrykWalletDAppMessageType.PermissionRequest,
    network,
    appMeta,
    force,
  });
  assertResponse(res.type === MavrykWalletDAppMessageType.PermissionResponse);
  return {
    rpc: res.rpc,
    pkh: res.pkh,
    publicKey: res.publicKey,
  };
}

export async function requestOperation(sourcePkh: string, opParams: any) {
  const res = await request({
    type: MavrykWalletDAppMessageType.OperationRequest,
    sourcePkh,
    opParams,
  });
  assertResponse(res.type === MavrykWalletDAppMessageType.OperationResponse);
  return res.opHash;
}

export async function requestSign(sourcePkh: string, payload: string) {
  const res = await request({
    type: MavrykWalletDAppMessageType.SignRequest,
    sourcePkh,
    payload,
  });
  assertResponse(res.type === MavrykWalletDAppMessageType.SignResponse);
  return res.signature;
}

export async function requestBroadcast(signedOpBytes: string) {
  const res = await request({
    type: MavrykWalletDAppMessageType.BroadcastRequest,
    signedOpBytes,
  });
  assertResponse(res.type === MavrykWalletDAppMessageType.BroadcastResponse);
  return res.opHash;
}

function request(payload: MavrykWalletDAppRequest) {
  return new Promise<MavrykWalletDAppResponse>((resolve, reject) => {
    const reqId = nanoid();
    const handleMessage = (evt: MessageEvent) => {
      const res = evt.data as MavrykWalletPageMessage;
      switch (true) {
        case evt.source !== window || res?.reqId !== reqId:
          return;

        case res?.type === MavrykWalletPageMessageType.Response:
          resolve(res.payload);
          window.removeEventListener("message", handleMessage);
          break;

        case res?.type === MavrykWalletPageMessageType.ErrorResponse:
          reject(createError(res.payload));
          window.removeEventListener("message", handleMessage);
          break;
      }
    };

    send({
      type: MavrykWalletPageMessageType.Request,
      payload,
      reqId,
    });

    window.addEventListener("message", handleMessage);
  });
}

function permissionsAreEqual(
  aPerm: MavrykWalletDAppPermission,
  bPerm: MavrykWalletDAppPermission
) {
  if (aPerm === null) return bPerm === null;
  return aPerm.pkh === bPerm?.pkh && aPerm.rpc === bPerm?.rpc;
}

function createError(payload: any) {
  switch (true) {
    case payload === MavrykWalletDAppErrorType.NotGranted:
      return new NotGrantedMavrykWalletError();

    case payload === MavrykWalletDAppErrorType.NotFound:
      return new NotFoundMavrykWalletError();

    case payload === MavrykWalletDAppErrorType.InvalidParams:
      return new InvalidParamsMavrykWalletError();

    case Array.isArray(payload) &&
      payload[0] === MavrykWalletDAppErrorType.TezosOperation &&
      Array.isArray(payload[1]) &&
      payload[1].length > 0:
      return new TezosOperationError(payload[1]);

    case typeof payload === "string" && payload.startsWith("__tezos__"):
      return new Error(payload.replace("__tezos__", ""));

    default:
      return new MavrykWalletError();
  }
}

function assertResponse(condition: any): asserts condition {
  if (!condition) {
    throw new Error("Invalid response recieved");
  }
}

function send(msg: MavrykWalletPageMessage) {
  window.postMessage(msg, "*");
}

export class MavrykWalletError implements Error {
  name = "MavrykWalletError";
  message = "An unknown error occured. Please try again or report it";
}

export class NotGrantedMavrykWalletError extends MavrykWalletError {
  name = "NotGrantedMavrykWalletError";
  message = "Permission Not Granted";
}

export class NotFoundMavrykWalletError extends MavrykWalletError {
  name = "NotFoundMavrykWalletError";
  message = "Account Not Found. Try connect again";
}

export class InvalidParamsMavrykWalletError extends MavrykWalletError {
  name = "InvalidParamsMavrykWalletError";
  message = "Some of the parameters you provided are invalid";
}
