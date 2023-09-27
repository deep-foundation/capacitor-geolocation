import {
  Geolocation,
  GeolocationPlugin,
  PermissionStatus as CapacitorPermissionStatus,
} from "@capacitor/geolocation";
import debug from "debug";
import { PermissionStatus } from "./permission-status.js";

export async function requestPermissions(): RequestPermissionsResult {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${requestPermissions.name}`,
  );
  const permissionsStatus = await Geolocation.requestPermissions();
  log({ permissionsStatus });
  return permissionsStatus;
}

export type RequestPermissionsResult = Promise<PermissionStatus>;
