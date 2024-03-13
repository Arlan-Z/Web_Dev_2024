
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../album.service';
import { Album } from '../album.model'

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
    album: Album | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.albumsService.getAlbumById(+id).subscribe(album => {
          this.album = album;
        });
      } else {
        console.error('Invalid album ID');
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}
