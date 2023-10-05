import { DeviceInfo, Device } from "@capacitor/device";
import { useState, useEffect } from "react";
import { useSupportedOperatingSystem } from "../hooks/use-operating-system-checking.js";

export function WithOperatingSystemChecking(
  options: WithOperatingSystemCheckingOptions,
) {
  const { renderIfNotSupported, renderIfSupported, renderIfLoading } = options;
  const [operatingSystem, setOperatingSystem] = useState<
    DeviceInfo["operatingSystem"] | undefined
  >(undefined);

  const { isLoading, isSupported } = useSupportedOperatingSystem();

  if (isLoading) {
    return renderIfLoading();
  } else if (isSupported) {
    return renderIfSupported();
  } else {
    return renderIfNotSupported();
  }
}

export interface WithOperatingSystemCheckingOptions {
  renderIfNotSupported: () => JSX.Element;
  renderIfSupported: () => JSX.Element;
  renderIfLoading: () => JSX.Element;
}
