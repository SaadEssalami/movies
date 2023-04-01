import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit{

  actors : any[] =[]
  imageUrl = "https://thumbs.dreamstime.com/b/profil-d-avatar-masculin-de-l-espace-r%C3%A9serv%C3%A9-par-d%C3%A9faut-image-factice-cadre-photo-carr%C3%A9-blanc-ins%C3%A9r%C3%A9-dans-le-papier-coup%C3%A9-231181588.jpg "

  constructor(private movieservice: MovieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => this.getActors( params.id))
  }

  getActors(id: number){
    this.movieservice.actorMovie(id).subscribe(({cast}: any) => {
      this.actors = cast
    })
  }


}
