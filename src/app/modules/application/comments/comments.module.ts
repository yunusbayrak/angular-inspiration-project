import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { CustomurlHttpGenerator } from '../../shared/store/customurl-http-generator';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { companyEntityMetaData } from './store/company-entity-metadata';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class CommentsModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(companyEntityMetaData);
  }
}
