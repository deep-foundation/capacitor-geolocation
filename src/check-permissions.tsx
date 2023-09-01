import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import debug from "debug";

export async function checkPermissions(): CheckPermissionsResult  {
  const log = debug(`@deep-foundation/capacitor-geolocation:${checkPermissions.name}`);
  const permissionsStatus = await Geolocation.checkPermissions()
  log({permissionsStatus})
  return permissionsStatus
}

export type CheckPermissionsResult = ReturnType<GeolocationPlugin['checkPermissions']>