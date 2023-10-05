import { PermissionStatus } from "../../permission-status.js";
import {
  UsePermissionsStatusResult,
  usePermissionsStatus,
} from "../hooks/use-permissions-status.js";

export function WithPermissionsStatus(options: WithPermissionsStatusOptions) {
  const permissionsStatus = usePermissionsStatus();

  if ("render" in options) {
    return options.render(permissionsStatus);
  } else {
    if (permissionsStatus.isLoading) {
      return options.renderIfLoading();
    } else if (
      permissionsStatus.permissionsStatus!.coarseLocation === "granted" &&
      permissionsStatus.permissionsStatus!.location === "granted"
    ) {
      return options.renderIfGranted();
    } else if (
      permissionsStatus.permissionsStatus!.coarseLocation === "denied" &&
      permissionsStatus.permissionsStatus!.location === "denied"
    ) {
      return options.renderIfDenied();
    } else if (
      permissionsStatus.permissionsStatus!.coarseLocation === "prompt" &&
      permissionsStatus.permissionsStatus!.location === "prompt"
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
      render: (permissionsStatus: UsePermissionsStatusResult) => JSX.Element;
    };
