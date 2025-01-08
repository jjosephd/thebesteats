import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** @title Simple form field */
@Component({
  selector: 'mat-form-field',
  templateUrl: 'mat-form-field.component.html',
  styleUrl: 'mat-form-field.component.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFieldComp {}
