import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';
import { PokemonProvider } from '../../providers/pokemon/pokemon';

@NgModule({
  declarations: [
    PrincipalPage
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage)
  ],
  providers: [
    PokemonProvider
 ]

})
export class PrincipalPageModule {}
