export interface Item {
    id: number;
    name: string;
    step: steps;
    text: string;
  }

  enum steps {
    before = "Before",
    during = "During",
    after = "After",
  }

  
export const items: Item[] = [

]