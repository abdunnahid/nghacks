import { Injectable } from '@angular/core';
@Injectable()
export class UploaderService {

  constructor() { }

  public getBase64(file: any): Promise<[string, string]> {

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise(resolve => {
      reader.onload = (event: any) => {
        const res = event.target.result;
        const base64Image: [string, string] = res.split(',');
        return resolve(base64Image);
      };
    });
  }
}
