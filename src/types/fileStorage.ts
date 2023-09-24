import { UploadedFile } from "express-fileupload";

export interface FileStorage {
  upload(file: any, refName: string): Promise<string>;
  uploadSnackThumb(file: any): Promise<string | null>;
}

export type UploadFileObject = UploadedFile | undefined;
