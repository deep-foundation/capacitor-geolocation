import { useState, useEffect } from "react";
import { PermissionStatus } from "@capacitor/geolocation";
import { getGeolocationPermissions } from "../get-permissions";
import { checkGeolocationPermissions } from "../check-permissions";
import { Geolocation } from "@capacitor/geolocation";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

/**
 * Custom hook for managing geolocation permissions.
 * This hook provides a way to retrieve and manage geolocation permissions.
 * It utilizes the Capacitor geolocation plugin and Ionic custom elements loader.
 * @returns An object containing geolocation permissions and a function to get permissions.
 */
export const usePermissions = () => {
  // State to hold geolocation permissions
  const [geolocationPermissions, setGeolocationPermissions] = useState<PermissionStatus | undefined>(undefined);

  useEffect(() => {
    getPermissions();
  }, []);

  /**
   * Fetches geolocation permissions and updates the state.
   */
  const getPermissions = async () => {
    if (!window) {
      const newGeolocationPermissions = await getGeolocationPermissions();
      setGeolocationPermissions(newGeolocationPermissions);
    }
  };
  
  /**
   * Checks geolocation permissions and updates the state.
   */
  const checkPermissions = async () => {
    await checkGeolocationPermissions();
  };

  // Return the geolocation permissions and the getPermissions function
  return { geolocationPermissions, getPermissions, checkPermissions };
};