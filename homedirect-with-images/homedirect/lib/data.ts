export const packages = [
 {id:"diy",name:"DIY",price:49,tag:"For sellers who want control.",features:["Property listing","Seller dashboard","Buyer enquiry management"]},
 {id:"plus",name:"Plus",price:99,tag:"Most flexible",features:["Everything in DIY","Portal exposure","Buyer enquiry handling","Priority support"]},
 {id:"pro",name:"Pro",price:149,tag:"For sellers who want more done.",features:["Everything in Plus","Negotiation support","Sales progression"]},
];
export const services = [
 {id:"photo",name:"Professional Photography",price:149,desc:"Bright, accurate photos taken by a local photographer."},
 {id:"floor",name:"Floorplans",price:99,desc:"Measured floorplans for your listing."},
 {id:"epc",name:"EPC Certificate",price:69,desc:"A legally required energy performance certificate."},
 {id:"board",name:"Sales Board",price:49,desc:"A for-sale board delivered to your door."},
 {id:"viewing",name:"Accompanied Viewing",price:39,desc:"We host a viewing so you don't have to."},
 {id:"prog",name:"Sales Progression",price:149,desc:"Help moving from offer accepted to completion."},
];
export const properties = [
 {slug:"modern-family-home",title:"3 Bedroom Semi-Detached House",town:"Manchester",postcode:"M20 4AB",price:425000,beds:3,baths:2,sqft:1245,images:[{src:"/images/manchester-exterior.jpg",alt:"Front of a brick semi-detached house in Manchester with a bay window and driveway"},{src:"/images/manchester-living.jpg",alt:"Bright living room with a bay window and fireplace"},{src:"/images/manchester-kitchen.jpg",alt:"Fitted kitchen with white cabinets and oak worktops"},{src:"/images/manchester-garden.jpg",alt:"Rear garden with lawn, patio and fencing"}]},
 {slug:"city-apartment",title:"2 Bedroom Apartment",town:"Salford",postcode:"M5 3EQ",price:295000,beds:2,baths:1,sqft:820,images:[{src:"/images/salford-exterior.jpg",alt:"Red-brick apartment block with balconies near the water in Salford"},{src:"/images/salford-interior.jpg",alt:"Open-plan apartment living area with floor-to-ceiling windows and water views"}]},
 {slug:"stockport-detached",title:"4 Bedroom Detached House",town:"Stockport",postcode:"SK4 2NL",price:575000,beds:4,baths:3,sqft:1980,images:[{src:"/images/stockport-exterior.jpg",alt:"Large detached brick house in Stockport with garages and a block-paved driveway"},{src:"/images/stockport-interior.jpg",alt:"Open-plan kitchen-diner with an island and bifold doors to the garden"}]},
];
export const enquiries = [
 {name:"James Carter",property:"Manchester semi",status:"New"},
 {name:"Sarah Khan",property:"Manchester semi",status:"Viewing requested"},
 {name:"Daniel Brooks",property:"Manchester semi",status:"Viewed"},
];
export const gbp = (n:number)=>"£"+n.toLocaleString("en-GB");
