// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: { name: string, price: number, imageUrl: string, description: string, showDescription: boolean, link: string }[];
  selectedProduct: any;

  constructor() {
    this.products = [
      { name: 'Молоко', price: 375, imageUrl: 'https://cdn.tveda.ru/thumbs/1bd/1bd997dc8c01471c54d72906ec75551c/10af5a058c91b32298f3091cf01f2d93.jpg', description: 'Описание молока', showDescription: false, link: 'https://kaspi.kz/shop/p/petropavlovskoe-moloko-3-2-900-ml-100815879/?c=750000000' },
      { name: 'Хлеб', price: 245, imageUrl: 'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/cb/24/822544da6e9012b3d5ccd48862a5.jpg', description: 'Ароматный свежеиспеченный хлеб, идеально подходящий для вашего завтрака.',showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-baton-nareznoi-350-g-103869137/?c=750000000'  },
      { name: 'Яблоки', price: 779, imageUrl: 'https://almaty.instashop.kz/upload/resize_cache/iblock/061/476_342_1/0612de8ff843bba8d5dab235ac1df71c.jpg', description: 'Сочные и сладкие яблоки, наполненные витаминами и пользой для вашего здоровья.', showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-jabloko-golden-kazahstan-101639291/?c=750000000'  },
      { name: 'Масло', price: 929, imageUrl: 'https://185504.selcdn.ru/static/optoffka.reshop.kz/catalog/417/7586238665ab246d7f1ee6_original.jpg', description: 'Натуральное сливочное масло, идеально подходящее для выпечки и приготовления блюд.',showDescription: false, link: 'https://kaspi.kz/shop/p/brest-litovsk-maslo-slivochnoe-82-5-180-g-102567277/?c=750000000'  },
      { name: 'Сыр', price: 1419, imageUrl: 'https://m.dom-eda.com/uploads/images/catalog/item/b68db3e52d/a630517a09_500.png', description: 'Изысканный сыр с нежным ароматом, прекрасно подходящий для закусок и сэндвичей.', showDescription: false, link: 'https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-slivochnyi-50-200-g-102726660/?c=750000000'  },
      { name: 'Картофель', price: 185, imageUrl: 'https://cdn.tveda.ru/thumbs/d64/d648b2d646e21051b4be526b62d59cbb/a4ff8919e2d361af0322e20696fc646e.jpg', description: 'Свежий картофель премиум качества, отлично подходящий для приготовления вкусных и сытных блюд.', showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-kartofel-otbornyi-kazahstan-102865232/?c=750000000'  },
      { name: 'Помидоры', price: 1069, imageUrl: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/tomato.jpg', description: 'Ароматные и сочные помидоры, идеально подходящие для салатов и приготовления соусов.', showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-pomidor-na-vetke-101672554/?c=750000000'  },
      { name: 'Огурцы', price: 1584, imageUrl: 'https://foodcity.ru/storage/products/October2018/eP9jt5L6V510QjjT4a1B.jpg', description: 'Свежие и хрустящие огурцы, наполненные водой и полезными веществами.', showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-ogurtsy-rava-kazahstan-102398351/?c=750000000'  },
      { name: 'Морковь', price: 245, imageUrl: 'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9wcm9kdWN0cy8yMTkvY292ZXJzLzNBQkdZcy5qcGc.jpg', description: 'Сочная и сладкая морковь, богатая каротином и другими витаминами, необходимыми для здорового питания.', showDescription: false, link: 'https://kaspi.kz/shop/p/magnum-morkov-otbornaja-kazahstan-106203164/?c=750000000'  },
      { name: 'Яйца', price: 1995, imageUrl: 'https://www.prok.ru/upload/iblock/39f/53vqi5skwbr28fv6tprgnhryopbq52os.jpg', description: 'Свежие и натуральные куриные яйца, идеально подходящие для приготовления питательных блюд.', showDescription: false, link: 'https://kaspi.kz/shop/p/alsad-kurinoe-30-sht-60-65-g-105515318/?c=750000000'  }
    ];
  }

  toggleDescription(product: any) {
    product.showDescription = !product.showDescription;
    if (product.showDescription) {
      this.selectedProduct = product;
    } else {
      this.selectedProduct = null;
    }
  }

  redirectToLink(link: string) {
    window.open(link, "_blank");
  }

  shareOnWhatsApp(link: string) {
    let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, "_blank");
  }

  shareOnTelegram(link: string) {
    let telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, "_blank");
  }
}
