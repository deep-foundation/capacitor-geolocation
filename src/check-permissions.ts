import { Geolocation, PermissionStatus } from "@capacitor/geolocation";

export const checkGeolocationPermissions = async (): Promise<PermissionStatus | undefined> => {
  if (typeof(window) === 'undefined') {
    return await Geolocation.checkPermissions();
  }
  return undefined;
}