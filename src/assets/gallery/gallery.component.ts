import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    galleries: any[] = []

    constructor(private galleryservice: GalleryService) {}

    ngOnInit(): void {
      this.galleryservice.getGalleries().subscribe(
        galleries => {
          this.galleries = galleries;
        },
        error => {
          console.error('Error fetching galleries:', error);
        }
      );
    }
}
