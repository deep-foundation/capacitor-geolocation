import { useEffect, useState } from "react";
import { checkPermissions } from "../../check-permissions.js";
import { PermissionStatus } from "../../permission-status.js";

export function usePermissionsStatus(): UsePermissionsStatusResult {
  const [permissionsStatus, setPermissionsStatus] = useState<
    PermissionStatus | undefined
  >(undefined);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkPermissions().then((permissionsStatus) => {
      setPermissionsStatus(permissionsStatus);
      setIsLoading(false);
    });
  }, []);

  return {
    permissionsStatus,
    isLoading,
  };
}

export type UsePermissionsStatusResult = {
  permissionsStatus: PermissionStatus | undefined;
  isLoading: boolean;
};
