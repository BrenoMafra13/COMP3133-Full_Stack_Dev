import { Component, inject, OnInit } from '@angular/core';
import { ApiClientService } from '../shared/api-client-service'
import { Postdetails } from '../postdetails/postdetails';

@Component({
  selector: 'app-postlist',
  imports: [Postdetails],
  templateUrl: './postlist.html',
  styleUrl: './postlist.css',
})
export class Postlist implements OnInit {
  private readonly apiClientService = inject(ApiClientService)
  postList:any[] = []

  ngOnInit() {
    this.getPosts()
  }

  showPost():void {
    this.getPosts()
  }

  getPosts() {
    this.apiClientService.getPosts().subscribe(
      {
        next: (res: any[]) => {
          // console.log(res)
          this.postList = res
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }

  getPostById(id: number) {
    this.apiClientService.getPostById(id).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  createPost(post: any) {
    this.apiClientService.createPost(post).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updatePost(id: number, post: any) {
    this.apiClientService.updatePost(id, post).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deletePost(id: number) {
    this.apiClientService.deletePost(id).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
