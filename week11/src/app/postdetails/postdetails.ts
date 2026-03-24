import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.html',
  styleUrl: './postdetails.css',
})
export class Postdetails {
  @Input() post: any;
  isClassStyle = false
}
