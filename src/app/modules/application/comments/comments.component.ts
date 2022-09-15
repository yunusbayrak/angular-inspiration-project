import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Comment } from './models';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  loaded: boolean;
  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.commentService = serviceFactory.create<Comment>('Comment');
    this.allComments$ = this.commentService.entities$;
    this.loaded = false;
  }

  allComments$: Observable<Comment[]>;
  commentService: EntityCollectionService<Comment>;

  ngOnInit(): void {
    this.commentService.getAll().subscribe(x => {
      this.loaded = true;
    });
    // this.loaded = true;
  }
}
