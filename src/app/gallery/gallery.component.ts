import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title= 'Recent Photos';

  @Input() FilterBy?: string= 'all';

  visibleImages: any[] =[];

  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.visibleImages= this.imageService.getImages();
   }

  ngOnInit(): void {
  }

}
