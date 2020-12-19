import { Component, OnInit } from '@angular/core';
import * as jsdiff from 'diff'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {

  public input: string;
  public blindText: string = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.";
  public htmlToAdd:string;
  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public showResults() {
if(this.input !=  null){
    const diff = jsdiff.diffChars(this.blindText, this.input);
    var display = document.createElement('pre');

    diff.forEach(function (part) {
      // green for additions, red for deletions
      // grey for common parts
      var color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
      var span = document.createElement('span');
      span.style.color = color;
      span.appendChild(document
        .createTextNode(part.value));
      display.appendChild(span);
    });
    this.htmlToAdd = display.innerHTML;
  }
}

/*   liveView(input:string):string {
    const diff = jsdiff.diffChars(this.blindText, input);
    var display = document.createElement('pre');
    diff.forEach(function (part) {
      // green for additions, red for deletions
      // grey for common parts
      var color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
      var span = document.createElement('span');
      span.style.color = color;
      span.appendChild(document
        .createTextNode(part.value));
      display.appendChild(span);
    });
    return display.innerHTML;
  } */
}
