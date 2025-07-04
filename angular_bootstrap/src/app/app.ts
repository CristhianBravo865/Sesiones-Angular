import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  videoList: { name: string; slug: string; embed: string; url: string; safeUrl?: SafeResourceUrl }[] = [];

  constructor(private sanitizer: DomSanitizer, public router: Router) {
    this.videoList = [
      {
        name: 'Video 1',
        slug: 'video-1',
        embed: '',
        url: 'https://www.youtube.com/embed/pBwedBeawZs'
      },
      {
        name: 'Video 2',
        slug: 'video-2',
        embed: '',
        url: 'https://www.youtube.com/embed/9PY_qyQ1S7M'
      }
    ];

    this.videoList.forEach(item => {
      item.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.url);
    });
  }

  getEmbedUrl(item: any): SafeResourceUrl {
    return item.safeUrl!;
  }
}
