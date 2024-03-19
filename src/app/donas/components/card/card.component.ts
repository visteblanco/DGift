import { Component,Input, OnInit } from '@angular/core';
import { Dona } from '../../interfaces/dona.interface';

@Component({
  selector: 'dona-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()
  public dona!: Dona

  ngOnInit(): void {
    if (!this.dona) throw Error('Dona propiety is required')
  }
}
