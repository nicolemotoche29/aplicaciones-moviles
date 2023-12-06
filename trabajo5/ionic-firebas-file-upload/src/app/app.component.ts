import { Component } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private transfer: FileTransfer, private fileChooser: FileChooser) { }

  uploadFile() {
    this.fileChooser.open().then((uri: string) => {
      const fileTransfer: FileTransferObject = this.transfer.create();

      let options: FileUploadOptions = {
        fileKey: 'archivo',
        fileName: 'nombre_archivo.txt',
        mimeType: 'text/plain',
        chunkedMode: false,
        headers: {}
      };

      fileTransfer.upload(uri, 'URL_DEL_ENDPOINT', options)
        .then((data) => {
          console.log('Archivo subido con éxito:', data.response);
          // Manejar la respuesta del servidor después de subir el archivo
        })
        .catch((error) => {
          console.error('Error al subir el archivo:', error);
          // Manejar errores de carga
        });
    })
    .catch((error: any) => {
      console.error('Error al seleccionar el archivo:', error);
      // Manejar errores de selección de archivo
    });
  }
}
