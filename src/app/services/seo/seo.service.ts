import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}
  public setMetaTag(params: { name: string; content: string }) {
    this.meta.updateTag({
      name: params.name,
      content: params.content,
    });
  }
  public addMetaTag(params: { name: string; content: string }) {
    this.meta.addTag({
      name: params.name,
      content: params.content,
    });
  }
  public setMetaTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
