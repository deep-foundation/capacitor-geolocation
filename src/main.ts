// react/components
export {
  WithPermissions,
  WithPermissions as WithGeolocationPermissions,
  type WithPermissionsOptions,
  type WithPermissionsOptions as WithGeolocationPermissionsOptions,
} from "./react/components/with-permissions.js";
export {
  WithPermissionsStatus,
  type WithPermissionsStatusOptions,
  type WithPermissionsStatusOptions as WithGeolocationPermissionsStatusOptions,
  WithPermissionsStatus as WithGeolocationPermissionsStatus,
} from "./react/components/with-permissions-status.js";

// react/hooks
export {
  usePermissionsRequest,
  usePermissionsRequest as useGeolocationPermissionsRequest,
} from "./react/hooks/use-permissions-request.js";
export {
  usePermissionsStatus,
  usePermissionsStatus as useGeolocationPermissionsStatus,
} from "./react/hooks/use-permissions-status.js";

export { applyRequiredPackagesInMinilinks } from "./apply-required-packages-in-minilinks.js";
export { checkPermissions } from "./check-permissions.js";
export { clearWatch } from "./clear-watch.js";
export {
  createGeolocationDecorator,
  createGeolocationDecorator as createDecorator,
  type GeolocationDecorator,
  type GeolocationDecorator as Decorator,
} from "./create-geolocation-decorator.js";
export { getPosition } from "./get-position.js";
export { insertPosition } from "./insert-position.js";
export { makePositionInsertOperations } from "./make-position-insert-operations.js";
export { makePositionValueUpdateOperations } from "./make-position-value-update-operations.js";
export { Package } from "./package.js";
export { requestPermissions } from "./request-permissions.js";
export { REQUIRED_PACKAGES_IN_MINILINKS } from "./required-packages-in-minilnks.js";
export { updatePosition } from "./update-position.js";
export { watchPosition } from "./watch-position.js";
