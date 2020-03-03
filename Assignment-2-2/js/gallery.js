 //Create the image path
function createImage(attr) {
  var path = 'images/' + attr.file;
  var img = document.createElement('img');

  img.setAttribute('src', path);
  img.setAttribute('alt', attr.file);
  img.setAttribute('width', attr.width);
  img.setAttribute('height', attr.height);

  return img;
}

 //Create the current image 
 var name = 'flowers-pink';
 modifyImage(name);

   /* var name = 0;
   currentImage(imagenames);
   
   function currentImage(imagenames) {
   var name = imagenames.random;
   modifyImage(name);
}   */

  //File names
  var imagenames = [
  'flowers-pink',
  'flowers-purple',
  'flowers-red',
  'flowers-white',
  'flowers-yellow',
  ];

  //Thubnail
  window.addEventListener('load', function () {
    imagenames.forEach(function (name) {
      var attr = {
        file: name + '-small.jpg',
        width: 240,
        height: 160
      };
      
      var img = createImage(attr);
      
      img.addEventListener('click', function () {
       
      modifyImage(name);
      });
      /* var text = document.createElement('h3')
      text.appendChild(li); */
      
      var li = document.createElement('li');
      li.appendChild(img);
        
      var ulEle = document.querySelector('#thumbimages');
      ulEle.appendChild(li);

      });
   
  });

    //Modify Name
    function modifyImage(name) {
      var file = name + '-large.jpg';
      var path = 'images/' + file;
    
      var img = document.querySelector('figure img');
      img.setAttribute('src', path);
      img.setAttribute('alt', file);
    
      var fig = document.querySelector('figure figcaption');
      fig.innerHTML = name.toLowerCase();
    }

    