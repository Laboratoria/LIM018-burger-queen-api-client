import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercocinero',
  templateUrl: './headercocinero.component.html',
  styleUrls: ['./headercocinero.component.css']
})
export class HeadercocineroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.clear()
  }

}
