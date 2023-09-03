import { Position } from "@capacitor/geolocation";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { MinilinkCollection, MinilinksResult } from "@deep-foundation/deeplinks/imports/minilinks.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";

export async function getPosition<TDeepClient extends DeepClientInstance>(this: GeolocationDecorator<TDeepClient>, options: GetPositionOptions): GetPositionResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${getPosition.name}`);
  log({options})
  const { data: [positionLink] } = await this.select(options.linkId);
  log({positionLink})
  if (!positionLink) {
    throw new Error(`Failed to find link with id ##${options.linkId}`)
  }
  const {data: containTreeLinksDownToPositionLink} = await this.select({
    up: {
      tree_id: this.idLocal("@deep-foundation/core", "containTree"),
      parent_id: positionLink.id,
    }
  })
  const minilinksCollection = new MinilinkCollection();
  minilinksCollection.apply(containTreeLinksDownToPositionLink);
  return {
    coords: {
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Accuracy"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Altitude"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","AltitudeAccuracy"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Heading"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Latitude"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Longitude"]}})[0]?.value?.value ?? {}),
      ...(minilinksCollection.query({id: {_id: [positionLink.id, "Coords","Speed"]}})[0]?.value?.value ?? {}),
    },
    ...(minilinksCollection.query({id: {_id: [positionLink.id, "Timestamp"]}})[0]?.value?.value ?? {}),
  };
}



export type GetPositionOptions = { linkId: number}
export type GetPositionResult = Promise<Partial<Position> | undefined>