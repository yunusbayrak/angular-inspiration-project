import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BinaryNumberPipe } from 'src/app/pipes/Transformations/binary-number.pipe';
import { CapitalizePipe } from 'src/app/pipes/Transformations/Capitalize.pipe';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, BinaryNumberPipe, CapitalizePipe],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent implements OnInit {
  constructor(private location: Location) {}
  message = 'Standlone Component works ';
  ngOnInit(): void {
    this.message = this.message + ' on ' + this.location.path();
  }
}
