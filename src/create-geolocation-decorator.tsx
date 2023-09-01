import { DeepClientInstance, SerialOperation } from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package';
import { Geolocation, Position, PositionOptions } from '@capacitor/geolocation';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import debug from 'debug';
import { GeolocationPlugin } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types';
import { UsePositionOptions, UsePositionResult, usePosition } from './react/hooks/use-position';
import { WatchPositionOptions, WatchPositionResult, watchPosition } from './watch-position';
import { UsePositionWatchOptions, usePositionWatch } from './react/hooks/use-position-watch';
import { WithPositionWatch, WithPositionWatchOptions, WithPositionWatchResult } from './react/components/with-position-watch';
import { CheckPermissionsResult, checkPermissions } from './check-permissions';
import { MakePositionUpdateOperationsOptions, MakePositionUpdateOperationsResult, makePositionUpdateOperations } from './make-position-update-operations';
import { RequestPermissionsResult, requestPermissions } from './request-permissions';
import { GetPositionOptions, GetPositionResult, getPosition } from './get-position';
import { UpdatePositionOptions, UpdatePositionResult, updatePosition } from './update-position';
import { MakePositionInsertOperationsOptions, MakePositionInsertOperationsResult, makePositionInsertOperations } from './make-position-insert-operations';
import { InsertPositionOptions, InsertPositionResult, insertPosition } from './insert-position';
import { ApplyRequiredPackagesInMinilnksOptions, ApplyRequiredPackagesInMinilnksResult } from './apply-required-packages-in-minilinks';
import { REQUIRED_PACKAGES_IN_MINILINKS } from './required-packages-in-minilnks';
import { ClearWatchOptions, ClearWatchResult, clearWatch } from './clear-watch';

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
  return Object.assign({
    ...deep,
    "@deep-foundation/capacitor-geolocation": _package,
    capacitorGeolocationPackage: _package,
    requiredPackagesInMinilinksToApply: [
      ...('requiredPackagesInMinilinksToApply' in deep ? deep.requiredPackagesInMinilinksToApply as Array<string> : []),
      ...REQUIRED_PACKAGES_IN_MINILINKS
    ],
    applyRequiredPackagesInMinilinks(options) {
      return this.applyRequiredPackagesInMinilinks({...options, deep: this})
    },
    insertPosition(options) {
      return insertPosition({...options, deep: this})
    },
    makePositionInsertOperations(options) {
      return makePositionInsertOperations({...options, deep: this})
    },
    updatePosition(options) {
      return updatePosition({...options, deep: this})
    },
    getPosition (options) {
      return getPosition({...options, deep: this})
    },
    makeUpdatePositionOperations (options) {
      return makePositionUpdateOperations({...options})
    },
    clearWatch(options) {
      return clearWatch({...options}) 
    },
    checkPermissions() {
      return checkPermissions();
    },
    requestPermissions() {
      return checkPermissions();
    },
    watchPosition(options) {
      return watchPosition({ ...options, deep: this });
    },
    usePositionWatch(options) {
      return usePositionWatch({ ...options, deep: this });
    },
    usePosition(options) {
      return usePosition({ ...options, deep: this });
    },
    WithPositionWatch(options) {
      return WithPositionWatch({ ...options, deep: this });
    },  
  } as GeolocationDecorator<TDeepClient>, deep);
}

export type GeolocationDecorator<TDeepClient extends DeepClientInstance = DeepClientInstance> = TDeepClient & {
  "@deep-foundation/capacitor-geolocation": Package,
  capacitorGeolocationPackage: Package,
  requiredPackagesInMinilinksToApply: Array<string>
  applyRequiredPackagesInMinilinks(options: ApplyRequiredPackagesInMinilnksOptions): ApplyRequiredPackagesInMinilnksResult
  insertPosition(options: GeolocationWrapperMethodOptions<InsertPositionOptions>): InsertPositionResult
  updatePosition(options: GeolocationWrapperMethodOptions<UpdatePositionOptions>): UpdatePositionResult
  makeUpdatePositionOperations(options: GeolocationWrapperMethodOptions<MakePositionUpdateOperationsOptions>): MakePositionUpdateOperationsResult
  makePositionInsertOperations(options: GeolocationWrapperMethodOptions<MakePositionInsertOperationsOptions>): MakePositionInsertOperationsResult
  getPosition(options: GeolocationWrapperMethodOptions<GetPositionOptions>): GetPositionResult
  watchPosition(options: GeolocationWrapperMethodOptions<WatchPositionOptions>): WatchPositionResult
  clearWatch(options: GeolocationWrapperMethodOptions<ClearWatchOptions>): ClearWatchResult
  checkPermissions(): CheckPermissionsResult
  requestPermissions(): RequestPermissionsResult
  usePositionWatch(options: GeolocationWrapperMethodOptions<UsePositionWatchOptions>): void
  WithPositionWatch(options: GeolocationWrapperMethodOptions<WithPositionWatchOptions>): WithPositionWatchResult
  usePosition(options: GeolocationWrapperMethodOptions<UsePositionOptions>): UsePositionResult
}

export type GeolocationWrapperMethodOptions<TOptions> = Omit<TOptions, 'deep'>
