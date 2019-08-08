function getDetails(item, imageUrl) {
    let block = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    let email = document.createElement('p');
    let emailText = document.createTextNode(`Email: ${item.email}`);
    email.appendChild(emailText);
    let street = document.createElement('p');
    let streetText = document.createTextNode(`Street: ${item.address.street}`);
    street.appendChild(streetText);
    let suite = document.createElement('p');
    let suiteText = document.createTextNode(`Suite: ${item.address.suite}`);
    suite.appendChild(suiteText);
    let city = document.createElement('p');
    let cityText = document.createTextNode(`City: ${item.address.city}`);
    city.appendChild(cityText);
    let zipcode = document.createElement('p');
    let zipcodeText = document.createTextNode(`Zipcode: ${item.address.zipcode}`);
    zipcode.appendChild(zipcodeText);
    let geo = document.createElement('p');
    let geoText = document.createTextNode(`Geo: "${item.address.geo.lat}", "${item.address.geo.lng}" `);
    geo.appendChild(geoText);
    let phone = document.createElement('p');
    let phoneText = document.createTextNode(`Phone: ${item.phone}`);
    phone.appendChild(phoneText);
    let website = document.createElement('p');
    let websiteText = document.createTextNode(`Website: ${item.website}`);
    website.appendChild(websiteText);
    let company = document.createElement('p');
    let companyText = document.createTextNode(`Company: ${item.company.name}`);
    company.appendChild(companyText);

    block.appendChild(image);
    block.appendChild(email);
    block.appendChild(street);
    block.appendChild(suite);
    block.appendChild(city);
    block.appendChild(zipcode);
    block.appendChild(geo);
    block.appendChild(phone);
    block.appendChild(website);
    block.appendChild(company);
    return block;
};

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(function (item) {
            let list = document.createElement('li');

            let image = document.createElement('img');
            let imageUrl = 'https://i.pravatar.cc/150?u=fake' + data.indexOf(item);
            image.setAttribute('src', imageUrl);

            let paragraph_1 = document.createElement('p');
            let user = document.createTextNode(`Name: ${item.name}`);
            paragraph_1.appendChild(user);

            let paragraph_2 = document.createElement('p');
            let userName = document.createTextNode(`Username: ${item.username}`);
            paragraph_2.appendChild(userName);

            let btn = document.createElement('button');
            let btnText = document.createTextNode('...');
            btn.appendChild(btnText);
            btn.onclick = function () {
                let newTab = open('about:blank', '_blank');
                newTab.document.write(getDetails(item, imageUrl).innerHTML);
            };

            list.appendChild(image);
            list.appendChild(paragraph_1);
            list.appendChild(paragraph_2);
            list.appendChild(btn);

            document.getElementById('info').appendChild(list);
        });
    })
    .catch(err => console.error(err));
