import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
