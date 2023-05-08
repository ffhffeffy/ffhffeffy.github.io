console.log('this works')

// Dataset
const ceramics = [
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "cold",
        info: "Gareth Mason\nO, 2016-2017\n13.8 x 7.1 x 6.7 in\nPorcelain, layered matte and celadon glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle01.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "cold",
        info: "Gareth Mason\nSharp Intake, 2008-2011\n16.9 x 11.0 x 8.7 in\nPorcelain, stoneware, layered glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle02.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "cold",
        info: "Gareth Mason\nBuckle, 2017\n6.1 x 4.9 x 4.5 in\nPorcelain, fluid celadon glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle03.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bowl&pot",
        color: "cold",
        info: "Gareth Mason\nPrivate Sensation, 2009-2013\n18.5 x 24.8 x 23.2 in\nPorcelain, copper, dolomite matte glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bowl01.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "mix",
        info: "Gareth Mason\nA Gentle Collapsing, 2017-2018\n27.9 x 17.7 x 16.9 in\nStoneware, porcelain, glazes, 'wild' clay",
        image: "images/ceramics/Gareth Mason/Gareth Mason_mix_bottle01.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "mix",
        info: "Gareth Mason\nSpike, 2019\n25.0 x 19.0 x 20.0 in\nPorcelain, stoneware, glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_mix_bottle02.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "warm",
        info: "Gareth Mason\nChance Encounter, 2016-2018\n13.4 x 9.8 x 9.5 in\nStoneware, porcelain, glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bottle01.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bottle",
        color: "warm",
        info: "Gareth Mason\nRibbed Red, 2017\n8.1 x 5.1 x 2.0 in\nPorcelain, stoneware, copper red, layered glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bottle02.png"
    },
    {
        artist: "Gareth_Mason",
        shape: "bowl&pot",
        color: "warm",
        info: "Gareth Mason\nWarp, 2017\n5.9 x 13.6 x 11.0 in\nPorcelain, copper red glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bowl01.png"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nVessel of the Body, 2022\n48.0 x 18.0 x 18.0 cm\nHigh white mud, copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle01.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nVase, 2023\nN/A\nHigh white mud, copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle02.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nN/A, 2022\n27.0 x 18.0 x43.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle03.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nLady's Flower Basket, 2021\n15.0 x 15.0 x 50.0 cm\nHigh white mud, blue glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle04.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nN/A, 2021\n48.0 x 18.0 x 20.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle05.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bottle",
        color: "cold",
        info: "Yunfei Zhang\nN/A, 2021\n23.0 x 23.0 x 43.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle06.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "cup&plate",
        color: "cold",
        info: "Yunfei Zhang\nCoffee Pot, 2022\nN/A\nN/A",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_cup01.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "cup&plate",
        color: "cold",
        info: "Yunfei Zhang\nMugs and plates, 2023\nN/A\nN/A",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_cup02.jpg"
    },
    {
        artist: "Yunfei_Zhang",
        shape: "bowl&pot",
        color: "cold",
        info: "Yunfei Zhang\nN/A, 2023\nN/A\nHigh white mud,  copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_pot07.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "mix",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel01\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_bottle01.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "mix",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel02\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_bottle08.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "cup&plate",
        color: "mix",
        info: "Zheyuan Feng\nPatches Series, Tea Pot\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_cup01.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "warm",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel03\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle04.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "warm",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel04\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle05.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "warm",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel05\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle06.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bottle",
        color: "warm",
        info: "Zheyuan Feng\nPatches Series, Flower Vessel\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle07.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bowl&pot",
        color: "warm",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel06\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_pot02.jpg"
    },
    {
        artist: "Zheyuan_Feng",
        shape: "bowl&pot",
        color: "warm",
        info: "Zheyuan Feng\nZhuoSe Series, Flower Vessel07\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_pot03.jpg"
    },
];

// Render ceramics to page

const imageBox = document.querySelector(".image-box");

function renderCeramicsToPage(ceramics) {
    for (let i = 0; i < ceramics.length; i++) {
        let list_item = document.createElement("div");
        list_item.classList.add("move-box", ceramics[i].artist, ceramics[i].shape, ceramics[i].color);
        list_item.style.position = "relative";
        // ad id
        list_item.setAttribute('id', `ceramics-${i}`)
        // add the draggable attribute
        list_item.setAttribute('draggable', true);
        list_item.setAttribute('data-item', i);

        // add artist
        let artist = document.createElement("h5");
        artist.textContent = ceramics[i].artist;
        artist.classList.add(ceramics[i].artist)
        list_item.appendChild(artist);
        artist.style.display = "none";

        // add shape
        let shape = document.createElement("p");
        shape.textContent = ceramics[i].shape;
        shape.classList.add(ceramics[i].shape)
        list_item.appendChild(shape);
        shape.style.display = "none";

        // add color
        let color = document.createElement("p");
        color.textContent = ceramics[i].color;
        color.classList.add(ceramics[i].color)
        list_item.appendChild(color);
        color.style.display = "none";

        // add info
        let info = document.createElement("p");
        info.textContent = ceramics[i].info;
        // list_item.appendChild(info);

        // add image
        let image = document.createElement("img");
        image.setAttribute("src", ceramics[i].image);
        list_item.appendChild(image);
        image.setAttribute("title", ceramics[i].info);
        // set the title attribute

        image.addEventListener('mouseover', (event) => {
            let tooltip = document.createElement("div");
            tooltip.classList.add('tooltip');
            tooltip.style.position = "absolute";
            let imageRect = image.getBoundingClientRect();
            tooltip.style.top = `${imageRect.top}px`;
            tooltip.style.left = `${imageRect.left + imageRect.width}px`;
            tooltip.textContent = ceramics[i].info;
            tooltip.innerHTML = ceramics[i].info.replace(/\n/g, "<br>");
            document.body.appendChild(tooltip);
        });

        image.addEventListener('mouseout', () => {
            let tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.parentNode.removeChild(tooltip);
            }
        });

        // add mouseout event listener to image
        image.addEventListener('mouseout', () => {
            let tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.parentNode.removeChild(tooltip);
            }
        });

        imageBox.appendChild(list_item);
    }
}
renderCeramicsToPage(ceramics);


