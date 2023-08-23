import {Position} from '@capacitor/geolocation'
import {DeepClient} from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package'

export async function getPosition(options: GetPositionOptions): Promise<Position|undefined> {
  const {deep, linkId} = options;
  const {data: [link]} = await deep.select(linkId)
  return link.value?.value
}

export interface GetPositionOptions {
  /**
   * The deep client
   */
  deep: DeepClient;
  /**
   * The id of the position link
   */
  linkId: number;
}