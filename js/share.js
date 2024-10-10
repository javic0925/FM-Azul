const shareButton = document.querySelector('.share-button');
const shareButton2 = document.querySelector('.share-button2');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'FM Azul Radio',
      text: 'FM Azul Radio con los mejores éxitos, Innovamos para ti, disfruta de nuestra programación.',
      url: 'https://play.google.com/store/apps/details?id=app.fmazulradio.ps.twa&pcampaignid=web_share'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

shareButton2.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'FM Azul Radio',
      text: 'FM Azul Radio con los mejores éxitos, Innovamos para ti, disfruta de nuestra programación.',
      url: 'https://play.google.com/store/apps/details?id=app.fmazulradio.ps.twa&pcampaignid=web_share'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open');
// });