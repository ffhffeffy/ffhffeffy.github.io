console.log('this works')

const flowers = [
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "cold",
        info: "O, 2016-2017\n13.8 x 7.1 x 6.7 in\nPorcelain, layered matte and celadon glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle01.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "cold",
        info: "Sharp Intake, 2008-2011\n16.9 x 11.0 x 8.7 in\nPorcelain, stoneware, layered glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle02.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "cold",
        info: "Buckle, 2017\n6.1 x 4.9 x 4.5 in\nPorcelain, fluid celadon glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bottle03.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bowl&pot",
        color: "cold",
        info: "Private Sensation, 2009-2013\n18.5 x 24.8 x 23.2 in\nPorcelain, copper, dolomite matte glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_cold_bowl01.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "mix",
        info: "A Gentle Collapsing, 2017-2018\n27.9 x 17.7 x 16.9 in\nStoneware, porcelain, glazes, 'wild' clay",
        image: "images/ceramics/Gareth Mason/Gareth Mason_mix_bottle01.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "mix",
        info: "Spike, 2019\n25.0 x 19.0 x 20.0 in\nPorcelain, stoneware, glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_mix_bottle02.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "warm",
        info: "Chance Encounter, 2016-2018\n13.4 x 9.8 x 9.5 in\nStoneware, porcelain, glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bottle01.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bottle",
        color: "warm",
        info: "Ribbed Red, 2017\n8.1 x 5.1 x 2.0 in\nPorcelain, stoneware, copper red, layered glazes",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bottle02.png"
    },
    {
        artist: "Gareth Mason",
        shape: "bowl&pot",
        color: "warm",
        info: "Warp, 2017\n5.9 x 13.6 x 11.0 in\nPorcelain, copper red glaze",
        image: "images/ceramics/Gareth Mason/Gareth Mason_warm_bowl01.png"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "Vessel of the Body, 2022\n48.0 x 18.0 x 18.0 cm\nHigh white mud, copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle01.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "Vase, 2023\nN/A\nHigh white mud, copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle02.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "N/A, 2022\n27.0 x 18.0 x43.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle03.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "Lady's Flower Basket, 2021\n15.0 x 15.0 x 50.0 cm\nHigh white mud, blue glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle04.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "N/A, 2021\n48.0 x 18.0 x 20.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle05.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bottle",
        color: "cold",
        info: "N/A, 2021\n23.0 x 23.0 x 43.0 cm\nHigh white mud, bluish white glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_bottle06.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "cup&plate",
        color: "cold",
        info: "Coffee Pot, 2022\nN/A\nN/A",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_cup01.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "cup&plate",
        color: "cold",
        info: "Mugs and plates, 2023\nN/A\nN/A",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_cup02.jpg"
    },
    {
        artist: "Yunfei Zhang",
        shape: "bowl&pot",
        color: "cold",
        info: "N/A, 2023\nN/A\nHigh white mud, High white mud, copper glaze",
        image: "images/ceramics/Yunfei Zhang/Yunfei Zhang_cold_pot07.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "mix",
        info: "ZhuoSe Series, Flower Vessel01\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_bottle01.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "mix",
        info: "ZhuoSe Series, Flower Vessel02\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_bottle08.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "cup&plate",
        color: "mix",
        info: "Patches Series, Tea Pot\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_mix_cup01.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "warm",
        info: "ZhuoSe Series, Flower Vessel03\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle04.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "warm",
        info: "ZhuoSe Series, Flower Vessel04\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle05.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "warm",
        info: "ZhuoSe Series, Flower Vessel05\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle06.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bottle",
        color: "warm",
        info: "Patches Series, Flower Vessel\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_bottle07.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bowl&pot",
        color: "warm",
        info: "ZhuoSe Series, Flower Vessel06\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_pot02.jpg"
    },
    {
        artist: "Zheyuan Feng",
        shape: "bowl&pot",
        color: "warm",
        info: "ZhuoSe Series, Flower Vessel07\nN/A\nN/A",
        image: "images/ceramics/Zheyuan Feng/Zheyuan Feng_warm_pot03.jpg"
    },
];

