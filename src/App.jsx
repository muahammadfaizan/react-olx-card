import Card from "./component/Card"

function App (){
  return (
    <>
    <h1 className="text-center mt-5 text-3xl ">React Olx Card</h1>
    
    <div className="flex justify-center flex-wrap gap-5 mt-5">
   
    <Card imageurl={"https://images.olx.com.pk/thumbnails/474153774-800x600.webp"} price={"Rs 56,000"} descripton={"Google Pixel 7 Pro 7 7a"} address={"shop# 72,amma tower,karachi"} time={"4 days"} />   
   
     <Card imageurl={"https://images.olx.com.pk/thumbnails/443112705-800x600.webp"} price={"22000"} descripton={"samsung note 20 ultra."} address={"Wapda Town Phase 1, Lahore"} time={"1 week"} />   
   
     <Card imageurl={"https://images.olx.com.pk/thumbnails/483788775-240x180.webp"}  price={"440,000"} descripton={"IPhone 15 pro max pta approved"} address={"Federal B Area - Block 7, Karachi"} time={"2 week"} />
   
     <Card imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ofol7DqHmT2sunXOvBl70C_ELtiYUhBEjw&s"} price={"22,000"} descripton={"Redmi A3 4/128"} address={"New Multan, Multan"} time={"3 days"} />

        <Card imageurl={"https://images.olx.com.pk/thumbnails/482344683-800x600.webp"}  price={"79,999"} descripton={"IPHONE11 Pro Max 256GB JV NoN PTA"} address={"Pico Road, Lahore"} time={"5 days"} />

        <Card imageurl={"https://images.olx.com.pk/thumbnails/483782654-800x600.webp"}  price={"26000"} descripton={"SAMSUNG A 32"} address={"Murree Road, Rawalpindi"} time={"5 minutes"} />

    </div>
    </>
  )
}


export default App