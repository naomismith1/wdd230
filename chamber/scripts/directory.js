const url = directory.json

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    const cards = document.querySelector('.cards');

    directory.forEach(directory => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let pimg = document.createElement('img');

    
        h2.textContent = `${directory.name}`;
        p.textContent = `Date of Birth: ${directory.addresses}`;
        p2.textContent = `Place of Birth: ${directory.phonenumber}`;
        p3.textContent = `Date of Death: ${directory.website}`;
        p4.textContent = `Number of children: ${directory.membershiplevel}`;
       
        pimg.setAttribute('src', directory.imageurl);
        pimg.setAttribute('loading','lazy');
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        card.append(p6);
        card.append(pimg);
        cards.append(card);
    });
  });