const images = imageBox.querySelectorAll('img');

images.forEach((img) => {
    const containerRect = imageBox.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;
    const containerRight = containerLeft + imageBox.offsetWidth;
    const containerBottom = containerTop + imageBox.offsetHeight;

    // make the images within the window view.
    const maxHeight = window.innerHeight - imageBox.offsetHeight;
    const maxWidth = window.innerWidth - img.offsetWidth;
    const maxTop = Math.min(maxHeight, containerBottom - img.offsetHeight);
    const maxLeft = Math.min(maxWidth, containerRight - img.offsetWidth);

    // give images random left and top
    const left = Math.max(containerLeft, Math.min(maxLeft, containerLeft + Math.floor(Math.random() * (imageBox.offsetWidth - 300))));
    const top = Math.max(containerTop, Math.min(maxTop, containerTop + Math.floor(Math.random() * imageBox.offsetHeight)));

    // set the location of the images
    img.style.position = 'absolute';
    img.style.left = left + 'px';
    img.style.top = top + 'px';


    // drag and drop the images
    let dragging = false;
    let zIndex = 1;

    img.addEventListener('mousedown', (event) => {
        event.preventDefault();

        // calculate the mouse's location
        const startX = event.clientX;
        const startY = event.clientY;
        const imgLeft = img.offsetLeft;
        const imgTop = img.offsetTop;
        const offsetX = startX - imgLeft;
        const offsetY = startY - imgTop;

        function moveHandler(event) {
            event.preventDefault();

            // calculate the mouse's new location
            const newLeft = event.clientX - offsetX;
            const newTop = event.clientY - offsetY;

            // set the new position of the image
            img.style.left = newLeft + 'px';
            img.style.top = newTop + 'px';

            dragging = true;
        }

        document.addEventListener('mousemove', moveHandler);

        // add the mouseup event listener outside the mousedown event listener
        document.addEventListener('mouseup', () => {
            if (dragging) {
                // reset the zindex after drag
                img.style.zIndex = zIndex;
                // reset dragging
                dragging = false;
            }
            // remove the eventlistener
            document.removeEventListener('mousemove', moveHandler);
        }, { once: true });

        img.style.zIndex = zIndex + 1;
        zIndex = img.style.zIndex;
    })
});


// Filter the ceramics by button
let filterBtns = document.querySelector(".filters");
let moveBox = document.querySelectorAll(".move-box");

function filterFn(event) {
    if (event.target.classList.contains("filter-btn")) {
        event.target.classList.toggle("active");

        // select the current active button
        let activeBtns = filterBtns.querySelectorAll(".active");
        let filterValues = [];
        activeBtns.forEach((btn) => {
            filterValues.push(btn.getAttribute("data-filter"));
        });


        console.log(moveBox.length);

        // filter all the moveBox
        for (let i = 0; i < moveBox.length; i++) {

            if (
                filterValues.every((value) => moveBox[i].classList.contains(value)) ||
                filterValues.length === 0
            ) {
                moveBox[i].classList.remove("hide");
                moveBox[i].classList.add("show");
            } else {
                moveBox[i].classList.remove("show");
                moveBox[i].classList.add("hide");
            }
        }
    }
}
filterBtns.addEventListener("click", filterFn);

function showlabel(event) {
    let activeBtns = filterBtns.querySelectorAll(".active");
    let filterValues = [];
    activeBtns.forEach((btn) => {
        filterValues.push(btn.getAttribute("data-filter"));
    });


    let labels = document.querySelectorAll('.label .selectedlabel');

    console.log(labels.length);

    let counter = 0;
    for (let i = 0; i < 9; i++) {

        if (filterValues.includes(labels[i].getAttribute("data-filter"))) {

            labels[i].style.display = 'inline';
            console.log(labels[i].getAttribute("data-filter") + labels[i].style.display);
            counter++;

        } else {
            labels[i].style.display = 'none';
        }

    }

    console.log(counter);

}
filterBtns.addEventListener("click", showlabel);