import { GeneralAuditFormType, MergedAuditState, WCAGAuditFormTypeList } from '../types/types';

export function noop() {}

export function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export function convertToJson(
  generalData: GeneralAuditFormType,
  criteriaData: WCAGAuditFormTypeList
): { asJson: string; filename: string } {
  const mergedData: MergedAuditState = { general: generalData, criterias: criteriaData };
  Logger.log("Merge Form Data -> ", '\n', mergedData, '\n', "Next: Convert to Json");
  const asJson = JSON.stringify(mergedData, null, 2);
  const filename = generalData.projectName.split(' ').join('-');
  Logger.log("Convert to Json -> ", '\n', filename, '\n', asJson);

  return { asJson, filename };
}


export class Logger {
  private static isDebugMode: boolean = localStorage.getItem("DEBUG_MODE") === "true";

  static log(message: string, ...optionalParams: any[]) {
    if (Logger.isDebugMode) {
      console.log(`LOG: ${message}`, ...optionalParams);
    }
  }

  static warn(message: string, ...optionalParams: any[]) {
    if (Logger.isDebugMode) {
      console.warn(`WARN: ${message}`, ...optionalParams);
    }
  }

  static error(message: string, ...optionalParams: any[]) {
    if (Logger.isDebugMode) {
      console.error(`ERROR: ${message}`, ...optionalParams);
    }
  }
}
