  name = 'Angular';
  viewMode = 'tab2';
  tab='tab3';
  status="Enable";
  toggle=true;
  buttonName="Hide";
  show=false;
  hide:any

  // START ADD NEW PERSON
  listpeople=['Nitesh','mayur','nilesh','bhaygesh','dinesh'];
  btnAdd(){
    let newPerson = prompt("Name Someone");
    this.listpeople.push(newPerson);
  }
    
  // END ADD NEW PERSON


  // TOGGLE
  toggle(){
    this.show = !this.show
    if(this.show){
      this.buttonName = "Show";
    }
    else{
      this.buttonName = "Hide";
    }
  }



  // IMAGES DATA
  images:string[];  

  constructor(){
    this.images = IMAGES_LIST;
  }

  const IMAGES_LIST = [
  'http://www.google.com',
  'http://www.google.com',
  'http://www.google.com',
  'http://www.google.com',
  ]


  // ENABLE AND DISABLE
  enabledisabled(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }


// TABBED
  onClick(check){
    if(check==1){
      this.tab = 'tab1';
    }
    else if(check==2){
      this.tab = 'tab2';
    }
    else{
      this.tab = 'tab3';
    }
  }

// TABBED
 onSwitch(check){
   switch(check){
     case 1 : 'tab1';
     case 2 : 'tab2';
     case 3 : 'tab3';
   }
 }

  // TABLE DATA
  tables:any[]=[
    {
      name:"Nitesh Khatri",
      jobLocation:"India",
    },
    {
      name:"Sameet Khatri",
      jobLocation:"USA",
    },
    {
      name:"Mayur Khatri",
      jobLocation:"Dubai",
    },
  ]

 // GET COLOR
  getColor(country){
    switch(country){
      case "India" : return "orange";
      case "USA" : return "red";
      case "Dubai" : return "darkgreen";
    }
  }

  // PEOPLE DATA
  people:any[]=[
    {
      name:"Nitesh Khatri",
      country:"India",
    },
    {
      name:"Sameet Khatri",
      country:"USA",
    },
    {
      name:"Mayur Khatri",
      country:"Dubai",
    },
  ]

// PRODUCTS DATA
  products:any[]=[
    {
      title:"A",
      desc:"This is a paragraph.",
    },
    {
      title:"B",
      desc:"This is a paragraph.",
    },
    {
      title:"C",
      desc:"This is a paragraph.",
    },
  ]