import { MergedAuditState } from '../types/types';

export function noop() {}

export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export function convertToJson(generalData, criteriaData): {asJson: any, filename: string} {
  const mergedData: MergedAuditState = { general: generalData, criterias: criteriaData };
  Logger.log("Merge Form Data -> ", '\n', mergedData, '\n', "Next: Convert to Json");
  const asJson = JSON.stringify(mergedData, null, 2)
  const filename = generalData.projectName.split(' ').join('-');
  Logger.log("Convert to Json -> ", '\n', filename, '\n', asJson);

  return {asJson, filename}
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
