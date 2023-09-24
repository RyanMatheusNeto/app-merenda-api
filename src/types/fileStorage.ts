import { UploadedFile } from "express-fileupload";

export interface FileStorage {
  upload(file: any, refName: string): Promise<string>;
  uploadSnackThumb(file: any): Promise<string | null>;
  delete(refName: string): Promise<void>;
  deleteTodaySnackThumb(): Promise<void>;
}

export type UploadFileObject = UploadedFile | undefined;
