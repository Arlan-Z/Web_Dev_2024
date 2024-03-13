// album-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  editable: boolean = false;
  newTitle: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.albumsService.getAlbumById(+id).subscribe(album => this.album = album);
    } else {
      console.error('ID параметра отсутствует в маршруте');
  }
}
  editTitle() {
    this.editable = true;
    this.newTitle = this.album.title;
  }

  saveTitle() {
    this.album.title = this.newTitle;
    this.editable = false;
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
