import {
  DeepClient,
  DeepClientInstance,
} from "@deep-foundation/deeplinks/imports/client.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import { BoolExpLink } from "@deep-foundation/deeplinks/imports/client_types.js";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks.js";

export function usePosition<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
>(options: UsePositionOptions<TDeepClient>): UsePositionResult {
  const { deep, containerLinkId = deep.linkId } = options;

  const subscriptionData: BoolExpLink = {
    type_id: deep.capacitorGeolocationPackage.Position.idLocal(),
    in: {
      type_id: deep.idLocal("@deep-foundation/core", "Contain"),
      from_id: containerLinkId,
    },
  };

  const { data: [positionLink] = [undefined] } =
    deep.useDeepSubscription(subscriptionData);

  return positionLink;
}

export interface UsePositionOptions<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
> {
  /**
   * Container link id
   *
   * @defaultValue {@link this.linkId}
   */
  containerLinkId?: number;
  deep: GeolocationDecorator<TDeepClient>;
}
export type UsePositionResult = Link<number> | undefined;
