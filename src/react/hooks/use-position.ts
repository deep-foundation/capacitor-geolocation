import { DeepClient, DeepClientInstance, useDeepSubscription } from "@deep-foundation/deeplinks/imports/client";
import { GeolocationDecorator } from "../../create-geolocation-decorator";
import { BoolExpLink } from "@deep-foundation/deeplinks/imports/client_types";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks";

/**
 * Subscribes to the position link contained in the {@link UsePositionOptions.containerLinkId} 
 */
export function usePosition(options: UsePositionOptions): Link<number>|undefined {
  const { deep,containerLinkId = deep.linkId } = options;

  if(deep.requiredPackagesInMinilinksToApply.length > 0) {
    throw new Error(`deep.requiredPackagesInMinilinksToApply.length > 0. You must call deep.applyRequiredPackagesInMinilinks() before calling ${usePosition.name}`)
  }

  const subscriptionData: BoolExpLink = {
    type_id: deep.capacitorGeolocationPackage.Position.idLocal(),
    in: {
      type_id: deep.idLocal("@deep-foundation/core", "Contain"),
      from_id: containerLinkId
    }
  }
  
  const {data: [positionLink] = [undefined]} = useDeepSubscription(subscriptionData)

  return positionLink;
}

export interface UsePositionOptions {
  /**
   * Deep client instance decorated with {@link GeolocationDecorator} by using {@link createGeolocationDecorator}
   */
  deep: GeolocationDecorator<DeepClientInstance>;
  /**
   * Container link id
   * 
   * @defaultValue {@link UsePositionOptions.deep.linkId}
   */
  containerLinkId?: number;
}