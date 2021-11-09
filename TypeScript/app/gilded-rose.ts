export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const MAX_QUALITY = 50;

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            // Sulfuras is a legendary product -> no sellin or quality change
            if (item.name == 'Sulfuras, Hand of Ragnaros') {
                continue
            }
            
            // Increase quality in case of Aged Brie or Backstage passes
            if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < MAX_QUALITY) {
                    item.quality++
                    
                    // Special rules for Backstage passes to increase quality based on sellIn value
                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn <= 10 && item.quality < MAX_QUALITY) {
                            item.quality++
                        }
                        if (item.sellIn <= 5 && item.quality < MAX_QUALITY) {
                            item.quality++
                        }
                    }
                }
            } else {
                // Decrease quality in other cases
                if (item.quality > 0) {
                    item.quality--
                }
            }
            
            item.sellIn--
            
            if (item.sellIn < 0) {
                if (item.name == 'Aged Brie' && item.quality < MAX_QUALITY) {
                    item.quality++
                    continue
                }
                
                if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    item.quality = 0
                    continue
                } 
                
                if (item.quality > 0) {
                    item.quality--
                }
            }
        }

        return this.items;
    }
}
