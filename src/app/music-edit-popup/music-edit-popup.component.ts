import {Component, Inject} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-music-edit-popup',
  imports: [
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogClose,
    NgIf,
    NgClass
  ],
  templateUrl: './music-edit-popup.component.html',
  styleUrl: './music-edit-popup.component.css'
})
export class MusicEditPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<MusicEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onSave(): void {
    if (this.data.autor && this.data.music && this.data.versao) {
      this.dialogRef.close(this.data); // Retorna os dados atualizados ao fechar
    }
  }
}
