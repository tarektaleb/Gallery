import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { HttpClientModule} from '@angular/common/Http';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgDetailComponent } from './img/img-detail.component'
import { ImageService } from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';
import { appRoutes } from '../routes'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImgDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ImageService,
  ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
