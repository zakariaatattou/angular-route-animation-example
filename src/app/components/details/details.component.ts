import { Component } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  $item: Observable<any> = this.postsService.getPost(this.route.snapshot.paramMap.get('id'));
  constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }
} 
