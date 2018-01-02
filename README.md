## loader for angular
```ts
loadSwiper() {
    let swiper1 = './assets/libs/1.js';
    let swiper2 = './assets/libs/2.js';
    this.system.import([swiper1, swiper2]).subscribe(res => {
        console.log('swiper1, swiper2 加载完毕', res);
    });

    this.system.import([swiper2]).subscribe(res => {
        console.log('swiper2 加载完毕', res);
    });

    this.system.import([swiper1]).subscribe(res => {
        console.log('swiper1 加载完毕', res);
    });
}
```