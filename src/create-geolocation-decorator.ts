import { DeepClientInstance, SerialOperation } from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package';
import { Geolocation, Position, PositionOptions } from '@capacitor/geolocation';
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
export function createGeolocationDecorator<T extends DeepClientInstance>(deep: T): GeolocationDecorator<T> {
  const log = debug(`@deep-foundation/capacitor-geolocation:${createGeolocationDecorator.name}`);
  log({ deep })
  const _package = new Package({ deep });
  log({ _package })
  return Object.assign({
    ...deep,
    async insertPosition(options: InsertPositionOptions): InsertPositionResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:insertPosition`);
      log({ options })
      const { position, containerLinkId, id } = options;
      const insertOperations = await this.makePositionInsertOperations({ position: position, containerLinkId: containerLinkId, id: id });
      log({ insertOperations })
      const serialResult = await this.deep.serial({ operations: insertOperations })
      log({ serialResult })

      return serialResult;
    },
    async makePositionInsertOperations(options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:makePositionInsertOperations`);
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
    async getPosition(options: GetPositionOptions): GetPositionResult {
      const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:getPosition`);

      const { data: [positionLink] } = await deep.select(options.linkId);
      if (!positionLink) {
        throw new Error(`Failed to find link with id ##${options.linkId}`)
      }

      return positionLink.value?.value;
    },
    async watchPosition(options: { watchPositionOptions: PositionOptions }): WatchPositionResult {
      return await Geolocation.watchPosition(options.watchPositionOptions, async (position, error) => {
        if (error) {
          throw error;
        }
        await this.insertPosition({ position })
      })
    }
  }, _package);
}

export type GeolocationDecorator<T extends DeepClientInstance> = T & Package & {
  insertPosition(options: InsertPositionOptions): InsertPositionResult
  makePositionInsertOperations(options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult
  getPosition(options: GetPositionOptions): GetPositionResult
  watchPosition(options: WatchPositionOptions): WatchPositionResult
}

export type InsertPositionOptions = { position: Position | null, containerLinkId?: number, id?: number }
export type InsertPositionResult = ReturnType<DeepClientInstance['serial']>

export type MakePositionInsertOperationsOptions = { position: Position | null, containerLinkId?: number, id?: number }
export type MakePositionInsertOperationsResult = Promise<Array<SerialOperation>>

export type GetPositionOptions = { linkId: number }
export type GetPositionResult = Promise<Partial<Position> | undefined>

export type WatchPositionOptions = { watchPositionOptions: PositionOptions }
export type WatchPositionResult = Promise<ReturnType<GeolocationPlugin['watchPosition']>>