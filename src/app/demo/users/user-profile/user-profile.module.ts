import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { TblSearchingComponent } from '../../pages/tables/tbl-datatable/tbl-searching/tbl-searching.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    FormsModule,
    DataTablesModule,
  ]
})
export class UserProfileModule { }
