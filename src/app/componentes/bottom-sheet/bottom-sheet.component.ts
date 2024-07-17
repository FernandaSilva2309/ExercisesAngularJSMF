import {Component} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatListModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'] // Corregido a styleUrls
})
export class BottomSheetComponent {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent> // Corregido a private
  ) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
