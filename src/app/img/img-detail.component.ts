import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {
  image: any;

  constructor(private imgservie : ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.imgservie.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
