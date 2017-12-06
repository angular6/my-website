import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {DocViewer} from './doc-viewer/doc-viewer';
import {SkillItems} from './skill-items/skill-items';
import {NavBar} from './navbar/navbar';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [DocViewer, NavBar],
  exports: [DocViewer, NavBar],
  providers: [SkillItems],
  entryComponents: [
  ],
})
export class SharedModule {}
