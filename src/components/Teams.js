import React from 'react';
import './Teams.css';
import Navbar from './Navbar';
import Toggle2 from '../images/toggle2.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Slider from './Slider';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

function Teams() {
    const [team,setTeam]=useState(true);
    // useEffect(()=>{
    //     var select="2021-22"
    //     const option=document.getElementById("board");
    //     var select=option.value;
    //     console.log(select)
    //     if(select=="2021-22"){
    //         setTeam(true);

    //     }
    //     else{
    //         setTeam(false);
    //     }

    // },[team])
    const handleChange=(e)=>{
        if(e.target.value=="2021-22"){
            setTeam(true);
        }
        else{
            setTeam(false);
        }
    }
    return (
        <div className="team">
            <Slider/>
            <Navbar image={Toggle2}/>
            <h1>The passionate and creative team behind this club</h1>
            <div className="board">
                <select name="board" id="board" onChange={(e)=>handleChange(e)}>
                    <option value="2021-22" >2021-22</option>
                    <option value="2020-21" >2020-21</option>
                </select>
            </div>
            {team?
                <div className="member" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0">
                           <div className="member__top">
                                   <div className="member1">
                                   <div className="member1__info">
                                       <div className="desc">
                                       <h1>Sushant Srivastav</h1>
                                       <p>CHAIRPERSON</p>
                                       <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                       <a href="https://www.linkedin.com/in/sushant4191/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/iamsushant.sri/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                       </div>
                            
                                   </div>
                                   </div>
                                   <div className="member__side laptop">
                                       <div className="member2">
                                       <div className="member2__info">
                                           <div className="desc">
                                           <h1>Sandesh Dhungana</h1>
                                           <p>VICE CHAIRPERSON</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://www.linkedin.com/in/sandesh-dhungana-b5ba251a2/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/dh.sandesh/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                       
                                       </div>
                                       </div>
                                       <div className="member3">
                                       <div className="member3__info">
                                           <div className="desc">
                                           <h1>Shubham Chapagain</h1>
                                           <p>GENERAL SECRETARY</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://www.linkedin.com/in/subhamchapagain/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/chapagainsubham/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                      
                                       </div>
                                       </div>
           
                                   </div>
           
                           </div>
                           <div className="member__sec mobile">
                           <div className="member2">
                                       <div className="member2__info">
                                           <div className="desc">
                                           <h1>Sandesh Dhungana</h1>
                                           <p>VICE CHAIRPERSON</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://www.linkedin.com/in/sandesh-dhungana-b5ba251a2/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/dh.sandesh/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                       
                                       </div>
                                       </div>
                                       <div className="member3">
                                       <div className="member3__info">
                                           <div className="desc">
                                           <h1>Subham Chapagain</h1>
                                           <p>GENERAL SECRETARY</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://www.linkedin.com/in/subhamchapagain/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/chapagainsubham/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                      
                                       </div>
                                       </div>
                           </div>
                           <div className="member__sec">
                          
                                       <div className="member4">
                                       <div className="member4__info">
                                           <div className="desc">
           
                                           <h1>Hayat Tamboli</h1>
                                           <p>DESIGN HEAD</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://in.linkedin.com/in/hayat-tamboli"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/hayattamboli/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                        
                                       </div>
                                       </div>
                                       <div className="member5">
                                       <div className="member5__info">
                                           <div className="desc">
                                           <h1>Bhuvan Molugu</h1>
                                           <p>EVENTS HEAD</p>
                                           <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                           <a href="https://www.linkedin.com/in/bhuvan-molugu-484425130/"><LinkedInIcon style={{color:"white"}}/></a>
                                           <a href="https://www.instagram.com/bhuvan_molugu/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                       
                                       </div>
                                       </div>
                     
                           </div>
                           <div className="member__sec">
                             
                                       <div className="member6">
                                           <div className="member6__info">
                                               <div className="desc">
                                               <h1>Pranjal Gupta</h1>
                                               <p>FINANCE HEAD</p>
                                               <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                               <a href="https://www.linkedin.com/in/pranjal-gupta-55a4b01aa/"><LinkedInIcon style={{color:"white"}}/></a>
                                               <a href="https://www.instagram.com/pranjal_g_7/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                               </div>
                                     
                                           </div>
                                       </div>
                                       
                                       <div className="member7">
                                       <div className="member7__info">
                                           <div className="desc">
                                           <h1>Sarvesh Suryanarayana</h1>
                                          <p>PUBLIC RELATIONS HEAD</p>
                                          <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                          <a><LinkedInIcon style={{color:"white"}}/></a>
                                          <a href="https://www.instagram.com/cubeophilic.x/"><InstagramIcon style={{color:"white"}}/></a>
                                       </div>
                                           </div>
                                        
                                       </div>
                                       </div>
                      
                           </div>
                       </div>
                       :<div className="member" data-aos="fade-zoom-in"
                       data-aos-easing="ease-in-back"
                       data-aos-delay="500"
                       data-aos-offset="0">
                                  <div className="new_member__top">
                                          <div className="new_member1">
                                          <div className="new_member1__info">
                                              <div className="desc">
                                              <h1>Samarth Nehe</h1>
                                              <p>CHAIRPERSON</p>
                                              <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                              <a href="https://www.linkedin.com/in/samarth-nehe-a0b9b519b/"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/sam.cuber/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                              </div>
                                   
                                          </div>
                                          </div>
                                          <div className="new_member__side laptop">
                                              <div className="new_member2">
                                              <div className="new_member2__info">
                                                  <div className="desc">
                                                  <h1>V.J Karthik</h1>
                                                  <p>VICE CHAIRPERSON</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://in.linkedin.com/in/karthik-v-j-737726169"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/v.j._karthik/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                              
                                              </div>
                                              </div>
                                              <div className="new_member3">
                                              <div className="new_member3__info">
                                                  <div className="desc">
                                                  <h1>Kartik Chadha</h1>
                                                  <p> INTERNAL EVENTS HEAD</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://www.linkedin.com/in/kartik-chadha-278149171"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/_kartik__chadha_/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                             
                                              </div>
                                              </div>
                  
                                          </div>
                  
                                  </div>
                                  <div className="new_member__sec mobile">
                                  <div className="new_member2">
                                              <div className="new_member2__info">
                                                  <div className="desc">
                                                  <h1>V.J Karthik</h1>
                                                  <p>VICE CHAIRPERSON</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://in.linkedin.com/in/karthik-v-j-737726169"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/v.j._karthik/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                              
                                              </div>
                                              </div>
                                              <div className="new_member3">
                                              <div className="new_member3__info">
                                                  <div className="desc">
                                                  <h1>Kartik Chadha</h1>
                                                  <p> INTERNAL EVENTS HEAD</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://www.linkedin.com/in/kartik-chadha-278149171"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/_kartik__chadha_/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                             
                                              </div>
                                              </div>
                                  </div>
                                  <div className="new_member__sec">
                                 
                                              <div className="new_member4">
                                              <div className="new_member4__info">
                                                  <div className="desc">
                  
                                                  <h1>Uddhav Bhardwaj</h1>
                                                  <p>DESIGN HEAD</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://www.linkedin.com/in/uddhav-bhardwaj-24855155"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/uddhav.bhardwaj/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                               
                                              </div>
                                              </div>
                                              <div className="new_member5">
                                              <div className="new_member5__info">
                                                  <div className="desc">
                                                 
                                                  <h1>Pranavi Pendyala</h1>
                                                  <p>GENERAL SECRETARY</p>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                  <a href="https://www.linkedin.com/in/pranavi-pendyala-4ab2271b7"><LinkedInIcon style={{color:"white"}}/></a>
                                                  <a href="https://www.instagram.com/pranavi.pendyala/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                              
                                              </div>
                                              </div>
                            
                                  </div>
                                  <div className="new_member__sec">
                                    
                                              <div className="new_member6">
                                                  <div className="new_member6__info">
                                                      <div className="desc">
                                                      <h1>ISHITVA VERMA</h1>
                                                      <p>EXTERNAL EVENTS HEAD</p>
                                                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                      <a href="https://www.linkedin.com/in/ishitva-verma-602625200/"><LinkedInIcon style={{color:"white"}}/></a>
                                                      <a href="https://www.instagram.com/ishitva_verma_/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                      </div>
                                            
                                                  </div>
                                              </div>
                                              
                                              <div className="new_member7">
                                              <div className="new_member7__info">
                                                  <div className="desc">
                                                  <h1>ANKIT JAIN</h1>
                                                 <p>FINANCE HEAD</p>
                                                 <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                                 <a href="https://www.linkedin.com/in/ankit-jain-85920816a"><LinkedInIcon style={{color:"white"}}/></a>
                                                 <a href="https://www.instagram.com/user.namemissing/"><InstagramIcon style={{color:"white"}}/></a>
                                              </div>
                                                  </div>
                                               
                                              </div>
                                              </div>
                             
                                  </div>
                                  <div className="new_member__sec">
                                    
                                    <div className="new_member8">
                                        <div className="new_member8__info">
                                            <div className="desc">
                                            <h1>BHAWANA CHOUDHARY</h1>
                                            <p>MARKETING HEAD</p>
                                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                            <a href="https://www.linkedin.com/in/bhawana-choudhary-101213180"><LinkedInIcon style={{color:"white"}}/></a>
                                            <a href="https://www.instagram.com/_bhaav.na_/"><InstagramIcon style={{color:"white"}}/></a>
                                    </div>
                                            </div>
                                  
                                        </div>
                                    </div>
                                    
                                    <div className="new_member9">
                                    <div className="new_member9__info">
                                        <div className="desc">
                                        <h1>TURUSHA GHIMIRE</h1>
                                       <p>PUBLIC RELATIONS HEAD</p>
                                       <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"20%",margin:"10px 0px 0px 0px"}}>
                                       <a href="https://www.linkedin.com/in/turusha-ghimire-702504194"><LinkedInIcon style={{color:"white"}}/></a>
                                       <a href="https://www.instagram.com/turu_g/"><InstagramIcon style={{color:"white"}}/></a>
                                    </div>
                                        </div>
                                     
                                    </div>
                                    </div>
                   
                        </div>
                              </div>
            }
            

        </div>
    )
}

export default Teams
