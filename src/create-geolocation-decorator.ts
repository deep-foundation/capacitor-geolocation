import { DeepClientInstance, SerialOperation } from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package';
import { ClearWatchOptions, Geolocation, Position, PositionOptions } from '@capacitor/geolocation';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import debug from 'debug';
import { GeolocationPlugin } from '@capacitor/geolocation';

/**
 * 
 * @example
 * #### Create a decorator from another decorator
```ts
const deep = new DeepClient({token: ''});
const anotherDeepDecorator = createAnotherDecorator(deep); // Note that this step is optional and showed only to demonstrate that you can create a decorator from another decorator and have a chain of decorators
const geolocationDeepDecorator = createAdditionalFeatureDecorator(anotherDeepDecorator);
```
 */
export function createGeolocationDecorator<T extends DeepClientInstance>(deep: T) {
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
      _package.name,
      "@deep-foundation/core"
    ],
    async applyRequiredPackagesInMinilinks() {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${this.applyRequiredPackagesInMinilinks.name}`);

      const { data: links } = await deep.select({
        up: {
          tree_id: {
            _id: ["@deep-foundation/core", "containTree"]
          },
          parent: {
            _or: this.requiredPackagesInMinilinksToApply.map((packageName) => ({
              id: {
                _id: [packageName]
              }
            }))
          }
        }
      })
      log({links})

      const minilinksApplyResult = deep.minilinks.apply(links)
      log({ minilinksApplyResult })

      this.requiredPackagesInMinilinksToApply = [];

      return minilinksApplyResult
    },
    async insertPosition(options: InsertPositionOptions): InsertPositionResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${this.insertPosition.name}`);
      log({ options })
      const { position, containerLinkId, id } = options;
      const insertOperations = await this.makePositionInsertOperations({ position: position, containerLinkId: containerLinkId, id: id });
      log({ insertOperations })
      const serialResult = await this.serial({ operations: insertOperations })
      log({ serialResult })

      return serialResult;
    },
    async makePositionInsertOperations(options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${this.makePositionInsertOperations.name}`);
      log({ options })
      const { id } = options;

      const operation = createSerialOperation({
        ...(id ? { id } : {}),
        type: 'insert',
        table: 'links',
        objects: {
          type_id: _package.Position.idLocal(),
          object: {
            data: {
              value: options.position
            }
          },
          in: {
            data: {
              type_id: deep.idLocal("@deep-foundation/core", "Contain"),
              from_id: options.containerLinkId ?? deep.linkId,
            }
          }
        },
      })
      log({ operation })

      return [operation]
    },
    async updatePosition(options: InsertPositionOptions): UpdatePositionResult {
      return await deep.update({
        link_id: options.id
      }, {
        value: options.position
      }, {
        table: 'objects'
      })
    },
    async getPosition(options: GetPositionOptions): GetPositionResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${this.getPosition.name}`);

      const { data: [positionLink] } = await deep.select(options.linkId);
      if (!positionLink) {
        throw new Error(`Failed to find link with id ##${options.linkId}`)
      }

      return positionLink.value?.value;
    },
    async watchPosition(options: WatchPositionOptions): WatchPositionResult {
      const { containerLinkId, watchPositionOptions } = options;
      return await Geolocation.watchPosition(watchPositionOptions, async (position, error) => {
        if (error) {
          throw error;
        }
        await this.insertPosition({ position, containerLinkId })
      })
    },
    async clearWatch(options: ClearWatchOptions) {
      await Geolocation.clearWatch(options)
    }
  }, deep);
}

export type GeolocationDecorator = ReturnType<typeof createGeolocationDecorator>

// export type GeolocationDecorator<T extends DeepClientInstance = DeepClientInstance> = T & {
//   capacitorGeolocationPackage: Package,
//   requiredPackagesInMinilinksToApply: Array<string>
//   applyRequiredPackagesInMinilinks(): ReturnType<DeepClientInstance['minilinks']['apply']>
//   insertPosition(options: InsertPositionOptions): InsertPositionResult
//   makePositionInsertOperations(options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult
//   getPosition(options: GetPositionOptions): GetPositionResult
//   watchPosition(options: WatchPositionOptions): WatchPositionResult
//   clearWatch(options: ClearWatchOptions): ReturnType<GeolocationPlugin['clearWatch']>
// }

export type InsertPositionOptions = { position: Position | null, containerLinkId?: number, id?: number }
export type InsertPositionResult = ReturnType<DeepClientInstance['serial']>

export type MakePositionInsertOperationsOptions = { position: Position | null, containerLinkId?: number, id?: number }
export type MakePositionInsertOperationsResult = Promise<Array<SerialOperation>>

export type GetPositionOptions = { linkId: number }
export type GetPositionResult = Promise<Partial<Position> | undefined>

export type WatchPositionOptions = { watchPositionOptions: PositionOptions, containerLinkId?: number }
export type WatchPositionResult = ReturnType<GeolocationPlugin['watchPosition']>

export type UpdatePositionOptions = { position: Position | null, id: number }
export type UpdatePositionResult = ReturnType<DeepClientInstance['serial']>