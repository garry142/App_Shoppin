import { Component } from '@angular/core';
import { ShoppingItemService } from '../services/shopping-item.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public shoppingService: ShoppingItemService,
    public alertController: AlertController
    
  ) {}
  async removeItem(item: string){
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: '¿Seguro que quieres eliminar el elemento?',
      buttons: [
        {
          text: 'Si',
          handler: (blah) => {
            this.shoppingService.removeItem(item);
          }
        }, {
          text: 'No',
          handler: () => {
            alert. dismiss();
          }
        }
      ]
    });
    await alert.present();
   }
    }