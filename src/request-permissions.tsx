import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import debug from "debug";

export async function requestPermissions(): RequestPermissionsResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${requestPermissions.name}`);
  const permissionsStatus = await Geolocation.requestPermissions()
  log({permissionsStatus})
  return permissionsStatus
}

export type RequestPermissionsResult = ReturnType<GeolocationPlugin['requestPermissions']>
