import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any = []
  cargando: boolean = false
  search: string = ""
  search2: string = ""
  constructor(private servicioDeNoticias: NoticiaService) {}

  ngOnInit(): void {

  }

  setSearch(e: any): void {
    this.search = e.target.value
    if (e.key == "Enter"){
      this.buscar()
    }
  }

  buscar(): void {
    this.cargando = true
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (res) => {
        this.search2 = this.search
        this.noticias = res.articles
        this.cargando = false
        this.search = ""
      },
      error: (err: any) => {
        console.log("error")
      }
    })
  }

}
