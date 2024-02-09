import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  $items: Observable<any> = this.postsService.getPosts();
  constructor(private postsService: PostsService) { }
}
