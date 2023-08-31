
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";

/**
 * Get geolocation permissions.
 */

export const getGeolocationPermissions = async () => {
  const geolocationPermissions = await Geolocation.requestPermissions();
  return geolocationPermissions as PermissionStatus | undefined ;
}