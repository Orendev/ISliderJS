'use strict';

import ISlider from "./app/ISlider";

let config = {
    id: 'islider1',
    slider_item: 'islider__item',
    dot_item : 'dot__item',
    controls_item: 'icontrols__item',
    slideIndex: 1,
    timer: 5000,
    infinate: true
};
let slider = new ISlider(config);


slider.init();






















