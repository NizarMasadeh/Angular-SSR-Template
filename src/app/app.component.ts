import { AfterContentInit, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { routeAnimations } from './widgets/animations/route.animation';
import { PlatformDetectionService } from './services/platform-detection.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations],
})
export class AppComponent implements AfterContentInit {
  animationState: string = '';

  constructor(
    private _platformDetectionService: PlatformDetectionService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    if (this._platformDetectionService.isRunningInBrowser()) {
      Promise.resolve().then(() => {
        this.prepareRoute();
        this._cdr.detectChanges();
      });
    }
  }

  prepareRoute(outlet?: RouterOutlet) {
    const newState = outlet?.activatedRouteData?.['animation'] ?? '';
    if (this.animationState !== newState) {
      this.animationState = newState;
      this._cdr.detectChanges();
    }
    return this.animationState;
  }
}
