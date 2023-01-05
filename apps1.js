// https://docs.google.com/spreadsheets/d/1Y-EnZ8e3FDhr6Pd5cm2aTALCjweSgtksNjDyDjU5zBU/edit?usp=sharing

const output = document.querySelector('.output');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '11RAVkCjURLm1gCHEt3hXSV3lyxAgODoPLaecMbCJL-Y';
const q1 = '/gviz/tq?';
const q2 = 'tqx=out:json';
const q3 = 'sheet=Lowers';

const endpoint1 = `${url}${ssid}${q1}&${q2}&${q3}`;

//output.textContent = endpoint1;


fetch(endpoint1)
    .then(res => res.text())
    .then((data) => {
        const temp = data.substr(47).slice(0, -2);
        //console.log(temp);
        const json = JSON.parse(temp);
        //console.log(json.table.rows);
        const rows = json.table.rows;
        rows.forEach((row) => {
            console.log(row.c);
            const div = document.createElement('div');

            for (let i = 0; i < row.c.length; i++) {
                if (i == 0 || i == 1 || i == 4) {
                    const box = document.createElement('div');
                    box.textContent += row.c[i].v;
                    box.classList.add('box');
                    div.append(box);
                }

            }
            output.append(div);

            //const temp1 = row.c;
            //temp1.forEach((cell) => {
            //console.log(cell);
            // const box = document.createElement('div');
            // box.textContent += cell.v;
            // box.classList.add('box');
            // div.append(box);
        })
    })