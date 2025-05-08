
type FormatPriceProps={
    price:number,
}

const FormatPrice=({price}:FormatPriceProps)=>{
    return Intl.NumberFormat('en-IN',{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2,

     }).format(price/100)  //1rs=100paise
}

export default FormatPrice;