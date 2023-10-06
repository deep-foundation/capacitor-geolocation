import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { Package } from "./package.js";
import debug from "debug";
import { usePosition } from "./react/hooks/use-position.js";
import { watchPosition } from "./watch-position.js";
import { usePositionWatch } from "./react/hooks/use-position-watch.js";
import { WithPositionSync } from "./react/components/with-position-sync.js";
import { checkPermissions } from "./check-permissions.js";
import { makePositionValueUpdateOperations } from "./make-position-value-update-operations.js";
import { requestPermissions } from "./request-permissions.js";
import { getPosition } from "./get-position.js";
import { updatePosition } from "./update-position.js";
import { makePositionInsertOperations } from "./make-position-insert-operations.js";
import { insertPosition } from "./insert-position.js";
import { applyRequiredPackagesInMinilinks } from "./apply-required-packages-in-minilinks.js";
import { REQUIRED_PACKAGES_IN_MINILINKS } from "./required-packages-in-minilnks.js";
import { clearWatch } from "./clear-watch.js";

/**
 * 
 * @example
 * #### Create a decorator from another decorator
```ts
const deep = new DeepClient({token: ''});
const anotherDeepDecorator = createAnotherDecorator(deep); // Note that this step is optional and showed only to demonstrate that you can create a decorator from another decorator and have a chain of decorators
const geolocationDeepDecorator = createAdditionalFeatureDecorator(anotherDeepDecorator);
await geolocationDeepDecorator.applyRequiredPackagesInMinilinks();
```
 */
export function createGeolocationDecorator<
  TDeepClient extends DeepClientInstance,
>(deep: TDeepClient): GeolocationDecorator<TDeepClient> {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${createGeolocationDecorator.name}`,
  );
  log({ deep });
  const _package = new Package({ deep });
  log({ _package });
  const result: GeolocationDecorator<TDeepClient> = {
    ...deep,
    "@deep-foundation/capacitor-geolocation": _package,
    capacitorGeolocationPackage: _package,
    requiredPackagesInMinilinksToApply: [
      ...("requiredPackagesInMinilinksToApply" in deep
        ? (deep.requiredPackagesInMinilinksToApply as Array<string>)
        : []),
      ...REQUIRED_PACKAGES_IN_MINILINKS,
    ],
    applyRequiredPackagesInMinilinks: applyRequiredPackagesInMinilinks,
    insertPosition: insertPosition,
    makePositionInsertOperations: makePositionInsertOperations,
    updatePosition: updatePosition,
    getPosition: getPosition,
    makeUpdatePositionOperations: makePositionValueUpdateOperations,
    clearWatch: clearWatch,
    checkPermissions: checkPermissions,
    requestPermissions: requestPermissions,
    watchPosition: watchPosition,
    usePositionWatch: usePositionWatch,
    usePosition: usePosition,
    WithPositionWatch: WithPositionSync,
  };
  Object.setPrototypeOf(result, Object.getPrototypeOf(deep));
  log({ result });
  return result;
}

export type GeolocationDecorator<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
> = TDeepClient & {
  "@deep-foundation/capacitor-geolocation": Package;
  capacitorGeolocationPackage: Package;
  requiredPackagesInMinilinksToApply: Array<string>;
  applyRequiredPackagesInMinilinks: typeof applyRequiredPackagesInMinilinks;
  insertPosition: typeof insertPosition;
  updatePosition: typeof updatePosition;
  makeUpdatePositionOperations: typeof makePositionValueUpdateOperations;
  makePositionInsertOperations: typeof makePositionInsertOperations;
  getPosition: typeof getPosition;
  watchPosition: typeof watchPosition;
  clearWatch: typeof clearWatch;
  checkPermissions: typeof checkPermissions;
  requestPermissions: typeof requestPermissions;
  usePositionWatch: typeof usePositionWatch;
  WithPositionWatch: typeof WithPositionSync;
  usePosition: typeof usePosition;
};
