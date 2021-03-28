import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImgDetailComponent } from './app/img/img-detail.component';

export const appRoutes: Routes = [
    {path: "gallery", component: GalleryComponent},
    {path: "image/:id", component: ImgDetailComponent},
    {path: "", redirectTo: "/gallery", pathMatch:'full'}
] ;
