function MenuItem(itemID: string) {
  return (target: Function) => {
    target.prototype.id = itemID;
  }
} 

@MenuItem('abc')
class Pizza {
  id: string | undefined;
}

@MenuItem('xyz')
class Hamburger {
  id!: string;
}

console.log(new Pizza().id);