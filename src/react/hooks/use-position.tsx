import {
  DeepClient,
  DeepClientInstance,
} from "@deep-foundation/deeplinks/imports/client.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import { BoolExpLink } from "@deep-foundation/deeplinks/imports/client_types.js";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks.js";

export function usePosition<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: UsePositionOptions,
): UsePositionResult {
  const { containerLinkId = this.linkId } = options;

  const subscriptionData: BoolExpLink = {
    type_id: this.capacitorGeolocationPackage.Position.idLocal(),
    in: {
      type_id: this.idLocal("@deep-foundation/core", "Contain"),
      from_id: containerLinkId,
    },
  };

  const { data: [positionLink] = [undefined] } =
    this.useDeepSubscription(subscriptionData);

  return positionLink;
}

export interface UsePositionOptions {
  /**
   * Container link id
   *
   * @defaultValue {@link this.linkId}
   */
  containerLinkId?: number;
}
export type UsePositionResult = Link<number> | undefined;
