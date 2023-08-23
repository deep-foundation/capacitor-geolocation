import {Position} from '@capacitor/geolocation'
import {DeepClient} from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package'

export async function insertPosition(options: InsertPositionOptions) {
  const {deep, position, containerLinkId = deep.linkId} = options
  const _package = new Package({deep});
  await deep.insert({
    type_id: _package.Position.idLocal(),
    object: {
      data: {
        value: position
      }
    },
    in: {
      data: {
        type_id: deep.idLocal("@deep-foundation/core", "Contain"),
        from_id: containerLinkId,
      }
    }
  })
}

export interface InsertPositionOptions {
  /**
   * The deep client
   */
  deep: DeepClient;
  /**
   * The position info to insert
   */
  position: Position;
  /**
   * The id of the container link 
   * 
   * @defaultValue {@link InsertPositionOptions.deep.linkId}
   */
  containerLinkId?: number;
}