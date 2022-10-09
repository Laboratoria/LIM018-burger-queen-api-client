import { NgIfContext } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  product : Product = {
    id:'1',
    name: "cafe con leche",
    price: 10,
    img: './assets/icons/icon.png'
  }



    {
      id:'2',
      name: "cafe americano",
      price: 20,
      img: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/cafe-con-leche.jpg'
    }

  // newName = '';
  // toggleButton(){
  //   this.btndisable = !this.btndisable;
  // }
  // ageChange(){
  //   this.person.age += 1
  // }
  // // changeName(event:Event){
  // //   const elemet = event.target as HTMLInputElement;
  // //   this.person.name = elemet.value;
  // // }
  // deleteName(index: number){
  //   this.names.splice(index,1)
  // }
  // addName(){
  //   this.names.push(this.newName);
  //   this.newName = '';
  // }
}
