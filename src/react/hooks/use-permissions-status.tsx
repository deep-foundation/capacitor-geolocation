import { useEffect, useState } from "react";
import { checkPermissions } from "../../check-permissions.js";
import { PermissionStatus } from "../../permission-status.js";
import { App } from "@capacitor/app"; // Make sure to import the App from capacitor.
import { emitter } from "../../emitter.js";

export function usePermissionsStatus(): UsePermissionsStatusResult {
  const [permissionsStatus, setPermissionsStatus] = useState<
    PermissionStatus | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);

  async function updatePermissionsStatus() {
    const permissionsStatus = await checkPermissions();
    setPermissionsStatus(permissionsStatus);
    setIsLoading(false);
  }

  useEffect(() => {
    updatePermissionsStatus();

    const resumeListener = App.addListener("resume", updatePermissionsStatus);
    const permissionsChangedListener = emitter.on(
      "permissionsChanged",
      (permissionsStatus: PermissionStatus) =>
        setPermissionsStatus(permissionsStatus),
    );

    return () => {
      resumeListener.then((resumeListener) => resumeListener.remove());
      emitter.off("permissionsChanged", permissionsChangedListener);
    };
  }, []);

  return {
    permissionsStatus,
    isLoading,
    updatePermissionsStatus,
  };
}

export type UsePermissionsStatusResult = {
  permissionsStatus: PermissionStatus | undefined;
  isLoading: boolean;
  updatePermissionsStatus: () => void;
};
