const artGallery = async () => {
    const node = await fetch('https://fmazul.github.io/gallery.json')
    const nodeName = await node.json()
    const gallery = await nodeName.Gallery
    const urls = await gallery[0]
    const galleryBox = document.querySelector('.gallery');
    
    gallery.forEach(picture =>{
        const images = document.createElement('div');
        images.classList.add('imageBox');
        images.innerHTML = 
        `
        <img src="${picture.url}"></img>
        
        
        `;
        galleryBox.appendChild(images);


    });
        
      
  
  }


  
  artGallery();


  
  
 