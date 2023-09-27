import { useEffect, useState } from "react";
import { checkPermissions } from "../../check-permissions";
import { PermissionStatus } from "../../request-permissions";

export function usePermissionsStatus() {
  const [permissionsStatus, setPermissionsStatus] = useState<
    PermissionStatus | undefined
  >(undefined);

  useEffect(() => {
    checkPermissions().then(setPermissionsStatus);
  });

  return permissionsStatus;
}
