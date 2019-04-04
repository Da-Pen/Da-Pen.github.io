export class NavBarItem {
    name;
    component;
    isActive;
    constructor(name, component, isActive = false) {
        this.name = name;
        this.component = component;
        this.isActive = isActive;
    }
}