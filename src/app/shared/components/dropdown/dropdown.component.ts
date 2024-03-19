import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() items: string[] = [];
  @Output() selectionChanged = new EventEmitter<string[]>();

  selectedItems: string[] = [];
  filteredItems: string[] = [];
  dropdownOpen = false;
  searchText = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.closeDropdown();
    }
  }

  toggleItemSelection(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
    this.selectionChanged.emit(this.selectedItems);
  }

  isSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (!this.dropdownOpen) {
      this.searchText = '';
    }
    this.filterItems();
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.searchText = '';
  }

  filterItems() {
    if (this.searchText.trim() === '') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
