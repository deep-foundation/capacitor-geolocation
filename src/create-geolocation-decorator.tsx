import { DeepClientInstance } from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package.js';
import debug from 'debug';
import { UsePositionOptions, UsePositionResult, usePosition } from './react/hooks/use-position.js';
import { WatchPositionOptions, WatchPositionResult, watchPosition } from './watch-position.js';
import { UsePositionWatchOptions, usePositionWatch } from './react/hooks/use-position-watch.js';
import { WithPositionWatch, WithPositionWatchOptions, WithPositionWatchResult } from './react/components/with-position-watch.js';
import { CheckPermissionsResult, checkPermissions } from './check-permissions.js';
import { MakePositionUpdateOperationsOptions, MakePositionUpdateOperationsResult, makePositionValueUpdateOperations } from './make-position-value-update-operations.js';
import { RequestPermissionsResult, requestPermissions } from './request-permissions.js';
import { GetPositionOptions, GetPositionResult, getPosition } from './get-position.js';
import { UpdatePositionOptions, UpdatePositionResult, updatePosition } from './update-position.js';
import { MakePositionInsertOperationsOptions, MakePositionInsertOperationsResult, makePositionInsertOperations } from './make-position-insert-operations.js';
import { InsertPositionOptions, InsertPositionResult, insertPosition } from './insert-position.js';
import { ApplyRequiredPackagesInMinilnksResult, applyRequiredPackagesInMinilinks } from './apply-required-packages-in-minilinks.js';
import { REQUIRED_PACKAGES_IN_MINILINKS } from './required-packages-in-minilnks.js';
import { ClearWatchOptions, ClearWatchResult, clearWatch } from './clear-watch.js';

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
export function createGeolocationDecorator<TDeepClient extends DeepClientInstance>(deep: TDeepClient) {
  const log = debug(`@deep-foundation/capacitor-geolocation:${createGeolocationDecorator.name}`);
  log({ deep })
  const _package = new Package({ deep });
  log({ _package })
  const result = Object.assign({
    "@deep-foundation/capacitor-geolocation": _package,
    capacitorGeolocationPackage: _package,
    requiredPackagesInMinilinksToApply: [
      ...('requiredPackagesInMinilinksToApply' in deep ? deep.requiredPackagesInMinilinksToApply as Array<string> : []),
      ...REQUIRED_PACKAGES_IN_MINILINKS
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
    WithPositionWatch: WithPositionWatch,  
  }, deep);
  log({result})
  return result
}

export type GeolocationDecorator<TDeepClient extends DeepClientInstance = DeepClientInstance> = TDeepClient & {
  "@deep-foundation/capacitor-geolocation": Package,
  capacitorGeolocationPackage: Package,
  requiredPackagesInMinilinksToApply: Array<string>
  applyRequiredPackagesInMinilinks(this: GeolocationDecorator<TDeepClient>): ApplyRequiredPackagesInMinilnksResult
  insertPosition(this: GeolocationDecorator<TDeepClient>, options: InsertPositionOptions): InsertPositionResult
  updatePosition(this: GeolocationDecorator<TDeepClient>, options: UpdatePositionOptions): UpdatePositionResult
  makeUpdatePositionOperations(this: GeolocationDecorator<TDeepClient>, options: MakePositionUpdateOperationsOptions): MakePositionUpdateOperationsResult
  makePositionInsertOperations(this: GeolocationDecorator<TDeepClient>, options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult
  getPosition(this: GeolocationDecorator<TDeepClient>, options: GetPositionOptions): GetPositionResult
  watchPosition(this: GeolocationDecorator<TDeepClient>, options: WatchPositionOptions): WatchPositionResult
  clearWatch(this: GeolocationDecorator<TDeepClient>, options: ClearWatchOptions): ClearWatchResult
  checkPermissions(this: GeolocationDecorator<TDeepClient>, ): CheckPermissionsResult
  requestPermissions(this: GeolocationDecorator<TDeepClient>, ): RequestPermissionsResult
  usePositionWatch(this: GeolocationDecorator<TDeepClient>, options: UsePositionWatchOptions): void
  WithPositionWatch(this: GeolocationDecorator<TDeepClient>, options: WithPositionWatchOptions): WithPositionWatchResult
  usePosition(this: GeolocationDecorator<TDeepClient>, options: UsePositionOptions): UsePositionResult
}
