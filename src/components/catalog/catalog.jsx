import CatalogTitle from "./catalog-title";
import { useState } from "react";




function Catalog() {

  const [plants, setPlants] = useState([
    {
        name: 'himero cactus',
        img: 'https://media.istockphoto.com/id/1393586625/photo/cactu.webp?b=1&s=170667a&w=0&k=20&c=7coZlWNLrJi_rx1tI5T9MUrIbB8T8RLdrpySEqxz4rc=',
        summa: 10,
        type: 'cactus',
        id: 1
    },
    {
        name: 'mini bamboo',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXzp4Jq37iewf5Pb2soW-sXRm5MANh2Vvhw&usqp=CAU',
        summa: 5,
        type: 'bamboo',
        id: 2
    },
    {
        name: 'baobab',
        img: 'https://rukminim1.flixcart.com/image/850/1000/xif0q/plant-seed/g/n/k/50-desert-rose-mini-baobab-tree-adenium-obesum-vxl-38-na-original-imagzhw6hbjbhnw2.jpeg?q=90',
        summa: 25,
        type: 'tree',
        id: 3
    },
    {
        name: 'black rose',
        img: 'https://plantskingdom.in/cdn/shop/products/51BsP80DusL-1_2_500x_76667622-533b-4b80-8f46-1520524d8264_500x500.webp?v=1667670234',
        summa: 7,
        type: 'flower',
        id: 4
    },
    {
        name: 'brizn bamboo',
        img: 'https://cdn.shopify.com/s/files/1/0248/6983/products/SpathiphlllumSuperPetite_single_618x458_crop_center_2x.progressive_848ffe62-aad0-4114-89ed-d7c0f7bf1e5f.jpg?v=1699487647',
        summa: 10,
        type: 'bamboo',
        id: 5
    },
    {
        name: 'mini sakura',
        img: 'https://4.allegroimg.com/s360/037b53/495ae2f64ee08667ed887df491f4/Adenium-obesum-Roza-Pustyni-MINI-BAOBAB-L',
        summa: 30,
        type: 'tree',
        id: 6
    },
    {
        name: 'flick cactus',
        img: 'https://e0.pxfuel.com/wallpapers/1011/1019/desktop-wallpaper-cactus-desert-plant-graphy.jpg',
        summa: 12,
        type: 'cactus',
        id: 7
    },
    {
        name: 'cistilia',
        img: 'https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg',
        summa: 10,
        type: 'flower',
        id: 8
    },
    {
        name: 'red rose',
        img: 'https://seed2plant.in/cdn/shop/files/927_Red_Cascade_mug_x700_96ec6378-0a21-4634-b9b7-ff7e9c1681a7.webp?v=1687621910',
        summa: 15,
        type: 'flower',
        id: 9
    },
    {
        name: 'gaint bamboo',
        img: 'https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/450E9326-0272-405C-B8D614C72BED9F89/52F2110A-1CAA-43C0-BE84F352D8AB0835/WebsiteJpg_XL-FPLS_Main%20Visual_Green_Website.jpg',
        summa: 15,
        type: 'bamboo',
        id: 10
    }
  ])

  let bmb = 'bamboo'
  let tree = 'tree'
  let ccts = 'cactus'
  let flower = 'flower'

  function bamboo(bmb) {
    setPlants(plants.filter(item => {
    if (item.type === bmb) {
        return true
    }else{
        return false
    }
  }))
};

function trees(tree) {
    setPlants(plants.filter(item => {
    if (item.type === tree) {
        return true
    }else{
        return false
    }}
))};

function flowering(flower) {
    setPlants(plants.filter(item => {
    if (item.type === flower) {
        return true
    }else{
        return false
    }}
))};


function cactus(ccts) {
    setPlants(plants.filter(item => {
    if (item.type === ccts) {
        return true
    }else{
        return false
    }}
))};

function deleteBtn(id) {
  setPlants(plants.filter(item => {
    if (item.id === id) {
        return false
    }else{
        return true
    }}
))}

  return (
    <div className="catalog">
        <CatalogTitle/>
        <div className="catalog-buttons">
              <button className="catalog-button" onClick={() =>bamboo(bmb)}>bamboo</button>
              <button className="catalog-button" onClick={() =>trees(tree)}>trees</button>
              <button className="catalog-button" onClick={() =>flowering(flower)}>flowering</button>
              <button className="catalog-button" onClick={() =>cactus(ccts)}>cactus</button>
        </div>
        <div className="catalog-main">
          {plants.map(function (item) {
          return(
              <div className="plant-item">
                  <div className="plant-img">
                      <img src={item.img} alt="" />
                  </div>
                  
                  <div className='plant-item-text'>
                      <p>{item.name}</p>
                      <span>price: {item.summa}$</span>
                  </div>
                  <button className="delete-button" onClick={()=> deleteBtn(item.id)}>x</button>
              </div>
          )
          })}
        </div>
    </div>
  );
}

export default Catalog;