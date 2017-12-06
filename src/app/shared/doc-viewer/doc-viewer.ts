import {
  Component,
  Input,
  ElementRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ApplicationRef,
  Injector,
  OnDestroy,
} from '@angular/core';
import {Http} from '@angular/http';
import {DomPortalHost, ComponentPortal} from '@angular/material';


@Component({
  selector: 'doc-viewer',
  template: 'Loading document...',
})
export class DocViewer implements OnDestroy {
  private _portalHosts: DomPortalHost[] = [];

  @Input()
  set documentUrl(url: string) {
    this._fetchDocument(url);
  }

  constructor(private _appRef: ApplicationRef,
              private _componentFactoryResolver: ComponentFactoryResolver,
              private _elementRef: ElementRef,
              private _http: Http,
              private _injector: Injector,
              private _viewContainerRef: ViewContainerRef) {}



  private _fetchDocument(url: string) {
    this._http.get(url).subscribe(
        response => {
          if (response.ok) {
            let docHtml = response.text();
            this._elementRef.nativeElement.innerHTML = docHtml;
            this._loadLiveExamples();
          } else {
            this._elementRef.nativeElement.innerText =
              `Failed to load document: ${url}. Error: ${response.status}`;
          }
        },
        error => {
          this._elementRef.nativeElement.innerText =
              `Failed to load document: ${url}. Error: ${error}`;
        });
  }

  releadLiveExamples() {
    this._clearLiveExamples();
    this._loadLiveExamples();
  }

  private _loadLiveExamples() {
    let exampleElements =
        this._elementRef.nativeElement.querySelectorAll('[my-docs-example]');
    Array.prototype.slice.call(exampleElements).forEach((element: Element) => {
      let example = element.getAttribute('my-docs-example');

      let exampleContainer = document.createElement('div');
      element.appendChild(exampleContainer);

      let portalHost = new DomPortalHost(
          exampleContainer, this._componentFactoryResolver, this._appRef, this._injector);

      this._portalHosts.push(portalHost);
    });
  }

  private _clearLiveExamples() {
    this._portalHosts.forEach(h => h.dispose());
    this._portalHosts = [];
  }

  ngOnDestroy() {
    this._clearLiveExamples();
  }
}
