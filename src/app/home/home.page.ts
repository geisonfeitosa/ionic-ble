import { Component, NgZone, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  id = "30:AE:A4:FE:F5:7E";
  conectado:Boolean;
  aberto:Boolean;

  constructor(private ble:BLE, private toastCtrl: ToastController) {}

  ngOnInit() {}

  abrir() {
    this.ble.connect(this.id).subscribe(() => {
      this.ble.write(this.id, "ab0828b1-198e-4351-b779-901fa0e0371e", "4ac8a682-9736-4e5d-932b-e9b31405049c", this.stringToBytes("L1")).then(() => {
        this.ble.disconnect(this.id).then(() => {
          this.showToast("Porta aberta com sucesso!");
        });
      }, () => {
        this.showError("Erro! Certifique se está próximo suficiente da porta.");
      });
    }, () => {
      this.showError("Erro! Certifique se está próximo suficiente da porta.");
    });
  }

  stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
        array[i] = string.charCodeAt(i);
     }
     return array.buffer;
  }

  async  showToast(msj) {
   const toast = await this.toastCtrl.create({
    message: msj,
    position: 'top',
    duration: 3000
   });
   await toast.present();
  }

  async  showError(erro) {
    const toast = await this.toastCtrl.create({
     message: erro,
     position: 'top',
     buttons: ['Ok']
    });
    await toast.present();
   }
   
}