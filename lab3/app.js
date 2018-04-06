let input = document.getElementById('input');
input.addEventListener('keyup', function (event) {
    event.preventDefault();
    if(event.keyCode === 13){
        query();
    }
});

function clearPage() {
    let page = document.getElementById('content');
    while (page.firstChild){
        page.removeChild(page.firstChild);
    }
}

function setField(user, field) {
    let res = field[0].toUpperCase() + field.slice(1);
    if (user[field] === null || user[field] === '') {
        return res + " isn't set";
    } else if (field !== 'login' || field !== 'name') {
        return makeBold(user[field]);
    } else {
        return res + ' ' + user[field];
    }
}

function query() {
    clearPage();
    let login = document.getElementById('input').value;
    fetch('https://api.github.com/users/' + login).then(function (response) {
        if (response.status >= 200 && response.status < 400)
            return response.json();
    }).then(user => {
        let tags = ['img', 'p', 'a'], elements = [], root,
            fields = ['name', 'login', 'bio', 'company', 'location', 'blog', 'email'];
        root = document.createElement('div');
        root.id = 'container';
        root.className = 'additional';
        document.getElementById('content').appendChild(root);

        elements.push(document.createElement(tags[0]));
        for (let i = 1; i < fields.length; i++) {
            elements.push(document.createElement(tags[1]));
        }
        elements.push(document.createElement(tags[2]));

        elements[0].src = user.avatar_url;
        elements[0].className = 'avatar';
        for (let i = 1, j = 0; i < fields.length + 1; i++, j++) {
            elements[i].innerHTML = setField(user, fields[j]);
            elements[i].className = fields[j];
        }
        if (user.blog !== '') {
            elements[elements.length - 2].setAttribute('href', user.blog);
        }
        elements.map(item => {
            document.getElementById('container').appendChild(item);
        });
    }).catch( alert );
}

function makeBold(string) {
    let pattern = /@[a-z0-9_-]+/gmi;
    let subStr = string.match(pattern);
    for (let i = 0; subStr && i < subStr.length; i++) {
        string = string.replace(subStr[i], "<span class='bold'>" + subStr[i] + "</span>");
    }
    return string;
}