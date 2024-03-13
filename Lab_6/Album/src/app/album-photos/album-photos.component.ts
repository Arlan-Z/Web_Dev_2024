
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.albumsService.getAlbumById(+id).subscribe(album => this.photos = album.photos);
    } else {
      console.error('ID параметра отсутствует в маршруте');
  }
  }

  goBack() {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}
