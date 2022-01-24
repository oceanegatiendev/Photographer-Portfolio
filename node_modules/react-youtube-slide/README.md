react-youtube-slide
=============================

Youtube thumnail slide and player

![스크린샷 2019-05-08 오후 5 22 02](https://user-images.githubusercontent.com/42509800/57361190-d69b4f80-71b6-11e9-93cf-1d27c2ae587a.png)
![스크린샷 2019-05-08 오후 5 22 17](https://user-images.githubusercontent.com/42509800/57361269-0b0f0b80-71b7-11e9-955c-5d926bfe3da2.png)

## Installation

```
$ npm install react-youtube-slide
```

Usage
----
```js
  <Gallery
    youtubes={Json}
    galleryId={String} 
  />
```

Example
-----

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-youtube-slide';

const RESCOURCES = [
    {
      id: "9bZkp7q19f0",                //youtube id
      title: "[Psy]Gangnam style",      //thumnail title
      descrp : "Psy - Gangnam style"    //thumnail desciption
    },
    {
      id: "XsX3ATc3FbA",
      title: "(Boy With Luv) feat. Halsey' Official MV",
      descrp : "BTS - (Boy With Luv) feat. Halsey' Official MV"
    }
    ...
  ]

//parameter name must be youtubes and galleryId
ReactDOM.render(<Gallery youtubes={RESCOURCES} galleryId='gallery1' />,
document.getElementById('root'));

```

