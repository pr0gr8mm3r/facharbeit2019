import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatAutocompleteModule, MatIconModule } from '@angular/material';

@NgModule
({
  imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatAutocompleteModule, MatIconModule ],
  exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatAutocompleteModule, MatIconModule ],
  declarations: [ ],
  bootstrap:    [ ]
})
export class MaterialModule { }
