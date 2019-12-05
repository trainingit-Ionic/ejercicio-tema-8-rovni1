import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOn: boolean;

  constructor(private flash: Flashlight, private platf: Platform) {

  this.isOn = false;
  this.pulsarBoton();
}



pulsarBoton(){

  this.platf.ready().then(() => {
    
    if (this.platf.is('android' || 'ios')) {
        alert("estas en un movil Android!");
        this.flash.available().then(()=>{
          this.isOn = true;
          console.log('hay flash en este movil');
          var check = this.flash.switchOff();
          this.isOn = false;
          alert(check);
          this.flash.switchOn();
          alert('puedes encender el flash de tu movil')
          this.isOn= true;
         })
    }else if(!this.platf.is('android' || 'ios')){
      this.flash.available();
      this.isOn = false;
      this.flash.switchOff();
      alert('esta plataforma no dispone de flash');
    }
   
    
});

}




}
