import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'app-header',
    styles: ['.btn-group {margin-top: 7px;}'],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataSS:DataStorageService,
              private authService: AuthService){}
  // @Output() featureSelected = new EventEmitter<string>();
  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  //
  // }
 onSaveData() {
    this.dataSS.stroreRecipes()
      .subscribe(
        (response: Response)=> {
          console.log(response)
        }
      );
}
 onFetchData() {
    this.dataSS.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
