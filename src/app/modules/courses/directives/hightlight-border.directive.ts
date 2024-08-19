import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHightlightBorder]'
})
export class HightlightBorderDirective implements AfterViewInit{

  @Input('appHightlightBorder') creationDate: Date = new Date;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }
public ngAfterViewInit(): void {
  const currentDate = new Date();
  if (this.creationDate > currentDate) {
    const [child] = this.element.nativeElement.children;
    this.renderer.setStyle(child, 'border', '1px solid var(--blue-300)');
  } else if (
    this.creationDate < currentDate && this.creationDate >= new Date(currentDate.setDate(currentDate.getDate() - 14))
  ) {
    const [child] = this.element.nativeElement.children;
    this.renderer.setStyle(child, 'border', '1px solid var(--green-300)');
  }
}

}
