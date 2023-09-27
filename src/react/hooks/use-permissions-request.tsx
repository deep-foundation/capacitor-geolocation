import { useState, useEffect } from "react";
import { requestPermissions } from "../../request-permissions.js";
import { PermissionStatus } from "../../permission-status.js";

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
