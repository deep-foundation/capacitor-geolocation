import { DeviceInfo, Device } from "@capacitor/device";
import { useState, useEffect } from "react";

export function WithOperatingSystemChecking(
  options: WithOperatingSystemCheckingOptions,
) {
  const { renderIfNotSupported, renderIfSupported, renderIfLoading } = options;
  const [operatingSystem, setOperatingSystem] = useState<
    DeviceInfo["operatingSystem"] | undefined
  >(undefined);

  useEffect(() => {
    Device.getInfo().then((deviceInfo) => {
      setOperatingSystem(deviceInfo.operatingSystem);
    });
  }, []);

  if (operatingSystem === undefined) {
    return renderIfLoading();
  } else if (operatingSystem === "android" || operatingSystem === "ios") {
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
