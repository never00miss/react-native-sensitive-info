import { NativeModules } from "react-native";

const RNSensitiveInfo = NativeModules.RNSensitiveInfo;

export default {
  ...RNSensitiveInfo,
  setInvalidatedByBiometricEnrollment() {
    if (RNSensitiveInfo.setInvalidatedByBiometricEnrollment == null) {
      return;
    }

    return RNSensitiveInfo.setInvalidatedByBiometricEnrollment();
  },
  cancelFingerprintAuth() {
    if (RNSensitiveInfo.cancelFingerprintAuth == null) {
      return;
    }

    return RNSensitiveInfo.cancelFingerprintAuth();
  }
};
