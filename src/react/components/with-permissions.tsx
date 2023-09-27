import { usePermissionsRequest } from "../hooks/use-permissions-request.js";

/**
 * A component that requires permissions and renders different content based on the permissions state
 */
export function WithPermissions(options: WithPermissionsOptions) {
  const permissionsState = usePermissionsRequest();
  if (permissionsState === undefined) {
    return options.renderIfLoading();
  } else if (
    permissionsState.coarseLocation === "granted" &&
    permissionsState.location === "granted"
  ) {
    return options.renderIfGranted();
  } else if (
    permissionsState.coarseLocation === "denied" &&
    permissionsState.location === "denied"
  ) {
    return options.renderIfDenied();
  } else if (
    permissionsState.coarseLocation === "prompt" &&
    permissionsState.location === "prompt"
  ) {
    return options.renderIfPrompt();
  }
}

export interface WithPermissionsOptions {
  renderIfLoading: () => JSX.Element;
  renderIfGranted: () => JSX.Element;
  renderIfDenied: () => JSX.Element;
  renderIfPrompt: () => JSX.Element;
}
