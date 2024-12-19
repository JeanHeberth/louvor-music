import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  imports: [
    MatDialogClose
  ],
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
