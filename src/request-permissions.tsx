import {
  Geolocation,
  GeolocationPlugin,
  PermissionStatus as CapacitorPermissionStatus,
} from "@capacitor/geolocation";
import debug from "debug";
import { PermissionStatus } from "./permission-status.js";
import { emitter } from "./emitter.js";

export async function requestPermissions(): RequestPermissionsResult {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${requestPermissions.name}`,
  );
  const permissionsStatus = await Geolocation.requestPermissions();
  log({ permissionsStatus });
  emitter.emit("permissionsChanged", permissionsStatus);
  return permissionsStatus;
}

export type RequestPermissionsResult = Promise<PermissionStatus>;
