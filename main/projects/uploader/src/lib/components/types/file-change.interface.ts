export interface UploaderError {
  maxSizeExceeded: boolean;
  wrongFileType: boolean;
}

export interface FileInputChange {
  hasFile: boolean;
  fileName: string;
  base64Image: string[];
  errors: UploaderError;
}
