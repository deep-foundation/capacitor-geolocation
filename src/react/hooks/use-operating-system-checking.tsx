import { DeviceInfo, Device } from "@capacitor/device";
import { useState, useEffect } from "react";

interface OSStatus {
  isLoading: boolean;
  isSupported: boolean;
}

export function useSupportedOperatingSystem(): OSStatus {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSupported, setIsSupported] = useState<boolean>(false);

  useEffect(() => {
    Device.getInfo().then((deviceInfo) => {
      setIsSupported(
        deviceInfo.operatingSystem === "android" ||
          deviceInfo.operatingSystem === "ios",
      );
      setIsLoading(false);
    });
  }, []);

  return { isLoading, isSupported };
}
