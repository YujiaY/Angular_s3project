import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataSS:DataStorageService){}
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
}
