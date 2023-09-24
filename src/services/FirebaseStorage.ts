import { UploadedFile } from "express-fileupload";
import { FirebaseStorage, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import { storage } from "../config/firebase";
import { FileStorage, UploadFileObject } from "../types/fileStorage";

export default class FirebaseFileStorage implements FileStorage {
  private _storage: FirebaseStorage;

  constructor() {
    this._storage = storage;
  }

  private _getRefFile(refName: string) {
    return ref(this._storage, refName);
  }

  public async upload(file: UploadedFile, refName: string): Promise<string> {
    const storageRef = this._getRefFile(refName);
    const fileContent = file.data;
    const metadata = {
      contentType: file.mimetype,
    };

    const result = await uploadBytes(storageRef, fileContent, metadata);

    return result.ref.fullPath;
  }

  public async uploadSnackThumb(
    file: UploadFileObject
  ): Promise<string | null> {
    if (!file) {
      return undefined;
    }

    const refName = moment().format("YYYY_MM_DD");

    return this.upload(file, refName);
  }
}
