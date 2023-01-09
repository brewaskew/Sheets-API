const output = document.querySelector('.output');
// const outputH1 = document.getElementById('outputH1');
const btn = document.querySelector('button');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '11RAVkCjURLm1gCHEt3hXSV3lyxAgODoPLaecMbCJL-Y';
const q1 = '/gviz/tq?';
const q2 = 'tqx=out:json';
const q3 = 'sheet=Lowers';

loadPage();


btn.addEventListener('click', getData);


function loadPage() {
    const outputH1 = document.createElement('h1');
    outputH1.classList.add('outputH1');
    outputH1.innerHTML = "Are you building a pistol or a rifle?"
    output.append(outputH1);

    let arType = document.createElement('div');
    arType.classList.add('arType');
    let img = document.createElement('img');
    img.classList.add('arTypeImg');
    img.src = "images/pistol.webp";
    img.alt = "AR Pistol";
    arType.append(img);
    img = document.createElement('img');
    img.classList.add('arTypeImgHover');
    img.src = "images/pistolGreen.webp";
    img.alt = "AR Pistol";
    arType.append(img);
    let p = document.createElement('p');
    p.innerHTML = "Pistol";
    arType.append(p);
    output.append(arType);

    arType = document.createElement('div');
    arType.classList.add('arType');
    img = document.createElement('img');
    img.classList.add('arTypeImg');
    img.src = "images/rifle.webp";
    img.alt = "AR Pistol";
    arType.append(img);
    img = document.createElement('img');
    img.classList.add('arTypeImgHover');
    img.src = "images/rifleGreen.webp";
    img.alt = "AR Pistol";
    arType.append(img);
    p = document.createElement('p');
    p.innerHTML = "rifle";
    arType.append(p);
    output.append(arType);

}

function getData() {
    let url1 = `${url}${ssid}${q1}&${q2}&${q3}`;
    fetch(url1).
        then((res) => res.text()).
        then((data) => {
            const temp = data.substr(47).slice(0, -2);
            const json = JSON.parse(temp);
            const rows = json.table.rows;
            rows.forEach((row) => {
                console.log(row.c);

                const partDiv = document.createElement('div');
                partDiv.classList.add('partDiv');

                for (let i = 0; i < row.c.length; i++) {
                    if (i == 0 || i == 1 || i == 4 || i == 6) {
                        const box = document.createElement('div');
                        if (i == 4) {
                            box.textContent += `Price: $${row.c[i].v}`;
                        }
                        else if (i == 6) {
                            const img = document.createElement('img');
                            img.classList.add('box', 'mainImg');
                            img.setAttribute('id', 'itemImage');
                            img.src = row.c[i].v;
                            box.append(img);
                        }
                        else {
                            box.textContent += row.c[i].v;
                        }
                        if (i == 0) {
                            box.classList.add('box', 'brand');
                            box.setAttribute('id', 'brandName');
                        }
                        else if (i == 1) {
                            box.classList.add('box');
                            box.setAttribute('id', 'itemName');
                        }
                        else if (i == 4) {
                            box.classList.add('box', 'price');
                            box.setAttribute('id', 'pfaPrice');
                        }

                        partDiv.append(box);
                    }
                }
                output.append(partDiv);
            });
        });
}