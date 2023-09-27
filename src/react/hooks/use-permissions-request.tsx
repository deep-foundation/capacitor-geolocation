import { useState, useEffect } from "react";
import {
  requestPermissions,
  PermissionStatus,
} from "../../request-permissions.js";

export function usePermissionsRequest() {
  const [permissionsState, setPermissionsState] = useState<
    PermissionStatus | undefined
  >(undefined);
  useEffect(() => {
    requestPermissions().then((permissionsStatus) => {
      setPermissionsState(permissionsStatus);
    });
  }, []);
  return permissionsState;
}
