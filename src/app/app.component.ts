import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { BadgeComponent } from './componentes/badge/badge.component';
// import { BottomSheetComponent } from './componentes/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ButtonToggleComponent } from "./componentes/button-toggle/button-toggle.component";
import { CardComponent } from './componentes/card/card.component';
import { ButtonToggleGroupComponent } from './componentes/button-toggle-group/button-toggle-group.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { ChipsComponent } from './componentes/chips/chips.component';
import { DatePickersComponent } from './componentes/date-pickers/date-pickers.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { DividerComponent } from './componentes/divider/divider.component';
import { ExpansionPanelComponent } from './componentes/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './componentes/form-field/form-field.component';
import { GridListComponent } from './componentes/grid-list/grid-list.component';
import { IconComponent } from "./componentes/icon/icon.component";
import { InputComponent } from './componentes/input/input.component';
import { ListComponent } from './componentes/list/list.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginatorComponent } from './componentes/paginator/paginator.component';
import { ProgressModeComponent } from './componentes/progress-mode/progress-mode.component';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './componentes/radio-button/radio-button.component';
import { SelectComponent } from './componentes/select/select.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { SortheaderComponent } from './componentes/sortheader/sortheader.component';
import { StepperComponent } from './componentes/stepper/stepper.component';
import { TableComponent } from './componentes/table/table.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { ToolBarComponent } from './componentes/tool-bar/tool-bar.component';
import { ToolTipComponent } from './componentes/tool-tip/tool-tip.component';
import { TreeComponent } from './componentes/tree/tree.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, BadgeComponent, ButtonComponent, ButtonToggleComponent, CardComponent, ButtonToggleGroupComponent, CheckboxComponent, ChipsComponent, DatePickersComponent, DialogComponent, DividerComponent, ExpansionPanelComponent, FormFieldComponent, GridListComponent, IconComponent, InputComponent, ListComponent, MenuComponent, PaginatorComponent, ProgressModeComponent, ProgressSpinnerComponent, RadioButtonComponent, SelectComponent, SidenavComponent, SlideToggleComponent, SnackbarComponent, SortheaderComponent, StepperComponent, TableComponent, TabsComponent, ToolBarComponent, ToolTipComponent, TreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnidadDos';
}
