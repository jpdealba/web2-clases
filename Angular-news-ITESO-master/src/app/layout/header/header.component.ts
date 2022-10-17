import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  favoritos: number = 0;
  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.noticiaService
    this.noticiaService.favoritosObservale.subscribe((f: number) => {
      this.favoritos = f
    })
  }

}
