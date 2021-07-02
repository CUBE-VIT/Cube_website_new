import React,{useState} from 'react';
import './Domain.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import speedcuber from '../images/speedcuber.png';
import enthu from '../images/enthu.png';
import design from '../images/design.png';
import mgmt from '../images/mgmt.png';
import edit from '../images/editorial.png';

function Domain() {

    const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        }
      };

      const [currIndex,setCurrIndex]=useState(0);
      const [items,setItems]=useState([
          {
              key:1,
              heading:"Speedcubers",
              desc:"With one of the quickest fingers in VIT, we have our speedcubers who are specialised in solving various puzzles of different dimensions and shapes. Dont blink your eyes else you couldnt see them solve!"
            ,image:speedcuber
            },
          {
              key:2,
              heading:"Enthusiasts",
              desc:"You think you are slow at solving the cube? Want to improve? The enthusiasts domain is for you where peeps would be taught new techniques and algorithm to get FASTER!"
              ,image:enthu
            },
          {
              key:3,
              heading:"Management",
              desc:"Handling and organising so many events and meetings can really be tidious, but not here! All thanks to the management team! Their ability to make hectic task into an enjoyable work is way beyond imagination"
              ,image:mgmt
            },
          {
              key:4,
              heading:"Design",
              desc:"From making websites to making small logos, we have desginers who can work on any defined scales! One of the finest designing teams who would not fail to impress you!"
              ,image:design
            },
          {
              key:5,
              heading:"Editorial",
              desc:"From making websites to making small logos, we have desginers who can work on any defined scales! One of the finest designing teams who would not fail to impress you!"
              ,image:edit
            }

      ]);

    const slideTo = (i) => setCurrIndex(i);

    const onSlideChanged = (e) => setCurrIndex(e.item);

    const slideNext = () => setCurrIndex((currIndex)=>currIndex+1);

    const slidePrev = () => setCurrIndex((currIndex)=>currIndex-1);

    // const renderThumbs = () =>
    //   <ul>{items.map((item, i) =>
    //     <li key={i} onClick={() => slideTo(i)}>Thumb {item}</li>)}
    //   </ul>;

      const renderGallery=()=>{
        return(
            <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currIndex}
            onSlideChanged={onSlideChanged}
            responsive={responsive}
        >
            { items.map((item, i) => <div key={i} className="card">
                <div style={{display:"flex",justify:"center",alignItems:"center"}}>
                    <img style={{marginRight:"20px"}} src={item.image} width="68px" height="68px" alt="pic"/>
                <h1>{item.heading}</h1>
                </div>
      
                <p>{item.desc}</p>
            </div>) }
    </AliceCarousel>
          )
      }
    
      return (
        <div className="domain">
            <h1>Domains</h1>
            
            {/* {renderThumbs() } */}
          {/* <button onClick={() => slidePrev()}>Prev button</button>
          <button onClick={() => slideNext()}>Next button</button> */}
        
          { renderGallery() }
        </div>
    )
        
      }
  


export default Domain
