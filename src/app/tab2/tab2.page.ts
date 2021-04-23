import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShoppingItemService } from '../services/shopping-item.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public item:string;

  constructor(
     private shoppingService:ShoppingItemService,
     private alertController:AlertController
     )

   {}
addItem(){
  console.log(this.item)

  if(this.item && this.item !=''){
    if(!this.shoppingService.existItem(this.item)){
      this.shoppingService.addItem(this.item);
      this.item='';
      console.log(this.shoppingService.items);
      this.presentAlertMultipleButtons();
    }else{
          this.alertexistent(); 
    }
  }else{
    this.alertErorr();
  }
}
async presentAlertMultipleButtons() {
  const alert = await this.alertController.create({
    header: 'EXITO',
    subHeader: 'Subtitle',
    message: 'iTEM AÑADIDO CON EXITO',
    buttons: ['Ok']
  });

  await alert.present();
}
async alertErorr() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Debes ingresar',
    buttons: ['Ok']
  });

  await alert.present();
}
async alertexistent() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'El item ya Existe',
    buttons: ['Ok']
  });

  await alert.present();
}
}
