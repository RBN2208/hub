export function noop() {}

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
