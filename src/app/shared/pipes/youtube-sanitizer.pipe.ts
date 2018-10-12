import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSanitizer'
})
@Injectable()
export class YoutubeSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: any, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.fixUrlToYoutubeEmbed(value));
  }

  private fixUrlToYoutubeEmbed(regularUrl) : string {
    let result = '';
    let fixUrlPrefix = "https://www.youtube.com/embed/";
    let videoId = regularUrl.match(/\=(.*)/)[1];
    return result = fixUrlPrefix + videoId;
  }

}