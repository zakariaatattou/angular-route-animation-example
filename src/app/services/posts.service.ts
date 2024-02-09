import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, Observable, tap } from "rxjs";


const serverUrl: string = 'http://localhost:4200';

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    constructor(private http: HttpClient) { }


    getPosts(): Observable<any> {
        return this.http.get(serverUrl + '/assets/data/posts.json').pipe(
            map((data: any) => data.posts)
        )
    }

    getPost(id: string | null): Observable<any> {
        return this.http.get(serverUrl + '/assets/data/posts.json').pipe(
            map((data: any) => data.posts),
            map((data: any) => data.find((item: any) => item.id == id)),
        )
    }


} 