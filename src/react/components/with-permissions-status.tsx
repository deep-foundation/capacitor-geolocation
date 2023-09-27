import { PermissionStatus } from "../../request-permissions.js";
import { usePermissionsStatus } from "../hooks/use-permissions-status.js";

export function WithPermissionsStatus(options: WithPermissionsStatusOptions) {
  const permissionsStatus = usePermissionsStatus();

  if ("render" in options) {
    return options.render(permissionsStatus);
  } else {
    if (permissionsStatus === undefined) {
      return options.renderIfLoading();
    } else if (
      permissionsStatus.coarseLocation === "granted" &&
      permissionsStatus.location === "granted"
    ) {
      return options.renderIfGranted();
    } else if (
      permissionsStatus.coarseLocation === "denied" &&
      permissionsStatus.location === "denied"
    ) {
      return options.renderIfDenied();
    } else if (
      permissionsStatus.coarseLocation === "prompt" &&
      permissionsStatus.location === "prompt"
    ) {
      return options.renderIfPrompt();
    }
  }
}

export type WithPermissionsStatusOptions =
  | {
      renderIfLoading: () => JSX.Element;
      renderIfGranted: () => JSX.Element;
      renderIfDenied: () => JSX.Element;
      renderIfPrompt: () => JSX.Element;
    }
  | {
      render: (permissionsStatus: PermissionStatus | undefined) => JSX.Element;
    };
